"use client";

import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";

const milestones = [
    {
        year: "Year 1",
        tag: "Present",
        title: "AI Product Engineer",
        description:
            "Building advanced AI-powered products, automation systems, and immersive web experiences. Focused on combining artificial intelligence with exceptional user experiences and scalable product architectures.",
    },
    {
        year: "Year 2",
        tag: "Growth",
        title: "AI Engineering Expansion",
        description:
            "Expanded into AI engineering, large language models (LLMs), predictive analytics, and workflow automation. Delivered multiple end-to-end solutions that transformed business processes through intelligent systems.",
    },
    {
        year: "Year 3",
        tag: "Transition",
        title: "Data Science & Full-Stack",
        description:
            "Strengthened expertise in data science, machine learning, and full-stack development. Built predictive models, analytics dashboards, and data-driven applications across various domains.",
    },
    {
        year: "Year 4",
        tag: "Origin",
        title: "The Beginning",
        description:
            "Started the journey as a technology enthusiast with a passion for coding, problem-solving, and creating digital products. Learned core programming, web development, and software engineering fundamentals.",
    },
];

const Timeline = () => {
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
            <StarfieldBg density={100} twinkle={true} opacity={0.3} />
            <NoiseBg opacity={0.05} />

            <ChapterMarker chapter="Chapter 04" title="The Journey" position="left" />
            <ChapterMarker chapter="Timeline" title="Timeline" position="right" status="4 Milestones" />

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
                        label="The Path Traveled"
                        primary="MY"
                        secondary="JOURNEY"
                        secondaryAlign="right"
                    />
                </div>

                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: "1px",
                            background: "linear-gradient(to bottom, transparent, rgba(232, 184, 120, 0.3), transparent)",
                            transform: "translateX(-50%)",
                        }}
                    />

                    {milestones.map((milestone, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <FadeUp key={i} delay={i * 0.15} duration={1.2}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr auto 1fr",
                                        gap: "3rem",
                                        marginBottom: "6rem",
                                        alignItems: "center",
                                    }}
                                    className="timeline-row"
                                >
                                    {/* Left content */}
                                    <div
                                        style={{
                                            textAlign: isLeft ? "right" : "left",
                                            order: isLeft ? 1 : 3,
                                        }}
                                    >
                                        {isLeft ? (
                                            <div>
                                                <div style={{ marginBottom: "0.75rem" }}>
                                                    <EditorialLabel text={milestone.year} />
                                                </div>
                                                <h3
                                                    style={{
                                                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                                        fontWeight: 700,
                                                        color: "#f5e6d3",
                                                        letterSpacing: "-0.02em",
                                                        textTransform: "uppercase",
                                                        marginBottom: "1rem",
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    {milestone.title}
                                                </h3>
                                                <p
                                                    style={{
                                                        fontSize: "0.95rem",
                                                        color: "#a8a8b0",
                                                        lineHeight: 1.7,
                                                        maxWidth: "450px",
                                                        marginLeft: isLeft ? "auto" : "0",
                                                    }}
                                                >
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    padding: "0.5rem 1.25rem",
                                                    border: "1px solid rgba(232, 184, 120, 0.3)",
                                                    borderRadius: "9999px",
                                                    fontSize: "0.7rem",
                                                    color: "#e8b878",
                                                    letterSpacing: "0.3em",
                                                    textTransform: "uppercase",
                                                    backgroundColor: "rgba(232, 184, 120, 0.05)",
                                                }}
                                            >
                                                {milestone.tag}
                                            </div>
                                        )}
                                    </div>

                                    {/* Center dot */}
                                    <div
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "50%",
                                            backgroundColor: "#e8b878",
                                            border: "3px solid #000",
                                            boxShadow: "0 0 20px rgba(232, 184, 120, 0.4)",
                                            order: 2,
                                            position: "relative",
                                            zIndex: 2,
                                        }}
                                    />

                                    {/* Right content */}
                                    <div
                                        style={{
                                            textAlign: isLeft ? "left" : "right",
                                            order: isLeft ? 3 : 1,
                                        }}
                                    >
                                        {isLeft ? (
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    padding: "0.5rem 1.25rem",
                                                    border: "1px solid rgba(232, 184, 120, 0.3)",
                                                    borderRadius: "9999px",
                                                    fontSize: "0.7rem",
                                                    color: "#e8b878",
                                                    letterSpacing: "0.3em",
                                                    textTransform: "uppercase",
                                                    backgroundColor: "rgba(232, 184, 120, 0.05)",
                                                }}
                                            >
                                                {milestone.tag}
                                            </div>
                                        ) : (
                                            <div>
                                                <div style={{ marginBottom: "0.75rem" }}>
                                                    <EditorialLabel text={milestone.year} />
                                                </div>
                                                <h3
                                                    style={{
                                                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                                        fontWeight: 700,
                                                        color: "#f5e6d3",
                                                        letterSpacing: "-0.02em",
                                                        textTransform: "uppercase",
                                                        marginBottom: "1rem",
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    {milestone.title}
                                                </h3>
                                                <p
                                                    style={{
                                                        fontSize: "0.95rem",
                                                        color: "#a8a8b0",
                                                        lineHeight: 1.7,
                                                        maxWidth: "450px",
                                                        marginLeft: isLeft ? "0" : "auto",
                                                    }}
                                                >
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
