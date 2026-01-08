"use client";

import { useState, useEffect } from "react";
import { Section, Button } from "@/components/ui";

// Email validation regex - RFC 5322 compliant
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Minimum time in ms before form can be submitted (spam bots submit instantly)
const MIN_SUBMIT_TIME = 3000;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const validateEmail = (email: string): boolean => {
    if (!email) return false;
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Silently "succeed" to not tip off bots
      setSubmitted(true);
      return;
    }

    // Time-based check - if submitted too fast, likely a bot
    if (Date.now() - formLoadTime < MIN_SUBMIT_TIME) {
      // Silently "succeed" to not tip off bots
      setSubmitted(true);
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6">Message Received.</h1>
          <p className="text-xl text-[var(--ct-slate)]">
            Thank you for your inquiry. We will respond within two business
            days.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* HEADER */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl text-[var(--ct-slate)]">
            Have a question about the CriticalThink Advantage&#8482;
            methodology? We&apos;re here to help.
          </p>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section background="light">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users, bots will fill it */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  if (emailError) setEmailError("");
                }}
                className={`w-full border bg-white px-4 py-3 text-[var(--ct-dark)] focus:outline-none focus:ring-1 ${
                  emailError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[var(--ct-border)] focus:border-[var(--ct-primary)] focus:ring-[var(--ct-primary)]"
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Phone <span className="text-[var(--ct-muted)]">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-600">{submitError}</p>
            )}

            <Button type="submit" size="large" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
