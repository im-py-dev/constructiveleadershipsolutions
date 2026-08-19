"use client";

import { Star, Award, Building, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Dan's session on 'From Strong Builder to Leader of People' was the highest-rated breakout at our annual convention. Our contractors loved that he speaks real jobsite language instead of corporate buzzwords.",
      author: "AGC Chapter Executive Director",
      role: "Construction Association Partner",
      tag: "Association Keynote",
    },
    {
      quote:
        "We put 14 of our Project Managers and Superintendents through Dan's development program. The immediate difference in field-office communication and subcontractor accountability was night and day. He paid for himself on the first job.",
      author: "Vice President of Operations",
      role: "ENR Top 400 General Contractor",
      tag: "Contractor Training",
    },
    {
      quote:
        "Estimating with Impact changed the way our pre-con team reviews bids. Dan helped us identify indirect cost vulnerabilities that were eating 3-4% of our margin. Essential training for every estimator.",
      author: "Chief Estimator & Partner",
      role: "Heavy Highway & Infrastructure Firm",
      tag: "Estimating & Margin",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64F43]">
            Proven Track Record
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D]">
            What Association Leaders & Contractors Say.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real outcomes from construction executives, conference organizers, and field teams who have worked with Dan Beatty.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#B64F43]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#0C263D] bg-white border border-slate-200 px-2.5 py-0.5 rounded">
                    {t.tag}
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
