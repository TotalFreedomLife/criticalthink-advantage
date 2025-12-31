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
                  Identity verification through industry-standard authentication
                  protocols. Multi-factor authentication is supported and
                  available for deployments where enabled.
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
                  Each deployment is designed to operate within isolated data
                  boundaries. Access controls and row-level security policies
                  are used to prevent cross-deployment data access.
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
                  Access controls are designed around the principle of least
                  privilege. Users are granted access only to data required for
                  their role. Administrative functions are restricted and
                  monitored.
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
                  Data is encrypted in transit using TLS. Data at rest is
                  encrypted by underlying cloud infrastructure. Key management
                  follows cloud provider security best practices.
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
                Customer data is not used to train publicly available AI
                models. Any AI-assisted processing is limited to providing
                platform functionality and does not create external, reusable
                models.
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
                criteria. Standards are versioned and maintained through a
                documented governance process.
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
            Enterprise integration capabilities are designed into the platform
            architecture and available as part of the enterprise roadmap.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Single Sign-On (SSO)
              </h3>
              <p className="text-[var(--ct-slate)]">
                OAuth 2.0 authentication is supported. SAML-based SSO is
                available for enterprise deployments.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                API Access
              </h3>
              <p className="text-[var(--ct-slate)]">
                API access for programmatic integration with governance data,
                certification records, and assessment results for enterprise
                deployments.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Data Export
              </h3>
              <p className="text-[var(--ct-slate)]">
                Structured data export for integration with HRIS, LMS, and
                compliance management systems.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Webhook Events
              </h3>
              <p className="text-[var(--ct-slate)]">
                Webhook event notifications for certification completions,
                assessment milestones, and governance alerts are available for
                governed deployments.
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
            trails. CriticalThink Advantage&#8482; produces documentation and
            artifacts that support institutional accountability and audit
            review.
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
