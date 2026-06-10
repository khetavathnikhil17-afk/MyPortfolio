"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";
import MagneticButton from "@/components/animations/MagneticButton";

const services = [
    {
        number: "01",
        title: "AI Product Development",
        subtitle: "Intelligence by Design",
        description:
            "End-to-end development of intelligent products powered by AI and machine learning.",
        capabilities: [
            "Product strategy and architecture",
            "AI/ML model integration",
            "API development and deployment",
            "Performance optimization",
            "Scalable cloud infrastructure",
        ],
        icon: "◉",
    },
    {
        number: "02",
        title: "Data Science & Analytics",
        subtitle: "Insights from Noise",
        description:
            "Transform raw data into actionable insights and predictive intelligence.",
        capabilities: [
            "Exploratory Data Analysis (EDA)",
            "Predictive modeling",
            "Statistical analysis",
            "Dashboard creation",
            "Business intelligence reporting",
        ],
        icon: "✦",
    },
    {
        number: "03",
        title: "AI Automation Solutions",
        subtitle: "Workflows Reimagined",
        description:
            "Automate workflows and business processes using modern AI technologies.",
        capabilities: [
            "Process automation design",
            "LLM-powered assistants and chatbots",
            "Workflow integration",
            "Custom AI tools",
            "Monitoring and maintenance",
        ],
        icon: "◈",
    },
    {
        number: "04",
        title: "Interactive Web Experiences",
        subtitle: "Code Meets Craft",
        description:
            "Build visually stunning, high-performance web applications and portfolio experiences.",
        capabilities: [
            "Modern frontend development",
            "Cinematic animations with GSAP",
            "3D experiences with Three.js",
            "Responsive design",
            "Performance and SEO optimization",
        ],
        icon: "✧",
    },
];

const ServiceRow = ({
    service,
    index,
    isOpen,
    onToggle,
}: {
    service: (typeof services)[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    });

    return (
        <FadeUp delay={index * 0.1} duration={1}>
            <div
                onClick={onToggle}
                style={{
                    position: "relative",
                    padding: "3rem 0",
                    borderTop: index === 0 ? "1px solid rgba(232, 184, 120, 0.15)" : "none",
                    borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                    cursor: "none",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(232, 184, 120, 0.04) 0%, transparent 50%)",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.6s ease",
                        pointerEvents: "none",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "2px",
                        backgroundColor: "#e8b878",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        boxShadow: isOpen ? "0 0 20px #e8b878" : "none",
                    }}
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto 1fr auto auto",
                        gap: "3rem",
                        alignItems: "center",
                        padding: "0 2rem",
                    }}
                    className="service-row"
                >
                    <div
                        style={{
                            fontSize: "0.75rem",
                            color: isOpen ? "#e8b878" : "#777777",
                            letterSpacing: "0.3em",
                            fontWeight: 500,
                            transition: "color 0.3s ease",
                            minWidth: "60px",
                        }}
                    >
                        / {service.number}
                    </div>

                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            border: `1px solid ${isOpen ? "#e8b878" : "rgba(232, 184, 120, 0.15)"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            color: isOpen ? "#e8b878" : "#a8a8b0",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            transform: isOpen ? "rotate(180deg) scale(1.1)" : "rotate(0)",
                            backgroundColor: isOpen ? "rgba(232, 184, 120, 0.08)" : "transparent",
                            boxShadow: isOpen ? "0 0 30px rgba(232, 184, 120, 0.3)" : "none",
                        }}
                    >
                        {service.icon}
                    </div>

                    <div>
                        <div
                            style={{
                                marginBottom: "0.5rem",
                                opacity: isOpen ? 1 : 0.6,
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <EditorialLabel text={service.subtitle} />
                        </div>
                        <h3
                            style={{
                                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                                fontWeight: 700,
                                color: isOpen ? "#f5e6d3" : "#a8a8b0",
                                letterSpacing: "-0.02em",
                                textTransform: "uppercase",
                                transition: "color 0.3s ease",
                                margin: 0,
                                lineHeight: 1,
                            }}
                        >
                            {service.title}
                        </h3>
                    </div>

                    <div
                        style={{
                            fontSize: "0.7rem",
                            color: "#777777",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            textAlign: "right",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Available
                        <br />
                        <span style={{ color: "#e8b878" }}>● Now</span>
                    </div>

                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            border: `1px solid ${isOpen ? "#e8b878" : "rgba(232, 184, 120, 0.15)"}`,
                            backgroundColor: isOpen ? "#e8b878" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.4s ease",
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.5rem",
                                color: isOpen ? "#000" : "#e8b878",
                                lineHeight: 1,
                                fontWeight: 300,
                            }}
                        >
                            +
                        </span>
                    </div>
                </div>

                <div
                    ref={contentRef}
                    style={{
                        maxHeight: isOpen ? contentHeight : 0,
                        overflow: "hidden",
                        transition: "max-height 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "4rem",
                            padding: "3rem 2rem 1rem",
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(20px)",
                            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                        }}
                        className="service-expanded"
                    >
                        <div>
                            <div style={{ marginBottom: "1rem" }}>
                                <EditorialLabel text="The Approach" />
                            </div>
                            <p
                                style={{
                                    fontSize: "1.125rem",
                                    color: "#f5e6d3",
                                    lineHeight: 1.6,
                                }}
                            >
                                {service.description}
                            </p>
                        </div>

                        <div>
                            <div style={{ marginBottom: "1rem" }}>
                                <EditorialLabel text="What's Included" />
                            </div>
                            {isOpen && (
                                <StaggerChildren staggerDelay={0.1} initialDelay={0.2}>
                                    {service.capabilities.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                fontSize: "0.95rem",
                                                color: "#a8a8b0",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "1rem",
                                                marginBottom: "0.875rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "20px",
                                                    height: "1px",
                                                    backgroundColor: "#e8b878",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            {item}
                                        </div>
                                    ))}
                                </StaggerChildren>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </FadeUp>
    );
};

const Services = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.25,
                    background: "linear-gradient(135deg, #0a0605 0%, #1a0f08 50%, #050302 100%)",
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

            <CosmicGlowBg color="#e8b878" intensity={0.06} size={1000} position="bottom" />
            <NoiseBg opacity={0.06} />

            <ChapterMarker chapter="Chapter 06" title="What I Do" position="left" />
            <ChapterMarker chapter="Services" title="Services" position="right" status="04 Total" />

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
                <div
                    style={{
                        marginBottom: "6rem",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "end",
                    }}
                    className="services-header"
                >
                    <SectionHeader
                        label="What I Offer"
                        primary="MY"
                        secondary="SERVICES"
                        secondaryAlign="left"
                    />

                    <FadeUp delay={0.6}>
                        <div style={{ paddingBottom: "1rem" }}>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                    marginBottom: "2rem",
                                }}
                            >
                                From strategy to deployment, I provide end-to-end solutions
                                that combine AI, data, and modern web technologies to deliver
                                real business value.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    fontSize: "0.7rem",
                                    color: "#777777",
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                }}
                            >
                                <div>
                                    <div style={{ color: "#e8b878" }}>● Active</div>
                                    <div style={{ marginTop: "0.25rem" }}>04 Services</div>
                                </div>
                                <div>
                                    <div style={{ color: "#e8b878" }}>● Available</div>
                                    <div style={{ marginTop: "0.25rem" }}>Now</div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                <div>
                    {services.map((service, i) => (
                        <ServiceRow
                            key={service.number}
                            service={service}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>

                <FadeUp delay={0.3}>
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "5rem",
                        }}
                    >
                        <div style={{ marginBottom: "1.5rem" }}>
                            <EditorialLabel text="Have Something Specific in Mind?" />
                        </div>

                        <MagneticButton strength={0.4}>
                            <Link
                                href="/contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    fontSize: "1rem",
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
                                Let&apos;s Discuss Your Project
                                <span style={{ fontSize: "1.25rem", color: "#e8b878" }}>→</span>
                            </Link>
                        </MagneticButton>
                    </div>
                </FadeUp>
            </div>

        </section>
    );
};

export default Services;