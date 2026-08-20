"use client";

import Image from "next/image";
import { CheckCircle2, Award, ShieldCheck, Briefcase, GraduationCap, Building2, Phone, Calendar, BookOpen, ExternalLink } from "lucide-react";

interface AboutDanProps {
  onOpenCalendly: () => void;
}

export function AboutDan({ onOpenCalendly }: AboutDanProps) {
  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  const credentials = [
    {
      title: "35+ Years in Heavy Civil & Commercial",
      detail: "Senior Director of Estimating & Project Management across Bechtel, Alberici, Flatiron, Judlau, Lane Construction, and Shirley Contracting.",
    },
    {
      title: "B.S. Civil Engineering (UMD) & EIT",
      detail: "Civil Engineering graduate from University of Maryland (ASCE) and certified Engineer In Training (EIT #8075).",
    },
    {
      title: "Approved AGC Edge National Instructor",
      detail: "Delivering AGC of America's flagship curriculum: PMDP (Project Manager Development), STP (Supervisory Training), and CSF.",
    },
    {
      title: "Certified 5 Voices & Values Identifier",
      detail: "Accredited GiANT 5 Voices Facilitator and Certified Values Identifier Coach behind 'The Three Layers' leadership framework.",
    },
  ];

  const pastFirms = [
    "Bechtel Civil", "Alberici Constructors", "Flatiron Construction", "The Lane Construction Corp", "Shirley Contracting", "Judlau Contracting"
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Story & Deep Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#B64F43]">
              <span>Boots-on-the-Ground Authority Since 1984</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D] leading-tight">
              From sand-cone density tests to billion-dollar estimates.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Dan Beatty's first construction paycheck arrived in 1984 as a geotechnical technician running sand-cone density tests on subgrades in whatever weather showed up. Over the next 35+ years in heavy civil and infrastructure, he worked his way from estimating into project management and senior executive leadership at firms like <strong>Bechtel</strong>, <strong>Alberici</strong>, and <strong>Flatiron</strong>.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              <em>"In four decades, I can count on one hand the jobs that went bad because someone couldn't read a set of plans. What actually cost us money was almost always a conversation that never happened, or one that happened badly."</em>
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

            {/* Past Enterprise Experience Logos/Pills */}
            <div className="pt-2">
              <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Executive & Field Experience At Leading Contractors:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                {pastFirms.map((firm) => (
                  <span key={firm} className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1">
                    {firm}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0C263D] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all text-center cursor-pointer"
              >
                <Calendar className="size-4 text-[#B64F43]" />
                <span>Connect Directly with Dan</span>
              </button>

              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-all text-center"
              >
                <Award className="size-4 text-[#B64F43]" />
                <span>Verify AGC Instructor Profile ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quote, Headshot & Framework */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <div className="w-full rounded-2xl border border-slate-200 bg-[#0C263D] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-[#B64F43]/20 blur-3xl" />
              
              <div className="size-12 rounded-full bg-[#B64F43] flex items-center justify-center text-white font-serif font-black text-2xl mb-6 shadow-lg">
                "
              </div>
              
              <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-slate-100">
                “Most companies train people on the technical numbers OR the soft skills, and wonder why the other half keeps costing them. I teach both in the same room, in language the field and office both use.”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
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
                  <p className="text-[0.72rem] text-slate-400 mt-0.5">Author of Upcoming Book: <em>Middle of the Arena</em></p>
                </div>
              </div>
            </div>

            {/* The Three Layers Framework Callout Card */}
            <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-[#B64F43]" />
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0C263D]">
                  The "Three Layers" Leadership Framework
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dan's proprietary system looking at: <strong>1)</strong> How a person is wired (Big Five), <strong>2)</strong> How that wiring sounds to others (GiANT 5 Voices), and <strong>3)</strong> What motivates them underneath (Values Identifier).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
