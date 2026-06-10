"use client";

import NoiseBg from "@/components/backgrounds/NoiseBg";
import GridBg from "@/components/backgrounds/GridBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";

const values = [
    "Build with Purpose",
    "Continuous Learning",
    "User-First Thinking",
    "Technical Excellence",
    "Innovation Through Simplicity",
];

const specializations = [
    "AI Product Development",
    "Machine Learning & Data Science",
    "Intelligent Automation",
    "Full-Stack Engineering",
    "Interactive Web Experiences",
];

const personality = [
    "Innovative",
    "Strategic",
    "Curious",
    "Detail-Oriented",
    "Human-Centered",
    "Future-Focused",
];

const BrandIdentity = () => {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#050505",
                padding: "8rem 0",
                overflow: "hidden",
            }}
        >
            <NoiseBg opacity={0.04} />
            <GridBg size={100} color="rgba(232, 184, 120, 0.02)" fade={true} />

            <ChapterMarker chapter="Chapter 03" title="Identity" position="left" />
            <ChapterMarker chapter="Brand" title="Brand" position="right" status="Core" />

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
                {/* Header */}
                <div style={{ marginBottom: "6rem" }}>
                    <SectionHeader
                        label="Who I Am"
                        primary="BRAND"
                        secondary="IDENTITY"
                        secondaryAlign="right"
                    />
                </div>

                {/* Mission & Vision */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        marginBottom: "6rem",
                    }}
                    className="brand-mission-grid"
                >
                    <FadeUp delay={0.2}>
                        <div>
                            <EditorialLabel text="Mission" />
                            <p
                                style={{
                                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                    color: "#f5e6d3",
                                    lineHeight: 1.6,
                                    marginTop: "1.5rem",
                                    fontWeight: 300,
                                }}
                            >
                                To create AI-powered products that solve meaningful problems, enhance
                                decision-making, and deliver exceptional user experiences.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <div>
                            <EditorialLabel text="Vision" />
                            <p
                                style={{
                                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                    color: "#f5e6d3",
                                    lineHeight: 1.6,
                                    marginTop: "1.5rem",
                                    fontWeight: 300,
                                }}
                            >
                                A future where intelligent systems work seamlessly alongside people,
                                amplifying creativity, productivity, and innovation.
                            </p>
                        </div>
                    </FadeUp>
                </div>

                {/* Motto */}
                <FadeUp delay={0.3}>
                    <div
                        style={{
                            textAlign: "center",
                            padding: "5rem 2rem",
                            marginBottom: "6rem",
                            borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                            borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                            position: "relative",
                        }}
                    >
                        <EditorialLabel text="Personal Motto" />
                        <TextReveal duration={1.2} delay={0.4}>
                            <h2
                                style={{
                                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                    fontWeight: 700,
                                    color: "#f5e6d3",
                                    marginTop: "2rem",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.2,
                                }}
                            >
                                &ldquo;Build what matters.{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #e8b878, #f5d4a3)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontStyle: "italic",
                                        fontWeight: 400,
                                    }}
                                >
                                    Automate what doesn&apos;t.
                                </span>
                                &rdquo;
                            </h2>
                        </TextReveal>
                    </div>
                </FadeUp>

                {/* Personality + Specializations */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        marginBottom: "6rem",
                    }}
                    className="brand-mission-grid"
                >
                    <FadeUp delay={0.2}>
                        <div>
                            <EditorialLabel text="Brand Personality" />
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.75rem",
                                    marginTop: "1.5rem",
                                }}
                            >
                                {personality.map((trait) => (
                                    <span
                                        key={trait}
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "#f5e6d3",
                                            padding: "0.6rem 1.25rem",
                                            border: "1px solid rgba(232, 184, 120, 0.25)",
                                            borderRadius: "9999px",
                                            letterSpacing: "0.05em",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#e8b878";
                                            e.currentTarget.style.color = "#e8b878";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(232, 184, 120, 0.25)";
                                            e.currentTarget.style.color = "#f5e6d3";
                                        }}
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <div>
                            <EditorialLabel text="What I Specialize In" />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    marginTop: "1.5rem",
                                }}
                            >
                                {specializations.map((spec, i) => (
                                    <div
                                        key={spec}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                            padding: "1rem 0",
                                            borderBottom:
                                                "1px solid rgba(232, 184, 120, 0.1)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.7rem",
                                                color: "#e8b878",
                                                letterSpacing: "0.2em",
                                                minWidth: "2rem",
                                            }}
                                        >
                                            0{i + 1}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "1.1rem",
                                                color: "#f5e6d3",
                                                fontWeight: 400,
                                            }}
                                        >
                                            {spec}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Core Values */}
                <FadeUp delay={0.3}>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="Core Values" />
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "1px",
                            backgroundColor: "rgba(232, 184, 120, 0.15)",
                        }}
                        className="brand-values-grid"
                    >
                        {values.map((value, i) => (
                            <div
                                key={value}
                                style={{
                                    backgroundColor: "#050505",
                                    padding: "2.5rem 1.5rem",
                                    textAlign: "center",
                                    transition: "all 0.4s ease",
                                    cursor: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "rgba(232, 184, 120, 0.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "#050505";
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.65rem",
                                        color: "#e8b878",
                                        letterSpacing: "0.3em",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    0{i + 1}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#f5e6d3",
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </div>

        </section>
    );
};

export default BrandIdentity;
