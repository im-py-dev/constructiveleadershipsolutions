"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Mic, HardHat, ShieldCheck, Award, Calculator, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
  onOpenDiagnostic: () => void;
}

export function Hero({ onOpenCalendly, onOpenSpeakerKit, onOpenDiagnostic }: HeroProps) {
  const [selectedPersona, setSelectedPersona] = useState<"associations" | "contractors" | "estimating">("associations");

  const personaDetails = {
    associations: {
      tag: "For AGC Chapters, Associations & Event Planners",
      subtext: "High-impact keynotes and interactive convention breakouts tailored to construction leaders, superintendents, and project managers. Committee-approved one-sheets & live footage ready.",
      ctaPrimary: "Explore Keynote Topics & Reel",
      ctaPrimaryHref: "#associations",
      ctaSecondary: "Download Speaker Kit",
      ctaSecondaryAction: onOpenSpeakerKit,
    },
    contractors: {
      tag: "For Contractors, Owners & Operations Executives",
      subtext: "Turn master craftspeople into respected field superintendents and empower PMs to own jobsite profitability, hold subs accountable, and protect bid margins.",
      ctaPrimary: "View Contractor Programs",
      ctaPrimaryHref: "#contractors",
      ctaSecondary: "Take Free Field Diagnostic",
      ctaSecondaryAction: onOpenDiagnostic,
    },
    estimating: {
      tag: "For Chief Estimators & Pre-Construction Teams",
      subtext: "Audit hidden indirect costs, eliminate bid contingency blind spots, and bridge the handover gap between estimating assumptions and field execution.",
      ctaPrimary: "Explore Estimating with Impact",
      ctaPrimaryHref: "#training-programs",
      ctaSecondary: "Discuss Team Workshop",
      ctaSecondaryAction: onOpenCalendly,
    },
  };

  const current = personaDetails[selectedPersona];

  return (
    <section id="overview" className="relative overflow-hidden bg-blueprint-dark text-white pt-10 sm:pt-14 lg:pt-16 pb-0 border-b border-slate-800">
      <div className="pointer-events-none absolute -top-40 right-10 size-[700px] rounded-full bg-[#B64F43]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 size-[550px] rounded-full bg-[#31485A]/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-[#B64F43] animate-ping" />
            <span className="text-[0.7rem] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-300">
              Select Your Focus:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSelectedPersona("associations")}
              className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (selectedPersona === "associations" ? "bg-[#B64F43] text-white shadow-lg ring-2 ring-[#B64F43]/40" : "bg-white/10 text-slate-300 hover:bg-white/15")}
            >
              🏛️ Associations & Event Planners
            </button>
            <button
              type="button"
              onClick={() => setSelectedPersona("contractors")}
              className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (selectedPersona === "contractors" ? "bg-[#B64F43] text-white shadow-lg ring-2 ring-[#B64F43]/40" : "bg-white/10 text-slate-300 hover:bg-white/15")}
            >
              🏗️ Contractors & Operations VPs
            </button>
            <button
              type="button"
              onClick={() => setSelectedPersona("estimating")}
              className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (selectedPersona === "estimating" ? "bg-[#B64F43] text-white shadow-lg ring-2 ring-[#B64F43]/40" : "bg-white/10 text-slate-300 hover:bg-white/15")}
            >
              📐 Estimating & Pre-Con
            </button>
          </div>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 pb-12 sm:pb-16 lg:pb-24 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#B64F43] backdrop-blur">
              <Sparkles className="size-3.5" />
              <span>{current.tag}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Build the number. <br />
              <span className="text-slate-200">
                Lead the people who have to hit it.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {current.subtext}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">SINCE 1984</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">40+ Yrs in Construction</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">AGC EDGE</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Approved Instructor</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-xs sm:text-sm tracking-wide">5 VOICES</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Certified Facilitator</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">IN THE FIELD</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Priced & Run the Job</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href={current.ctaPrimaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[#9E3E33] transition-all text-center"
              >
                <span>{current.ctaPrimary}</span>
                <ArrowRight className="size-4" />
              </a>

              <button
                type="button"
                onClick={current.ctaSecondaryAction}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur text-center"
              >
                <span>{current.ctaSecondary}</span>
              </button>

              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-1 px-3 py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
              >
                <span>Talk with Dan</span>
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

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

            <div className="absolute top-8 left-2 sm:left-0 z-20 rounded-xl border border-white/20 bg-[#0C263D]/90 p-3 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#B64F43] text-white">
                <Award className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Approved AGC Edge Instructor</p>
                <p className="text-[0.68rem] text-slate-300">National Construction Authority</p>
              </div>
            </div>

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

      <div className="border-t border-white/10 bg-[#081B2C] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
              Trusted by Leading Construction Associations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-300">
              <span className="rounded bg-white/5 px-3 py-1.5 border border-white/10">Associated General Contractors of America (AGC)</span>
              <span className="rounded bg-white/5 px-3 py-1.5 border border-white/10">AGC Edge</span>
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
