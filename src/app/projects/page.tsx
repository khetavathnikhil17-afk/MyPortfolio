"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Hls from "hls.js";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import GridBg from "@/components/backgrounds/GridBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import CornerBrackets from "@/components/elements/CornerBrackets";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import NumberCounter from "@/components/animations/NumberCounter";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import LazyVideo from "@/components/ui/LazyVideo";

const allProjects = [
    {
        id: "01",
        title: "Nyra AI",
        category: "AI Product",
        description:
            "Voice-first AI assistant that understands context, remembers conversations, and executes tasks in real-time. Built with LiveKit for streaming, OpenAI for reasoning, and FastAPI for orchestration.",
        tags: ["Python", "LiveKit", "OpenAI API", "FastAPI", "React.js"],
        year: "2026",
        type: "In Development",
        image: "/projects/nyra/portrait.png",
        video: "/projects/nyra/demo.mp4",
        accent: "#4a9eff",
        link: "https://github.com/khetavathnikhil17-afk/Nyra.git",
        metrics: [
            { label: "Voice Latency", value: "<200ms" },
            { label: "Uptime", value: "99.9%" },
            { label: "Languages", value: "12+" },
        ],
    },
    {
        id: "02",
        title: "Manufacturing Defect Analysis",
        category: "Data Analytics",
        description:
            "Analyzed 1,000 sensor observations to identify root causes of manufacturing defects. Used PCA, Factor Analysis, and Hotelling's T² control charts to reduce defect detection time by 40%.",
        tags: ["R", "SPSS", "Excel", "PCA", "Factor Analysis", "Regression", "Hotelling's T²"],
        year: "2024",
        type: "Case Study",
        image: "/projects/manufacturing/defect-analysis-chart.svg",
        accent: "#51cf66",
        link: "/projects/manufacturing",
        metrics: [
            { label: "Dataset", value: "1,000 obs" },
            { label: "Detection Time", value: "-40%" },
            { label: "Variance Explained", value: "67.94%" },
        ],
    },
];

const HLSVideo = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (src.includes(".m3u8") && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
            return () => hls.destroy();
        } else {
            video.src = src;
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
    );
};

const categories = ["All", "AI Product", "Data Analytics"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Projects | Nikhil Khetavath | AI Product Engineer";
    }, []);

    const filteredProjects =
        activeCategory === "All"
            ? allProjects
            : allProjects.filter((p) => p.category === activeCategory);

    return (
        <main style={{ position: "relative", backgroundColor: "#000", overflow: "hidden" }}>
            {/* Video background */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <HLSVideo src="https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8" />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
                    }}
                />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
            <StarfieldBg density={120} twinkle={true} opacity={0.3} />
            <GridBg size={80} color="rgba(232, 184, 120, 0.03)" fade={true} />
            <NoiseBg opacity={0.05} />

            {/* ===== HERO ===== */}
            <section
                style={{
                    position: "relative",
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "8rem 3rem 4rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <ChapterMarker chapter="Page 03" title="The Archive" position="left" />
                <ChapterMarker
                    chapter="Projects"
                    title="Archive"
                    position="right"
                    status={`${filteredProjects.length} Total`}
                />

                <FadeUp delay={0.3}>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="AI Products & Intelligent Systems" />
                    </div>
                </FadeUp>

                <h1
                    style={{
                        fontSize: "clamp(3.5rem, 12vw, 14rem)",
                        fontWeight: 700,
                        lineHeight: 0.85,
                        letterSpacing: "-0.05em",
                        color: "#f5e6d3",
                        textTransform: "uppercase",
                        margin: "0 0 3rem",
                    }}
                >
                    <TextReveal duration={1.2} delay={0.4}>
                        <div>PROJECTS</div>
                    </TextReveal>
                    <TextReveal duration={1.2} delay={0.6}>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #e8b878, #f5d4a3, #ffffff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            I&apos;ve built
                        </div>
                    </TextReveal>
                </h1>

                <FadeUp delay={1}>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                            color: "#a8a8b0",
                            maxWidth: "700px",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                        }}
                    >
                        From proactive AI platforms to intelligent automation systems — each project
                        is crafted with obsession for detail, performance, and real-world impact.
                    </p>
                </FadeUp>

                <FadeUp delay={1.2}>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <StatusBadge text="Open for Commissions" variant="available" />
                        <div
                            style={{
                                fontSize: "0.75rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                padding: "0.6rem 1.5rem",
                                border: "1px solid rgba(232, 184, 120, 0.3)",
                                borderRadius: "9999px",
                            }}
                        >
                            <NumberCounter end={allProjects.length} duration={2} /> Projects
                            Archived
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* ===== FILTERS ===== */}
            <section
                style={{
                    padding: "3rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                }}
            >
                <FadeUp>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <EditorialLabel text="Filter by Category" />
                        <div
                            style={{
                                display: "flex",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                            }}
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: "0.6rem 1.25rem",
                                        fontSize: "0.875rem",
                                        color: activeCategory === cat ? "#000" : "#a8a8b0",
                                        backgroundColor:
                                            activeCategory === cat ? "#e8b878" : "transparent",
                                        border: `1px solid ${activeCategory === cat ? "#e8b878" : "rgba(232, 184, 120, 0.2)"}`,
                                        borderRadius: "9999px",
                                        cursor: "none",
                                        transition: "all 0.3s ease",
                                        fontWeight: 500,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeCategory !== cat) {
                                            e.currentTarget.style.borderColor = "#e8b878";
                                            e.currentTarget.style.color = "#e8b878";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeCategory !== cat) {
                                            e.currentTarget.style.borderColor =
                                                "rgba(232, 184, 120, 0.2)";
                                            e.currentTarget.style.color = "#a8a8b0";
                                        }
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* ===== PROJECT GRID ===== */}
            <section
                style={{
                    padding: "6rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: filteredProjects.length === 1 ? "1fr" : "repeat(2, 1fr)",
                        gap: "3rem",
                        maxWidth: filteredProjects.length === 1 ? "900px" : "none",
                        margin: filteredProjects.length === 1 ? "0 auto" : "0",
                    }}
                    className="projects-archive-grid"
                >
                    {filteredProjects.map((project, i) => (
                        <FadeUp key={project.id} delay={i * 0.1} duration={1}>
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    display: "block",
                                    position: "relative",
                                    cursor: "none",
                                    textDecoration: "none",
                                }}
                            >
                                <div style={{ position: "relative", padding: "1rem" }}>
                                    <CornerBrackets size={30} opacity={0.3} />

                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            aspectRatio: "16/9",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            transform:
                                                hoveredId === project.id
                                                    ? "scale(1.02)"
                                                    : "scale(1)",
                                            transition:
                                                "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                            boxShadow:
                                                hoveredId === project.id
                                                    ? `0 30px 80px ${project.accent}30, inset 0 0 80px rgba(0,0,0,0.3)`
                                                    : `0 10px 40px ${project.accent}15, inset 0 0 80px rgba(0,0,0,0.3)`,
                                        }}
                                    >
                                        {project.video ? (
                                            <LazyVideo
                                                src={project.video}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        )}

                                        {/* Project info overlay */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                padding: "2rem",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "rgba(245, 230, 211, 0.8)",
                                                        letterSpacing: "0.3em",
                                                        textTransform: "uppercase",
                                                        padding: "0.4rem 0.75rem",
                                                        background: "rgba(0, 0, 0, 0.3)",
                                                        borderRadius: "4px",
                                                        backdropFilter: "blur(10px)",
                                                    }}
                                                >
                                                    {project.type}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "rgba(245, 230, 211, 0.8)",
                                                        letterSpacing: "0.3em",
                                                    }}
                                                >
                                                    / {project.id}
                                                </div>
                                            </div>

                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "rgba(245, 230, 211, 0.7)",
                                                        letterSpacing: "0.3em",
                                                        textTransform: "uppercase",
                                                        marginBottom: "0.5rem",
                                                    }}
                                                >
                                                    {project.category} • {project.year}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover overlay */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background:
                                                    "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85))",
                                                opacity: hoveredId === project.id ? 1 : 0.6,
                                                transition: "opacity 0.4s ease",
                                            }}
                                        />

                                        {/* "View" indicator */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "2rem",
                                                right: "2rem",
                                                padding: "0.75rem 1.5rem",
                                                background: "#e8b878",
                                                color: "#000",
                                                borderRadius: "9999px",
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                opacity: hoveredId === project.id ? 1 : 0,
                                                transform:
                                                    hoveredId === project.id
                                                        ? "translateY(0)"
                                                        : "translateY(10px)",
                                                transition: "all 0.4s ease",
                                            }}
                                        >
                                            View Project →
                                        </div>
                                    </div>
                                </div>

                                {/* Project details below */}
                                <div style={{ padding: "1.5rem 1rem 0" }}>
                                    <h3
                                        style={{
                                            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                                            fontWeight: 700,
                                            color: "#f5e6d3",
                                            marginBottom: "0.5rem",
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            marginBottom: "1rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: "0.7rem",
                                                    color: "#8a8a92",
                                                    padding: "0.3rem 0.75rem",
                                                    border: "1px solid rgba(232, 184, 120, 0.15)",
                                                    borderRadius: "9999px",
                                                    letterSpacing: "0.05em",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    {project.metrics && (
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "1.5rem",
                                                padding: "0.75rem 1rem",
                                                background: "rgba(232, 184, 120, 0.05)",
                                                border: "1px solid rgba(232, 184, 120, 0.1)",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            {project.metrics.map((metric: { label: string; value: string }, i: number) => (
                                                <div key={i}>
                                                    <div
                                                        style={{
                                                            fontSize: "0.55rem",
                                                            color: "#8a8a92",
                                                            letterSpacing: "0.15em",
                                                            textTransform: "uppercase",
                                                            marginBottom: "0.15rem",
                                                        }}
                                                    >
                                                        {metric.label}
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: "0.85rem",
                                                            fontWeight: 600,
                                                            color: project.accent,
                                                        }}
                                                    >
                                                        {metric.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </FadeUp>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <FadeUp>
                        <div
                            style={{
                                textAlign: "center",
                                padding: "6rem 0",
                            }}
                        >
                            <div style={{ marginBottom: "1rem" }}>
                                <EditorialLabel text="No Projects Yet" />
                            </div>
                            <p style={{ color: "#a8a8b0", fontSize: "1.125rem" }}>
                                No projects in this category. Try another filter.
                            </p>
                        </div>
                    </FadeUp>
                )}
            </section>

            {/* ===== CTA ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    textAlign: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                }}
            >
                <FadeUp>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="Have a Project in Mind?" />
                    </div>
                </FadeUp>

                <h2
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 6rem)",
                        fontWeight: 700,
                        color: "#f5e6d3",
                        letterSpacing: "-0.04em",
                        lineHeight: 0.95,
                        marginBottom: "3rem",
                        textTransform: "uppercase",
                    }}
                >
                    <TextReveal duration={1.2} delay={0.2}>
                        <div>Let&apos;s build</div>
                    </TextReveal>
                    <TextReveal duration={1.2} delay={0.4}>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #e8b878, #f5d4a3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            your next AI product
                        </div>
                    </TextReveal>
                </h2>

                <FadeUp delay={0.8}>
                    <MagneticButton strength={0.4}>
                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "1rem",
                                padding: "1.5rem 3rem",
                                backgroundColor: "#e8b878",
                                color: "#000",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                fontSize: "1.05rem",
                                fontWeight: 600,
                                boxShadow: "0 0 60px rgba(232, 184, 120, 0.4)",
                                letterSpacing: "0.05em",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#f5d4a3";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#e8b878";
                            }}
                        >
                            Start Your Project
                            <span style={{ fontSize: "1.25rem" }}>→</span>
                        </Link>
                    </MagneticButton>
                </FadeUp>
            </section>
            </div>
        </main>
    );
}
