"use client";

import { useState } from "react";
import { Users2, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, BookOpen, Layers, Award, Target } from "lucide-react";

interface CohortProgramProps {
  onOpenCalendly: () => void;
  onOpenCohortApply: () => void;
}

export function CohortProgram({ onOpenCalendly, onOpenCohortApply }: CohortProgramProps) {
  const cohortHighlights = [
    {
      title: "8-Week Structured Curriculum",
      desc: "Weekly 75-minute live interactive masterclasses with Dan Beatty, focusing on commercial leadership, sub accountability, and margin protection.",
    },
    {
      title: "Multi-Contractor Peer Mastermind",
      desc: "Your PMs and Superintendents learn alongside high-performing peers from non-competing regional contractors, sharing field best practices.",
    },
    {
      title: "Real-World Field Assignments",
      desc: "Participants implement handover checklists, conflict de-escalation scripts, and daily huddle frameworks on their active jobsites every week.",
    },
    {
      title: "Executive Progress Dashboard",
      desc: "Operations VPs receive monthly benchmark updates on their team's participation, core skill growth, and actionable jobsite outcomes.",
    },
  ];

  const schedule = [
    { week: "Weeks 1-2", focus: "The Commercial Mindset: Understanding Job Margin, Overhead & Cash Flow" },
    { week: "Weeks 3-4", focus: "5 Voices Communication: Eliminating Friction Between Field & Office" },
    { week: "Weeks 5-6", focus: "Subcontractor Accountability & Preventing Change Order Disputes" },
    { week: "Weeks 7-8", focus: "Delegation Systems: Empowering Foremen to Hit Schedule Milestones" },
  ];

  return (
    <section id="cohort-program" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
            <Users2 className="size-3.5" />
            <span>Scalable Leadership Academy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D] tracking-tight">
            The Construction Leadership Cohort.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A scalable, 8-week multi-company leadership development program designed for rising Project Managers, Superintendents, and Operations Leads.
          </p>
        </div>

        {/* 2-Column Overview Card */}
        <div className="mt-14 rounded-2xl border-2 border-slate-200 bg-slate-50/60 p-8 sm:p-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: 4 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#B64F43]">
                  Next Cohort Enrolling Now
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C263D] mt-1">
                  How the 8-Week Cohort Works
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Instead of pulling your team away for an entire week, participants attend weekly live interactive sessions with Dan and apply new leadership tools directly on their projects.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {cohortHighlights.map((h) => (
                  <div key={h.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-wider text-[#0C263D] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#B64F43] shrink-0" />
                      <span>{h.title}</span>
                    </p>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenCohortApply}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow text-center"
                >
                  <Sparkles className="size-4" />
                  <span>Apply for Next Cohort Seats</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:bg-slate-50 transition-all text-center"
                >
                  <span>Enroll Multiple PMs / Custom Cohort</span>
                </button>
              </div>
            </div>

            {/* Right: Cohort Schedule Timeline */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#0C263D] text-white p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    8-Week Roadmap
                  </h4>
                  <p className="text-xs text-slate-300">Live Weekly Cohort Cadence</p>
                </div>
                <Award className="size-5 text-[#B64F43]" />
              </div>

              <div className="space-y-3.5">
                {schedule.map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-white/5 border border-white/10 p-3.5">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                      {item.week}
                    </span>
                    <p className="text-xs font-bold text-white mt-0.5 leading-snug">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-white/10 p-3 text-center">
                <p className="text-xs font-bold text-slate-200">
                  Limited to 25 leaders per cohort to ensure direct coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
