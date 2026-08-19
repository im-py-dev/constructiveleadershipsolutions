"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowRight, CheckCircle, Sparkles, BookOpen, ShieldCheck, Download, FileText, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface LeadCaptureProps {
  onOpenDiagnostic: () => void;
}

export function LeadCapture({ onOpenDiagnostic }: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sampleIssues = [
    { num: "#48", title: "The 3 Words That Stop Subcontractor Finger-Pointing on Day 1" },
    { num: "#47", title: "Why Great Foremen Fail at Delegating (and How to Fix It in 10 Minutes)" },
    { num: "#46", title: "The Handover Checklist That Saved a General Contractor $180,000" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#B64F43", "#31485A", "#0C263D"],
    });
  };

  return (
    <section id="newsletter" className="bg-[#F8F9FA] py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Card 1: Newsletter Signup */}
          <div className="lg:col-span-7 rounded-2xl border-2 border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded bg-[#B64F43]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B64F43]">
              <BookOpen className="size-3.5" />
              <span>Weekly Construction Insights</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C263D] mt-3">
              Join "Culture Under Construction"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Every Tuesday, Dan shares practical, 3-minute field leadership lessons, project manager communication tactics, and margin protection frameworks for over 2,000+ construction leaders.
            </p>

            {/* Recent issues preview */}
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
              <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400">
                Recent Issue Highlights:
              </p>
              {sampleIssues.map((issue) => (
                <div key={issue.num} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="font-bold text-[#B64F43]">{issue.num}</span>
                  <span className="truncate">{issue.title}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-5 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle className="size-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Welcome aboard!</strong> You're subscribed to <em>Culture Under Construction</em>. Check your inbox for your welcome issue and bonus field guide.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border border-slate-300 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0C263D] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g. dan@contractor.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded border border-slate-300 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0C263D] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded bg-[#0C263D] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all"
                >
                  <Mail className="size-4 text-[#B64F43]" />
                  <span>Get Weekly Field Leadership Insights</span>
                </button>
                <p className="text-[0.68rem] text-slate-400 text-center">
                  Zero spam. Strictly actionable construction leadership. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* Card 2: Interactive Diagnostic Scorecard Magnet */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0C263D] text-white p-8 sm:p-10 shadow-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B64F43]">
              <Sparkles className="size-3.5 text-[#B64F43]" />
              <span>Free 2-Minute Diagnostic</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white leading-snug">
              Construction Leadership Readiness Scorecard
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Are communication gaps, lack of delegation, or subcontractor friction costing your jobsites money? Take this 3-question interactive diagnostic to benchmark your operations.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#B64F43]" />
                <span>Instant custom score & margin risk analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#B64F43]" />
                <span>Tailored action plan for PMs & Superintendents</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenDiagnostic}
              className="w-full flex items-center justify-center gap-2 rounded bg-[#B64F43] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all"
            >
              <span>Take Free Leadership Diagnostic</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
