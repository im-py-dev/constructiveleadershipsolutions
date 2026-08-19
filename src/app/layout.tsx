import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Constructive Leadership Solutions | Dan Beatty | Construction Leadership Speaker & Training",
  description: "Dan Beatty helps construction associations and contractors turn high-stress jobsites into high-performing teams through practical keynotes, PM development, and executive leadership coaching.",
  openGraph: {
    title: "Constructive Leadership Solutions | Dan Beatty",
    description: "Build the number. Lead the people who have to hit it. Construction leadership from someone who has lived it since 1984.",
    url: "https://constructiveleadershipsolutions.com",
    siteName: "Constructive Leadership Solutions",
    images: [
      {
        url: "https://constructiveleadershipsolutions.com/wp-content/uploads/2026/08/01-Dan-Beatty_Standing.png",
        width: 1200,
        height: 630,
        alt: "Dan Beatty - Constructive Leadership Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://constructiveleadershipsolutions.com/wp-content/uploads/2025/04/cropped-Constructive-Leadership-Solutions-Light-Logo-March-2025-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#0C263D] selection:bg-[#B64F43] selection:text-white">
        {children}
      </body>
    </html>
  );
}
