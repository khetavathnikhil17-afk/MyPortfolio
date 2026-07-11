import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: `${post.title} — Nikhil Khetavath`,
        description: post.excerpt,
        keywords: [...post.tags, post.category, "Nikhil Khetavath", "blog"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://nikhilkhetavath.vercel.app/blog/${post.slug}`,
            siteName: "Nikhil Khetavath",
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://nikhilkhetavath.vercel.app/blog/${post.slug}`,
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) notFound();

    const paragraphs = post.content.split("\n\n");

    return (
        <main style={{ position: "relative", backgroundColor: "#000", overflow: "hidden" }}>
            <StarfieldBg density={80} twinkle={true} opacity={0.2} />
            <NoiseBg opacity={0.04} />

            <article
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "8rem 2rem 6rem",
                }}
            >
                <ChapterMarker chapter="Blog" title={post.category} position="left" />

                <FadeUp delay={0.2}>
                    <Link
                        href="/blog"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.8rem",
                            color: "#8a8a92",
                            textDecoration: "none",
                            letterSpacing: "0.1em",
                            marginBottom: "3rem",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#e8b878";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#8a8a92";
                        }}
                    >
                        ← Back to Blog
                    </Link>
                </FadeUp>

                <FadeUp delay={0.3}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                        <EditorialLabel text={post.category} />
                        <span style={{ color: "#8a8a92", fontSize: "0.65rem" }}>/</span>
                        <span style={{ fontSize: "0.65rem", color: "#8a8a92", letterSpacing: "0.2em" }}>
                            {post.readTime}
                        </span>
                        <span style={{ color: "#8a8a92", fontSize: "0.65rem" }}>/</span>
                        <span style={{ fontSize: "0.65rem", color: "#8a8a92", letterSpacing: "0.2em" }}>
                            {post.date}
                        </span>
                    </div>
                </FadeUp>

                <FadeUp delay={0.4}>
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            fontWeight: 700,
                            color: "#f5e6d3",
                            lineHeight: 1.2,
                            letterSpacing: "-0.03em",
                            marginBottom: "2rem",
                        }}
                    >
                        {post.title}
                    </h1>
                </FadeUp>

                <FadeUp delay={0.5}>
                    <p
                        style={{
                            fontSize: "1.125rem",
                            color: "#a8a8b0",
                            lineHeight: 1.7,
                            marginBottom: "3rem",
                            fontStyle: "italic",
                            borderLeft: `3px solid ${post.accent}`,
                            paddingLeft: "1.5rem",
                        }}
                    >
                        {post.excerpt}
                    </p>
                </FadeUp>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "4rem" }}>
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontSize: "0.7rem",
                                color: "#8a8a92",
                                padding: "0.35rem 0.8rem",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                borderRadius: "9999px",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                    {paragraphs.map((paragraph, i) => (
                        <FadeUp key={i} delay={0.1 * i} duration={0.8}>
                            <p
                                style={{
                                    fontSize: "1.05rem",
                                    color: "#c0c0c8",
                                    lineHeight: 1.85,
                                }}
                            >
                                {paragraph}
                            </p>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.3}>
                    <div
                        style={{
                            marginTop: "5rem",
                            paddingTop: "3rem",
                            borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                            textAlign: "center",
                        }}
                    >
                        <Link
                            href="/blog"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                fontSize: "0.9rem",
                                color: "#e8b878",
                                textDecoration: "none",
                                letterSpacing: "0.1em",
                                transition: "gap 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.gap = "1.25rem";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.gap = "0.75rem";
                            }}
                        >
                            ← All Posts
                        </Link>
                    </div>
                </FadeUp>
            </article>
        </main>
    );
}
