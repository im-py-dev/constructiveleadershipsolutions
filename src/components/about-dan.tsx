"use client";

import Image from "next/image";
import { CheckCircle2, Award, ShieldCheck, Briefcase, Users, FileCheck } from "lucide-react";

interface AboutDanProps {
  onOpenCalendly: () => void;
}

export function AboutDan({ onOpenCalendly }: AboutDanProps) {
  const credentials = [
    {
      title: "Construction Since 1984",
      detail: "Over 40 years of hands-on experience in estimating, project management, operations, and executive leadership.",
    },
    {
      title: "Approved AGC Edge Instructor",
      detail: "Trusted by the Associated General Contractors of America to train project managers and estimators nationwide.",
    },
    {
      title: "Certified 5 Voices Facilitator",
      detail: "Accredited through GiANT Worldwide to decode team dynamics, personality differences, and jobsite communication.",
    },
    {
      title: "Certified Values Identifier Coach",
      detail: "Guiding executive teams to establish operational values that drive real daily accountability.",
    },
  ];

  return (
    <section id="about" className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#B64F43]">
              <span>In The Trenches Credibility</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D] leading-tight">
              He has priced the job, run the job, and answered for the job.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Dan Beatty is not a generic corporate consultant who read a textbook on leadership. He started in the construction trenches in 1984, working his way up through estimating, project management, and executive operations.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              He understands the reality of 6:00 AM jobsite tailgates, concrete pours under weather pressure, subcontractor disputes, and the constant friction between field production and office accounting.
            </p>

            {/* 4 Credentials Grid */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {credentials.map((cred) => (
                <div key={cred.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-xs uppercase tracking-wider text-[#0C263D] flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-[#B64F43] shrink-0" />
                    <span>{cred.title}</span>
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 leading-normal">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center gap-2 rounded bg-[#0C263D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all"
              >
                <span>Connect Directly with Dan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quote & Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl border border-slate-200 bg-[#0C263D] text-white p-8 sm:p-10 shadow-2xl relative">
              <div className="size-10 rounded-full bg-[#B64F43] flex items-center justify-center text-white font-serif font-black text-xl mb-4">
                "
              </div>
              <blockquote className="font-serif-heading text-xl sm:text-2xl italic leading-relaxed text-slate-100">
                “Construction leadership isn't about giving orders from a trailer. It's about building trust so that when unexpected problems arise, your team runs toward solutions instead of pointing fingers.”
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="relative size-14 rounded-full overflow-hidden border-2 border-[#B64F43] shrink-0">
                  <Image
                    src="https://constructiveleadershipsolutions.com/wp-content/uploads/2026/08/01-Dan-Beatty_Standing.png"
                    alt="Dan Beatty"
                    fill
                    className="object-cover object-top scale-150"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Daniel "Dan" Beatty</p>
                  <p className="text-xs text-[#B64F43] font-semibold">Founder, Constructive Leadership Solutions</p>
                  <p className="text-[0.7rem] text-slate-400">AGC Edge Instructor · 5 Voices Facilitator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
