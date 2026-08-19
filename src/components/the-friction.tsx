"use client";

import { AlertTriangle, TrendingDown, DollarSign, Users, MessageSquareOff, RefreshCw } from "lucide-react";

export function TheFriction() {
  const frictionPoints = [
    {
      icon: MessageSquareOff,
      title: "Conversations Nobody Had",
      stat: "70% of Field Friction",
      text: "Superintendents who stay silent when a sub falls behind, or PMs who fail to clarify scope with the owner until billing day.",
    },
    {
      icon: RefreshCw,
      title: "Costly Jobsite Rework",
      stat: "$$$ Lost to Miscommunication",
      text: "Work installed incorrectly because instructions weren't verified, resulting in wasted labor hours and schedule penalties.",
    },
    {
      icon: Users,
      title: "Burnout & Turnover of Top PMs",
      stat: "Tribal Knowledge Drain",
      text: "Promoted craftspeople burning out under high stress because they were never given the leadership tools to manage teams.",
    },
    {
      icon: DollarSign,
      title: "Margin Erosion & Scope Creep",
      stat: "Bid Profit Slipping Away",
      text: "Uncollected change orders and overlooked indirect costs that silently eat away at project profitability.",
    },
  ];

  return (
    <section id="friction" className="bg-[#0C263D] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64F43]">
            Where Margin Actually Bleeds
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight">
            The expensive problems are often conversations nobody had.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            In construction, leadership and communication breakdowns are not just 'people issues'—they are financial risks. They lead to rework, schedule delays, lost margin, and strained relationships.
          </p>
        </div>

        {/* 4 Friction Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {frictionPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-[#B64F43] transition-colors"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#B64F43]/20 text-[#B64F43]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-white mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#B64F43]">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Realization Box */}
        <div className="mt-12 rounded-xl border border-white/15 bg-white/10 p-8 backdrop-blur flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif-heading text-xl font-bold text-white">
              Leadership training is insurance for your jobsite margins.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Dan bridges the gap between field technical knowledge and human leadership—giving your teams practical frameworks to communicate clearly, resolve conflict, and protect the bid.
            </p>
          </div>
          <a
            href="#contractors"
            className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0C263D] hover:bg-slate-100 transition-colors shrink-0"
          >
            <span>See How Dan Fixes This</span>
          </a>
        </div>
      </div>
    </section>
  );
}
