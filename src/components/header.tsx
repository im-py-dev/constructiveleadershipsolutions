"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Download, Calendar, ExternalLink, ShieldCheck, Mail } from "lucide-react";

interface HeaderProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Header({ onOpenCalendly, onOpenSpeakerKit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  const navLinks = [
    { label: "Speaking", href: "#speaker-reel" },
    { label: "Training", href: "#training-programs" },
    { label: "Cohort Academy", href: "#cohort-program" },
    { label: "Podcasts", href: "#podcasts" },
    { label: "About Dan", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm transition-all">
      {/* 1. UPPER ROW: Prominent Logo + Verified Credential Pill + Direct Contact */}
      <div className="bg-[#0C263D] text-white px-4 py-2.5 sm:py-3 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo in Upper Part (Clean, Natural Colors, Zero Filter) */}
          <a href="#overview" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-10 w-48 sm:h-11 sm:w-56">
              <Image
                src="/logo.png"
                alt="Constructive Leadership Solutions"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Center Credentials */}
          <div className="hidden md:flex items-center gap-4 text-xs sm:text-[0.82rem] text-slate-300">
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
            <span className="text-slate-600">|</span>
            <span>Since 1984</span>
            <span className="text-slate-600">|</span>
            <span>5 Voices Facilitator</span>
          </div>

          {/* Right Direct Contacts */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
            <a
              href="tel:7033807923"
              className="flex items-center gap-1.5 text-white hover:text-[#B64F43] transition-colors"
            >
              <Phone className="size-3.5 text-[#B64F43]" />
              <span>(703) 380-7923</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="mailto:dan@constructiveleadershipsolutions.com"
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="size-3.5 text-slate-400" />
              <span>dan@constructiveleadershipsolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. LOWER ROW: Clean Navigation Links + Action CTAs */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <nav className="hidden lg:flex items-center gap-1 text-[0.88rem] font-bold text-[#31485A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-[#0C263D] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 lg:hidden">
          Navigation
        </span>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSpeakerKit}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm cursor-pointer"
          >
            <Download className="size-3.5 text-[#B64F43]" />
            <span>Speaker Kit</span>
          </button>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0C263D] px-4 sm:px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#1A4368] transition-all cursor-pointer"
          >
            <Calendar className="size-3.5 text-[#B64F43]" />
            <span>Start a Conversation</span>
            <ArrowRight className="size-3.5 hidden sm:inline" />
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden hover:bg-slate-100"
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
          </div>
        </div>
      )}
    </header>
  );
}
