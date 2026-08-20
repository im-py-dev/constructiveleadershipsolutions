"use client";

import Image from "next/image";
import { Phone, Mail, Calendar, Download, MapPin, ArrowRight, ExternalLink } from "lucide-react";

interface FooterProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
}

export function Footer({ onOpenCalendly, onOpenSpeakerKit }: FooterProps) {
  const agcLink = "https://pmc.agc.org/speakers/#:~:text=Hohns%20%E2%80%A2%20Inglis%2C%20Inc.-,Dan%20Beatty,-Constructive%20Leadership%20Solutions";

  return (
    <footer className="border-t border-slate-800 bg-[#0C263D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="relative h-11 w-52">
              <Image
                src="/logo.png"
                alt="Constructive Leadership Solutions"
                fill
                className="object-contain object-left"
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
                <a href="#choose-objective" className="hover:text-white transition-colors">For Associations & Events</a>
              </li>
              <li>
                <a href="#choose-objective" className="hover:text-white transition-colors">For Contractors & Operations</a>
              </li>
              <li>
                <a href="#speaker-reel" className="hover:text-white transition-colors">Speaking Topics & Reel</a>
              </li>
              <li>
                <a href="#training-programs" className="hover:text-white transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#cohort-program" className="hover:text-white transition-colors">Cohort Academy</a>
              </li>
              <li>
                <a href="#podcasts" className="hover:text-white transition-colors">Podcasts & Media</a>
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

          {/* Column 3: Credentials & Direct Links */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B64F43]">
              Credentials & Profiles
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href={agcLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-200 hover:text-[#B64F43]"
                >
                  <span>AGC Edge Speaker Profile</span>
                  <ExternalLink className="size-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/danbeattycls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-200 hover:text-[#B64F43]"
                >
                  <span>Daniel Beatty on LinkedIn</span>
                  <ExternalLink className="size-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/dan-danbeatty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-200 hover:text-[#B64F43]"
                >
                  <span>Book on Calendly</span>
                  <ExternalLink className="size-3 text-slate-400" />
                </a>
              </li>
              <li>
                <span className="text-slate-400">GiANT 5 Voices Certified</span>
              </li>
              <li>
                <span className="text-slate-400">Values Identifier Certified</span>
              </li>
              <li>
                <span className="text-slate-400">Since 1984 in Heavy Civil</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B64F43]">
              Work with Dan
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Book a keynote, train your project managers, or audit bid risk before your next pursuit.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B64F43] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#9E3E33] transition-colors shadow cursor-pointer text-center"
              >
                <Calendar className="size-4" />
                <span>Start a Conversation</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                onClick={onOpenSpeakerKit}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer text-center"
              >
                <Download className="size-4 text-[#B64F43]" />
                <span>Download Speaker Kit</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Constructive Leadership Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
