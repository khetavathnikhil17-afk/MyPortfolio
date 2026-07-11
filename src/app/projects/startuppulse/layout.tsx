import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "StartupPulse AI — Explainable Sentiment Analysis | Nikhil Khetavath",
    description:
        "An AI-powered employee feedback intelligence platform combining DeBERTa-v3 Transformer models with SHAP Explainable AI for transparent, aspect-level sentiment insights.",
    keywords: [
        "StartupPulse AI",
        "sentiment analysis",
        "explainable AI",
        "DeBERTa",
        "SHAP",
        "NLP",
        "machine learning",
        "employee feedback",
        "aspect-based sentiment analysis",
        "streamlit dashboard",
        "PyTorch",
        "transformer models",
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://nikhilkhetavath.vercel.app/projects/startuppulse",
        siteName: "Nikhil Khetavath",
        title: "StartupPulse AI — Explainable Aspect-Based Sentiment Analysis",
        description:
            "An AI-powered employee feedback intelligence platform combining DeBERTa-v3 with SHAP Explainable AI for transparent sentiment insights.",
        images: [
            {
                url: "/projects/startuppulse/hero.png",
                width: 1200,
                height: 630,
                alt: "StartupPulse AI — Explainable Sentiment Analysis Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "StartupPulse AI — Explainable Sentiment Analysis",
        description:
            "AI-powered employee feedback intelligence with DeBERTa-v3 and SHAP Explainable AI.",
        images: ["/projects/startuppulse/hero.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function StartupPulseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
