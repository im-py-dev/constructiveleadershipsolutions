"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Clock, ArrowRight, ShieldCheck, Sparkles, Target } from "lucide-react";

interface FloatingWebinarWidgetProps {
  onOpenDiagnostic: () => void;
}

export function FloatingWebinarWidget({ onOpenDiagnostic }: FloatingWebinarWidgetProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(42);

  // Countdown timer loop for urgency & engagement
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;
        setMinutes((prevMin) => (prevMin > 0 ? prevMin - 1 : 15));
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-5 right-5 z-40 animate-in fade-in slide-in-from-bottom-2 duration-200">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2.5 rounded-full border-2 border-[#B64F43] bg-[#0C263D] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-2xl hover:bg-[#1A4368] transition-all cursor-pointer"
        >
          <Target className="size-4 text-[#B64F43]" />
          <span>Free Leadership Diagnostic</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 w-[340px] sm:w-[360px] rounded-2xl border border-white/20 bg-[#0C263D] text-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Top Banner with Dan's Photo & Close Button */}
      <div className="relative bg-[#081B2C] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#B64F43] shrink-0 bg-slate-900">
            <Image
              src="/dan-headshot.png"
              alt="Dan Beatty"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="rounded-full bg-[#B64F43]/20 border border-[#B64F43]/40 px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-wider text-[#B64F43] inline-block">
              Free Field Assessment
            </span>
            <p className="text-xs font-bold text-white leading-tight mt-0.5">Daniel "Dan" Beatty</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMinimized(true)}
          aria-label="Minimize popup"
          className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 space-y-3.5">
        <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
          How to Protect 3–5% Jobsite Margin & Lead Field Crews
        </h4>

        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 flex items-center gap-2">
          <span className="rounded bg-[#B64F43] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-wider text-white">
            Leader Bonus
          </span>
          <p className="text-[0.72rem] text-slate-300">
            Get Dan's instant <strong className="text-white">PM Margin Defense Scorecard</strong>
          </p>
        </div>

        {/* Live Session Row */}
        <div className="flex items-center justify-between text-xs text-slate-300 border-t border-b border-white/10 py-2">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Clock className="size-3.5" />
            <span>Instant Interactive Access</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold text-xs bg-black/40 px-2 py-1 rounded border border-white/10 text-white">
            <span>{String(minutes).padStart(2, '0')}m</span>
            <span>:</span>
            <span>{String(seconds).padStart(2, '0')}s</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onOpenDiagnostic}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#B64F43] py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white shadow-xl hover:bg-[#9E3E33] transition-all cursor-pointer group"
        >
          <span>Take 2-Min Free Diagnostic</span>
          <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="text-center text-[0.68rem] text-slate-400">
          Free · Instant Benchmark · 60-Second Signup
        </p>
      </div>
    </div>
  );
}
