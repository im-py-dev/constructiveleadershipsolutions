"use client";

import Image from "next/image";
import { ArrowRight, Award, ChevronRight, Sparkles, ExternalLink, Calendar, Download } from "lucide-react";

interface HeroProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
  onOpenDiagnostic: () => void;
}

export function Hero({ onOpenCalendly, onOpenSpeakerKit, onOpenDiagnostic }: HeroProps) {
  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  return (
    <section id="overview" className="relative overflow-hidden bg-blueprint-dark text-white pt-12 sm:pt-16 lg:pt-20 pb-0 border-b border-slate-800">
      {/* Ambient Radial Spotlight Glows */}
      <div className="pointer-events-none absolute -top-40 right-10 size-[700px] rounded-full bg-[#B64F43]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 size-[550px] rounded-full bg-[#31485A]/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Core Positioning Copy & Dual Primary CTAs */}
          <div className="lg:col-span-7 pb-12 sm:pb-16 lg:pb-24 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#B64F43] backdrop-blur">
              <Sparkles className="size-3.5" />
              <span>Construction Keynotes & Leadership Development</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Build the number. <br />
              <span className="text-slate-200">
                Lead the people who have to hit it.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Field-tested keynote speaking for AGC chapters and construction conventions, and multi-session leadership programs that transform technical project managers and superintendents into commercially minded, decisive leaders.
            </p>

            {/* Authority Trust Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">SINCE 1984</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">40+ Yrs in Construction</p>
              </div>
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur hover:border-[#B64F43] hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">AGC EDGE</p>
                  <ExternalLink className="size-3 text-slate-400 group-hover:text-[#B64F43]" />
                </div>
                <p className="text-slate-300 text-[0.72rem] mt-0.5 group-hover:text-white">Approved Instructor ↗</p>
              </a>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">5 VOICES</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Certified Facilitator</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">IN THE FIELD</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Priced & Run the Job</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[#9E3E33] transition-all text-center cursor-pointer"
              >
                <Calendar className="size-4" />
                <span>Start a Conversation</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#choose-objective"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur text-center"
              >
                <span>Find Your Program Below ↓</span>
              </a>

              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
              >
                <Download className="size-4 text-[#B64F43]" />
                <span>Speaker Kit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dan Beatty Cutout (STICKING TO SECTION FLOOR) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end self-end h-full min-h-[500px] sm:min-h-[600px] lg:min-h-[720px]">
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-4/5 rounded-t-full bg-gradient-to-t from-[#B64F43]/25 via-[#31485A]/35 to-transparent blur-3xl" />

            <div className="relative z-10 flex items-end justify-center w-full">
              <Image
                src="/dan-hero.png"
                alt="Daniel Dan Beatty - Construction Leadership Speaker & Trainer"
                width={650}
                height={850}
                priority
                className="object-contain object-bottom drop-shadow-2xl -mb-px max-h-[540px] sm:max-h-[640px] lg:max-h-[750px] w-auto pointer-events-none"
              />
            </div>

            {/* Clickable Floating AGC Badge */}
            <a
              href={agcLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-8 left-2 sm:left-0 z-20 rounded-xl border border-white/20 bg-[#0C263D]/95 p-3 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3 hover:border-[#B64F43] transition-all group"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#B64F43] text-white">
                <Award className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold text-white leading-tight">Approved AGC Edge Instructor</p>
                  <ExternalLink className="size-3 text-slate-400 group-hover:text-[#B64F43]" />
                </div>
                <p className="text-[0.68rem] text-slate-300">National Construction Authority</p>
              </div>
            </a>

            {/* Floating Quote Badge */}
            <div className="absolute bottom-6 -left-6 sm:left-0 max-w-xs z-20 rounded-xl border border-white/25 bg-[#0C263D]/95 p-3.5 shadow-2xl backdrop-blur-md hidden md:block">
              <p className="text-[0.78rem] font-serif italic text-slate-100 leading-snug">
                "I teach contractors how to build the number, and how to lead the people who have to hit it."
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-1.5">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                  — Dan Beatty
                </p>
                <span className="text-[0.65rem] text-slate-300 font-semibold">Since 1984</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Association Credibility Bar */}
      <div className="border-t border-white/10 bg-[#081B2C] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
              Trusted by Leading Construction Associations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-300">
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white/5 px-3 py-1.5 border border-white/10 hover:border-[#B64F43] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Associated General Contractors of America (AGC)</span>
                <ExternalLink className="size-3 text-slate-400" />
              </a>
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white/5 px-3 py-1.5 border border-white/10 hover:border-[#B64F43] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>AGC Edge</span>
                <ExternalLink className="size-3 text-slate-400" />
              </a>
              <span className="rounded bg-white/5 px-3 py-1.5 border border-white/10">Carolinas AGC</span>
              <span className="rounded bg-white/5 px-3 py-1.5 border border-white/10">VTCA</span>
              <span className="rounded bg-white/5 px-3 py-1.5 border border-white/10">GiANT 5 Voices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
