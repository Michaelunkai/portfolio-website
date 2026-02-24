"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { fadeUp, fadeUpProps } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  details: z.string().min(20, "Please provide at least 20 characters of detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormState("success");
        reset();
      } else {
        setFormState("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputClasses =
    "bg-[#0f1020] border border-white/[0.07] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 outline-none w-full transition-all";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400">
            Ready to start your project? Fill out the form below and I&apos;ll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...fadeUpProps}
          className="bg-[#0f1020] rounded-2xl border border-white/[0.07] p-8"
        >
          {formState === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-accent-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-400 mb-6">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="px-6 py-3 bg-accent-purple text-white rounded-xl font-medium hover:bg-accent-purpleLight transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={inputClasses}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={inputClasses}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Project Type Field */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Type
                </label>
                <select id="projectType" className={inputClasses} {...register("projectType")}>
                  <option value="">Select a project type</option>
                  <option value="website">Custom Website</option>
                  <option value="api">API Development</option>
                  <option value="contract">Contract Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Details Field */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className={`${inputClasses} resize-none`}
                  {...register("details")}
                />
                {errors.details && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.details.message}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {formState === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 bg-accent-purple text-white rounded-xl font-medium hover:bg-accent-purpleLight transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
