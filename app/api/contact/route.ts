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

    // Log the contact form submission (in production, you would send an email)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      projectType: body.projectType,
      details: body.details,
      timestamp: new Date().toISOString(),
    });

    // In production, you would integrate with:
    // - Nodemailer (SMTP)
    // - Resend API
    // - SendGrid
    // - Or any other email service

    // Example with Resend (uncomment and configure):
    // if (process.env.RESEND_API_KEY) {
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'contact@yourdomain.com',
    //     to: process.env.CONTACT_EMAIL,
    //     subject: `New Contact: ${body.projectType}`,
    //     text: `Name: ${body.name}\nEmail: ${body.email}\nType: ${body.projectType}\n\n${body.details}`,
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
