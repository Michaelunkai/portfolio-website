import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 60 minutes in ms

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  details: string;
}

function validateFormData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== "object") return false;

  const formData = data as Record<string, unknown>;

  return (
    typeof formData.name === "string" &&
    formData.name.length >= 2 &&
    typeof formData.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    typeof formData.projectType === "string" &&
    formData.projectType.length > 0 &&
    typeof formData.details === "string" &&
    formData.details.length >= 20
  );
}

export async function POST(request: NextRequest) {
  try {
    const ip = getRateLimitKey(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      projectType: body.projectType,
      details: body.details,
      timestamp: new Date().toISOString(),
    });

    // Send email using Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const emailContent = `
New Contact Form Submission
===========================

Name: ${body.name}
Email: ${body.email}
Project Type: ${body.projectType}

Details:
${body.details}

---
Submitted at: ${new Date().toISOString()}

Note: Reply to this email will go to ${body.email}
      `.trim();

      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "michaelovsky5@gmail.com",
            subject: `Portfolio Contact: ${body.projectType} - ${body.name}`,
            text: emailContent,
            reply_to: body.email,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Resend API error:", errorData);
          // Fall through to the keyless FormSubmit fallback below.
        } else {
          const result = await response.json();
          console.log("Email sent successfully:", result);
          console.log("Sent to: michaelovsky5@gmail.com");

          return NextResponse.json({
            success: true,
            message: "Email sent successfully to michaelovsky5@gmail.com"
          });
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Fall through to the keyless FormSubmit fallback below.
      }
    }

    // Keyless fallback: FormSubmit delivers to the inbox after a one-time activation email.
    try {
      const siteOrigin = new URL(request.url).origin;
      const fsResponse = await fetch("https://formsubmit.co/ajax/michaelovsky5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: siteOrigin,
          Referer: `${siteOrigin}/`,
        },
        body: JSON.stringify({
          _subject: `Portfolio Contact: ${body.projectType} - ${body.name}`,
          _replyto: body.email,
          Name: body.name,
          Email: body.email,
          Phone: body.phone || "-",
          "Project Type": body.projectType,
          Budget: body.budget || "-",
          Timeline: body.timeline || "-",
          Details: body.details,
        }),
      });

      if (fsResponse.ok) {
        return NextResponse.json({
          success: true,
          message: "Message sent successfully to michaelovsky5@gmail.com",
        });
      }
      // Email gateway unreachable from the server — signal the client to fall back to mailto.
      return NextResponse.json(
        { error: "Email gateway unavailable" },
        { status: 405 }
      );
    } catch (fsError) {
      console.error("FormSubmit sending error:", fsError);
      return NextResponse.json(
        { error: "Email gateway unavailable" },
        { status: 405 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
