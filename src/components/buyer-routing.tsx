"use client";

import { ArrowRight, Award, Users, Mic, HardHat, FileText, CheckCircle } from "lucide-react";

interface BuyerRoutingProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function BuyerRouting({ onOpenCalendly, onOpenSpeakerKit }: BuyerRoutingProps) {
  return (
    <section className="bg-blueprint-grid py-16 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64F43]">
            Start with your objective
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D]">
            What do you need the people in the room to do differently?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Choose the path that matches your role. Every engagement is built on 40+ years of construction experience, custom tailored to your exact industry challenges.
          </p>
        </div>

        {/* 2 Buyer Path Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Buyer #1: Associations & Event Planners */}
          <div
            id="associations"
            className="group relative rounded-xl border-2 border-slate-200 bg-white p-8 shadow-sm hover:border-[#0C263D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#0C263D] text-[#B64F43]">
                  <Mic className="size-6 text-white" />
                </div>
                <span className="rounded bg-slate-100 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#0C263D]">
                  For Associations & Events
                </span>
              </div>

              <h3 className="mt-6 font-serif-heading text-2xl sm:text-3xl font-bold text-[#0C263D]">
                Book a Construction Speaker
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Keynote addresses, convention breakouts, and interactive workshops designed for AGC chapters, construction associations, and annual conferences. Give your members practical, field-tested insights they can apply on Monday morning.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                  <span><strong>The Influence Model</strong>: Authority Isn't Influence</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                  <span><strong>From Strong Builder to Leader of People</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                  <span><strong>Load-Bearing Values</strong>: Culture on the Jobsite</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                  <span>Pre-approved speaker one-sheets & committee package</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="#speaker-reel"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#0C263D] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#183F63] transition-all text-center"
              >
                <span>View Speaker Reel & Topics</span>
                <ArrowRight className="size-3.5" />
              </a>
              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-all text-center"
              >
                <FileText className="size-3.5 text-[#B64F43]" />
                <span>Download Speaker Kit</span>
              </button>
            </div>
          </div>

          {/* Buyer #2: Contractors & Field Operations */}
          <div
            id="contractors"
            className="group relative rounded-xl border-2 border-slate-200 bg-white p-8 shadow-sm hover:border-[#B64F43] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#B64F43] text-white">
                  <HardHat className="size-6" />
                </div>
                <span className="rounded bg-[#B64F43]/10 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                  For Contractors & Owners
                </span>
              </div>

              <h3 className="mt-6 font-serif-heading text-2xl sm:text-3xl font-bold text-[#0C263D]">
                Develop the Leaders Doing the Work
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Multi-session contractor development programs built to elevate Project Managers, Superintendents, Foremen, and Estimators from tactical operators into confident leaders who communicate clearly, prevent rework, and protect job margin.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0C263D] shrink-0" />
                  <span><strong>Project Manager Development Program</strong> (Multi-Session)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0C263D] shrink-0" />
                  <span><strong>Estimating with Impact</strong>: Margin & Contingency Control</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0C263D] shrink-0" />
                  <span><strong>5 Voices Team Communication</strong>: Eliminate Field/Office Friction</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="size-4 text-[#0C263D] shrink-0" />
                  <span>Custom cohort leadership training & 1:1 executive coaching</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="#training-programs"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#B64F43] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all text-center"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="size-3.5" />
              </a>
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-all text-center"
              >
                <span>Discuss Your Team's Gap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
