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

const caseStudy = {
    id: "02",
    title: "Manufacturing Defect Analysis",
    subtitle: "Multivariate Statistical Modeling for Quality Intelligence",
    category: "Data Analytics",
    year: "2024",
    type: "Case Study",
    tools: ["R", "SPSS", "Excel"],
    methods: ["PCA", "Factor Analysis", "Regression Analysis", "Hotelling's T²"],
    description:
        "Identified root causes of manufacturing defects using PCA, Factor Analysis, and Hotelling's T² control charts — reducing defect detection time by 40%.",
    problem:
        "A manufacturing facility was experiencing persistent product quality issues across multiple production lines. Traditional quality control methods — examining one variable at a time — failed to identify the root causes because defects emerged from the combined interaction of temperature, machine speed, pressure, vibration, and material quality acting simultaneously.",
    solution:
        "Using Principal Component Analysis (PCA), Factor Analysis, Multivariate Regression, and Hotelling's T² Control Charts, I analyzed 1,000 time-stamped observations from smart manufacturing sensors. The analysis revealed that machine speed, temperature, and pressure are the dominant drivers of defect generation, explaining over 68% of quality variance through three latent process factors.",
    result:
        "The implementation of multivariate monitoring reduced defect detection time by 40% and identified process instabilities that univariate methods missed entirely. The methodology now serves as the foundation for the facility's quality intelligence framework.",
    stats: [
        { label: "Dataset Size", value: "1,000", unit: "observations" },
        { label: "Variance Explained", value: "67.94%", unit: "by 3 components" },
        { label: "Detection Time", value: "40%", unit: "reduction" },
        { label: "Out-of-Control Signals", value: "10", unit: "detected" },
    ],
    findings: [
        {
            title: "Machine Speed is the Dominant Quality Driver",
            description:
                "Factor Analysis shows Machine Speed loads at 0.883 on Factor 1 (highest loading). PCA shows -0.791 loading on PC1.",
            impact:
                "Machine Speed is the #1 lever for quality improvement. Optimizing speed settings can reduce defects by targeting the root cause, not symptoms.",
        },
        {
            title: "Temperature-Pressure Interaction Creates Defect Conditions",
            description:
                "Correlation of +0.409 between Temperature and Pressure. Both load strongly on PC1 (0.798 and 0.697 respectively).",
            impact:
                "When temperature and pressure rise together, defect probability increases. Monitoring this interaction — not individual thresholds — prevents quality issues.",
        },
        {
            title: "Three Latent Factors Explain 70.72% of Process Variance",
            description:
                "Factor Analysis reveals Factor 1 (Machine Operating Conditions: 32.62%), Factor 2 (Energy-Vibration Dynamics: 19.87%), Factor 3 (Product Quality: 18.23%).",
            impact:
                "Quality can be monitored through 3 composite indicators instead of 6 individual variables. This simplifies dashboards and reduces monitoring complexity by 50%.",
        },
        {
            title: "The Process is Statistically Out of Control",
            description:
                "Hotelling's T² chart shows 10 out-of-control signals in 55 observations (18.2%). Points 1, 6, 7, 27, 29, 31, 33, 45, 52, 54 exceed UCL.",
            impact:
                "The manufacturing process requires immediate intervention. The high instability rate indicates systemic issues, not random variation.",
        },
    ],
    recommendations: [
        "Investigate observations 1, 6, 7, 27, 29, 31, 33, 45, 52, 54 — these are statistically out of control",
        "Implement Hotelling's T² monitoring — replace individual univariate charts with multivariate T² charts",
        "Set Machine Speed alerts — since Machine Speed is the dominant quality driver (loading 0.883)",
        "Optimize Temperature-Pressure interaction — establish operating envelopes within quality limits",
        "Deploy Factor-Based dashboards — monitor 3 composite factors instead of 6 individual variables",
        "Establish regression-based quality prediction — use the model for real-time quality prediction",
    ],
    techStack: [
        { name: "R", description: "Statistical programming language" },
        { name: "SPSS", description: "Statistical analysis software" },
        { name: "Excel", description: "Data organization and visualization" },
        { name: "PCA", description: "Dimensionality reduction technique" },
        { name: "Factor Analysis", description: "Latent variable identification" },
        { name: "Regression", description: "Predictive modeling" },
        { name: "Hotelling's T²", description: "Multivariate process control" },
    ],
};

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

export default function ManufacturingCaseStudyPage() {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        document.title = "Manufacturing Case Study | Nikhil Khetavath";
    }, []);

    return (
        <main style={{ position: "relative", backgroundColor: "#080808", overflow: "hidden" }}>
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
                    <ChapterMarker chapter="Case Study" title="Data Analytics" position="left" />
                    <ChapterMarker
                        chapter="Project"
                        title={caseStudy.id}
                        position="right"
                        status={caseStudy.type}
                    />

                    <FadeUp delay={0.3}>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text={caseStudy.category} />
                        </div>
                    </FadeUp>

                    <h1
                        style={{
                            fontSize: "clamp(3rem, 10vw, 12rem)",
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: "-0.05em",
                            color: "#f5e6d3",
                            textTransform: "uppercase",
                            margin: "0 0 2rem",
                        }}
                    >
                        <TextReveal duration={1.2} delay={0.4}>
                            <div>DEFECT</div>
                        </TextReveal>
                        <TextReveal duration={1.2} delay={0.6}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #22c55e, #f5d4a3, #ffffff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                }}
                            >
                                ANALYSIS
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
                            {caseStudy.description}
                        </p>
                    </FadeUp>

                    <FadeUp delay={1.2}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <StatusBadge text={caseStudy.type} variant="available" />
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#a8a8b0",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    padding: "0.6rem 1.5rem",
                                    border: "1px solid rgba(34, 197, 94, 0.3)",
                                    borderRadius: "9999px",
                                }}
                            >
                                {caseStudy.year}
                            </div>
                        </div>
                    </FadeUp>
                </section>

                {/* ===== STATS ===== */}
                <section
                    style={{
                        padding: "4rem 3rem",
                        maxWidth: "1600px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {caseStudy.stats.map((stat, i) => (
                            <FadeUp key={stat.label} delay={i * 0.1}>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "clamp(2rem, 4vw, 3rem)",
                                            fontWeight: 700,
                                            color: "#22c55e",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        <NumberCounter end={parseInt(stat.value.replace(/,/g, ""))} duration={2} />
                                        {stat.value.includes("%") ? "%" : ""}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#a8a8b0",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#8a8a92",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {stat.unit}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== PROBLEM ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Problem" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                            }}
                        >
                            {caseStudy.problem}
                        </p>
                    </FadeUp>
                </section>

                {/* ===== SOLUTION ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Solution" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                            }}
                        >
                            {caseStudy.solution}
                        </p>
                    </FadeUp>
                </section>

                {/* ===== KEY FINDINGS ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Key Findings" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {caseStudy.findings.map((finding, i) => (
                            <FadeUp key={finding.title} delay={i * 0.1}>
                                <div
                                    style={{
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                        height: "100%",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 600,
                                            color: "#22c55e",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {finding.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            lineHeight: 1.6,
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        {finding.description}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        <strong>Impact:</strong> {finding.impact}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== TECH STACK ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Tech Stack & Methods" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {caseStudy.techStack.map((tech, i) => (
                            <FadeUp key={tech.name} delay={i * 0.05}>
                                <div
                                    style={{
                                        padding: "1rem 1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "9999px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#f5e6d3",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech.name}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#8a8a92",
                                        }}
                                    >
                                        •
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#a8a8b0",
                                        }}
                                    >
                                        {tech.description}
                                    </span>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== RECOMMENDATIONS ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Recommendations" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        {caseStudy.recommendations.map((rec, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1.5rem",
                                        alignItems: "flex-start",
                                        padding: "1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#22c55e",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            padding: "0.4rem 0.75rem",
                                            border: "1px solid rgba(34, 197, 94, 0.3)",
                                            borderRadius: "4px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}
                                    >
                                        {rec}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== RESULT ===== */}
                <section
                    style={{
                        padding: "8rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                        textAlign: "center",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Result" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                margin: "0 auto 3rem",
                            }}
                        >
                            {caseStudy.result}
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <MagneticButton strength={0.4}>
                                <Link
                                    href="/projects"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.5rem 3rem",
                                        backgroundColor: "transparent",
                                        color: "#f5e6d3",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        border: "1px solid rgba(232, 184, 120, 0.3)",
                                        letterSpacing: "0.05em",
                                        transition: "all 0.4s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.1)";
                                        e.currentTarget.style.borderColor = "#e8b878";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.3)";
                                    }}
                                >
                                    ← Back to Projects
                                </Link>
                            </MagneticButton>
                        </div>
                    </FadeUp>
                </section>
            </div>
        </main>
    );
}