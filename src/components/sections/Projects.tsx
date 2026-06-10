"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import GridBg from "@/components/backgrounds/GridBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import CornerBrackets from "@/components/elements/CornerBrackets";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import LazyVideo from "@/components/ui/LazyVideo";

const projectsData = [
    {
        id: "01",
        title: "Nyra AI",
        category: "AI Product / Full-Stack",
        description: "Voice-first AI assistant that understands context, remembers conversations, and executes tasks in real-time. Built with LiveKit for streaming, OpenAI for reasoning, and FastAPI for orchestration.",
        tags: ["Python", "LiveKit", "OpenAI API", "FastAPI", "React.js"],
        year: "2026",
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
        category: "Data Analytics / Statistical Modeling",
        description: "Analyzed 1,000 sensor observations to identify root causes of manufacturing defects. Used PCA, Factor Analysis, and Hotelling's T² control charts to reduce defect detection time by 40%.",
        tags: ["R", "SPSS", "Excel", "PCA", "Factor Analysis", "Regression", "Hotelling's T²"],
        year: "2024",
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

const ProjectPlanet = ({
    project,
    index,
}: {
    project: (typeof projectsData)[0];
    index: number;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const isEven = index % 2 === 0;

    return (
        <FadeUp delay={index * 0.15} duration={1.2} distance={80}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                    marginBottom: "8rem",
                }}
                className="project-row"
            >
                <div
                    style={{ order: isEven ? 1 : 2, position: "relative" }}
                    className="project-visual"
                >
                    <Link
                        href={project.link || "https://github.com/khetavathnikhil17-afk/Nyra.git"}
                        target={project.link?.startsWith("http") ? "_blank" : undefined}
                        rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onMouseMove={handleMouseMove}
                        style={{
                            display: "block",
                            textDecoration: "none",
                            position: "relative",
                            cursor: "none",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "1/1",
                                padding: "2rem",
                            }}
                        >
                            <CornerBrackets size={40} opacity={0.3} />

                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    position: "relative",
                                    overflow: "hidden",
                                    transform: isHovered
                                        ? `scale(1.05) rotate(${(mousePos.x - 50) * 0.1}deg)`
                                        : "scale(1)",
                                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                    boxShadow: isHovered
                                        ? `0 0 100px ${project.accent}50, inset 0 0 60px rgba(0,0,0,0.3)`
                                        : `0 0 40px ${project.accent}20, inset 0 0 60px rgba(0,0,0,0.3)`,
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
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                )}

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `linear-gradient(${isHovered ? mousePos.x * 3.6 : 135}deg, transparent 30%, rgba(0,0,0,0.5) 80%)`,
                                        transition: "background 0.4s ease",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    inset: "-10px",
                                    borderRadius: "50%",
                                    border: "1px dashed rgba(74, 158, 255, 0.2)",
                                    pointerEvents: "none",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: "-30px",
                                    borderRadius: "50%",
                                    border: "1px dashed rgba(74, 158, 255, 0.1)",
                                    pointerEvents: "none",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "1rem",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    fontSize: "0.65rem",
                                    color: "#f5e6d3",
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    opacity: isHovered ? 1 : 0,
                                    transition: "opacity 0.4s ease",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                ◉ EXPLORE
                            </div>
                        </div>
                    </Link>
                </div>

                <div
                    style={{
                        order: isEven ? 2 : 1,
                        padding: isEven ? "0 0 0 2rem" : "0 2rem 0 0",
                    }}
                >
                    <div
                        style={{
                            marginBottom: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <EditorialLabel text={`Project ${project.id}`} />
                        <span style={{ color: "#777777", fontSize: "0.65rem" }}>/</span>
                        <span
                            style={{
                                fontSize: "0.65rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.4em",
                            }}
                        >
                            {project.year}
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: "0.7rem",
                            color: "#a8a8b0",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            marginBottom: "1rem",
                        }}
                    >
                        {project.category}
                    </div>

                    <TextReveal duration={1} delay={0.2}>
                        <h3
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                fontWeight: 700,
                                color: "#f5e6d3",
                                marginBottom: "2rem",
                                textTransform: "uppercase",
                                letterSpacing: "-0.03em",
                                lineHeight: 1,
                            }}
                        >
                            {project.title}
                        </h3>
                    </TextReveal>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#a8a8b0",
                            marginBottom: "2.5rem",
                            maxWidth: "450px",
                            lineHeight: 1.7,
                        }}
                    >
                        {project.description}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#8a8a92",
                                    padding: "0.4rem 0.9rem",
                                    border: "1px solid rgba(74, 158, 255, 0.2)",
                                    borderRadius: "9999px",
                                    letterSpacing: "0.1em",
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
                                gap: "2rem",
                                marginBottom: "2.5rem",
                                padding: "1.25rem 1.5rem",
                                background: "rgba(74, 158, 255, 0.05)",
                                border: "1px solid rgba(74, 158, 255, 0.1)",
                                borderRadius: "12px",
                            }}
                        >
                            {project.metrics.map((metric, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            fontSize: "0.6rem",
                                            color: "#8a8a92",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1rem",
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

                    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                        <MagneticButton strength={0.3}>
                            <Link
                                href={project.link}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    fontSize: "0.95rem",
                                    color: "#f5e6d3",
                                    textDecoration: "none",
                                    borderBottom: `1px solid ${project.accent}`,
                                    paddingBottom: "0.5rem",
                                    transition: "all 0.4s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = project.accent;
                                    e.currentTarget.style.gap = "1.5rem";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#f5e6d3";
                                    e.currentTarget.style.gap = "1rem";
                                }}
                            >
                                {project.link.startsWith("/") ? "Read Case Study" : "View Project"}
                                <span style={{ fontSize: "1.25rem", color: project.accent }}>→</span>
                            </Link>
                        </MagneticButton>

                        {project.link.startsWith("/") && (
                            <MagneticButton strength={0.3}>
                                <Link
                                    href="/projects"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        fontSize: "0.85rem",
                                        color: "#8a8a92",
                                        textDecoration: "none",
                                        transition: "all 0.4s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#a8a8b0";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#8a8a92";
                                    }}
                                >
                                    View All Projects
                                </Link>
                            </MagneticButton>
                        )}
                    </div>
                </div>
            </div>
        </FadeUp>
    );
};

const Projects = () => {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#000",
                padding: "8rem 0",
                overflow: "hidden",
            }}
        >
            <StarfieldBg density={80} twinkle={true} opacity={0.3} />
            <GridBg size={80} color="rgba(74, 158, 255, 0.03)" fade={true} />
            <NoiseBg opacity={0.05} />

            <ChapterMarker chapter="Chapter 05" title="Featured Work" position="left" />
            <ChapterMarker chapter="Projects" title="Projects" position="right" status="Showcase" />

            <div
                style={{
                    maxWidth: "1600px",
                    margin: "0 auto",
                    padding: "0 3rem",
                    position: "relative",
                    zIndex: 10,
                    marginTop: "5rem",
                }}
            >
                <div style={{ marginBottom: "6rem" }}>
                    <SectionHeader
                        label="Selected Work"
                        primary="FEATURED"
                        secondary="WORK"
                        secondaryAlign="right"
                    />
                </div>

                <div>
                    {projectsData.map((project, i) => (
                        <ProjectPlanet key={project.id} project={project} index={i} />
                    ))}
                </div>

                <FadeUp delay={0.3}>
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "4rem",
                            borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                        }}
                    >
                        <div style={{ marginBottom: "1.5rem" }}>
                            <EditorialLabel text="More Coming Soon" />
                        </div>

                        <MagneticButton strength={0.4}>
                            <Link
                                href="/projects"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1.25rem 2.5rem",
                                    backgroundColor: "rgba(245, 230, 211, 0.05)",
                                    color: "#f5e6d3",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    fontSize: "0.95rem",
                                    fontWeight: 500,
                                    border: "1px solid rgba(232, 184, 120, 0.3)",
                                    transition: "all 0.3s ease",
                                    backdropFilter: "blur(10px)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#e8b878";
                                    e.currentTarget.style.color = "#e8b878";
                                    e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.3)";
                                    e.currentTarget.style.color = "#f5e6d3";
                                    e.currentTarget.style.backgroundColor = "rgba(245, 230, 211, 0.05)";
                                }}
                            >
                                Explore All Projects
                                <span style={{ fontSize: "1.25rem", color: "#e8b878" }}>→</span>
                            </Link>
                        </MagneticButton>
                    </div>
                </FadeUp>
            </div>

        </section>
    );
};

export default Projects;
