import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nikhil Khetavath — About",
    description:
        "AI/ML and full-stack engineering student at VIT BHOPAL. Building AI-driven products with real-world impact.",
    keywords: [
        "AI engineer",
        "full stack developer",
        "machine learning",
        "Nikhil Khetavath",
        "portfolio",
    ],
    openGraph: {
        title: "Nikhil Khetavath — About",
        description:
            "AI/ML and full-stack engineering student at VIT BHOPAL. Building AI-driven products with real-world impact.",
        url: "https://nikhilkhetavath.vercel.app/about",
        siteName: "Nikhil Khetavath",
        type: "profile",
        images: [
            {
                url: "https://nikhilkhetavath.vercel.app/og/about.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Khetavath — About",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nikhil Khetavath — About",
        description:
            "AI/ML and full-stack engineering student at VIT BHOPAL. Building AI-driven products with real-world impact.",
        images: ["https://nikhilkhetavath.vercel.app/og/about.png"],
    },
    alternates: {
        canonical: "https://nikhilkhetavath.vercel.app/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
