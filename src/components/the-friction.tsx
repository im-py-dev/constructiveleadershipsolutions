"use client";

import { XCircle, CheckCircle2 } from "lucide-react";

export function TheFriction() {
  const comparison = [
    {
      problem: "Promoted craftspeople struggle to lead, resulting in shouting, frustration, or silent resentment.",
      solution: "Structured 5 Voices communication empowers supervisors to lead with influence, clarity, and accountability.",
    },
    {
      problem: "Field superintendents and office PMs operate in silos, blaming each other when schedules slip.",
      solution: "Unified handover protocols and margin-discipline frameworks create seamless field-to-office alignment.",
    },
    {
      problem: "Superintendents avoid tough sub conversations until delays cause liquidated damages or blowups.",
      solution: "Subcontractor accountability playbooks resolve scope disputes on day 1 before rework occurs.",
    },
    {
      problem: "Estimators miss indirect costs and risk contingencies, eroding 3-5% of bid margin during execution.",
      solution: "Estimating with Impact methodology audits hidden costs and establishes disciplined pre-con bid reviews.",
    },
  ];

  return (
    <section id="friction" className="bg-[#0C263D] text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
            Where Margin Actually Bleeds
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight">
            The expensive problems are often conversations nobody had.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            In construction, leadership and communication breakdowns are not just 'soft skills'—they are immediate financial risks. They lead to rework, schedule delays, lost margin, and burned-out talent.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-white/15 bg-white/5 overflow-hidden backdrop-blur shadow-2xl">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
                <XCircle className="size-4" />
                <span>The Unmanaged Jobsite Reality</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                How Miscommunication Destroys Margin:
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                {comparison.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{item.problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-10 space-y-6 bg-white/[0.03]">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
                <CheckCircle2 className="size-4" />
                <span>The Constructive Leadership Standard</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                How Dan Beatty's System Protects the Job:
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
                {comparison.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#B64F43] shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
