"use client";

import { useState } from "react";
import { Play, Download, CheckCircle, Share2, Copy, Users, Mic, Sparkles, FileText, Check } from "lucide-react";

interface SpeakerKitProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function SpeakerKit({ onOpenCalendly, onOpenSpeakerKit }: SpeakerKitProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedCommitteeText, setCopiedCommitteeText] = useState(false);

  const keynoteTopics = [
    {
      title: "The Influence Model: Authority Isn't Influence",
      audience: "Keynotes & Annual Conventions",
      description:
        "Why shouting or relying on title alone fails on modern jobsites. How construction leaders build genuine buy-in, command respect without micromanaging, and align teams around schedule and budget.",
      outcomes: ["Clear accountability without confrontation", "Improved field-office alignment", "Retention of top trades"],
    },
    {
      title: "From Strong Builder to Leader of People",
      audience: "Superintendents, PMs, Foremen",
      description:
        "The hardest transition in construction is going from doing the physical work to getting work done through others. Dan unpacks the mindset and communication tools needed to make this shift seamlessly.",
      outcomes: ["Delegation mastery", "Handling tough field conversations", "Conflict resolution before it escalates"],
    },
    {
      title: "The Cracks We're Talking About: Communication & Margin",
      audience: "Executive Leadership & AGC Breakouts",
      description:
        "The most expensive construction problems aren't bad materials or weather—they are conversations nobody had. How proactive communication directly protects profit margin and prevents rework.",
      outcomes: ["Direct financial impact analysis", "Standardized handover protocols", "Culture of immediate feedback"],
    },
    {
      title: "Load-Bearing Values: Culture That Survives the Jobsite",
      audience: "Company Retreats & Executive Summits",
      description:
        "Values aren't words on a lobby wall—they are the load-bearing beams of your business. How to build operational integrity that holds up under weather delays, supply chain shocks, and tight deadlines.",
      outcomes: ["Living company values in daily work", "Reduced employee turnover", "Higher client satisfaction"],
    },
  ];

  const handleCopyCommitteeEmail = () => {
    const text = `Hi Selection Committee,

I would like to propose Daniel "Dan" Beatty for our upcoming conference keynote / breakout session. 
He is an approved AGC Edge instructor with 40+ years in the construction trenches since 1984.

Here are his core links for review:
- Speaker Sizzle Reel: https://constructiveleadershipsolutions.vercel.app/#speaker-reel
- Topics & Bio: https://constructiveleadershipsolutions.vercel.app/#associations
- Direct Contact: dan@constructiveleadershipsolutions.com | (703) 380-7923

Looking forward to discussing!`;

    navigator.clipboard.writeText(text);
    setCopiedCommitteeText(true);
    setTimeout(() => setCopiedCommitteeText(false), 3000);
  };

  return (
    <section id="speaker-reel" className="bg-[#0C263D] text-white py-20 lg:py-28 relative overflow-hidden border-b border-slate-800">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43]">
            Speaker Kit & Live Footage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            See Dan in Action on Stage.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Built specifically for event planners, program chairs, and AGC selection committees. Everything you need to evaluate Dan, review topics, and forward to your board in one place.
          </p>
        </div>

        {/* Video Player + Committee Summary Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-center">
          {/* Vimeo Video Reel Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/15 bg-black shadow-2xl">
              {!isPlaying ? (
                <div className="relative size-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <img
                    src="https://i.vimeocdn.com/video/2189832694-c8f96b67aac88a49a6d7aec85ce943f4aeddf0ba2d50a7ff716f9d971dda8288-d?mw=600&mh=337"
                    alt="Dan Beatty Construction Leadership Speaker Reel"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                    <div className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-[#B64F43] text-white shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="size-8 ml-1 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-bold bg-black/70 px-3 py-1.5 rounded-md">Live Stage Sizzle Reel</span>
                    <span className="text-slate-300">Click to Play (1:45)</span>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://player.vimeo.com/video/1218014604?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Dan Beatty Speaker Reel"
                  className="size-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Event Planner Quick Package Card */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur space-y-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#B64F43]">
                Committee Ready
              </p>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Event Planner Quick Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Save hours preparing for your board review. Download our bundled package with headshots, introductions, program one-sheets, and technical rider.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                <span><strong>Formats</strong>: 45-60m Keynotes, 90m Breakouts, Half-Day Workshops</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                <span><strong>Audiences</strong>: AGC Chapters, Heavy Highway, Specialty Contractors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-[#B64F43] shrink-0" />
                <span><strong>Materials</strong>: Approved Bio, High-Res Headshots, AV Spec Sheet</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all"
              >
                <Download className="size-4" />
                <span>Download One-Sheets & Kit</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCommitteeEmail}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/25 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                {copiedCommitteeText ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span>Committee Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="size-4 text-[#B64F43]" />
                    <span>Copy Pre-Written Committee Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Keynote Topics Grid */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">
            Signature Keynote & Breakout Topics
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keynoteTopics.map((topic, i) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-[#B64F43]/50 transition-colors"
              >
                <div>
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-wider text-[#B64F43]">
                    {topic.audience}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white mt-2 leading-snug">
                    {topic.title}
                  </h4>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                    Key Attendee Takeaways:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {topic.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-[#B64F43]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
