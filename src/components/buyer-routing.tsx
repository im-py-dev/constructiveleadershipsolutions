"use client";

import { useState } from "react";
import { ArrowRight, Award, Users, Mic, HardHat, FileText, CheckCircle, Calculator, Users2, Sparkles, ChevronRight, Download, Calendar } from "lucide-react";

interface BuyerRoutingProps {
  onOpenCalendly: () => void;
  onOpenSpeakerKit: () => void;
  onOpenCohortApply?: () => void;
}

export function BuyerRouting({ onOpenCalendly, onOpenSpeakerKit, onOpenCohortApply }: BuyerRoutingProps) {
  const [selectedObjective, setSelectedObjective] = useState<"associations" | "contractors" | "estimating" | "cohort">("associations");

  const objectives = [
    {
      id: "associations",
      icon: Mic,
      label: "AGC Chapters & Event Planners",
      question: "I'm booking a speaker for an AGC Chapter, Association, or Annual Conference",
      badge: "KEYNOTES & BREAKOUTS",
      title: "Keynote Speaking & Conference Breakouts",
      desc: "High-impact keynote addresses, convention breakouts, and interactive workshops designed for AGC chapters and construction associations. Practical, field-tested insights your attendees will apply immediately on Monday morning.",
      deliverables: [
        "4 Signature Keynotes: The Influence Model, From Strong Builder, Load-Bearing Values, Communication & Margin",
        "Pre-approved Committee Package (Bio, AV spec rider, high-res headshots)",
        "1-Click Copyable Board Recommendation Proposal Email",
        "Live stage video reel available for immediate board evaluation",
      ],
      primaryActionLabel: "View Speaker Reel & Topics",
      primaryActionHref: "#speaker-reel",
      secondaryActionLabel: "Download Speaker Kit",
      secondaryAction: onOpenSpeakerKit,
      themeColor: "text-[#B64F43] border-[#B64F43]",
    },
    {
      id: "contractors",
      icon: HardHat,
      label: "Contractors & Operations VPs",
      question: "I'm a Contractor looking to develop PMs, Superintendents & Field Supervisors",
      badge: "MULTI-SESSION TRAINING",
      title: "Contractor Leadership & PM Development",
      desc: "Multi-session leadership engagements built to elevate Project Managers, Superintendents, Foremen, and Field Engineers into confident leaders who communicate clearly, hold subcontractors accountable, and protect job profit margins.",
      deliverables: [
        "Project Manager Development Program (4-8 weekly modules)",
        "From Strong Builder to Leader of People (craft-to-superintendent transition)",
        "5 Voices Team Communication (eliminating field-office friction)",
        "On-site customized workshops and 1:1 executive coaching",
      ],
      primaryActionLabel: "Explore Training Tracks",
      primaryActionHref: "#training-programs",
      secondaryActionLabel: "Discuss Team Development Call",
      secondaryAction: onOpenCalendly,
      themeColor: "text-[#0C263D] border-[#0C263D]",
    },
    {
      id: "estimating",
      icon: Calculator,
      label: "Estimating & Pre-Con Teams",
      question: "I want to audit estimating risk and protect pre-con bid margins",
      badge: "MARGIN & BID DISCIPLINE",
      title: "Estimating with Impact: Margin Protection",
      desc: "Uncover hidden indirect jobsite costs, establish disciplined risk contingency protocols, and close the dangerous handover gap between estimating assumptions and field execution.",
      deliverables: [
        "Auditing unbilled field overhead, equipment creep, and logistical burdens",
        "Defending risk contingencies without losing competitive bids",
        "Standardized Pre-Con to Operations Handover Frameworks",
        "Interactive Jobsite Margin Risk Audit & Calculator",
      ],
      primaryActionLabel: "Calculate Jobsite Margin Risk",
      primaryActionHref: "#friction",
      secondaryActionLabel: "Schedule Pre-Con Workshop Call",
      secondaryAction: onOpenCalendly,
      themeColor: "text-[#31485A] border-[#31485A]",
    },
    {
      id: "cohort",
      icon: Users2,
      label: "Scalable Leadership Cohort",
      question: "I want to enroll rising leaders into an 8-Week Multi-Company Cohort",
      badge: "ACADEMY COHORT",
      title: "The 8-Week Construction Leadership Academy",
      desc: "A scalable, quarterly peer mastermind where PMs and Superintendents learn alongside high-performing peers from non-competing regional contractors with live weekly coaching from Dan Beatty.",
      deliverables: [
        "8-Week live interactive masterclasses with Dan Beatty",
        "Weekly jobsite field assignments and communication playbooks",
        "Executive dashboard updates for Operations VPs",
        "Limited to 25 leaders per cohort for direct mentorship",
      ],
      primaryActionLabel: "View 8-Week Syllabus",
      primaryActionHref: "#cohort-program",
      secondaryActionLabel: "Apply for Cohort Seats",
      secondaryAction: onOpenCohortApply || onOpenCalendly,
      themeColor: "text-[#B64F43] border-[#B64F43]",
    },
  ];

  const currentObj = objectives.find((o) => o.id === selectedObjective) || objectives[0];

  return (
    <section id="choose-objective" className="bg-[#F8F9FA] py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Question Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B64F43] shadow-sm">
            <Sparkles className="size-3.5" />
            <span>Interactive Program Matcher</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C263D]">
            What brought you here today?
          </h2>
          <p className="text-base text-slate-600">
            Select your role or primary objective below to view tailored programs, deliverables, and committee-ready resources.
          </p>
        </div>

        {/* 4 Interactive Question Option Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((obj) => {
            const Icon = obj.icon;
            const isSelected = selectedObjective === obj.id;
            return (
              <button
                key={obj.id}
                type="button"
                onClick={() => setSelectedObjective(obj.id as any)}
                className={
                  "rounded-2xl p-6 text-left transition-all cursor-pointer flex flex-col justify-between border-2 " +
                  (isSelected
                    ? "bg-[#0C263D] text-white border-[#B64F43] shadow-xl scale-[1.02] ring-2 ring-[#B64F43]/30"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-md")
                }
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={
                        "flex size-11 items-center justify-center rounded-xl " +
                        (isSelected ? "bg-[#B64F43] text-white" : "bg-slate-100 text-[#0C263D]")
                      }
                    >
                      <Icon className="size-5" />
                    </div>
                    <span
                      className={
                        "text-[0.68rem] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded " +
                        (isSelected ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-600")
                      }
                    >
                      {obj.badge}
                    </span>
                  </div>

                  <p
                    className={
                      "text-xs font-bold uppercase tracking-wider mb-1 " +
                      (isSelected ? "text-[#B64F43]" : "text-slate-500")
                    }
                  >
                    {obj.label}
                  </p>
                  <p
                    className={
                      "font-serif text-sm sm:text-base font-bold leading-snug " +
                      (isSelected ? "text-white" : "text-[#0C263D]")
                    }
                  >
                    "{obj.question}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? "text-slate-300" : "text-[#B64F43]"}>
                    {isSelected ? "Active Selection ✓" : "Select Path"}
                  </span>
                  <ChevronRight
                    className={
                      "size-4 " + (isSelected ? "text-[#B64F43] translate-x-1" : "text-slate-400")
                    }
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel for Selected Objective */}
        <div className="mt-8 rounded-2xl border-2 border-[#0C263D] bg-white p-8 sm:p-12 shadow-2xl animate-in fade-in duration-300">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#B64F43]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B64F43]">
                  {currentObj.badge}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Tailored for: <strong>{currentObj.label}</strong>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C263D]">
                {currentObj.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentObj.desc}
              </p>

              <div className="pt-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0C263D] mb-3">
                  Included Deliverables & Frameworks:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {currentObj.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="size-4 text-[#B64F43] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0C263D]">
                  Next Step for Your Team
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Review the complete curriculum, download one-sheets for your board, or schedule a 15-minute discovery call with Dan.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={currentObj.primaryActionHref}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0C263D] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#183F63] transition-all shadow text-center"
                >
                  <span>{currentObj.primaryActionLabel}</span>
                  <ArrowRight className="size-4" />
                </a>

                <button
                  type="button"
                  onClick={currentObj.secondaryAction}
                  className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white py-3 text-xs font-extrabold uppercase tracking-wider text-slate-800 hover:bg-slate-100 transition-all text-center"
                >
                  <span>{currentObj.secondaryActionLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
