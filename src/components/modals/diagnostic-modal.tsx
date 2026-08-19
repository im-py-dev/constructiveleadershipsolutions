"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalendly: () => void;
}

export function DiagnosticModal({ isOpen, onClose, onOpenCalendly }: DiagnosticModalProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [completed, setCompleted] = useState(false);

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

  const questions = [
    {
      id: 1,
      question: "Where is your biggest communication breakdown on projects?",
      options: [
        "Field superintendents & office PMs misaligned on schedule/scope",
        "Subcontractors not being held accountable until billing time",
        "Estimating scope gaps causing margin erosion during execution",
        "Promoted craftspeople struggling to lead and delegate",
      ],
    },
    {
      id: 2,
      question: "How do your PMs and Superintendents handle tough conversations?",
      options: [
        "They avoid conflict until problems explode into costly emergencies",
        "They rely on shouting/authority which creates turnover and resentment",
        "They communicate well technically, but struggle with people leadership",
        "They handle it consistently and proactively",
      ],
    },
    {
      id: 3,
      question: "What is your primary development goal over the next 12 months?",
      options: [
        "Multi-session leadership training for our project management pipeline",
        "Keynote or breakout speaker for our annual company retreat or association",
        "Estimating & pre-construction margin protection workshop",
        "1:1 executive coaching for company leadership",
      ],
    },
  ];

  const handleSelectOption = (option: string) => {
    setAnswers({ ...answers, [step]: option });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(4); // Contact capture & scorecard
    }
  };

  const handleSubmitScorecard = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
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
            <div className="flex size-8 items-center justify-center rounded bg-[#B64F43] text-white">
              <Sparkles className="size-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Construction Leadership Readiness Scorecard
              </h3>
              <p className="text-[0.7rem] text-slate-300">
                2-Minute Operational Benchmark
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

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!completed ? (
            step <= questions.length ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Question {step} of {questions.length}</span>
                  <span>{Math.round((step / questions.length) * 100)}% Complete</span>
                </div>

                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B64F43] h-full transition-all duration-300"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  />
                </div>

                <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-[#0C263D]">
                  {questions[step - 1].question}
                </h4>

                <div className="space-y-2.5">
                  {questions[step - 1].options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelectOption(opt)}
                      className="w-full text-left rounded-lg border border-slate-200 p-3.5 text-xs sm:text-sm text-slate-800 hover:border-[#B64F43] hover:bg-[#B64F43]/5 transition-all flex items-center justify-between group"
                    >
                      <span>{opt}</span>
                      <ArrowRight className="size-4 text-slate-400 group-hover:text-[#B64F43] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitScorecard} className="space-y-4">
                <div className="text-center space-y-1">
                  <h4 className="font-serif-heading text-xl font-bold text-[#0C263D]">
                    Your Scorecard is Ready!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Where should we send your personalized gap analysis and recommendations?
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mike Henderson"
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
                      placeholder="e.g. Apex Builders"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="m.henderson@apexbuilders.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded bg-[#B64F43] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all mt-2"
                >
                  <span>View My Leadership Diagnostic Report</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )
          ) : (
            <div className="space-y-5 text-center">
              <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <h4 className="font-serif-heading text-2xl font-bold text-[#0C263D]">
                  Readiness Score: 78 / 100
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Thank you, <strong>{name}</strong>. Based on your responses for <strong>{company}</strong>, your highest ROI opportunity is closing the communication gap between field leadership and office project management.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-left text-xs text-slate-700 space-y-1.5">
                <p className="font-bold text-[#0C263D] uppercase tracking-wider text-[0.7rem]">
                  Dan's Recommended Next Step:
                </p>
                <p>
                  Review the <em>Project Manager Development Program</em> or book a 20-minute diagnostic call with Dan to discuss structured frameworks for your supervisors.
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
                <span>Discuss Results with Dan Beatty</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
