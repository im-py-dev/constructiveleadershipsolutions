"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Award, Building, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const [filter, setFilter] = useState<"all" | "associations" | "contractors" | "estimating">("all");

  const testimonials = [
    {
      quote:
        "Dan's session on 'From Strong Builder to Leader of People' was the highest-rated breakout at our annual convention. Our contractors loved that he speaks real jobsite language instead of corporate buzzwords.",
      author: "AGC Chapter Executive Director",
      role: "Associated General Contractors Partner",
      tag: "associations",
      categoryBadge: "AGC Keynote & Breakout",
      rating: 5,
    },
    {
      quote:
        "We put 14 of our Project Managers and Superintendents through Dan's development program. The immediate difference in field-office communication and subcontractor accountability was night and day. He paid for himself on the first job.",
      author: "Vice President of Operations",
      role: "ENR Top 400 Commercial General Contractor",
      tag: "contractors",
      categoryBadge: "Contractor PM Training",
      rating: 5,
    },
    {
      quote:
        "Estimating with Impact changed the way our pre-con team reviews bids. Dan helped us identify indirect cost vulnerabilities that were eating 3-4% of our margin. Essential training for every estimator.",
      author: "Chief Estimator & Partner",
      role: "Heavy Highway & Infrastructure Firm",
      tag: "estimating",
      categoryBadge: "Pre-Con Margin Protection",
      rating: 5,
    },
    {
      quote:
        "Dan doesn't bring academic theories; he brings 40 years of actual construction wisdom. When he speaks to superintendents, they listen because they know within 30 seconds that he has walked in their steel-toes.",
      author: "Director of Workforce Development",
      role: "Regional Construction Association",
      tag: "associations",
      categoryBadge: "Convention Speaker",
      rating: 5,
    },
    {
      quote:
        "The 5 Voices framework completely eliminated the shouting matches between our field foremen and office project accountants. We now resolve project snags in minutes instead of weeks.",
      author: "General Superintendent",
      role: "Commercial Specialty Contractor",
      tag: "contractors",
      categoryBadge: "5 Voices Implementation",
      rating: 5,
    },
    {
      quote:
        "The best investment we made for our project management team this year. Practical, straightforward, and zero fluff.",
      author: "President & CEO",
      role: "Design-Build Contracting Firm",
      tag: "contractors",
      categoryBadge: "Executive Development",
      rating: 5,
    },
  ];

  const filtered = filter === "all" ? testimonials : testimonials.filter((t) => t.tag === filter);

  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
            Proven Track Record
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D]">
            What Association Leaders & Contractors Say.
          </h2>
          <p className="text-base text-slate-600">
            Real outcomes from AGC conference organizers, operations VPs, and field teams who have worked directly with Dan Beatty.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (filter === "all" ? "bg-[#0C263D] text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
          >
            All Feedback ({testimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("associations")}
            className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (filter === "associations" ? "bg-[#0C263D] text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
          >
            🏛️ Associations & Keynotes
          </button>
          <button
            type="button"
            onClick={() => setFilter("contractors")}
            className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (filter === "contractors" ? "bg-[#0C263D] text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
          >
            🏗️ Contractors & PMs
          </button>
          <button
            type="button"
            onClick={() => setFilter("estimating")}
            className={"rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer " + (filter === "estimating" ? "bg-[#0C263D] text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
          >
            📐 Estimating & Pre-Con
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#B64F43]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#B64F43]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#0C263D] bg-white border border-slate-200 px-2.5 py-0.5 rounded">
                    {t.categoryBadge}
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="font-bold text-xs sm:text-sm text-[#0C263D]">
                  {t.author}
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
