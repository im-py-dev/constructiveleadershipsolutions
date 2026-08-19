"use client";

import Image from "next/image";
import { CheckCircle2, Award, ShieldCheck, Briefcase, Users, FileCheck, Phone, Calendar, ArrowRight } from "lucide-react";

interface AboutDanProps {
  onOpenCalendly: () => void;
}

export function AboutDan({ onOpenCalendly }: AboutDanProps) {
  const credentials = [
    {
      title: "Construction Since 1984",
      detail: "40+ years of boots-on-the-ground experience in estimating, project management, field operations, and executive leadership.",
    },
    {
      title: "Approved AGC Edge Instructor",
      detail: "Trusted by the Associated General Contractors of America to train project managers and estimators nationwide.",
    },
    {
      title: "Certified 5 Voices Facilitator",
      detail: "Accredited through GiANT Worldwide to decode team dynamics, communication friction, and jobsite personalities.",
    },
    {
      title: "Certified Values Identifier Coach",
      detail: "Guiding executive teams to establish operational values that drive real accountability on commercial jobsites.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Story & Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#B64F43]">
              <span>In The Trenches Credibility</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D] leading-tight">
              He has priced the job, run the job, and answered for the job.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Dan Beatty is not a generic corporate consultant who read a textbook on leadership. He started in the construction trenches in 1984, working his way up through estimating, project management, and executive operations.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              He understands the reality of 6:00 AM jobsite tailgates, concrete pours under weather pressure, subcontractor disputes, and the constant friction between field production and office accounting.
            </p>

            {/* 4 Credentials Grid */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {credentials.map((cred) => (
                <div key={cred.title} className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 hover:border-[#B64F43]/40 transition-colors">
                  <p className="font-bold text-xs uppercase tracking-wider text-[#0C263D] flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#B64F43] shrink-0" />
                    <span>{cred.title}</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0C263D] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all text-center"
              >
                <Calendar className="size-4 text-[#B64F43]" />
                <span>Connect Directly with Dan</span>
              </button>

              <a
                href="tel:7033807923"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-all text-center"
              >
                <Phone className="size-4 text-[#B64F43]" />
                <span>Call (703) 380-7923</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quote & Circular Headshot Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl border border-slate-200 bg-[#0C263D] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-[#B64F43]/20 blur-3xl" />
              
              <div className="size-12 rounded-full bg-[#B64F43] flex items-center justify-center text-white font-serif font-black text-2xl mb-6 shadow-lg">
                "
              </div>
              
              <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-slate-100">
                “Construction leadership isn't about giving orders from an air-conditioned trailer. It's about building trust so that when unexpected problems arise, your team runs toward solutions instead of pointing fingers.”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                {/* Clean Circular Headshot */}
                <div className="relative size-16 rounded-full overflow-hidden border-2 border-[#B64F43] shrink-0 bg-white shadow-md">
                  <Image
                    src="/dan-headshot.png"
                    alt="Dan Beatty Headshot"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-base text-white">Daniel "Dan" Beatty</p>
                  <p className="text-xs text-[#B64F43] font-bold">Founder, Constructive Leadership Solutions</p>
                  <p className="text-[0.72rem] text-slate-400 mt-0.5">Approved AGC Edge Instructor · 5 Voices Facilitator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
