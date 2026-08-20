"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Phone, Mail, Loader2 } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm transition-opacity duration-200 " +
        (isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
      }
      aria-hidden={!isOpen}
    >
      <div
        className={
          "relative w-full max-w-4xl h-[90vh] max-h-[820px] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col border border-slate-200 transition-all duration-200 " +
          (isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4")
        }
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#0C263D] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded bg-[#B64F43] text-white">
              <Calendar className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Schedule a Conversation with Dan Beatty
              </h3>
              <p className="text-xs text-slate-300">
                Direct Discovery Call · 20-30 Minutes · Zero Obligation
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Embedded Calendly iframe (Always Preloaded in DOM for 0ms delay) */}
        <div className="flex-1 w-full bg-slate-50 relative">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-50 text-slate-500 z-10">
              <Loader2 className="size-8 animate-spin text-[#B64F43]" />
              <p className="text-xs font-bold uppercase tracking-wider">Connecting to Dan's Calendar...</p>
            </div>
          )}

          <iframe
            src="https://calendly.com/dan-danbeatty?hide_gdpr_banner=1&primary_color=b64f43"
            title="Book a Conversation with Dan Beatty"
            onLoad={() => setIframeLoaded(true)}
            className="size-full border-0"
          />
        </div>

        {/* Modal Footer with Direct Contact */}
        <div className="border-t border-slate-200 bg-white px-6 py-3 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
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
          <p className="text-slate-400 text-[0.7rem]">
            Prefer direct email? Send details about your event or team gap.
          </p>
        </div>
      </div>
    </div>
  );
}
