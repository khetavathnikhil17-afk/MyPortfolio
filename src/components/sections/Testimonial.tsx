"use client";

import NoiseBg from "@/components/backgrounds/NoiseBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import FadeUp from "@/components/animations/FadeUp";

const testimonial = {
    review:
        "Nikhil delivered an exceptional AI-powered product that exceeded our expectations. His ability to translate complex requirements into a seamless, production-ready solution was impressive. The attention to detail and commitment to quality made the entire process smooth and efficient.",
    name: "StartupPulse AI",
};

const Testimonial = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                backgroundColor: "#000",
                padding: "8rem 0",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.25,
                    background:
                        "linear-gradient(135deg, #0a0605 0%, #1a0f08 50%, #050302 100%)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            <CosmicGlowBg color="#e8b878" intensity={0.06} size={1000} position="center" />
            <NoiseBg opacity={0.06} />

            <ChapterMarker chapter="Chapter 05" title="Testimonial" position="left" />
            <ChapterMarker chapter="Feedback" title="Review" position="right" status="01" />

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
                        label="Client Voice"
                        primary="WHAT"
                        secondary="THEY SAY"
                        secondaryAlign="left"
                    />
                </div>

                <FadeUp delay={0.3} duration={1.2}>
                    <div
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto",
                            padding: "5rem 4rem",
                            position: "relative",
                            background:
                                "linear-gradient(135deg, rgba(22, 22, 22, 0.6) 0%, rgba(15, 15, 15, 0.8) 100%)",
                            border: "1px solid rgba(232, 184, 120, 0.1)",
                            borderRadius: "2px",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-2px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "60px",
                                height: "2px",
                                backgroundColor: "#e8b878",
                                boxShadow: "0 0 20px rgba(232, 184, 120, 0.4)",
                            }}
                        />

                        <div
                            style={{
                                fontSize: "clamp(4rem, 8vw, 7rem)",
                                fontFamily: "Georgia, serif",
                                color: "#e8b878",
                                opacity: 0.2,
                                lineHeight: 1,
                                marginBottom: "-2rem",
                                userSelect: "none",
                            }}
                        >
                            &ldquo;
                        </div>

                        <p
                            style={{
                                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.8,
                                fontStyle: "italic",
                                margin: 0,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            {testimonial.review}
                        </p>

                        <div
                            style={{
                                width: "60px",
                                height: "1px",
                                backgroundColor: "#e8b878",
                                margin: "3rem 0",
                                boxShadow: "0 0 10px rgba(232, 184, 120, 0.3)",
                            }}
                        />

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(232, 184, 120, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.85rem",
                                    color: "#e8b878",
                                    backgroundColor: "rgba(232, 184, 120, 0.06)",
                                }}
                            >
                                ◉
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#f5e6d3",
                                        letterSpacing: "0.05em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {testimonial.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default Testimonial;
