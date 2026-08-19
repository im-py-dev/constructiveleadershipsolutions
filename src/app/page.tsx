"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BuyerRouting } from "@/components/buyer-routing";
import { SpeakerKit } from "@/components/speaker-kit";
import { TrainingPrograms } from "@/components/training-programs";
import { TheFriction } from "@/components/the-friction";
import { AboutDan } from "@/components/about-dan";
import { LeadCapture } from "@/components/lead-capture";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

import { CalendlyModal } from "@/components/modals/calendly-modal";
import { SpeakerKitModal } from "@/components/modals/speaker-kit-modal";
import { DiagnosticModal } from "@/components/modals/diagnostic-modal";

export default function HomePage() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [speakerKitOpen, setSpeakerKitOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header */}
      <Header
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 2. Hero Section (Dan Standing Cutout Sticking to Bottom + Persona Switcher) */}
      <Hero
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

      {/* 3. Dual Buyer Objective Routing */}
      <BuyerRouting
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 4. Speaker Kit & Live Stage Footage */}
      <SpeakerKit
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 5. Contractor Training Programs (With Interactive Curriculum Tabs) */}
      <TrainingPrograms
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* 6. The Friction Matrix & Margin Loss Calculator */}
      <TheFriction />

      {/* 7. About Dan Beatty (In-The-Trenches Credibility) */}
      <AboutDan
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* 8. Lead Capture (Newsletter + Diagnostic Tool) */}
      <LeadCapture
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

      {/* 9. Testimonials & Social Proof */}
      <Testimonials />

      {/* 10. Comprehensive Luxury Footer */}
      <Footer
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* Floating Quick Action Widget (Bottom-Left) */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setDiagnosticOpen(true)}
          className="flex items-center gap-2 rounded-full border border-[#B64F43] bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0C263D] shadow-2xl hover:bg-slate-50 transition-all cursor-pointer ring-1 ring-black/10"
        >
          <span className="flex size-2 rounded-full bg-[#B64F43] animate-ping" />
          <span>🎯 Free Leadership Diagnostic</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <CalendlyModal
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />

      <SpeakerKitModal
        isOpen={speakerKitOpen}
        onClose={() => setSpeakerKitOpen(false)}
      />

      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
        onOpenCalendly={() => setCalendlyOpen(true)}
      />
    </main>
  );
}
