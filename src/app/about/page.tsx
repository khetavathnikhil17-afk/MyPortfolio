"use client";

import { useEffect } from "react";
import Link from "next/link";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import NumberCounter from "@/components/animations/NumberCounter";
import StaggerChildren from "@/components/animations/StaggerChildren";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import LazyVideo from "@/components/ui/LazyVideo";
import SkillBar from "@/components/ui/SkillBar";

const timeline = [
    {
        year: "2026",
        title: "AI Product Engineering",
        description: "Building Nyra AI — a proactive intelligence platform with voice interaction, reasoning, and autonomous automation.",
        tag: "Present",
    },
    {
        year: "2025",
        title: "Full-Stack & AI Integration",
        description: "Combined machine learning with modern web technologies. Shipped multiple AI-powered products for clients worldwide.",
        tag: "Growth",
    },
    {
        year: "2024",
        title: "The Beginning",
        description: "Started professional development journey. Built foundations in React, Next.js, Python, and modern web tech.",
        tag: "Origin",
    },
];

const values = [
    {
        number: "01",
        title: "AI-First Thinking",
        description: "Every product I build starts with intelligence. Machine learning isn't an add-on — it's the foundation.",
    },
    {
        number: "02",
        title: "Engineering Excellence",
        description: "Clean code, scalable architecture, and performance that users feel. Quality is non-negotiable.",
    },
    {
        number: "03",
        title: "User-Focused Design",
        description: "Technology is meaningless without great experience. I craft interfaces that feel intuitive and alive.",
    },
    {
        number: "04",
        title: "Continuous Evolution",
        description: "The AI landscape changes daily. I learn, adapt, and ship with every project. Stagnation is the enemy.",
    },
];

const expertise = [
    { category: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "AI/ML", skills: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "LLMs"] },
    { category: "Data Science", skills: ["EDA", "Feature Engineering", "Statistical Analysis", "Predictive Modeling"] },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Git", "GitHub"] },
    { category: "Motion", skills: ["GSAP", "Three.js", "Framer Motion", "WebGL"] },
    { category: "Tools", skills: ["Figma", "VS Code"] },
];

export default function AboutPage() {
    useEffect(() => {
        document.title = "About | Nikhil Khetavath | AI Product Engineer";
    }, []);

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
                <LazyVideo
                    src="/about-bg.mp4"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
                    }}
                />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
            <StarfieldBg density={150} twinkle={true} opacity={0.3} />
            <CosmicGlowBg color="#e8b878" intensity={0.05} size={1200} position="top" />
            <NoiseBg opacity={0.06} />

            {/* ===== HERO ===== */}
            <section
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "8rem 3rem 4rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <ChapterMarker chapter="Page 02" title="The Author" position="left" />
                <ChapterMarker chapter="About" title="Full Story" position="right" status="Reading" />

                <FadeUp delay={0.3}>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="AI Product Engineer" />
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
                        <div>FROM MODEL</div>
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
                            TO PRODUCT
                        </div>
                    </TextReveal>
                </h1>

                <FadeUp delay={1}>
                    <p
                        style={{
                            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                            color: "#a8a8b0",
                            maxWidth: "800px",
                            lineHeight: 1.5,
                            marginBottom: "3rem",
                        }}
                    >
                        The engineer who takes your AI from a Jupyter notebook to a{" "}
                        <span style={{ fontStyle: "italic", color: "#e8b878" }}>production product</span> that users love and businesses depend on.
                    </p>
                </FadeUp>

                <FadeUp delay={1.2}>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <StatusBadge text="Available for Projects" variant="available" />
                        <StatusBadge text="Worldwide / Remote" variant="info" />
                    </div>
                </FadeUp>
            </section>

            {/* ===== STATS ===== */}
            <section
                style={{
                    padding: "6rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "3rem",
                    }}
                    className="stats-grid"
                >
                    {[
                        { value: 10, suffix: "", label: "Projects Delivered" },
                        { value: 10, suffix: "+", label: "Happy Clients" },
                        { value: 3, suffix: " yrs", label: "Experience" },
                        { value: 99, suffix: "%", label: "Client Satisfaction" },
                    ].map((stat, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(3rem, 6vw, 5rem)",
                                        fontWeight: 700,
                                        color: "#f5e6d3",
                                        letterSpacing: "-0.04em",
                                        lineHeight: 1,
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <NumberCounter end={stat.value} duration={2.5} />
                                    {stat.suffix}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#a8a8b0",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ===== STORY ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="The Origin Story"
                        primary="HOW IT"
                        secondary="STARTED"
                        secondaryAlign="right"
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "5rem",
                        alignItems: "start",
                    }}
                    className="story-grid"
                >
                    <FadeUp delay={0.3}>
                        <div>
                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#f5e6d3",
                                    lineHeight: 1.6,
                                    marginBottom: "2rem",
                                    fontStyle: "italic",
                                }}
                            >
                                I realized AI without product thinking is just research.
                            </p>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Three years ago, I wrote my first line of code. What started as curiosity became obsession — not just building things, but building things that work at scale, for real users, with measurable impact.
                            </p>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                }}
                            >
                                That obsession led me to the intersection of AI and product engineering. Today, I specialize in taking models from research environments to production systems — building the infrastructure, interfaces, and experiences that make AI useful for people.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.5}>
                        <div>
                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#f5e6d3",
                                    lineHeight: 1.6,
                                    marginBottom: "2rem",
                                    fontStyle: "italic",
                                }}
                            >
                                Where I&apos;m headed.
                            </p>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                    marginBottom: "1.5rem",
                                }}
                            >
                                AI is reshaping how products are built. The gap between "AI demo" and "AI product" is where I operate. I want to be the engineer who makes AI feel invisible — woven into products so naturally that users don&apos;t even realize they&apos;re using machine learning.
                            </p>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                }}
                            >
                                My focus: autonomous systems, voice-first interfaces, and AI products that ship. Every project moves me closer to that vision.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="The Journey"
                        primary="MAJOR"
                        secondary="MILESTONES"
                        secondaryAlign="right"
                    />
                </div>

                <div style={{ position: "relative" }}>
                    {/* Timeline line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "200px",
                            top: 0,
                            bottom: 0,
                            width: "1px",
                            background:
                                "linear-gradient(180deg, transparent, rgba(232, 184, 120, 0.3), transparent)",
                        }}
                        className="timeline-line"
                    />

                    {timeline.map((item, i) => (
                        <FadeUp key={i} delay={i * 0.15}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "200px 1fr",
                                    gap: "4rem",
                                    alignItems: "start",
                                    marginBottom: "4rem",
                                    position: "relative",
                                }}
                                className="timeline-row"
                            >
                                <div
                                    style={{
                                        fontSize: "clamp(2rem, 4vw, 3rem)",
                                        fontWeight: 700,
                                        color: "#e8b878",
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                    }}
                                >
                                    {item.year}
                                </div>

                                <div style={{ position: "relative", paddingLeft: "3rem" }}>
                                    {/* Dot */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "-1.45rem",
                                            top: "0.5rem",
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "50%",
                                            backgroundColor: "#e8b878",
                                            boxShadow: "0 0 20px #e8b878",
                                        }}
                                        className="timeline-dot"
                                    />

                                    <div style={{ marginBottom: "0.75rem" }}>
                                        <EditorialLabel text={item.tag} />
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                                            fontWeight: 700,
                                            color: "#f5e6d3",
                                            marginBottom: "1rem",
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#a8a8b0",
                                            lineHeight: 1.7,
                                            maxWidth: "600px",
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ===== VALUES ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="What I Believe"
                        primary="CORE"
                        secondary="VALUES"
                        secondaryAlign="right"
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "3rem",
                    }}
                    className="values-grid"
                >
                    {values.map((value, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div
                                style={{
                                    padding: "3rem",
                                    border: "1px solid rgba(232, 184, 120, 0.15)",
                                    borderRadius: "12px",
                                    background: "rgba(232, 184, 120, 0.02)",
                                    transition: "all 0.4s ease",
                                    cursor: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#e8b878";
                                    e.currentTarget.style.background = "rgba(232, 184, 120, 0.05)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.15)";
                                    e.currentTarget.style.background = "rgba(232, 184, 120, 0.02)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#e8b878",
                                        letterSpacing: "0.3em",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    / {value.number}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                        fontWeight: 700,
                                        color: "#f5e6d3",
                                        marginBottom: "1rem",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#a8a8b0",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {value.description}
                                </p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ===== EXPERTISE ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="Tech Stack"
                        primary="MY"
                        secondary="SKILLSET"
                        secondaryAlign="right"
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {expertise.map((group, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "200px 1fr",
                                    gap: "3rem",
                                    alignItems: "center",
                                    padding: "2rem 0",
                                    borderBottom: "1px solid rgba(232, 184, 120, 0.1)",
                                }}
                                className="expertise-row"
                            >
                                <div
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#e8b878",
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        fontWeight: 600,
                                    }}
                                >
                                    / {group.category}
                                </div>
                                <StaggerChildren staggerDelay={0.05}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                style={{
                                                    display: "inline-block",
                                                    padding: "0.5rem 1rem",
                                                    fontSize: "0.875rem",
                                                    color: "#f5e6d3",
                                                    border: "1px solid rgba(232, 184, 120, 0.2)",
                                                    borderRadius: "9999px",
                                                    background: "rgba(232, 184, 120, 0.05)",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </StaggerChildren>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ===== PROFICIENCY ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.1)",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="Proficiency"
                        primary="SKILL"
                        secondary="LEVELS"
                        secondaryAlign="right"
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                    }}
                    className="skill-bars-grid"
                >
                    <div>
                        <SkillBar name="Python" level={90} delay={0.1} />
                        <SkillBar name="React / Next.js" level={85} delay={0.2} />
                        <SkillBar name="TypeScript" level={80} delay={0.3} />
                        <SkillBar name="FastAPI" level={85} delay={0.4} />
                        <SkillBar name="AI/ML Integration" level={88} delay={0.5} />
                    </div>
                    <div>
                        <SkillBar name="OpenAI API / LLMs" level={92} delay={0.15} />
                        <SkillBar name="PostgreSQL / MongoDB" level={78} delay={0.25} />
                        <SkillBar name="Docker / AWS" level={75} delay={0.35} />
                        <SkillBar name="Data Analysis" level={82} delay={0.45} />
                        <SkillBar name="UI/UX Design" level={70} delay={0.55} />
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    textAlign: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
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
                            Start the Conversation
                            <span style={{ fontSize: "1.25rem" }}>→</span>
                        </Link>
                    </MagneticButton>
                </FadeUp>
            </section>

            <style jsx>{`
        @media (max-width: 1024px) {
          :global(.stats-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          :global(.story-grid),
          :global(.values-grid),
          :global(.skill-bars-grid) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          :global(.timeline-line) {
            display: none !important;
          }
          :global(.timeline-row),
          :global(.expertise-row) {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          :global(.timeline-dot) {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          :global(.stats-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
            </div>
        </main>
    );
}