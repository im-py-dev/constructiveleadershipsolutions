"use client";

import Image from "next/image";
import { Phone, Mail, Calendar, Download, MapPin, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Footer({ onOpenCalendly, onOpenSpeakerKit }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-[#0C263D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="relative h-10 w-48">
              <Image
                src="https://constructiveleadershipsolutions.com/wp-content/uploads/2025/04/Constructive-Leadership-Solutions-Dark-Logo-March-2025-e1744120204726.png"
                alt="Constructive Leadership Solutions"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Construction leadership speaking, project manager development, and field executive coaching by Daniel Beatty.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="size-3.5 text-[#B64F43]" />
                <a href="tel:7033807923" className="hover:text-white transition-colors">
                  (703) 380-7923
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-3.5 text-[#B64F43]" />
                <a href="mailto:dan@constructiveleadershipsolutions.com" className="hover:text-white transition-colors">
                  dan@constructiveleadershipsolutions.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-3.5 text-[#B64F43]" />
                <span>Serving AGC Chapters & Contractors Nationwide</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B64F43]">
              Quick Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#associations" className="hover:text-white transition-colors">For Associations & Events</a>
              </li>
              <li>
                <a href="#contractors" className="hover:text-white transition-colors">For Contractors & Owners</a>
              </li>
              <li>
                <a href="#speaker-reel" className="hover:text-white transition-colors">Speaker Reel & Topics</a>
              </li>
              <li>
                <a href="#training-programs" className="hover:text-white transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#friction" className="hover:text-white transition-colors">The Friction Matrix</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dan Beatty</a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-white transition-colors">Culture Under Construction</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Credentials & Socials */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B64F43]">
              Accreditations & Social
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>• Approved AGC Edge Instructor</li>
              <li>• Certified 5 Voices Facilitator (GiANT)</li>
              <li>• Certified Values Identifier Coach</li>
              <li>• Construction Veteran Since 1984</li>
              <li className="pt-3">
                <a
                  href="https://www.linkedin.com/in/danbeattycls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#B64F43] transition-colors font-semibold"
                >
                  <svg className="size-4 text-[#0a66c2] fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn (Dan Beatty)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Actions */}
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B64F43]">
              Take Action
            </p>
            <p className="text-xs text-slate-300">
              Ready to discuss an upcoming conference keynote or schedule a team leadership development program?
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="w-full flex items-center justify-center gap-2 rounded bg-[#B64F43] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-all shadow"
              >
                <Calendar className="size-3.5" />
                <span>Start a Conversation</span>
              </button>
              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="w-full flex items-center justify-center gap-2 rounded border border-white/20 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                <Download className="size-3.5 text-[#B64F43]" />
                <span>Download Speaker Kit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Constructive Leadership Solutions. All rights reserved.</p>
          <p className="text-[0.7rem]">
            Designed for Construction Leaders Nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
