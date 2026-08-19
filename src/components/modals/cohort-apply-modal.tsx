"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Users2, Building, Mail, Phone, Calendar } from "lucide-react";
import confetti from "canvas-confetti";

interface CohortApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalendly: () => void;
}

export function CohortApplyModal({ isOpen, onClose, onOpenCalendly }: CohortApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [seats, setSeats] = useState("1-3 Leaders");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#B64F43", "#0C263D", "#31485A"],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#0C263D] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded bg-[#B64F43] text-white">
              <Users2 className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Construction Leadership Cohort Application
              </h3>
              <p className="text-xs text-slate-300">
                8-Week Multi-Company Development Program
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-full p-1 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="font-serif-heading text-xl font-bold text-[#0C263D]">
                  Reserve Cohort Seats for Your Team
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Submit your details below to receive the complete 8-week syllabus, schedule options, and registration details for upcoming cohorts.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Craig"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Contracting"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="r.craig@apexcontracting.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Estimated Seats
                    </label>
                    <select
                      value={seats}
                      onChange={(e) => setSeats(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none bg-white"
                    >
                      <option value="1-3 Leaders">1 - 3 Leaders (PMs/Supers)</option>
                      <option value="4-8 Leaders">4 - 8 Leaders</option>
                      <option value="9+ Leaders">9+ Leaders (Private Cohort)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded bg-[#B64F43] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all mt-2"
              >
                <span>Submit Application & Get Syllabus (PDF)</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          ) : (
            <div className="space-y-5 text-center">
              <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <h4 className="font-serif-heading text-2xl font-bold text-[#0C263D]">
                  Application Received!
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Thank you, <strong>{name}</strong>. We have sent the complete 8-week syllabus and enrollment schedule for <strong>{company}</strong> to <strong>{email}</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCalendly();
                }}
                className="w-full flex items-center justify-center gap-2 rounded bg-[#0C263D] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all"
              >
                <Calendar className="size-4 text-[#B64F43]" />
                <span>Schedule a 15-Min Cohort Call with Dan</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
