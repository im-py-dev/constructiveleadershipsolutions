"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BuyerRouting } from "@/components/buyer-routing";
import { CohortProgram } from "@/components/cohort-program";
import { PodcastsMedia } from "@/components/podcasts-media";
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
import { CohortApplyModal } from "@/components/modals/cohort-apply-modal";
import { FloatingWebinarWidget } from "@/components/floating-webinar-widget";

export default function HomePage() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [speakerKitOpen, setSpeakerKitOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [cohortApplyOpen, setCohortApplyOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#B64F43] selection:text-white font-sans antialiased">
      {/* 1. Header with Direct AGC Edge Credential */}
      <Header
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 2. Hero Section (Floor-Anchored Dan Cutout + Primary Direct Actions) */}
      <Hero
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

      {/* 3. Interactive Buyer Persona Question & Dynamic Content Matcher */}
      <BuyerRouting
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
        onOpenCohortApply={() => setCohortApplyOpen(true)}
      />

      {/* 4. Speaker Kit & Keynotes (Vimeo Reel 1218014604 + 4 Topics + 1-Click Committee Email) */}
      <SpeakerKit
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 5. Contractor Training Programs (PMDP, Builder to Leader, Estimating with Impact, 5 Voices) */}
      <TrainingPrograms
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* 6. Multi-Company Cohort Academy (Scalable 8-Week Hybrid Program) */}
      <CohortProgram
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenCohortApply={() => setCohortApplyOpen(true)}
      />

      {/* 7. Podcasts & Media Guest Appearances */}
      <PodcastsMedia
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* 8. The Friction & Industry Reality (Comparison Matrix + Margin Risk Calculator) */}
      <TheFriction />

      {/* 9. About Dan Beatty (1984 Authority Story + Enterprise Pedigree) */}
      <AboutDan
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* 10. Lead Capture (Culture Under Construction Newsletter + Readiness Diagnostic) */}
      <LeadCapture
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

      {/* 11. Testimonials & Social Proof (Filterable by Buyer) */}
      <Testimonials />

      {/* 12. Comprehensive Luxury Footer */}
      <Footer
        onOpenCalendly={() => setCalendlyOpen(true)}
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* 13. High-Converting Floating Popup Widget */}
      <FloatingWebinarWidget
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

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

      <CohortApplyModal
        isOpen={cohortApplyOpen}
        onClose={() => setCohortApplyOpen(false)}
        onOpenCalendly={() => setCalendlyOpen(true)}
      />
    </main>
  );
}
