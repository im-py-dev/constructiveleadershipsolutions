"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Download, Calendar, HardHat } from "lucide-react";

interface HeaderProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Header({ onOpenCalendly, onOpenSpeakerKit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "For Associations", href: "#associations" },
    { label: "For Contractors", href: "#contractors" },
    { label: "Speaker Reel", href: "#speaker-reel" },
    { label: "Training Tracks", href: "#training-programs" },
    { label: "Cohort Academy", href: "#cohort-program" },
    { label: "Podcasts", href: "#podcasts" },
    { label: "The Friction", href: "#friction" },
    { label: "About Dan", href: "#about" },
    { label: "Newsletter", href: "#newsletter" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top Notification Bar */}
      <div className="hidden border-b border-slate-800 bg-[#0C263D] px-4 py-2 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#B64F43] animate-pulse" />
              <strong className="text-white font-bold tracking-wide">Approved AGC Edge Instructor</strong>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200">Construction Veteran Since 1984</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200">Certified 5 Voices Facilitator</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:7033807923"
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#B64F43] transition-colors"
            >
              <Phone className="size-3 text-[#B64F43]" />
              <span>(703) 380-7923</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:dan@constructiveleadershipsolutions.com"
              className="text-slate-300 hover:text-white transition-colors"
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

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 text-[0.82rem] font-bold text-[#31485A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-slate-700 hover:bg-slate-100 hover:text-[#0C263D] transition-colors"
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
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
          >
            <Download className="size-3.5 text-[#B64F43]" />
            <span>Speaker Kit</span>
          </button>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0C263D] px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#1A4368] transition-all"
          >
            <Calendar className="size-3.5 text-[#B64F43]" />
            <span>Start a Conversation</span>
            <ArrowRight className="size-3.5 hidden sm:inline" />
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 xl:hidden hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-5 xl:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
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
