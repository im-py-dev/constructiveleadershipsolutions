"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Download, Calendar, HardHat, ExternalLink, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Header({ onOpenCalendly, onOpenSpeakerKit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  // 5 Clean, High-Level Navigation Anchors (Easy on eyes, zero crowding)
  const navLinks = [
    { label: "Speaking & Reel", href: "#speaker-reel" },
    { label: "Contractor Training", href: "#training-programs" },
    { label: "Cohort Academy", href: "#cohort-program" },
    { label: "Podcasts & Media", href: "#podcasts" },
    { label: "About Dan", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top Notification / Credential Bar (Spacious & Prominent) */}
      <div className="hidden border-b border-slate-800 bg-[#0C263D] px-4 py-2.5 sm:py-3 text-xs sm:text-[0.84rem] text-slate-200 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={agcLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-[#B64F43] px-3.5 py-1 text-white font-bold tracking-wide transition-all border border-white/20 hover:border-transparent group cursor-pointer"
            >
              <span className="size-2 rounded-full bg-[#B64F43] group-hover:bg-white animate-pulse" />
              <span>Approved AGC Edge Instructor</span>
              <ExternalLink className="size-3 text-slate-300 group-hover:text-white" />
            </a>

            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-medium">Construction Veteran Since 1984</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-medium">Certified 5 Voices Facilitator</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="tel:7033807923"
              className="flex items-center gap-2 font-bold text-white hover:text-[#B64F43] transition-colors"
            >
              <Phone className="size-3.5 text-[#B64F43]" />
              <span>(703) 380-7923</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:dan@constructiveleadershipsolutions.com"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              dan@constructiveleadershipsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="relative h-11 w-48 sm:h-12 sm:w-56 rounded-lg bg-[#0C263D] p-1.5 shadow-sm group-hover:shadow transition-shadow">
            <Image
              src="https://constructiveleadershipsolutions.com/wp-content/uploads/2025/04/Constructive-Leadership-Solutions-Dark-Logo-March-2025-e1744120204726.png"
              alt="Constructive Leadership Solutions"
              fill
              priority
              className="object-contain p-1"
            />
          </div>
        </a>

        {/* Clean Desktop Navigation (5 Spacious Links) */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2 text-[0.86rem] font-bold text-[#31485A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-slate-700 hover:bg-slate-100 hover:text-[#0C263D] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSpeakerKit}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm cursor-pointer"
          >
            <Download className="size-3.5 text-[#B64F43]" />
            <span>Speaker Kit</span>
          </button>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0C263D] px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#1A4368] transition-all cursor-pointer"
          >
            <Calendar className="size-3.5 text-[#B64F43]" />
            <span>Start a Conversation</span>
            <ArrowRight className="size-3.5 hidden sm:inline" />
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-5 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3.5 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={agcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 py-2.5 text-xs font-bold text-[#0C263D]"
              >
                <ShieldCheck className="size-4 text-[#B64F43]" />
                <span>Verified AGC Edge Instructor Profile</span>
                <ExternalLink className="size-3 text-slate-500" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSpeakerKit();
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0C263D]"
              >
                <Download className="size-4 text-[#B64F43]" />
                <span>Download Speaker Kit (One-Sheets)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalendly();
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#0C263D] py-3 text-xs font-extrabold uppercase tracking-wider text-white"
              >
                <Calendar className="size-4 text-[#B64F43]" />
                <span>Talk with Dan (Book Time)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
