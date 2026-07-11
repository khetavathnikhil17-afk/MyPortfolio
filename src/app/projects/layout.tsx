import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nikhil Khetavath — Projects",
    description:
        "AI/ML and full-stack projects by Nikhil Khetavath — from real-time deepfake detection to AI-powered journalism.",
    keywords: [
        "AI projects",
        "machine learning portfolio",
        "full stack projects",
        "Nikhil Khetavath projects",
    ],
    openGraph: {
        title: "Nikhil Khetavath — Projects",
        description:
            "AI/ML and full-stack projects by Nikhil Khetavath — from real-time deepfake detection to AI-powered journalism.",
        url: "https://nikhilkhetavath.vercel.app/projects",
        siteName: "Nikhil Khetavath",
        type: "website",
        images: [
            {
                url: "https://nikhilkhetavath.vercel.app/og/projects.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Khetavath — Projects",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nikhil Khetavath — Projects",
        description:
            "AI/ML and full-stack projects by Nikhil Khetavath — from real-time deepfake detection to AI-powered journalism.",
        images: ["https://nikhilkhetavath.vercel.app/og/projects.png"],
    },
    alternates: {
        canonical: "https://nikhilkhetavath.vercel.app/projects",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
