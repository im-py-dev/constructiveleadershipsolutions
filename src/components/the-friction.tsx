"use client";

import { useState } from "react";
import { XCircle, CheckCircle2, DollarSign, Calculator, ArrowRight, ShieldAlert } from "lucide-react";

export function TheFriction() {
  const [revenue, setRevenue] = useState<number>(25); // In Millions

  // Estimated miscommunication & friction cost is roughly 2.5% - 4.5% of annual revenue
  const lostMargin = Math.round(revenue * 1000000 * 0.032);
  const potentialSavings = Math.round(lostMargin * 0.7);

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
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left: Reality & Financial Impact */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
              <ShieldAlert className="size-3.5" />
              <span>Where Margin Actually Bleeds</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The expensive problems are often conversations nobody had.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              In commercial and heavy construction, leadership and communication breakdowns are not just 'soft skills'—they are immediate bottom-line financial risks. They lead to rework, schedule delays, missed change orders, and burned-out talent.
            </p>

            {/* Side-by-Side Comparison Box */}
            <div className="rounded-2xl border border-white/15 bg-white/5 overflow-hidden backdrop-blur mt-8 shadow-2xl">
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {/* Left: The Default Jobsite Reality */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
                    <XCircle className="size-4" />
                    <span>The Unmanaged Jobsite</span>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {comparison.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="size-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span>{item.problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: The Constructive Leadership Standard */}
                <div className="p-6 space-y-4 bg-white/[0.03]">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    <span>The Dan Beatty Standard</span>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-200">
                    {comparison.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-[#B64F43] shrink-0 mt-0.5" />
                        <span>{item.solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Construction Margin Loss Calculator */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-[#B64F43]/40 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#B64F43] text-white">
                <Calculator className="size-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Jobsite Margin Risk Calculator
                </h3>
                <p className="text-xs text-slate-300">
                  Estimate annual profit lost to miscommunication & rework
                </p>
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>Annual Construction Volume:</span>
                <span className="text-base font-extrabold text-[#B64F43]">
                  ${revenue} Million / Year
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={150}
                step={5}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#B64F43]"
              />
              <div className="flex justify-between text-[0.68rem] text-slate-400">
                <span>$5M</span>
                <span>$75M</span>
                <span>$150M+</span>
              </div>
            </div>

            {/* Calculation Output Cards */}
            <div className="space-y-3">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-rose-300">
                  Estimated Margin at Risk Annually:
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-rose-400 mt-1">
                  ~${(lostMargin / 1000).toFixed(0)}k <span className="text-xs font-sans text-rose-300 font-normal">in scope gaps, rework & delays</span>
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-emerald-300">
                  Potential Margin Protected with Leadership Training:
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                  +${(potentialSavings / 1000).toFixed(0)}k <span className="text-xs font-sans text-emerald-300 font-normal">retained profit per year</span>
                </p>
              </div>
            </div>

            <p className="text-[0.72rem] text-slate-400 leading-normal italic">
              *Based on industry benchmark averages of 3.2% avoidable margin slippage caused by field-office miscommunication and unmanaged subcontractor conflict.
            </p>

            <a
              href="#training-programs"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all text-center"
            >
              <span>See How Dan Protects Your Margin</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
