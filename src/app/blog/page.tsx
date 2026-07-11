"use client";

import { useEffect } from "react";
import Link from "next/link";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";
import { posts } from "@/lib/blog-data";

const BlogCard = ({ post, index }: { post: (typeof posts)[0]; index: number }) => {
    return (
        <FadeUp delay={index * 0.1} duration={1}>
            <Link
                href={`/blog/${post.slug}`}
                style={{
                    display: "block",
                    padding: "2.5rem",
                    border: "1px solid rgba(232, 184, 120, 0.1)",
                    borderRadius: "16px",
                    background: "rgba(232, 184, 120, 0.02)",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden",
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = post.accent;
                    e.currentTarget.style.background = `linear-gradient(135deg, ${post.accent}08, transparent)`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 20px 60px ${post.accent}15`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.1)";
                    e.currentTarget.style.background = "rgba(232, 184, 120, 0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "3px",
                        height: "100%",
                        backgroundColor: post.accent,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    <EditorialLabel text={post.category} />
                    <span style={{ color: "#8a8a92", fontSize: "0.65rem" }}>/</span>
                    <span
                        style={{
                            fontSize: "0.65rem",
                            color: "#8a8a92",
                            letterSpacing: "0.2em",
                        }}
                    >
                        {post.readTime}
                    </span>
                </div>

                <h3
                    style={{
                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                        fontWeight: 600,
                        color: "#f5e6d3",
                        marginBottom: "1rem",
                        lineHeight: 1.3,
                        letterSpacing: "-0.02em",
                    }}
                >
                    {post.title}
                </h3>

                <p
                    style={{
                        fontSize: "0.95rem",
                        color: "#a8a8b0",
                        lineHeight: 1.7,
                        marginBottom: "1.5rem",
                    }}
                >
                    {post.excerpt}
                </p>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    fontSize: "0.65rem",
                                    color: "#8a8a92",
                                    padding: "0.3rem 0.7rem",
                                    border: "1px solid rgba(232, 184, 120, 0.15)",
                                    borderRadius: "9999px",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span
                        style={{
                            fontSize: "0.85rem",
                            color: post.accent,
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        Read Article
                        <span>→</span>
                    </span>
                </div>
            </Link>
        </FadeUp>
    );
};

export default function BlogPage() {
    useEffect(() => {
        document.title = "Blog | Nikhil Khetavath | AI Product Engineer";
    }, []);

    return (
        <main style={{ position: "relative", backgroundColor: "#000", overflow: "hidden" }}>
            <StarfieldBg density={80} twinkle={true} opacity={0.2} />
            <NoiseBg opacity={0.04} />

            {/* ===== HERO ===== */}
            <section
                style={{
                    position: "relative",
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "8rem 3rem 4rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <ChapterMarker chapter="Page 05" title="Insights" position="left" />
                <ChapterMarker chapter="Blog" title="Writing" position="right" status="04 Posts" />

                <FadeUp delay={0.3}>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="Thoughts & Insights" />
                    </div>
                </FadeUp>

                <h1
                    style={{
                        fontSize: "clamp(3rem, 10vw, 10rem)",
                        fontWeight: 700,
                        lineHeight: 0.9,
                        letterSpacing: "-0.04em",
                        color: "#f5e6d3",
                        textTransform: "uppercase",
                        margin: 0,
                    }}
                >
                    <span>THINKING</span>
                    <br />
                    <span
                        style={{
                            WebkitTextStroke: "1.5px #e8b878",
                            color: "transparent",
                            fontStyle: "italic",
                            fontWeight: 400,
                        }}
                    >
                        OUT LOUD
                    </span>
                </h1>

                <FadeUp delay={0.6}>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                            color: "#a8a8b0",
                            maxWidth: "600px",
                            lineHeight: 1.7,
                            marginTop: "2rem",
                        }}
                    >
                        Writing about AI engineering, product thinking, and the lessons learned building real products.
                    </p>
                </FadeUp>
            </section>

            {/* ===== POSTS ===== */}
            <section
                style={{
                    padding: "4rem 3rem 8rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "2rem",
                    }}
                    className="blog-grid"
                >
                    {posts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                    ))}
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 768px) {
                    :global(.blog-grid) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
}
