"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import Parallax from "@/components/animations/Parallax";
import NumberCounter from "@/components/animations/NumberCounter";
import StaggerChildren from "@/components/animations/StaggerChildren";
import MagneticButton from "@/components/animations/MagneticButton";

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats = [
        { value: 3, suffix: "+", label: "Years Experience", subtext: "and counting", isText: false },
        { value: 10, suffix: "", label: "Projects Completed", subtext: "shipped", isText: false },
        { value: 10, suffix: "+", label: "Happy Clients", subtext: "worldwide", isText: false },
        { value: "∞", suffix: "", label: "Possibilities", subtext: "ahead", isText: true },
    ];

    const skills = [
        "Python", "React.js", "Next.js", "TypeScript", "FastAPI",
        "OpenAI API", "LangChain", "TensorFlow",
    ];

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#000",
                padding: "8rem 0",
                overflow: "hidden",
            }}
        >
            {/* Background image */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/images/about.jpg.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)",
                    }}
                />
            </div>

            <StarfieldBg density={120} twinkle={true} opacity={0.4} />
            <CosmicGlowBg color="#e8b878" intensity={0.08} size={900} position="center" />
            <NoiseBg opacity={0.06} />

            <ChapterMarker chapter="Chapter 02" title="The Author" position="left" />
            <ChapterMarker chapter="About" title="About" position="right" status="Reading" />

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
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="Welcome to My Portfolio"
                        primary="Engineering Intelligent Products"
                        secondary=""
                        secondaryAlign="right"
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "5rem",
                        marginBottom: "6rem",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    <FadeUp delay={0.4} duration={1.2}>
                        <Parallax speed={0.15}>
                            <div style={{ position: "relative" }}>
                                <ScaleIn delay={0.2} scale={0.9}>
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            aspectRatio: "1/1.2",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            border: "1px solid rgba(232, 184, 120, 0.15)",
                                        }}
                                    >
                                        <Image
                                            src="/images/profile.jpg"
                                            alt="Nikhil Khetavath"
                                            fill
                                            loading="lazy"
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.7))",
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </div>
                                </ScaleIn>
                            </div>
                        </Parallax>
                    </FadeUp>

                    <FadeUp delay={0.6} duration={1.2}>
                        <div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <EditorialLabel text="The Story" />
                            </div>

                            <p
                                style={{
                                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                    color: "#f5e6d3",
                                    marginBottom: "1.5rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                I bridge the gap between{" "}
                                <span
                                    style={{
                                        fontStyle: "italic",
                                        background: "linear-gradient(135deg, #e8b878, #f5d4a3)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    AI research and real products
                                </span>{" "}
                                — taking models from notebooks to production systems that ship.
                            </p>

                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                    marginBottom: "2.5rem",
                                }}
                            >
                                3+ years, 10+ projects, one focus: building AI that works in the real world.
                            </p>

                            <div style={{ marginBottom: "2.5rem" }}>
                                <StaggerChildren
                                    staggerDelay={0.08}
                                    className="flex flex-col sm:flex-row flex-wrap gap-4"
                                >
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                display: "inline-block",
                                                marginRight: "0.5rem",
                                                marginBottom: "0.5rem",
                                                fontSize: "0.7rem",
                                                color: "#e8b878",
                                                padding: "0.4rem 0.9rem",
                                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                                borderRadius: "9999px",
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                background: "rgba(232, 184, 120, 0.05)",
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </StaggerChildren>
                            </div>

                            <MagneticButton strength={0.3}>
                                <Link
                                    href="/about"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        fontSize: "0.95rem",
                                        color: "#f5e6d3",
                                        textDecoration: "none",
                                        borderBottom: "1px solid #e8b878",
                                        paddingBottom: "0.5rem",
                                        transition: "all 0.4s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#e8b878";
                                        e.currentTarget.style.gap = "1.5rem";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#f5e6d3";
                                        e.currentTarget.style.gap = "1rem";
                                    }}
                                >
                                    Read Full Story
                                    <span style={{ fontSize: "1.25rem", color: "#e8b878" }}>→</span>
                                </Link>
                            </MagneticButton>
                        </div>
                    </FadeUp>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "2rem",
                        paddingTop: "4rem",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                    className="stats-grid"
                >
                    {stats.map((stat, i) => (
                        <ScaleIn key={i} delay={0.1 + i * 0.15} scale={0.85}>
                            <div>
                                <div style={{ marginBottom: "0.75rem" }}>
                                    <EditorialLabel text={`0${i + 1}`} size="xs" />
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                        fontWeight: 700,
                                        color: "#f5e6d3",
                                        letterSpacing: "-0.04em",
                                        lineHeight: 1,
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {stat.isText ? (
                                        stat.value
                                    ) : (
                                        <>
                                            <NumberCounter
                                                end={stat.value as number}
                                                duration={2.5}
                                            />
                                            {stat.suffix}
                                        </>
                                    )}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#a8a8b0",
                                        marginBottom: "0.25rem",
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.label}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.7rem",
                                        color: "#8a8a92",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {stat.subtext}
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
