import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nikhil Khetavath — Blog",
    description:
        "Insights on AI engineering, machine learning pipelines, and full-stack development by Nikhil Khetavath.",
    keywords: [
        "AI blog",
        "machine learning engineering",
        "full stack development",
        "Nikhil Khetavath blog",
    ],
    openGraph: {
        title: "Nikhil Khetavath — Blog",
        description:
            "Insights on AI engineering, machine learning pipelines, and full-stack development by Nikhil Khetavath.",
        url: "https://nikhilkhetavath.vercel.app/blog",
        siteName: "Nikhil Khetavath",
        type: "website",
        images: [
            {
                url: "https://nikhilkhetavath.vercel.app/og/blog.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Khetavath — Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nikhil Khetavath — Blog",
        description:
            "Insights on AI engineering, machine learning pipelines, and full-stack development by Nikhil Khetavath.",
        images: ["https://nikhilkhetavath.vercel.app/og/blog.png"],
    },
    alternates: {
        canonical: "https://nikhilkhetavath.vercel.app/blog",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
