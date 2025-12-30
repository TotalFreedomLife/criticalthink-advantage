import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Doctrine | CriticalThink Advantage",
  description:
    "The governing philosophy of CriticalThink Advantage. We govern decisions, not people. We govern judgment, not outcomes.",
};

export default function DoctrinePage() {
  return (
    <>
      {/* SECTION 1 - WHAT WE GOVERN */}
      <Section>
        <h1 className="mb-8">We Govern Decisions.</h1>
        <div className="max-w-3xl">
          <p className="mb-6">
            CriticalThink Advantage&#8482; exists to govern the decisions that
            shape institutions. Not people. Not outcomes. Decisions.
          </p>
          <p className="mb-6">
            We govern <strong className="text-[var(--ct-dark)]">judgment</strong> -
            the capacity to weigh competing factors and arrive at defensible
            conclusions under uncertainty.
          </p>
          <p className="mb-6">
            We govern <strong className="text-[var(--ct-dark)]">standards</strong> -
            the explicit criteria that define what good decision-making looks
            like within a domain.
          </p>
          <p className="mb-6">
            We govern <strong className="text-[var(--ct-dark)]">accountability</strong> -
            the discipline of ensuring that every decision can be traced to a
            rationale.
          </p>
          <p>
            We govern <strong className="text-[var(--ct-dark)]">rationale</strong> -
            the documented reasoning that transforms a choice into a defensible
            position.
          </p>
        </div>
      </Section>

      {/* SECTION 2 - WHY GOVERNANCE MATTERS */}
      <Section background="light">
        <h2 className="mb-8">Every Decision Creates Risk.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            Organizations operate under the assumption that good processes
            produce good outcomes. This is false. Processes constrain behavior.
            They do not improve judgment. When judgment fails, risk materializes.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Legal Risk
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Decisions that cannot be justified create liability. Governance
                provides the documentation that defense requires.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Financial Risk
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                Poor judgment compounds. One flawed decision cascades into
                resource misallocation, missed opportunities, and value
                destruction.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Cultural Risk
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                When decisions appear arbitrary, trust erodes. Governance makes
                the logic visible and the standard consistent.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-primary)] pl-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                Reputational Risk
              </h3>
              <p className="text-base text-[var(--ct-slate)]">
                External scrutiny reveals internal weakness. Governance ensures
                that decisions can withstand examination.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 - THE GOVERNANCE MODEL */}
      <Section>
        <h2 className="mb-8">How Governance Works.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            Decision governance operates through a four-stage model. Each stage
            builds on the previous. Each stage produces artifacts that can be
            audited, defended, and improved.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Scenario Framing
                </h3>
                <p className="text-[var(--ct-slate)]">
                  Every decision exists within a context. Scenario framing
                  establishes the parameters, constraints, and stakeholders
                  that define the decision space.
                </p>
                <p className="mt-2 text-sm italic text-[var(--ct-muted)]">
                  Example: Termination decision with incomplete documentation and pending FMLA request.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Judgment Evaluation
                </h3>
                <p className="text-[var(--ct-slate)]">
                  Judgment is tested against realistic scenarios. Evaluation
                  reveals how individuals weigh factors, manage uncertainty, and
                  arrive at conclusions.
                </p>
                <p className="mt-2 text-sm italic text-[var(--ct-muted)]">
                  Example: Assessing how a leader prioritizes competing stakeholder interests under time pressure.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Standard Alignment
                </h3>
                <p className="text-[var(--ct-slate)]">
                  Decisions are measured against explicit standards. Alignment
                  ensures that judgment operates within the boundaries that the
                  institution has defined.
                </p>
                <p className="mt-2 text-sm italic text-[var(--ct-muted)]">
                  Example: Mapping compensation decisions to documented pay equity frameworks.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--ct-primary)] text-lg font-semibold text-white">
                4
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--ct-dark)]">
                  Rationale Traceability
                </h3>
                <p className="text-[var(--ct-slate)]">
                  Every decision produces a rationale. Traceability ensures that
                  the path from input to conclusion can be reconstructed and
                  defended.
                </p>
                <p className="mt-2 text-sm italic text-[var(--ct-muted)]">
                  Example: Board compensation decision with documented reasoning for audit trail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - WHAT WE DO NOT DO */}
      <Section background="light">
        <h2 className="mb-8">What This Platform Is Not.</h2>
        <div className="max-w-3xl">
          <p className="mb-8">
            CriticalThink Advantage&#8482; is often mistaken for other categories.
            This confusion is understandable. The market has no established
            vocabulary for decision governance. But clarity matters.
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-[var(--ct-border)] pl-6">
              <p className="text-[var(--ct-slate)]">
                <strong className="text-[var(--ct-dark)]">
                  This is not certification preparation.
                </strong>{" "}
                We do not exist to help individuals pass examinations. We exist
                to ensure that judgment meets standards.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-border)] pl-6">
              <p className="text-[var(--ct-slate)]">
                <strong className="text-[var(--ct-dark)]">
                  This is not a management system.
                </strong>{" "}
                We do not track activities, manage workflows, or automate
                compliance. We build judgment.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-border)] pl-6">
              <p className="text-[var(--ct-slate)]">
                <strong className="text-[var(--ct-dark)]">
                  This is not executive development.
                </strong>{" "}
                We do not offer seminars, workshops, or motivational content.
                We provide structured evaluation and certification.
              </p>
            </div>
            <div className="border-l-2 border-[var(--ct-border)] pl-6">
              <p className="text-[var(--ct-slate)]">
                <strong className="text-[var(--ct-dark)]">
                  This is not advisory services.
                </strong>{" "}
                We do not consult. We provide the platform through which
                organizations govern their own decisions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 - AUTHORITY STATEMENT */}
      <Section>
        <h2 className="mb-8">Authority Is Earned Through Consistency.</h2>
        <div className="max-w-3xl">
          <p className="mb-6">
            CriticalThink Advantage&#8482; certification is not a credential. It
            is evidence. Evidence that judgment has been evaluated against
            rigorous standards. Evidence that decisions can be defended.
            Evidence that the individual operates within a governance framework.
          </p>
          <p className="mb-6">
            Authority in decision governance cannot be purchased or assumed. It
            is earned through consistent application of standards. It is earned
            through transparent evaluation. It is earned through the discipline
            of rationale documentation.
          </p>
          <p>
            When an organization deploys CriticalThink Advantage&#8482;, it makes
            a statement: decisions here are governed. When an individual achieves
            certification, they carry that standard with them. The certification
            means something because the process demands something.
          </p>
        </div>
      </Section>
    </>
  );
}
