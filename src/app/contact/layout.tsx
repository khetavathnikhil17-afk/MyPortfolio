import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nikhil Khetavath — Contact",
    description:
        "Get in touch with Nikhil Khetavath for AI/ML projects, freelance work, or collaboration.",
    keywords: [
        "contact Nikhil Khetavath",
        "hire AI developer",
        "freelance machine learning engineer",
        "collaboration",
    ],
    openGraph: {
        title: "Nikhil Khetavath — Contact",
        description:
            "Get in touch with Nikhil Khetavath for AI/ML projects, freelance work, or collaboration.",
        url: "https://nikhilkhetavath.vercel.app/contact",
        siteName: "Nikhil Khetavath",
        type: "profile",
        images: [
            {
                url: "https://nikhilkhetavath.vercel.app/og/contact.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Khetavath — Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nikhil Khetavath — Contact",
        description:
            "Get in touch with Nikhil Khetavath for AI/ML projects, freelance work, or collaboration.",
        images: ["https://nikhilkhetavath.vercel.app/og/contact.png"],
    },
    alternates: {
        canonical: "https://nikhilkhetavath.vercel.app/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
