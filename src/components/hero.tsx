"use client";

import Image from "next/image";
import { ArrowRight, Mic, HardHat } from "lucide-react";

interface HeroProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Hero({ onOpenCalendly, onOpenSpeakerKit }: HeroProps) {
  return (
    <section id="overview" className="relative overflow-hidden bg-blueprint-dark text-white pt-12 pb-18 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute -top-40 right-0 size-[700px] rounded-full bg-[#B64F43]/18 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[600px] rounded-full bg-[#31485A]/35 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#B64F43] animate-ping" />
              <span>Construction Leadership & Field Mastery</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Build the number. <br />
              <span className="text-slate-200">
                Lead the people who have to hit it.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Dan Beatty bridges the critical gap between jobsite numbers and field leadership—helping AGC chapters, construction associations, and contractors turn high-stress projects into high-performing, profitable teams.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3.5 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-sm tracking-wide">SINCE 1984</p>
                <p className="text-slate-300 text-xs font-medium mt-0.5">40+ Yrs in Construction</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3.5 backdrop-blur">
                <p className="font-extrabold text-white text-sm tracking-wide">AGC EDGE</p>
                <p className="text-slate-300 text-xs font-medium mt-0.5">Approved Instructor</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3.5 backdrop-blur">
                <p className="font-extrabold text-[#B64F43] text-sm tracking-wide">5 VOICES</p>
                <p className="text-slate-300 text-xs font-medium mt-0.5">Certified Facilitator</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3.5 backdrop-blur">
                <p className="font-extrabold text-white text-sm tracking-wide">IN THE FIELD</p>
                <p className="text-slate-300 text-xs font-medium mt-0.5">Priced & Run the Job</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href="#associations"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[#9E3E33] transition-all text-center"
              >
                <Mic className="size-4" />
                <span>Book a Keynote Speaker</span>
                <ArrowRight className="size-4 ml-1" />
              </a>

              <a
                href="#contractors"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur text-center"
              >
                <HardHat className="size-4 text-[#B64F43]" />
                <span>Develop Your Field Leaders</span>
              </a>

              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
              >
                <span>Talk with Dan</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[390px] sm:max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/15 via-white/5 to-black/60 shadow-2xl">
              <Image
                src="https://constructiveleadershipsolutions.com/wp-content/uploads/2026/08/01-Dan-Beatty_Standing.png"
                alt="Daniel Dan Beatty"
                fill
                priority
                className="object-contain object-bottom scale-105"
              />
              
              <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/25 bg-[#0C263D]/95 p-4 backdrop-blur-md shadow-2xl">
                <p className="text-xs font-serif italic text-slate-100 leading-snug">
                  "I teach contractors the two things that decide whether a job makes money: how to build the number, and how to lead the people who have to hit it."
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                    — Dan Beatty
                  </p>
                  <span className="text-[0.65rem] text-slate-300 font-semibold">AGC Edge Instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-6">
            Trusted by Leading Construction Associations & Industry Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
            <span className="rounded bg-white/10 px-4 py-2 border border-white/10">Associated General Contractors of America (AGC)</span>
            <span className="rounded bg-white/10 px-4 py-2 border border-white/10">AGC Edge Educational Programs</span>
            <span className="rounded bg-white/10 px-4 py-2 border border-white/10">Carolinas AGC</span>
            <span className="rounded bg-white/10 px-4 py-2 border border-white/10">Virginia Transportation Construction Alliance</span>
            <span className="rounded bg-white/10 px-4 py-2 border border-white/10">GiANT 5 Voices Global Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
