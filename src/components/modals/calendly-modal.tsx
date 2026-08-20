"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Phone, Mail } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  // Default duration is 30min
  const [duration, setDuration] = useState<"15" | "30" | "60">("30");

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

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm transition-opacity duration-200 " +
        (isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
      }
      aria-hidden={!isOpen}
    >
      <div
        className={
          "relative w-full max-w-4xl h-[92vh] max-h-[840px] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col border border-slate-200 transition-all duration-200 " +
          (isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4")
        }
      >
        {/* Modal Header with Title & Duration Switcher Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-slate-200 bg-[#0C263D] px-4 py-3 sm:px-6 sm:py-4 text-white gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#B64F43] text-white shrink-0 shadow-sm">
              <Calendar className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                Schedule Discovery with Dan Beatty
              </h3>
              <p className="text-[0.72rem] sm:text-xs text-slate-300">
                {duration === "15" && "15-Min One-on-One Quick Intro · Zero Obligation"}
                {duration === "30" && "30-Min Discovery & Roadmap · Default"}
                {duration === "60" && "60-Minute Strategy Deep Dive & Review"}
              </p>
            </div>
          </div>

          {/* Right Controls: Duration Switcher Buttons + Close Button */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            {/* Duration Selector Tabs */}
            <div className="inline-flex items-center rounded-lg bg-black/40 p-1 border border-white/15">
              <button
                type="button"
                onClick={() => setDuration("15")}
                className={
                  "rounded-md px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer " +
                  (duration === "15"
                    ? "bg-[#B64F43] text-white shadow"
                    : "text-slate-300 hover:text-white hover:bg-white/10")
                }
              >
                15 min
              </button>
              <button
                type="button"
                onClick={() => setDuration("30")}
                className={
                  "rounded-md px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer " +
                  (duration === "30"
                    ? "bg-[#B64F43] text-white shadow"
                    : "text-slate-300 hover:text-white hover:bg-white/10")
                }
              >
                30 min
              </button>
              <button
                type="button"
                onClick={() => setDuration("60")}
                className={
                  "rounded-md px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer " +
                  (duration === "60"
                    ? "bg-[#B64F43] text-white shadow"
                    : "text-slate-300 hover:text-white hover:bg-white/10")
                }
              >
                60 min
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Embedded Calendly iframes (All 3 Preloaded in Parallel in DOM for instant 0ms switching) */}
        <div className="flex-1 w-full bg-slate-50 relative">
          {/* 15-Minute Meeting: https://calendly.com/dan-danbeatty/one-on-one */}
          <iframe
            src="https://calendly.com/dan-danbeatty/one-on-one?hide_gdpr_banner=1&primary_color=b64f43"
            title="Book a 15-Minute Conversation with Dan Beatty"
            className={"size-full border-0 " + (duration === "15" ? "block" : "hidden")}
          />

          {/* 30-Minute Meeting (Default): https://calendly.com/dan-danbeatty */}
          <iframe
            src="https://calendly.com/dan-danbeatty?hide_gdpr_banner=1&primary_color=b64f43"
            title="Book a 30-Minute Conversation with Dan Beatty"
            className={"size-full border-0 " + (duration === "30" ? "block" : "hidden")}
          />

          {/* 60-Minute Meeting: https://calendly.com/dan-danbeatty/60-minute-meeting */}
          <iframe
            src="https://calendly.com/dan-danbeatty/60-minute-meeting?hide_gdpr_banner=1&primary_color=b64f43"
            title="Book a 60-Minute Conversation with Dan Beatty"
            className={"size-full border-0 " + (duration === "60" ? "block" : "hidden")}
          />
        </div>

        {/* Modal Footer with Direct Contact */}
        <div className="border-t border-slate-200 bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-[#B64F43]" />
              <strong>(703) 380-7923</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5 text-[#B64F43]" />
              <span>dan@constructiveleadershipsolutions.com</span>
            </span>
          </div>
          <p className="text-slate-400 text-[0.7rem] hidden sm:block">
            Prefer direct email? Send details about your event or team gap.
          </p>
        </div>
      </div>
    </div>
  );
}
