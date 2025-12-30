import { Button, Section, DeploymentCard } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* SECTION 1 - HERO (Platform Thesis) */}
      <section className="flex min-h-[80vh] items-center bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[var(--ct-muted)]">
            For enterprise decision leaders, governance officers, and cross-organizational decision system designers
          </p>
          <h1 className="mb-8 text-[var(--ct-dark)]">
            STOP GUESSING. START GOVERNING.
          </h1>
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-[var(--ct-slate)] lg:text-2xl">
            CriticalThink Advantage&#8482; is a decision governance platform
            that defines how high-stakes decisions are evaluated, justified,
            and defended across institutional domains.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/deployments" size="large">
              View HR Deployment
            </Button>
            <Button href="/contact" variant="secondary" size="large">
              Contact Platform Team
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM (Category Creation) */}
      <Section background="light">
        <h2 className="mb-8">Decisions Fail Before Systems Do.</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            Organizations do not fail because they lack data. They do not fail
            because policy is absent. They fail because judgment is untrained,
            inconsistent, and undocumented.
          </p>
          <p className="mb-6">
            When a hiring decision leads to litigation, the question is not
            whether a process existed. The question is whether the decision
            itself can be justified. When a project fails, stakeholders do not
            ask for more dashboards. They ask why the warning signs were
            ignored.
          </p>
          <p>
            This is an institutional risk problem. And it requires an
            institutional solution.
          </p>
        </div>
      </Section>

      {/* SECTION 3 - WHAT DECISION GOVERNANCE IS */}
      <Section>
        <h2 className="mb-8">Decision Governance Is the Missing Layer.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            Decision governance is the discipline of ensuring that judgment is
            structured, evaluated, and defensible. It is not policy enforcement.
            It is not compliance automation. It is the systematic development
            of decision-making capability at the institutional level.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Standards for Judgment
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Explicit criteria that define how decisions should be made
                within a domain.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Scenario-Based Evaluation
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Realistic simulations that reveal how individuals apply
                judgment under pressure.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Traceable Rationale
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Documentation that connects each decision to the reasoning
                behind it.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Defensible Outcomes
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Results that can withstand scrutiny because the process was
                rigorous.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - THE PLATFORM */}
      <Section background="light">
        <h2 className="mb-8">
          CriticalThink Advantage&#8482; Is the Governance Layer.
        </h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            CriticalThink Advantage&#8482; is not a point solution. It is the
            platform layer that sits above domain-specific deployments,
            providing the architecture for decision governance across the
            enterprise.
          </p>
          <p className="mb-6">
            The platform establishes the standards. It builds judgment through
            rigorous scenario-based assessments. It certifies outcomes so they
            can be defended. And it deploys into specific domains - human
            capital, project execution, organizational leadership, strategic
            planning - without compromising the integrity of the governance
            model.
          </p>
          <p>
            Each deployment inherits the discipline of the platform. Each
            certification carries the weight of the standard.
          </p>
        </div>
      </Section>

      {/* SECTION 5 - DEPLOYMENTS (Preview Only) */}
      <Section>
        <h2 className="mb-12">Governance Deployed by Domain</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <DeploymentCard
            title="CriticalThink HR&#8482;"
            status="Live"
            description="Decision governance for human capital, aligned to SHRM standards."
            href="https://app.criticalthinkhr.com"
          />
          <DeploymentCard
            title="CriticalThink PMP&#8482;"
            status="Coming Soon"
            description="Govern project execution decisions consistently across global portfolios. Align judgment to PMI standards."
          />
          <DeploymentCard
            title="CriticalThink Leadership&#8482;"
            status="Coming Soon"
            description="Build defensible judgment in delegation, conflict resolution, and organizational stewardship."
          />
          <DeploymentCard
            title="CriticalThink Strategy&#8482;"
            status="Coming Soon"
            description="Govern strategic decisions with traceable rationale for board-level accountability."
          />
        </div>
      </Section>

      {/* SECTION 6 - TRUST SIGNAL */}
      <Section background="light">
        <h2 className="mb-8">Built for Institutional Accountability</h2>
        <ul className="max-w-2xl space-y-4">
          <li className="flex items-start gap-4">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
            <span className="text-lg text-[var(--ct-slate)]">
              Audit-ready outputs
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
            <span className="text-lg text-[var(--ct-slate)]">
              Scenario traceability
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
            <span className="text-lg text-[var(--ct-slate)]">
              Standards-driven design
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
            <span className="text-lg text-[var(--ct-slate)]">
              Enterprise-grade security posture
            </span>
          </li>
        </ul>
      </Section>

      {/* SECTION 7 - FINAL CTA */}
      <Section>
        <div className="text-center">
          <h2 className="mb-8">Governance Is No Longer Optional.</h2>
          <Button href="/deployments" size="large">
            View HR Deployment
          </Button>
        </div>
      </Section>
    </>
  );
}
