"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, BarChart3, Users2, Compass, Layers, Clock, Award, TrendingUp, UserCheck, Briefcase } from "lucide-react";

interface TrainingProgramsProps {
  onOpenCalendly: () => void;
}

export function TrainingPrograms({ onOpenCalendly }: TrainingProgramsProps) {
  const [activeTab, setActiveTab] = useState<string>("pm-development");

  const programs = [
    {
      id: "pm-development",
      shortTitle: "PM Development",
      shortBadge: "AGC PMDP Curriculum",
      tag: "FLAGSHIP AGC & CONTRACTOR CURRICULUM",
      title: "Project Manager Development Program (PMDP)",
      subtitle: "Transform technical project managers into decisive, commercially minded leaders.",
      duration: "4 to 8 Session Cohort · Virtual or On-Site",
      description:
        "Delivering the AGC of America PMDP curriculum combined with 40 years of real field leadership. Most PMs were taught how to review pay apps and write RFIs—never how to lead crews, negotiate change orders, hold subcontractors accountable, or defend jobsite margin.",
      outcomes: [
        "Commercial leadership & proactive jobsite margin protection",
        "Mastering tough subcontractor & owner negotiations without blowing up relationships",
        "Eliminating the costly communication barrier between field trailers and main offices",
        "Proven retention growth: NCCER research shows structured training elevates retention from 28% to 73%",
      ],
      curriculum: [
        { week: "Module 1", topic: "The PM as a Commercial Leader", desc: "Understanding the true financial levers of jobsite profitability, cash flow, and risk management." },
        { week: "Module 2", topic: "The 5 Voices on the Jobsite", desc: "Decoding team personality styles to eliminate friction between field foremen and office staff." },
        { week: "Module 3", topic: "Difficult Conversations & Sub Accountability", desc: "How to address poor performance, scope disputes, and schedule slippage on day one." },
        { week: "Module 4", topic: "Delegation & Execution Systems", desc: "Moving from reactive fire-fighting to proactive milestone execution." },
      ],
      idealFor: "Project Managers, Assistant PMs, Project Executives, Operations Coordinators",
      borderColor: "border-[#0C263D]",
    },
    {
      id: "builder-to-leader",
      shortTitle: "Builder to Leader",
      shortBadge: "AGC STP / CSF Training",
      tag: "FIELD SUPERVISOR MASTERY (STP / CSF)",
      title: "From Strong Builder to Leader of People",
      subtitle: "Turn master craftspeople into confident, respected superintendents.",
      duration: "Half-Day or Full-Day Intensive + Follow-Up",
      description:
        "The fastest way to lose a great craftsperson is promoting them to superintendent without leadership training. Dan delivers AGC Supervisory Training Program (STP) and Construction Supervision Fundamentals (CSF) principles to guide craft leaders through the vital identity shift from 'doing the work' to 'leading others.'",
      outcomes: [
        "Moving from 'doing' to 'leading' without losing crew respect",
        "Daily morning huddles that actually drive labor production",
        "De-escalating hot heads and resolving field conflict before it delays the job",
        "Training and mentoring the next generation of apprentices and foremen",
      ],
      curriculum: [
        { week: "Part 1", topic: "The Identity Shift of a Field Leader", desc: "Why working harder with your hands stops working when you lead crews." },
        { week: "Part 2", topic: "Jobsite Influence vs. Authority", desc: "How to command respect without shouting, micromanaging, or burning bridges." },
        { week: "Part 3", topic: "The Daily Production Huddle", desc: "Structuring 10-minute field briefings that align trades and eliminate scope confusion." },
      ],
      idealFor: "Superintendents, General Foremen, Field Engineers, Trade Crew Leads",
      borderColor: "border-[#B64F43]",
    },
    {
      id: "estimating-impact",
      shortTitle: "Estimating with Impact",
      shortBadge: "Pre-Con Margin Protection",
      tag: "BID DISCIPLINE & PRE-CON",
      title: "Estimating with Impact",
      subtitle: "Protect project margins before the first shovel hits the ground.",
      duration: "Single-Day Masterclass or 2-Part Workshop",
      description:
        "Combining 35+ years of heavy civil estimating at Bechtel, Alberici, and Flatiron with AGC certified methodology, Dan teaches estimating teams how to uncover hidden indirect costs, evaluate risk, eliminate contingency blind spots, and bid with discipline.",
      outcomes: [
        "Uncovering hidden indirect jobsite costs that silently eat margin",
        "Disciplined risk assessment and contingency defense during bid reviews",
        "Preventing scope gaps between trades during buyout",
        "Standardized pre-construction review protocols that protect profitability",
      ],
      curriculum: [
        { week: "Part 1", topic: "The Anatomy of Indirect Costs", desc: "Auditing field overhead, equipment creep, and logistical burdens often left unbilled." },
        { week: "Part 2", topic: "Risk Contingencies & Bid Defense", desc: "How to structure and defend realistic contingencies without losing the bid." },
        { week: "Part 3", topic: "Estimating-to-Operations Handover", desc: "Ensuring the PM team understands the exact bid assumptions from day one." },
      ],
      idealFor: "Estimators, Chief Estimators, Pre-Con Managers, Company Principals",
      borderColor: "border-slate-400",
    },
    {
      id: "5-voices-communication",
      shortTitle: "5 Voices Matrix",
      shortBadge: "Field & Office Culture",
      tag: "ORGANIZATIONAL CULTURE",
      title: "5 Voices Team Communication Matrix",
      subtitle: "Eliminate the costly 'Personality Tax' across your entire company.",
      duration: "Interactive Executive & Operations Workshop",
      description:
        "Every construction company has strong personalities. When communication breaks down, projects slow down. As a Certified GiANT 5 Voices Facilitator, Dan helps teams understand how each person naturally processes information, solving friction before it turns into rework.",
      outcomes: [
        "Discovering each team member's foundational leadership voice",
        "Bridging communication disconnects between field superintendents and office staff",
        "Creating psychological safety so team members report problems before they explode",
        "Executive alignment for smooth leadership succession and scaling",
      ],
      curriculum: [
        { week: "Part 1", topic: "Discovering Your Leadership Voice", desc: "Assessing whether you lead as a Pioneer, Connector, Creative, Guardian, or Nurturer." },
        { week: "Part 2", topic: "The Communication Tax", desc: "Identifying where misunderstood intentions cause wasted labor and delayed responses." },
        { week: "Part 3", topic: "Creating a High-Trust Jobsite Culture", desc: "Practical rules of engagement for executive meetings and field trailers alike." },
      ],
      idealFor: "Executive Leadership, Department Heads, Cross-Functional Operations",
      borderColor: "border-[#0C263D]",
    },
  ];

  const currentProg = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <section id="training-programs" className="bg-[#F8F9FA] py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
            Contractor Training Tracks & Executive Advisory
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D] tracking-tight">
            Field-Tested Development for the People Who Drive Production.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Move away from one-off motivational talks. Implement structured, multi-session AGC and proprietary leadership engagements that create permanent behavioral change in your field and office operations.
          </p>
        </div>

        {/* 2-by-2 on mobile/tablet, 4-in-a-row on desktop */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {programs.map((prog) => {
            const isSelected = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => setActiveTab(prog.id)}
                className={
                  "rounded-xl p-4 text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[76px] border-2 " +
                  (isSelected
                    ? "bg-[#0C263D] text-white border-[#B64F43] shadow-lg scale-[1.02] ring-2 ring-[#B64F43]/30"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-sm")
                }
              >
                <span className={"text-xs sm:text-sm font-extrabold uppercase tracking-wider " + (isSelected ? "text-white" : "text-[#0C263D]")}>
                  {prog.shortTitle}
                </span>
                <span className={"text-[0.68rem] font-bold mt-1 " + (isSelected ? "text-[#B64F43]" : "text-slate-500")}>
                  {prog.shortBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Program Box */}
        <div className="mt-8 rounded-2xl border-2 border-[#0C263D] bg-white p-8 sm:p-12 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#B64F43]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B64F43]">
                  {currentProg.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <Clock className="size-3.5 text-[#B64F43]" />
                  <span>{currentProg.duration}</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C263D]">
                {currentProg.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500 italic">
                {currentProg.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentProg.description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0C263D] mb-3">
                  Measurable Operational Outcomes:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {currentProg.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#B64F43] shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow text-center cursor-pointer"
                >
                  <span>Schedule Discovery for This Program</span>
                  <ArrowRight className="size-4" />
                </button>
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  Ideal for: <strong>{currentProg.idealFor}</strong>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="font-serif text-lg font-bold text-[#0C263D]">
                  Curriculum & Modules
                </h4>
                <Award className="size-5 text-[#B64F43]" />
              </div>

              <div className="space-y-4">
                {currentProg.curriculum.map((c, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="text-[0.7rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                      {c.week}
                    </span>
                    <p className="font-bold text-xs sm:text-sm text-[#0C263D] mt-0.5">
                      {c.topic}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2.5 text-emerald-800 text-xs">
                <TrendingUp className="size-4 text-emerald-600 shrink-0" />
                <span>NCCER Research: Structured supervisor development increased retention from 28% to 73%.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1:1 Executive Coaching & Enterprise Advisory Callout Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1: 1:1 Executive & Owner Advisory */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-md hover:border-[#0C263D] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#0C263D] text-white">
                <UserCheck className="size-5 text-[#B64F43]" />
              </div>
              <div>
                <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                  Revenue Pillar 3 · Advisory Retainer
                </span>
                <h4 className="font-serif text-xl font-bold text-[#0C263D]">
                  1:1 Business Coaching for GC Owners
                </h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Confidential, monthly executive sounding-board for construction CEOs, Operations VPs, and Principals navigating leadership succession, major pursuit risk audits, and field communication culture.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#B64F43]" />
                <span>Pre-con bid risk evaluation & margin defense</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#B64F43]" />
                <span>Executive alignment and partner conflict resolution</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={onOpenCalendly}
              className="mt-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:text-[#B64F43] transition-colors cursor-pointer"
            >
              <span>Explore Executive Retainer</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>

          {/* Card 2: Enterprise Multi-Regional Cohorts */}
          <div className="rounded-2xl bg-[#0C263D] text-white p-8 space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Briefcase className="size-5 text-[#B64F43]" />
                </div>
                <div>
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                    Enterprise Scalability
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Multi-Company Cohort Programs
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have 10+ Project Managers across different offices? Dan designs bespoke cohorts combining virtual masterclasses, jobsite walkthroughs, and 1:1 coaching.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenCalendly}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] py-3 px-5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow cursor-pointer"
            >
              <span>Design a Custom Enterprise Cohort</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
