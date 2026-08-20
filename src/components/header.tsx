"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Download, Calendar, ExternalLink, Mail, Award } from "lucide-react";

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
      {/* 1. UPPER ROW: Logo + Direct Phone & Email */}
      <div className="bg-[#0C263D] text-white px-3 sm:px-6 py-2 sm:py-2.5 border-b border-slate-800">
        <div className="mx-auto flex max-w-[1720px] items-center justify-between gap-3">
          {/* Brand Logo */}
          <a href="#overview" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-7 w-36 sm:h-10 sm:w-52">
              <Image
                src="/logo.png"
                alt="Constructive Leadership Solutions"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Center Credentials */}
          <div className="hidden md:flex items-center gap-3.5 text-xs text-slate-300">
            <a
              href={agcLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-[#B64F43] px-3 py-1 text-white font-bold tracking-wide transition-all border border-white/20 hover:border-transparent group cursor-pointer"
            >
              <Award className="size-3.5 text-[#B64F43] group-hover:text-white" />
              <span>Approved AGC Edge Instructor</span>
              <ExternalLink className="size-3 text-slate-300 group-hover:text-white" />
            </a>
            <span className="text-slate-600">|</span>
            <span>Since 1984</span>
            <span className="text-slate-600">|</span>
            <span>5 Voices Facilitator</span>
          </div>

          {/* Right Direct Phone & Email */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
            <a
              href="tel:7033807923"
              className="flex items-center gap-1.5 text-white hover:text-[#B64F43] transition-colors whitespace-nowrap text-xs sm:text-sm"
            >
              <Phone className="size-3.5 text-[#B64F43]" />
              <span>(703) 380-7923</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href="mailto:dan@constructiveleadershipsolutions.com"
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-xs"
            >
              <Mail className="size-3.5 text-slate-400" />
              <span>dan@constructiveleadershipsolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. LOWER ROW: Clean Desktop Nav + Compact Sized Mobile Bar */}
      <div className="mx-auto flex max-w-[1720px] items-center justify-between px-3 py-1.5 sm:px-6 sm:py-2.5">
        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-[0.88rem] font-bold text-[#31485A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#0C263D] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Left Brand Category */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <span className="text-[0.72rem] font-extrabold uppercase tracking-wider text-[#0C263D]">
            Dan Beatty <span className="text-[#B64F43]">·</span> AGC Edge
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={onOpenSpeakerKit}
            className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:bg-slate-50 transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Download className="size-3 text-[#B64F43]" />
            <span>Speaker Kit</span>
          </button>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0C263D] px-3 py-1.5 sm:px-4 sm:py-2 text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow hover:bg-[#1A4368] transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="size-3 sm:size-3.5 text-[#B64F43]" />
            <span>Start Conversation</span>
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-8 sm:size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden hover:bg-slate-100 cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
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
            <div className="border-t border-slate-200 pt-3 mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSpeakerKit();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D]"
              >
                <Download className="size-3.5 text-[#B64F43]" />
                <span>Download Speaker Kit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
