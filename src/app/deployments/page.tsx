import type { Metadata } from "next";
import { Section, DeploymentCard, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Deployments | CriticalThink Advantage",
  description:
    "CriticalThink Advantage deploys the same decision governance platform into specialized domains. Governance, deployed by domain.",
};

export default function DeploymentsPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <Section>
        <h1 className="mb-6">Governance, Deployed by Domain.</h1>
        <p className="max-w-3xl text-xl text-[var(--ct-slate)]">
          CriticalThink Advantage&#8482; deploys the same decision governance
          platform into specialized domains. Each deployment inherits the
          governance framework. Each deployment applies domain-specific
          standards.
        </p>
      </Section>

      {/* DEPLOYMENT CARDS */}
      <Section background="light">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* HR Deployment - Live */}
          <div className="border border-[var(--ct-border)] bg-white p-8">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-[var(--ct-dark)]">
                CriticalThink HR&#8482;
              </h2>
              <span className="inline-block border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                Live
              </span>
            </div>
            <p className="mb-6 text-[var(--ct-slate)]">
              Decision governance for human capital, aligned to SHRM standards.
              Build defensible judgment in hiring, performance management,
              employee relations, and organizational development.
            </p>
            <Button href="https://app.criticalthinkhr.com" variant="primary">
              View Live Deployment
            </Button>
          </div>

          {/* PMP Deployment - In Development */}
          <div className="border border-[var(--ct-border)] bg-white p-8">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-[var(--ct-dark)]">
                CriticalThink PMP&#8482;
              </h2>
              <span className="inline-block border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                In Development
              </span>
            </div>
            <p className="mb-6 text-[var(--ct-slate)]">
              Decision governance for project leadership and execution risk.
              Scenario-based evaluation of judgment in scope management,
              stakeholder alignment, risk response, and resource allocation.
            </p>
            <p className="text-sm text-[var(--ct-muted)]">
              Contact the platform team for early access discussions.
            </p>
          </div>

          {/* Leadership Deployment - Coming Soon */}
          <div className="border border-[var(--ct-border)] bg-white p-8">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-[var(--ct-dark)]">
                CriticalThink Leadership&#8482;
              </h2>
              <span className="inline-block border border-[var(--ct-border)] bg-[var(--ct-light)] px-3 py-1 text-sm font-medium text-[var(--ct-muted)]">
                Coming Soon
              </span>
            </div>
            <p className="text-[var(--ct-slate)]">
              Decision governance for organizational leadership and team
              dynamics. Evaluate judgment in delegation, conflict resolution,
              strategic communication, and cultural stewardship.
            </p>
          </div>

          {/* Strategy Deployment - Coming Soon */}
          <div className="border border-[var(--ct-border)] bg-white p-8">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-[var(--ct-dark)]">
                CriticalThink Strategy&#8482;
              </h2>
              <span className="inline-block border border-[var(--ct-border)] bg-[var(--ct-light)] px-3 py-1 text-sm font-medium text-[var(--ct-muted)]">
                Coming Soon
              </span>
            </div>
            <p className="text-[var(--ct-slate)]">
              Decision governance for strategic planning and competitive
              positioning. Build defensible judgment in market analysis,
              resource commitment, and long-term value creation.
            </p>
          </div>
        </div>
      </Section>

      {/* PLATFORM RELATIONSHIP */}
      <Section>
        <h2 className="mb-8">One Platform. Domain-Specific Standards.</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            Every deployment operates on the same governance architecture. The
            scenario framework is consistent. The evaluation methodology is
            consistent. The certification discipline is consistent.
          </p>
          <p className="mb-6">
            What differs is the domain-specific standard. SHRM competencies for
            HR. PMI frameworks for project management. Leadership models for
            organizational dynamics. Strategic frameworks for competitive
            positioning.
          </p>
          <p>
            This architecture ensures that governance scales. An organization
            deploying multiple CriticalThink Advantage&#8482; products operates
            within a unified governance model while respecting domain-specific
            expertise.
          </p>
        </div>
      </Section>

      {/* ENTERPRISE DEPLOYMENT */}
      <Section background="light">
        <h2 className="mb-8">Enterprise Deployment</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            For organizations requiring custom governance deployment across
            multiple domains, the platform team provides direct engagement.
            Enterprise deployment includes configuration, standard alignment,
            and integration support.
          </p>
          <Button href="/contact" variant="primary">
            Contact Platform Team
          </Button>
        </div>
      </Section>
    </>
  );
}
