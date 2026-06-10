import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PremiumCursor from "@/components/cursor/PremiumCursor";
import GhostCursorWrapper from "@/components/cursor/GhostCursorWrapper";
import { CursorProvider } from "@/components/cursor/CursorContext";
import IntroWrapper from "@/components/screens/IntroWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/transitions/PageTransition";
import ScrollProgress from "@/components/transitions/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import ExitPopup from "@/components/ui/ExitPopup";

export const metadata: Metadata = {
  title: "Nikhil Khetavath | AI Product Engineer",
  description: "AI Product Engineer who takes machine learning from Jupyter notebooks to production products. Specializing in voice-first AI, autonomous systems, and full-stack AI applications.",
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "theme-color": "#000000",
  },
  metadataBase: new URL("https://nikhilkhetavath.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilkhetavath.vercel.app",
    siteName: "Nikhil Khetavath",
    title: "Nikhil Khetavath | AI Product Engineer",
    description: "AI Product Engineer who takes machine learning from Jupyter notebooks to production products. Specializing in voice-first AI, autonomous systems, and full-stack AI applications.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nikhil Khetavath - AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Khetavath | AI Product Engineer",
    description: "AI Product Engineer who takes machine learning from Jupyter notebooks to production products.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikhil Khetavath",
    jobTitle: "AI Product Engineer",
    url: "https://nikhilkhetavath.vercel.app",
    sameAs: [
      "https://github.com/khetavathnikhil17-afk",
      "https://www.linkedin.com/in/nikhilkhetavath-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "https://x.com/KhetavathNikhil",
    ],
    email: "khetavathnikhil17@gmail.com",
    description: "AI Product Engineer who takes machine learning from Jupyter notebooks to production products. Specializing in voice-first AI, autonomous systems, and full-stack AI applications.",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Voice AI",
      "Autonomous Systems",
      "Full-Stack Development",
      "Product Engineering",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Bachelor's Degree",
        name: "B.Sc. Computer Science",
        recognizedBy: {
          "@type": "Organization",
          name: "Osmania University",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#a8a8b0", backgroundColor: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
            <h1 style={{ color: "#f5e6d3", fontSize: "2rem" }}>Nikhil Khetavath | AI Product Engineer</h1>
            <p>Please enable JavaScript to view this portfolio.</p>
            <a href="mailto:khetavathnikhil17@gmail.com" style={{ color: "#e8b878" }}>Contact me via email</a>
          </div>
        </noscript>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <CursorProvider>
          <PremiumCursor />
          <GhostCursorWrapper 
            showOnScroll={true}
            scrollThreshold={100}
            color="#e8b878"
            trailLength={20}
            bloomStrength={0.3}
          />
          <ScrollProgress />
          <BackToTop />
          <ExitPopup />
          <IntroWrapper>
            <Navbar />
            <SmoothScroll>
              <PageTransition>
                {children}
                <Footer />
              </PageTransition>
            </SmoothScroll>
          </IntroWrapper>
        </CursorProvider>
      </body>
    </html>
  );
}