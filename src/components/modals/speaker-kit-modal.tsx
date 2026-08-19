"use client";

import { useState, useEffect } from "react";
import { X, Download, FileText, CheckCircle, Share2, Copy, Mail } from "lucide-react";
import confetti from "canvas-confetti";

interface SpeakerKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpeakerKitModal({ isOpen, onClose }: SpeakerKitModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://constructiveleadershipsolutions.com/#speaker-reel");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#B64F43", "#0C263D", "#31485A"],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#0C263D] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded bg-[#B64F43] text-white">
              <FileText className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Dan Beatty Speaker Kit & One-Sheets
              </h3>
              <p className="text-xs text-slate-300">
                Committee Package · Keynotes, Bio & AV Specs
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-serif-heading text-xl font-bold text-[#0C263D]">
              Everything Your Selection Committee Needs
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Download Dan's comprehensive speaker package: high-resolution headshots, 1-page program overviews, attendee learning outcomes, and technical AV requirements.
            </p>
          </div>

          {downloaded ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
              <CheckCircle className="size-10 text-emerald-600 mx-auto" />
              <h5 className="font-bold text-emerald-900 text-base">Speaker Kit Sent!</h5>
              <p className="text-xs text-emerald-800">
                We've emailed the complete package to <strong>{email}</strong>. You can also share the live link directly with your committee.
              </p>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded bg-[#0C263D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
              >
                {copied ? "Link Copied!" : "Copy Live Speaker Reel Link"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (AGC Program Chair)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder="s.jenkins@agc-chapter.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0C263D] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded bg-[#B64F43] py-3 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#9E3E33] transition-all"
              >
                <Download className="size-4" />
                <span>Instant Download Speaker Kit (PDF)</span>
              </button>
            </form>
          )}

          {/* Quick Share to Committee */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>Need to forward to your board?</span>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 font-bold text-[#0C263D] hover:text-[#B64F43] transition-colors"
            >
              <Share2 className="size-3.5" />
              <span>{copied ? "Link Copied!" : "Copy Speaker Page Link"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
