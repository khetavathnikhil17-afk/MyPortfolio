"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import EditorialLabel from "@/components/elements/EditorialLabel";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const Footer = () => {
    const [time, setTime] = useState("");
    const [emailCopied, setEmailCopied] = useState(false);
    const email = "khetavathnikhil17@gmail.com";

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const socials = [
        { label: "GitHub", href: "https://github.com/khetavathnikhil17-afk" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhilkhetavath-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
        { label: "Twitter", href: "https://x.com/KhetavathNikhil" },
        { label: "Instagram", href: "https://www.instagram.com/callme____nikk" },
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    const services = [
        "AI Product Development",
        "Data Science & Analytics",
        "AI Automation Solutions",
        "Interactive Web Experiences",
    ];

    return (
        <footer
            style={{
                position: "relative",
                backgroundColor: "#000",
                borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                overflow: "hidden",
            }}
        >
            <StarfieldBg density={100} twinkle={true} opacity={0.3} />
            <CosmicGlowBg
                color="#e8b878"
                intensity={0.08}
                size={1200}
                position="bottom"
            />

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "1px",
                    background:
                        "linear-gradient(90deg, transparent, #e8b878, transparent)",
                    boxShadow: "0 0 20px #e8b878",
                }}
            />

            <div
                style={{
                    padding: "10rem 3rem 6rem",
                    textAlign: "center",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <FadeUp>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="Let's Connect" />
                    </div>
                </FadeUp>

                <h2
                    style={{
                        fontSize: "clamp(3rem, 12vw, 13rem)",
                        fontWeight: 700,
                        lineHeight: 0.85,
                        letterSpacing: "-0.05em",
                        color: "#f5e6d3",
                        textTransform: "uppercase",
                        margin: "0 0 3rem",
                    }}
                >
                    <TextReveal duration={1.2} delay={0.2}>
                        <div>THANK YOU FOR</div>
                    </TextReveal>
                    <TextReveal duration={1.2} delay={0.4}>
                        <div
                            style={{
                                WebkitTextStroke: "1.5px #e8b878",
                                color: "transparent",
                                fontStyle: "italic",
                                fontWeight: 400,
                                opacity: 0.5,
                            }}
                        >
                            SCROLLING
                        </div>
                    </TextReveal>
                </h2>

                <FadeUp delay={0.6}>
                    <MagneticButton strength={0.3}>
                        <button
                            onClick={copyEmail}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "1.5rem 3rem",
                                backgroundColor: "rgba(245, 230, 211, 0.05)",
                                color: "#f5e6d3",
                                borderRadius: "9999px",
                                fontSize: "1.1rem",
                                fontWeight: 500,
                                border: "1px solid rgba(232, 184, 120, 0.3)",
                                cursor: "none",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.4s ease",
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
                            {emailCopied ? "✓ Signal Copied" : email}
                            {!emailCopied && (
                                <span style={{ fontSize: "1.25rem", color: "#e8b878" }}>↗</span>
                            )}
                        </button>
                    </MagneticButton>
                </FadeUp>
            </div>

            <div
                aria-hidden="true"
                style={{
                    padding: "3rem 0",
                    overflow: "hidden",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                    whiteSpace: "nowrap",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div className="marquee-track">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-flex",
                                gap: "4rem",
                                alignItems: "center",
                            }}
                        >
                            <span style={{ color: "#f5e6d3" }}>AVAILABLE FOR WORK</span>
                            <span style={{ color: "#e8b878", fontSize: "2rem" }}>◉</span>
                            <span
                                style={{
                                    WebkitTextStroke: "1.5px #e8b878",
                                    color: "transparent",
                                    fontStyle: "italic",
                                }}
                            >
                                Let&apos;s Connect
                            </span>
                            <span style={{ color: "#e8b878", fontSize: "2rem" }}>◉</span>
                        </span>
                    ))}
                </div>
            </div>

            <div
                style={{
                    padding: "5rem 3rem 2rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <FadeUp delay={0.3}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                            gap: "4rem",
                            marginBottom: "5rem",
                        }}
                        className="footer-grid"
                    >
                        <div>
                            <Link
                                href="/"
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    color: "inherit",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <div style={{ marginBottom: "0.5rem" }}>
                                    <EditorialLabel text="AI Product Engineer" dash={false} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "1.75rem",
                                        color: "#f5e6d3",
                                        fontWeight: 700,
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1,
                                    }}
                                >
                                    NIKHIL
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.65rem",
                                        color: "#8a8a92",
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        marginTop: "0.5rem",
                                    }}
                                >
                                    Khetavath
                                </div>
                            </Link>

                            <p
                                style={{
                                    fontSize: "0.875rem",
                                    color: "#a8a8b0",
                                    lineHeight: 1.7,
                                    marginBottom: "2rem",
                                    maxWidth: "320px",
                                }}
                            >
                                Crafting premium digital experiences that bridge dimensions—where
                                code becomes art, and pixels become emotion.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <span
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "50%",
                                        backgroundColor: "#22c55e",
                                        boxShadow: "0 0 12px #22c55e",
                                        animation: "pulseFooter 2s ease infinite",
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#f5d4a3",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        fontWeight: 500,
                                    }}
                                >
                                    Available for new projects
                                </span>
                            </div>

                            <p
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#777777",
                                    letterSpacing: "0.2em",
                                }}
                            >
                                Local time: {time || "--:--"} / Hyderabad, India
                            </p>
                        </div>

                        <div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <EditorialLabel text="Navigate" />
                            </div>
                            <StaggerChildren staggerDelay={0.08} initialDelay={0.5}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        style={{
                                            display: "block",
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            width: "fit-content",
                                            marginBottom: "0.875rem",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#e8b878";
                                            e.currentTarget.style.paddingLeft = "0.75rem";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "#a8a8b0";
                                            e.currentTarget.style.paddingLeft = "0";
                                        }}
                                    >
                                        → {link.label}
                                    </Link>
                                ))}
                            </StaggerChildren>
                        </div>

                        <div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <EditorialLabel text="Services" />
                            </div>
                            <StaggerChildren staggerDelay={0.08} initialDelay={0.6}>
                                {services.map((service) => (
                                    <div
                                        key={service}
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            marginBottom: "0.875rem",
                                        }}
                                    >
                                        {service}
                                    </div>
                                ))}
                            </StaggerChildren>
                        </div>

                        <div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <EditorialLabel text="Connect" />
                            </div>
                            <StaggerChildren staggerDelay={0.08} initialDelay={0.7}>
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            width: "fit-content",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginBottom: "0.875rem",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.color = "#e8b878")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.color = "#a8a8b0")
                                        }
                                    >
                                        {social.label}
                                        <span style={{ fontSize: "0.75rem", color: "#e8b878" }}>
                                            ↗
                                        </span>
                                    </a>
                                ))}
                            </StaggerChildren>
                        </div>
                    </div>
                </FadeUp>

                <div
                    style={{
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(232, 184, 120, 0.3), transparent)",
                        marginBottom: "2rem",
                    }}
                />

                <FadeUp delay={0.4}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "1rem",
                            fontSize: "0.7rem",
                            color: "#8a8a92",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                        }}
                    >
                        <div style={{ display: "flex", gap: "2rem" }}>
                            <span>© {new Date().getFullYear()} Nikhil Khetavath</span>
                            <span style={{ color: "#e8b878" }}>/</span>
                            <span>All rights reserved</span>
                        </div>

                        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                            <span>Lat 17.385° N</span>
                            <span>Lon 78.4867° E</span>
                            <span style={{ color: "#e8b878" }}>● Live</span>
                        </div>
                    </div>
                </FadeUp>
            </div>

            <div
                style={{
                    fontSize: "clamp(8rem, 28vw, 30rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(232, 184, 120, 0.1)",
                    textAlign: "center",
                    lineHeight: 0.85,
                    padding: "0 2rem",
                    marginBottom: "-3rem",
                    userSelect: "none",
                    pointerEvents: "none",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                Cosmos
            </div>

        </footer>
    );
};

export default Footer;