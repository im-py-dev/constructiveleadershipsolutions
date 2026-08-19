"use client";

import { CheckCircle2, ArrowRight, ShieldAlert, BarChart3, Users2, Compass, Layers } from "lucide-react";

interface TrainingProgramsProps {
  onOpenCalendly: () => void;
}

export function TrainingPrograms({ onOpenCalendly }: TrainingProgramsProps) {
  const programs = [
    {
      id: "pm-development",
      tag: "FLAGSHIP MULTI-SESSION",
      title: "Project Manager Development Program",
      subtitle: "Transform technical managers into decisive commercial leaders.",
      description:
        "Most construction PMs were trained to read drawings and write RFIs, but never how to lead people, navigate conflict, or hold subcontractors accountable without blowing up relationships. This multi-session engagement builds the core leadership competencies needed for complex projects.",
      modules: [
        "Financial Ownership & Margin Discipline",
        "Managing Tough Subcontractor Conversations",
        "Leading Without Authority Across Jobsite Trades",
        "Field-to-Office Handover & Communication",
      ],
      idealFor: "Project Managers, Assistant PMs, Project Engineers, Operations Coordinators",
      accent: "border-[#0C263D]",
    },
    {
      id: "builder-to-leader",
      tag: "FIELD SUPERVISOR MASTERY",
      title: "From Strong Builder to Leader of People",
      subtitle: "Turn master craftspeople into confident, respected superintendents.",
      description:
        "The fastest way to lose a great builder is promoting them to superintendent without leadership training. Dan guides craft leaders through the identity shift: moving from 'doing the work with your hands' to 'guiding crews to hit safety, quality, and schedule milestones.'",
      modules: [
        "The 5 Voices Field Leadership Matrix",
        "Daily Crew Huddles That Actually Drive Production",
        "De-escalating Jobsite Conflict & Hot Heads",
        "Developing the Next Generation of Apprentices",
      ],
      idealFor: "Superintendents, General Foremen, Field Engineers, Crew Leads",
      accent: "border-[#B64F43]",
    },
    {
      id: "estimating-impact",
      tag: "COMMERCIAL & BID DISCIPLINE",
      title: "Estimating with Impact",
      subtitle: "Protect margins before the first shovel hits the ground.",
      description:
        "Profitability is won or lost during the bid. Combining 40 years of estimating experience with AGC Edge methodology, Dan teaches teams how to identify indirect costs, evaluate risk, eliminate contingency blind spots, and bid with discipline.",
      modules: [
        "Uncovering Hidden Indirect Jobsite Costs",
        "Risk Assessment & Contingency Strategy",
        "Scope Gap Prevention Between Trades",
        "Consistent Estimating Review Protocols",
      ],
      idealFor: "Estimators, Chief Estimators, Pre-Construction Managers, Owners",
      accent: "border-slate-400",
    },
    {
      id: "5-voices-communication",
      tag: "TEAM DYNAMICS",
      title: "5 Voices Team Communication Matrix",
      subtitle: "Eliminate the costly 'Personality Tax' across your organization.",
      description:
        "Every jobsite has strong personalities. When communication breaks down, projects slow down. As a Certified GiANT 5 Voices Facilitator, Dan helps leadership teams understand how each person processes information, solving friction before it turns into rework.",
      modules: [
        "Discovering Your Leadership Voice (Pioneer, Connector, etc.)",
        "Bridging the Communication Gap Between Office & Field",
        "Creating Psychological Safety on High-Pressure Jobsites",
        "Executive Alignment for Succession & Scale",
      ],
      idealFor: "Executive Teams, Department Heads, Cross-Functional Operations",
      accent: "border-[#0C263D]",
    },
  ];

  return (
    <section id="training-programs" className="bg-[#F8F9FA] py-16 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64F43]">
            Contractor Training Programs
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D]">
            Field-Tested Development for the People Who Drive Production.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Move away from one-off motivational talks. Implement structured, multi-session leadership engagements that create permanent behavioral change in your field and office operations.
          </p>
        </div>

        {/* 4 Training Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-xl border-2 ${prog.accent} bg-white p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-wider text-[#B64F43] bg-[#B64F43]/10 px-3 py-1 rounded">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#0C263D] mt-4">
                  {prog.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 italic">
                  {prog.subtitle}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                {/* Modules list */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0C263D] mb-3">
                    Core Learning Modules:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {prog.modules.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#B64F43] shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[0.68rem] uppercase font-bold text-slate-400 block">
                    Ideal Audience:
                  </span>
                  <span className="text-xs font-medium text-slate-700">
                    {prog.idealFor}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="inline-flex items-center justify-center gap-1.5 rounded bg-[#0C263D] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1C456A] transition-colors whitespace-nowrap"
                >
                  <span>Discuss Program</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Cohort & Scalable Training Callout */}
        <div className="mt-12 rounded-xl bg-[#0C263D] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64F43]">
              Enterprise & Cohort Scalability
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Multi-Location Cohort?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Dan designs tailored leadership cohorts for regional and national contractors, combining virtual masterclasses, on-site jobsite walkthroughs, and 1:1 executive coaching.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 rounded bg-[#B64F43] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow shrink-0"
          >
            <span>Design a Custom Program</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
