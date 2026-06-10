"use client";

import { useState, useEffect } from "react";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";

const posts = [
    {
        id: "01",
        title: "Building Nyra: Lessons from Shipping Voice AI",
        excerpt: "What I learned building a production-ready voice-first AI assistant — from latency challenges to conversation memory architecture.",
        content: "Building Nyra taught me that voice AI is fundamentally different from text-based AI. The latency requirements are brutal — users expect responses under 200ms, which means every millisecond of pipeline processing matters. I ended up restructuring the entire architecture around streaming, using LiveKit for real-time WebRTC transport and OpenAI's streaming API for token-by-token generation.\n\nThe conversation memory problem was equally challenging. Unlike chat interfaces where users tolerate context windows, voice conversations demand natural memory recall. I implemented a hybrid approach: short-term memory via sliding context windows, and long-term memory using vector embeddings stored in a persistent database.\n\nThe biggest lesson? Ship the MVP first, then iterate. Nyra v1 was barely functional, but it proved the concept and attracted the feedback I needed to build v2.",
        category: "AI Engineering",
        date: "2026",
        readTime: "8 min read",
        accent: "#4a9eff",
        tags: ["Voice AI", "FastAPI", "OpenAI"],
    },
    {
        id: "02",
        title: "From Jupyter to Production: A Practical Guide",
        excerpt: "The gap between a working notebook and a deployed product is massive. Here's the playbook I use for every AI project.",
        content: "Every data scientist knows the pain: your notebook runs perfectly, but deploying it to production is a nightmare. After shipping multiple AI products, I've developed a systematic approach.\n\nStep 1: Refactor into modules. Notebooks are great for exploration, but production code needs structure. I extract every reusable function into separate modules with proper type hints and docstrings.\n\nStep 2: Add configuration management. Hardcoded paths and parameters are the enemy. I use environment variables and config files from day one.\n\nStep 3: Containerize early. Docker isn't optional — it's essential. I create a Dockerfile as soon as I have a working prototype, ensuring reproducibility across environments.\n\nStep 4: Implement monitoring. Models degrade silently without observability. I add logging, metrics, and alerting before the first deployment.\n\nStep 5: Automate testing. Unit tests for data processing, integration tests for API endpoints, and end-to-end tests for the full pipeline.",
        category: "Engineering",
        date: "2025",
        readTime: "12 min read",
        accent: "#e8b878",
        tags: ["MLOps", "Docker", "Deployment"],
    },
    {
        id: "03",
        title: "Why Most AI Projects Fail (And How to Fix It)",
        excerpt: "90% of AI projects never make it to production. The problem isn't the model — it's the approach to building products.",
        content: "After working on 10+ AI projects, I've seen the same failure patterns repeat. Here are the three biggest reasons AI projects die, and what to do instead.\n\n1. Starting with the model, not the problem. Teams often pick the latest architecture before understanding what the user actually needs. Start with the simplest solution that could work.\n\n2. Over-engineering from day one. Building a perfect training pipeline before validating the concept is a waste. Use pre-trained APIs and off-the-shelf models first.\n\n3. Ignoring the feedback loop. Shipping to production isn't the finish line — it's the starting line. Build systems that capture user feedback and enable rapid iteration.\n\nThe fix is simple: think like a product engineer, not a researcher. Your job isn't to build the best model — it's to solve the user's problem.",
        category: "Product Thinking",
        date: "2025",
        readTime: "6 min read",
        accent: "#51cf66",
        tags: ["Product", "Strategy", "AI"],
    },
    {
        id: "04",
        title: "Multivariate Analysis: Finding Needles in Data Haystacks",
        excerpt: "How I used PCA and Factor Analysis to reduce 55 manufacturing variables to 3 actionable factors — and what it taught me about data storytelling.",
        content: "Working with high-dimensional manufacturing data is like trying to find patterns in a blizzard. My case study analyzed 1,000 observations across 55 variables to identify root causes of defects.\n\nThe key insight: most variables were correlated. Machine speed, temperature, and pressure weren't independent — they formed latent factors that actually drove defect rates.\n\nUsing PCA, I reduced 55 variables to 3 principal factors explaining 67.94% of variance. Factor Analysis confirmed the structure: a 'Machine Performance' factor, a 'Environmental' factor, and a 'Material Quality' factor.\n\nHotelling's T² control charts revealed that 40% of defects occurred when multiple factors simultaneously deviated from their norms — something univariate analysis completely missed.\n\nThe business impact? A 40% reduction in defect detection time and a clear framework for prioritizing interventions. Sometimes, less data really is more.",
        category: "Data Science",
        date: "2024",
        readTime: "10 min read",
        accent: "#a78bfa",
        tags: ["PCA", "Statistics", "R"],
    },
];

const BlogCard = ({ post, index }: { post: (typeof posts)[0]; index: number }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <FadeUp delay={index * 0.1} duration={1}>
            <button
                id={post.id}
                onClick={() => setExpanded(!expanded)}
                style={{
                    display: "block",
                    width: "100%",
                    padding: "2.5rem",
                    border: `1px solid ${expanded ? post.accent : "rgba(232, 184, 120, 0.1)"}`,
                    borderRadius: "16px",
                    background: expanded
                        ? `linear-gradient(135deg, ${post.accent}08, transparent)`
                        : "rgba(232, 184, 120, 0.02)",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    textAlign: "left",
                    font: "inherit",
                    color: "inherit",
                    outline: "none",
                }}
                onMouseEnter={(e) => {
                    if (!expanded) {
                        e.currentTarget.style.borderColor = post.accent;
                        e.currentTarget.style.background = `linear-gradient(135deg, ${post.accent}08, transparent)`;
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = `0 20px 60px ${post.accent}15`;
                    }
                }}
                onMouseLeave={(e) => {
                    if (!expanded) {
                        e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.1)";
                        e.currentTarget.style.background = "rgba(232, 184, 120, 0.02)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                    }
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
                        opacity: expanded ? 1 : 0,
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

                {expanded && (
                    <div
                        style={{
                            fontSize: "0.9rem",
                            color: "#c0c0c8",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                            whiteSpace: "pre-line",
                            animation: "fadeIn 0.4s ease",
                        }}
                    >
                        {post.content}
                    </div>
                )}

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
                        {expanded ? "Show Less" : "Read More"}
                        <span
                            style={{
                                transition: "transform 0.3s ease",
                                transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                            }}
                        >
                            →
                        </span>
                    </span>
                </div>
            </button>
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
                    maxWidth: "1600px",
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
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 768px) {
                    :global(.blog-grid) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
}