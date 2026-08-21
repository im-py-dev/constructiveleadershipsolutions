"use client";

import Image from "next/image";
import { ArrowRight, Award, Sparkles, ExternalLink, Calendar, Download } from "lucide-react";

interface HeroProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
  onOpenDiagnostic: () => void;
}

export function Hero({ onOpenCalendly, onOpenSpeakerKit, onOpenDiagnostic }: HeroProps) {
  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  return (
    <section id="overview" className="relative overflow-hidden bg-blueprint-dark text-white pt-4 sm:pt-6 lg:pt-8 pb-0 border-b border-slate-800">
      {/* Ambient Radial Spotlight Glows */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[900px] rounded-full bg-[#B64F43]/20 blur-[180px]" />
      <div className="pointer-events-none absolute top-1/4 left-0 size-[750px] rounded-full bg-[#31485A]/40 blur-[160px]" />

      {/* Technical Blueprint Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)]" />

      {/* Main Expansive Container */}
      <div className="relative mx-auto max-w-[1720px] px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-start lg:items-end gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Starts at the top with NO empty space above headline */}
          <div className="lg:col-span-7 xl:col-span-7 self-start lg:self-center pt-2 sm:pt-4 lg:pt-6 pb-6 sm:pb-8 lg:pb-12 space-y-4 sm:space-y-6 z-20">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#B64F43] backdrop-blur shadow-sm">
              <Sparkles className="size-3 sm:size-3.5" />
              <span>Construction Keynotes & Leadership</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] 2xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              Build the number. <br />
              <span className="text-slate-200">
                Lead the people who have to hit it.
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed font-normal">
              Field-tested keynote speaking for AGC chapters and construction conventions, and multi-session leadership programs that transform technical project managers and superintendents into commercially minded, decisive leaders.
            </p>

            {/* Authority Trust Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1 max-w-2xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3.5 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">SINCE 1984</p>
                <p className="text-slate-300 text-[0.68rem] sm:text-[0.72rem] mt-0.5">40+ Yrs in Heavy Civil</p>
              </div>
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 p-2.5 sm:p-3.5 backdrop-blur hover:border-[#B64F43] hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">AGC EDGE</p>
                  <ExternalLink className="size-3 text-slate-400 group-hover:text-[#B64F43]" />
                </div>
                <p className="text-slate-300 text-[0.68rem] sm:text-[0.72rem] mt-0.5 group-hover:text-white">Approved Instructor ↗</p>
              </a>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3.5 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">5 VOICES</p>
                <p className="text-slate-300 text-[0.68rem] sm:text-[0.72rem] mt-0.5">Certified Facilitator</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3.5 backdrop-blur">
                <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">IN THE FIELD</p>
                <p className="text-slate-300 text-[0.68rem] sm:text-[0.72rem] mt-0.5">Priced & Run the Job</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-2xl">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B64F43] px-5 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[#9E3E33] transition-all text-center cursor-pointer"
              >
                <Calendar className="size-4" />
                <span>Start a Conversation</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#choose-objective"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur text-center"
              >
                <span>Find Your Program ↓</span>
              </a>

              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Download className="size-3.5 sm:size-4 text-[#B64F43]" />
                <span>Speaker Kit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dan Cutout Anchored to Floor */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-end justify-center lg:justify-end self-end h-auto lg:h-full lg:min-h-[700px] xl:min-h-[780px] 2xl:min-h-[850px] overflow-visible">
            {/* Ambient Lighting Pod Behind Dan */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-full h-4/5 rounded-t-full bg-gradient-to-t from-[#B64F43]/30 via-[#31485A]/35 to-transparent blur-3xl" />

            {/* Floating AGC Accreditation Seal (Top-Right Framing on desktop) */}
            <a
              href={agcLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-0 sm:right-2 z-20 rounded-xl border border-white/20 bg-[#0C263D]/95 p-3 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3 hover:border-[#B64F43] transition-all group"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#B64F43] text-white shrink-0">
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

            {/* Dan Cutout Image */}
            <div className="relative z-10 flex items-end justify-center lg:justify-end w-full">
              <Image
                src="/dan-hero.png"
                alt="Daniel Dan Beatty - Construction Leadership Speaker & Trainer"
                width={850}
                height={1100}
                priority
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] -mb-px max-h-[420px] sm:max-h-[580px] lg:max-h-[820px] xl:max-h-[920px] 2xl:max-h-[1000px] scale-[1.15] sm:scale-125 lg:scale-[1.3] xl:scale-[1.35] origin-bottom lg:origin-bottom-right w-auto pointer-events-none"
              />
            </div>

            {/* Floating Quote Badge (Desktop only) */}
            <div className="absolute bottom-6 left-0 lg:-left-12 xl:-left-20 max-w-[290px] z-20 rounded-xl border border-white/20 bg-[#0C263D]/95 p-3.5 shadow-2xl backdrop-blur-md hidden md:block">
              <p className="text-[0.76rem] font-serif italic text-slate-100 leading-snug">
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
      <div className="border-t border-white/10 bg-[#081B2C] py-3 sm:py-4 relative z-20">
        <div className="mx-auto max-w-[1720px] px-3 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-4">
            <span className="text-[0.7rem] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400 shrink-0 text-center lg:text-left">
              Trusted by Leading Construction Associations:
            </span>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-[0.72rem] sm:text-xs font-bold text-slate-300">
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white/5 px-2 py-1 sm:px-2.5 border border-white/10 hover:border-[#B64F43] hover:text-white transition-colors inline-flex items-center gap-1 shrink-0 whitespace-nowrap"
              >
                <span>AGC of America</span>
                <ExternalLink className="size-3 text-slate-400" />
              </a>
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white/5 px-2 py-1 sm:px-2.5 border border-white/10 hover:border-[#B64F43] hover:text-white transition-colors inline-flex items-center gap-1 shrink-0 whitespace-nowrap"
              >
                <span>AGC Edge</span>
                <ExternalLink className="size-3 text-slate-400" />
              </a>
              <span className="rounded-md bg-white/5 px-2 py-1 sm:px-2.5 border border-white/10 shrink-0 whitespace-nowrap">
                Carolinas AGC
              </span>
              <span className="rounded-md bg-white/5 px-2 py-1 sm:px-2.5 border border-white/10 shrink-0 whitespace-nowrap">
                VTCA
              </span>
              <span className="rounded-md bg-white/5 px-2 py-1 sm:px-2.5 border border-white/10 shrink-0 whitespace-nowrap">
                GiANT 5 Voices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
