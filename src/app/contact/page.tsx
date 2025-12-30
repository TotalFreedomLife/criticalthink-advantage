"use client";

import { useState } from "react";
import { Section, Button } from "@/components/ui";

const contactReasons = [
  "Platform Partnership",
  "Enterprise Deployment",
  "Investment Inquiry",
  "Domain Expansion Discussion",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
