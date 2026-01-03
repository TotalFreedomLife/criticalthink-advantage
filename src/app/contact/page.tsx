"use client";

import { useState, useEffect } from "react";
import { Section, Button } from "@/components/ui";

const contactReasons = [
  "Platform Partnership",
  "Enterprise Deployment",
  "Investment Inquiry",
  "Domain Expansion Discussion",
  "Other",
];

// Email validation regex - RFC 5322 compliant
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Minimum time in ms before form can be submitted (spam bots submit instantly)
const MIN_SUBMIT_TIME = 3000;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    reason: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const validateEmail = (email: string): boolean => {
    if (!email) return false;
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
            The platform team will review your inquiry and respond within two
            business days.
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
          <h1 className="mb-6">Engage the Platform Team.</h1>
          <p className="text-xl text-[var(--ct-slate)]">
            CriticalThink Advantage&#8482; partners with organizations,
            institutions, and investors building governance into decision
            systems.
          </p>
        </div>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section background="light">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Platform Partnerships
              </h3>
              <p className="text-sm text-[var(--ct-slate)]">
                Integration, co-development, and channel relationships.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Enterprise Deployment
              </h3>
              <p className="text-sm text-[var(--ct-slate)]">
                Multi-domain governance for large organizations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Investment Inquiries
              </h3>
              <p className="text-sm text-[var(--ct-slate)]">
                Institutional and strategic investment discussions.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
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
                Name
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
                Email
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
                htmlFor="organization"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full border border-[var(--ct-border)] bg-white px-4 py-3 text-[var(--ct-dark)] focus:border-[var(--ct-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ct-primary)]"
              >
                <option value="">Select a reason</option>
                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--ct-dark)]"
              >
                Message
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

            <Button type="submit" size="large">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
