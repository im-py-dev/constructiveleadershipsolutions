import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dan Beatty | Constructive Leadership Solutions | Construction Keynote Speaker & Training",
  description: "Approved AGC Edge instructor and construction veteran since 1984. Dan Beatty provides high-impact keynotes for AGC conventions and multi-session leadership development programs for project managers and superintendents.",
  keywords: [
    "construction leadership speaker",
    "AGC keynote speaker",
    "construction PM training",
    "superintendent leadership",
    "Dan Beatty",
    "Constructive Leadership Solutions",
    "5 Voices construction",
    "estimating with impact"
  ],
  authors: [{ name: "Dan Beatty", url: "https://constructiveleadershipsolutions.com" }],
  openGraph: {
    title: "Dan Beatty | Constructive Leadership Solutions",
    description: "Build the number. Lead the people who have to hit it. Keynotes, Project Manager Development, and Cohort Training for Construction.",
    url: "https://constructiveleadershipsolutions.vercel.app",
    siteName: "Constructive Leadership Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Beatty | Construction Leadership Speaker & Training",
    description: "Build the number. Lead the people who have to hit it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://constructiveleadershipsolutions.com/#danbeatty",
        "name": "Daniel 'Dan' Beatty",
        "jobTitle": "Construction Leadership Speaker & Trainer",
        "worksFor": {
          "@type": "Organization",
          "name": "Constructive Leadership Solutions",
          "url": "https://constructiveleadershipsolutions.com"
        },
        "description": "Approved AGC Edge instructor with 40+ years of construction experience since 1984, Certified 5 Voices Facilitator, and Certified Values Identifier Coach.",
        "sameAs": [
          "https://www.linkedin.com/in/danbeattycls/",
          "https://calendly.com/dan-danbeatty"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://constructiveleadershipsolutions.com/#organization",
        "name": "Constructive Leadership Solutions",
        "url": "https://constructiveleadershipsolutions.com",
        "telephone": "+17033807923",
        "email": "dan@constructiveleadershipsolutions.com",
        "description": "High-impact keynote speaking for construction associations and multi-session leadership training for general and specialty contractors.",
        "founder": {
          "@id": "https://constructiveleadershipsolutions.com/#danbeatty"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lora.variable} ${plusJakarta.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
