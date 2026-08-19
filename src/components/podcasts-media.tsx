"use client";

import Image from "next/image";
import { Mic, Play, Radio, ExternalLink, Sparkles, Volume2, ArrowRight } from "lucide-react";

interface PodcastsMediaProps {
  onOpenCalendly: () => void;
}

export function PodcastsMedia({ onOpenCalendly }: PodcastsMediaProps) {
  const episodes = [
    {
      show: "The Construction Leading Edge",
      episode: "Ep. 312 · The Invisible Margin Bleed",
      title: "Why Miscommunication Between Field & Office Eats 3% of Job Profit",
      quote: "When an estimator's assumptions aren't thoroughly handed over to the superintendent, that is where change order fights are born.",
      tag: "Field & Office Alignment",
      duration: "42 min",
      link: "https://www.linkedin.com/in/danbeattycls/",
    },
    {
      show: "Contractor Talk & Pre-Con Mastery",
      episode: "Ep. 184 · Building the Leader",
      title: "How to Promote a Master Craftsperson Without Setting Them Up to Fail",
      quote: "The biggest trap in construction is expecting your best carpenter or pipelayer to magically know how to run a 20-person crew on day one.",
      tag: "Superintendent Transition",
      duration: "38 min",
      link: "https://www.linkedin.com/in/danbeattycls/",
    },
    {
      show: "AGC Edge Instructor Spotlight",
      episode: "Special Feature · 5 Voices on the Jobsite",
      title: "Decoding Strong Personalities & Resolving Jobsite Friction",
      quote: "Shouting might get compliance for 10 minutes, but influence creates teams that protect your schedule when you are not standing over them.",
      tag: "5 Voices Communication",
      duration: "45 min",
      link: "https://www.linkedin.com/in/danbeattycls/",
    },
  ];

  return (
    <section id="podcasts" className="bg-[#0C263D] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-10 right-0 size-96 rounded-full bg-[#B64F43]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
              <Radio className="size-3.5" />
              <span>Podcasts & Media Guest</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Hear Dan's Practical Insights on Industry Shows.
            </h2>
            <p className="text-base text-slate-300">
              Dan frequently guests on construction, contracting, and leadership podcasts sharing real field tactics and operational frameworks.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 rounded-lg bg-[#B64F43] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow shrink-0"
          >
            <Mic className="size-4" />
            <span>Book Dan on Your Podcast</span>
          </button>
        </div>

        {/* Podcast Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {episodes.map((ep) => (
            <div
              key={ep.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-7 flex flex-col justify-between hover:border-[#B64F43]/60 transition-all group backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#B64F43] bg-white/10 px-2.5 py-1 rounded">
                    {ep.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <Volume2 className="size-3.5 text-slate-400" />
                    {ep.duration}
                  </span>
                </div>

                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  {ep.show}
                </p>
                <p className="text-[0.72rem] text-slate-500 font-medium">
                  {ep.episode}
                </p>

                <h3 className="font-serif text-lg font-bold text-white mt-2 leading-snug group-hover:text-slate-100">
                  {ep.title}
                </h3>

                <blockquote className="mt-4 rounded-lg bg-black/25 border-l-2 border-[#B64F43] p-3 text-xs italic text-slate-300 leading-relaxed">
                  "{ep.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative size-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image
                      src="/dan-headshot.png"
                      alt="Dan Beatty"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Guest: Dan Beatty</span>
                </div>

                <a
                  href={ep.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#B64F43] transition-colors"
                >
                  <Play className="size-3.5 ml-0.5 fill-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
