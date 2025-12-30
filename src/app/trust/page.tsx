import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Trust | CriticalThink Advantage",
  description:
    "Security posture, data philosophy, and standards alignment for CriticalThink Advantage. Designed for enterprise accountability.",
};

export default function TrustPage() {
  return (
    <>
      {/* SECTION 1 - SECURITY POSTURE */}
      <Section>
        <h1 className="mb-8">Designed for Enterprise Accountability.</h1>
        <div className="max-w-3xl">
          <p className="mb-8">
            CriticalThink Advantage&#8482; is built for organizations where
            decisions carry institutional weight. Security is not an add-on. It
            is foundational.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <div>
                <strong className="text-[var(--ct-dark)]">
                  Secure Authentication
                </strong>
                <p className="mt-1 text-[var(--ct-slate)]">
                  Identity verification through industry-standard protocols.
                  Multi-factor authentication available for all deployments.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <div>
                <strong className="text-[var(--ct-dark)]">
                  Data Isolation by Deployment
                </strong>
                <p className="mt-1 text-[var(--ct-slate)]">
                  Each deployment operates within isolated data boundaries.
                  Cross-deployment data access is architecturally prevented.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <div>
                <strong className="text-[var(--ct-dark)]">
                  Principle of Least Privilege
                </strong>
                <p className="mt-1 text-[var(--ct-slate)]">
                  Access controls are granular. Users access only the data
                  required for their role. Administrative functions are
                  restricted and audited.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <div>
                <strong className="text-[var(--ct-dark)]">
                  Encryption at Rest and in Transit
                </strong>
                <p className="mt-1 text-[var(--ct-slate)]">
                  All data is encrypted using current industry standards. TLS
                  for transit. AES-256 for storage. Key management follows
                  security best practices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      {/* SECTION 2 - DATA PHILOSOPHY */}
      <Section background="light">
        <h2 className="mb-8">Data Exists to Support Governance.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            The data collected by CriticalThink Advantage&#8482; serves one
            purpose: enabling decision governance. This principle shapes every
            aspect of data handling.
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                No Resale of Data
              </h3>
              <p className="text-[var(--ct-slate)]">
                User data is never sold, licensed, or transferred to third
                parties for commercial purposes. Data remains within the
                governance context for which it was collected.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                No External Model Development
              </h3>
              <p className="text-[var(--ct-slate)]">
                Customer data is not used to build or improve external AI
                models. Platform improvements use aggregated, anonymized
                patterns only, never individual records.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Clear Ownership Boundaries
              </h3>
              <p className="text-[var(--ct-slate)]">
                Organizations retain ownership of their governance data.
                Certification records belong to individuals. Platform data
                (system logs, performance metrics) belongs to the platform.
                Boundaries are explicit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 - CERTIFICATION & STANDARDS */}
      <Section>
        <h2 className="mb-8">Standards, Not Shortcuts.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            CriticalThink Advantage&#8482; operates within recognized frameworks
            where applicable. Where no established standard exists, we document
            our governance approach explicitly.
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Alignment to Recognized Frameworks
              </h3>
              <p className="text-[var(--ct-slate)]">
                Domain deployments align to professional standards where they
                exist. CriticalThink HR&#8482; aligns to SHRM competency
                frameworks. Future deployments will align to PMI, leadership
                development, and strategic planning frameworks as appropriate.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Internal Governance Standards
              </h3>
              <p className="text-[var(--ct-slate)]">
                Platform operations follow documented internal standards for
                scenario development, evaluation methodology, and certification
                criteria. These standards are versioned, reviewed, and updated
                through a defined governance process.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Certification Discipline
              </h3>
              <p className="text-[var(--ct-slate)]">
                Certification is earned through demonstrated judgment, not
                accumulated hours. Evaluation criteria are explicit.
                Performance thresholds are documented. The path from assessment
                to certification is traceable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ENTERPRISE INTEGRATION */}
      <Section>
        <h2 className="mb-8">Enterprise Integration</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            CriticalThink Advantage&#8482; is designed to integrate with existing
            enterprise infrastructure, not replace it.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Single Sign-On (SSO)
              </h3>
              <p className="text-[var(--ct-slate)]">
                SAML 2.0 and OAuth 2.0 support for seamless identity federation
                with existing enterprise identity providers.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                API Access
              </h3>
              <p className="text-[var(--ct-slate)]">
                RESTful APIs for programmatic access to governance data,
                certification records, and assessment results.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Data Export
              </h3>
              <p className="text-[var(--ct-slate)]">
                Structured export formats for integration with HRIS, LMS, and
                compliance management systems.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Webhook Events
              </h3>
              <p className="text-[var(--ct-slate)]">
                Real-time event notifications for certification completions,
                assessment milestones, and governance alerts.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* AUDIT READINESS */}
      <Section background="light">
        <h2 className="mb-8">Audit-Ready by Design</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            Organizations operating in regulated environments require audit
            trails. CriticalThink Advantage&#8482; produces documentation that
            supports institutional accountability.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-[var(--ct-slate)]">
                Assessment records with timestamps and version tracking
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-[var(--ct-slate)]">
                Rationale documentation for certification decisions
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-[var(--ct-slate)]">
                Standard alignment evidence for each evaluation
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-[var(--ct-slate)]">
                Export capabilities for compliance documentation
              </span>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
