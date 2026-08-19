"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Award, Play } from "lucide-react";

interface HeroProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Hero({ onOpenCalendly, onOpenSpeakerKit }: HeroProps) {
  return (
    <section id="overview" className="relative overflow-hidden bg-blueprint-dark text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative radial lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-[#B64F43]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[500px] rounded-full bg-[#31485A]/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#B64F43]">
              <span className="size-2 rounded-full bg-[#B64F43] animate-ping" />
              <span>Construction Leadership & Field Mastery</span>
            </div>

            {/* Core Punchy Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Build the number. <br />
              <span className="text-[#E2E8F0]">
                Lead the people who have to hit it.
              </span>
            </h1>

            {/* Subheadline grounded in Dan's exact positioning */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Dan Beatty helps construction associations and contractors turn high-stress jobsites into high-performing teams through practical keynote speaking, project manager development, and executive leadership advisory.
            </p>

            {/* Authority Trust Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="rounded border border-white/10 bg-white/5 p-3">
                <p className="font-extrabold text-[#B64F43] text-sm">SINCE 1984</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">40+ Yrs Construction</p>
              </div>
              <div className="rounded border border-white/10 bg-white/5 p-3">
                <p className="font-extrabold text-white text-sm">AGC EDGE</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Approved Instructor</p>
              </div>
              <div className="rounded border border-white/10 bg-white/5 p-3">
                <p className="font-extrabold text-[#B64F43] text-sm">5 VOICES</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Certified Facilitator</p>
              </div>
              <div className="rounded border border-white/10 bg-white/5 p-3">
                <p className="font-extrabold text-white text-sm">IN THE FIELD</p>
                <p className="text-slate-300 text-[0.72rem] mt-0.5">Priced & Run the Job</p>
              </div>
            </div>

            {/* Dual Buyer Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href="#associations"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#B64F43] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#9E3E33] transition-all"
              >
                <span>Book a Construction Speaker</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#contractors"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur"
              >
                <span>Develop Your Field Leaders</span>
              </a>

              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded border border-transparent px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Talk with Dan</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Dan's Real Cutout Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-black/50 shadow-2xl">
              <Image
                src="https://constructiveleadershipsolutions.com/wp-content/uploads/2026/08/01-Dan-Beatty_Standing.png"
                alt="Daniel Dan Beatty - Construction Leadership Speaker & Trainer"
                fill
                priority
                className="object-contain object-bottom scale-105"
              />
              
              {/* Floating Quote Badge */}
              <div className="absolute bottom-4 inset-x-4 rounded-lg border border-white/20 bg-[#0C263D]/90 p-3.5 backdrop-blur-md shadow-xl">
                <p className="text-xs italic text-slate-200 leading-snug">
                  "I teach contractors the two things that decide whether a job makes money: how to build the number, and how to lead the people who have to hit it."
                </p>
                <p className="mt-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#B64F43]">
                  — Dan Beatty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
