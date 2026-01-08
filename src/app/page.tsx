import { Button, Section } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="flex min-h-[70vh] items-center bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <h1 className="mb-8 text-[var(--ct-dark)]">
            The CriticalThink Advantage&#8482; Methodology
          </h1>
          <p className="mb-6 max-w-3xl text-xl leading-relaxed text-[var(--ct-slate)] lg:text-2xl">
            A structured decision-governance methodology for evaluating,
            justifying, and defending high-stakes decisions when the right
            answer isn&apos;t obvious.
          </p>
          <p className="max-w-3xl text-lg text-[var(--ct-muted)]">
            Used internally across the CriticalThink platform to assess
            decision quality under executive-level scrutiny.
          </p>
        </div>
      </section>

      {/* SECTION 2 - WHY THIS METHODOLOGY EXISTS */}
      <Section background="light" id="why">
        <h2 className="mb-8">Why Decision Governance Fails Without Structure</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            High-stakes decisions rarely fail because the information was
            unavailable. They fail because the decision-making process itself
            lacked structure.
          </p>
          <p className="mb-6">
            Ambiguity creates paralysis. Conflicting incentives create
            compromise. Risk exposure remains invisible until it materializes.
            And the burden of explaining a decision later falls on reasoning
            that was never documented.
          </p>
          <p className="mb-6">
            Good answers fail for structural reasons. A defensible option is
            rejected because the governing issue was misidentified. A
            reasonable path is abandoned because competing priorities were
            never reconciled. A sound decision cannot be justified because the
            rationale existed only in memory.
          </p>
          <p>
            Structure does not guarantee the right decision. But without
            structure, even right decisions become indefensible.
          </p>
        </div>
      </Section>

      {/* SECTION 3 - WHAT THE CRITICALTHINK ADVANTAGE IS */}
      <Section id="what">
        <h2 className="mb-8">What the CriticalThink Advantage&#8482; Is</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            The CriticalThink Advantage&#8482; is a decision-governance
            methodology that evaluates whether a decision is:
          </p>
          <div className="mb-8 space-y-6">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Foundational
              </h3>
              <p className="text-[var(--ct-slate)]">
                Addresses the root cause, not a surface symptom. Distinguishes
                the governing issue from adjacent concerns.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Systemic
              </h3>
              <p className="text-[var(--ct-slate)]">
                Scales as a repeatable standard. Creates precedent that can be
                applied consistently across similar situations.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Defensible
              </h3>
              <p className="text-[var(--ct-slate)]">
                Can be justified later using explicit reasoning. Produces a
                rationale that withstands institutional scrutiny.
              </p>
            </div>
          </div>
          <p className="border-t border-[var(--ct-border)] pt-6 text-[var(--ct-muted)]">
            This methodology does not prescribe actions. It evaluates decision
            quality under institutional constraints.
          </p>
        </div>
      </Section>

      {/* SECTION 4 - WHEN THE METHODOLOGY IS APPLIED */}
      <Section background="light" id="when">
        <h2 className="mb-8">When the Methodology Is Applied</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            The CriticalThink Advantage&#8482; methodology is applied when
            decisions carry institutional weight and standard procedures
            provide insufficient guidance.
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Multiple defensible options exist
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Stakeholder incentives conflict
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Legal, reputational, or cultural risk is present
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Information is incomplete
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Decisions set precedent
              </span>
            </li>
          </ul>
          <p className="border-t border-[var(--ct-border)] pt-6 text-[var(--ct-muted)]">
            The CriticalThink Advantage&#8482; is designed for environments
            where judgment &mdash; not recall &mdash; determines outcomes.
          </p>
        </div>
      </Section>

      {/* SECTION 5 - THE THREE-LENS DECISION PRISM */}
      <Section id="how">
        <h2 className="mb-8">The Three-Lens Decision Prism</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            The methodology applies three lenses to evaluate decision quality.
            Each lens addresses a distinct dimension of governance.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Context
                </h3>
                <p className="mb-2 font-medium text-[var(--ct-dark)]">
                  What is really happening?
                </p>
                <p className="text-[var(--ct-slate)]">
                  Separates the core issue from operational noise. Identifies
                  the governing question that must be answered.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Priority
                </h3>
                <p className="mb-2 font-medium text-[var(--ct-dark)]">
                  Why do reasonable options fail?
                </p>
                <p className="text-[var(--ct-slate)]">
                  Identifies structurally unsound paths without prescribing
                  tactics. Reveals constraints that eliminate options.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Governance
                </h3>
                <p className="mb-2 font-medium text-[var(--ct-dark)]">
                  Is the remaining path defensible?
                </p>
                <p className="text-[var(--ct-slate)]">
                  Validates decisions against institutional standards. Ensures
                  the rationale can withstand scrutiny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - WHAT THE METHODOLOGY PRODUCES */}
      <Section background="light" id="outputs">
        <h2 className="mb-8">What the Methodology Produces</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            Application of the methodology produces structured outputs that
            support consistent evaluation and institutional accountability.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Clear Articulation
              </h3>
              <p className="text-[var(--ct-slate)]">
                The governing issue is identified and separated from adjacent
                concerns.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Reasoning Trail
              </h3>
              <p className="text-[var(--ct-slate)]">
                Explicit documentation of how the decision was reached.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Risk-Aware Rationale
              </h3>
              <p className="text-[var(--ct-slate)]">
                Recognition of constraints and trade-offs inherent in the
                decision.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Defensible Justification
              </h3>
              <p className="text-[var(--ct-slate)]">
                A rationale that can be presented under institutional scrutiny.
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-[var(--ct-border)] pt-6 text-[var(--ct-muted)]">
            Outputs are used internally by the CriticalThink platform to
            support consistent evaluation and feedback.
          </p>
        </div>
      </Section>

      {/* SECTION 7 - WHERE THE METHODOLOGY LIVES */}
      <Section id="where">
        <h2 className="mb-8">Where the Methodology Lives</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            The CriticalThink Advantage&#8482; methodology is embedded inside
            the CriticalThink platform and applied consistently across
            domain-specific deployments.
          </p>
          <p className="mb-8">Example domains:</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Human capital decisions
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Project leadership environments
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[var(--ct-primary)]"></span>
              <span className="text-lg text-[var(--ct-slate)]">
                Enterprise governance contexts
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* SECTION 8 - BRIDGE CTA */}
      <Section background="light">
        <div className="text-center">
          <h2 className="mb-6">See the Methodology Applied in Practice</h2>
          <Button href="https://www.criticalthinkhr.com" size="large">
            See how it&apos;s applied in Human Capital decisions &rarr;
          </Button>
        </div>
      </Section>
    </>
  );
}
