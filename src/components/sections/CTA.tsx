"use client";

import { useState } from "react";
import Link from "next/link";
import GradientMeshBg from "@/components/backgrounds/GradientMeshBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/animations/MagneticButton";
import NumberCounter from "@/components/animations/NumberCounter";
import TextReveal from "@/components/animations/TextReveal";
import LazyVideo from "@/components/ui/LazyVideo";

const CTA = () => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const infoStats = [
        { label: "Response Time", value: "24", suffix: "h", prefix: "Within ", detail: "Always quick" },
        { label: "Project Timeline", value: "2-8", suffix: " weeks", prefix: "", detail: "Depending on scope" },
    ];

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
            {/* Video background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <LazyVideo
                    src="/projects/nyra/showcase.mp4"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(10,6,5,0.8) 0%, rgba(26,15,8,0.7) 50%, rgba(5,3,2,0.85) 100%)" }} />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />

            <GradientMeshBg
                colors={["#e8b878", "#c89860", "#4a6fa5"]}
                speed={20}
                opacity={0.15}
            />
            <NoiseBg opacity={0.06} />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 110%)",
                    pointerEvents: "none",
                    zIndex: 3,
                }}
            />

            <ChapterMarker chapter="Chapter 07" title="Get In Touch" position="left" />
            <ChapterMarker chapter="Contact" title="Contact" position="right" status="Now Accepting" />

            <div
                onMouseMove={handleMouseMove}
                style={{
                    maxWidth: "1600px",
                    margin: "0 auto",
                    padding: "0 3rem",
                    position: "relative",
                    zIndex: 10,
                    marginTop: "5rem",
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(232, 184, 120, 0.15), transparent 50%)`,
                        pointerEvents: "none",
                        transition: "background 0.2s ease",
                    }}
                />

                <FadeUp delay={0.2}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <StatusBadge text="Currently Accepting Projects" variant="available" size="md" />
                    </div>
                </FadeUp>

                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h2
                        style={{
                            fontSize: "clamp(4rem, 14vw, 16rem)",
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: "-0.04em",
                            color: "#f5e6d3",
                            textTransform: "uppercase",
                            margin: 0,
                            textShadow: "0 0 60px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        <TextReveal duration={1.2} delay={0.4}>
                            <div>LET&apos;S</div>
                        </TextReveal>
                        <TextReveal duration={1.2} delay={0.6}>
                            <div
                                style={{
                                    background:
                                        "linear-gradient(135deg, #e8b878 0%, #f5d4a3 50%, #ffffff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                }}
                            >
                                Work Together
                            </div>
                        </TextReveal>
                    </h2>
                </div>

                <FadeUp delay={0.8}>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                            color: "#a8a8b0",
                            maxWidth: "650px",
                            margin: "0 auto 4rem",
                            lineHeight: 1.7,
                            textAlign: "center",
                            textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        Every great project begins with an idea and the courage to build it.
                        Bring your vision—I&apos;ll engineer the solution.
                    </p>
                </FadeUp>

                <FadeUp delay={1}>
                    <div
                        style={{
                            display: "flex",
                            gap: "1.25rem",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginBottom: "6rem",
                        }}
                    >
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
                                    transition: "all 0.4s ease",
                                    boxShadow: "0 0 60px rgba(232, 184, 120, 0.4)",
                                    letterSpacing: "0.05em",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "#f5d4a3";
                                    e.currentTarget.style.boxShadow =
                                        "0 20px 80px rgba(232, 184, 120, 0.6)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "#e8b878";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 60px rgba(232, 184, 120, 0.4)";
                                }}
                            >
                                Start a Project
                                <span
                                    style={{
                                        display: "inline-flex",
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        backgroundColor: "#000",
                                        color: "#e8b878",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    →
                                </span>
                            </Link>
                        </MagneticButton>

                        <MagneticButton strength={0.3}>
                            <a
                                href="mailto:khetavathnikhil17@gmail.com"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "1.5rem 3rem",
                                    backgroundColor: "rgba(245, 230, 211, 0.05)",
                                    color: "#f5e6d3",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    fontSize: "1.05rem",
                                    fontWeight: 500,
                                    border: "1px solid rgba(232, 184, 120, 0.3)",
                                    transition: "all 0.4s ease",
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
                                Send an Email
                            </a>
                        </MagneticButton>
                    </div>
                </FadeUp>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "3rem",
                        paddingTop: "4rem",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                    className="cta-info-grid"
                >
                    {infoStats.map((item, i) => (
                        <FadeUp key={i} delay={1.2 + i * 0.1}>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ marginBottom: "0.75rem" }}>
                                    <EditorialLabel text={`0${i + 1} / ${item.label}`} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                                        fontWeight: 700,
                                        color: "#f5e6d3",
                                        letterSpacing: "-0.02em",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {item.prefix}{item.value}{item.suffix}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.7rem",
                                        color: "#8a8a92",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {item.detail}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>

            <FadeUp delay={1.8}>
                <div
                    style={{
                        position: "absolute",
                        bottom: "3rem",
                        left: "3rem",
                        right: "3rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 5,
                        fontSize: "0.65rem",
                        color: "#777777",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                    }}
                >
                    <span>Let&apos;s Build Something Great</span>
                    <span style={{ color: "#e8b878" }}>● Available Worldwide</span>
                </div>
            </FadeUp>

        </section>
    );
};

export default CTA;