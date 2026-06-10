"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TubesBackground from "@/components/backgrounds/TubesBackground";

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero-section relative min-h-screen w-full overflow-hidden bg-black">
            <TubesBackground enableClickInteraction={true}>
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "0 3rem",
                        maxWidth: "1600px",
                        margin: "0 auto",
                        pointerEvents: "none",
                    }}
                >
                    {/* ===== PROFILE + NAME ===== */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                            marginBottom: "2rem",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateX(0) scale(1)" : "translateX(-40px) scale(0.8)",
                            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                        }}
                    >
                        <div
                            style={{
                                width: "72px",
                                height: "72px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "2px solid rgba(232, 184, 120, 0.4)",
                                boxShadow: "0 0 30px rgba(232, 184, 120, 0.2)",
                                flexShrink: 0,
                                position: "relative",
                            }}
                        >
                            <Image
                                src="/images/profile.jpg"
                                alt="Nikhil Khetavath"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="72px"
                                priority
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#e8b878",
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                AI Product Engineer
                            </div>
                            <div
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "#f5e6d3",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Nikhil Khetavath
                            </div>
                        </div>
                    </div>

                    {/* ===== HEADLINE ===== */}
                    <h1
                        style={{
                            fontSize: "clamp(2.5rem, 8vw, 9rem)",
                            fontWeight: 700,
                            lineHeight: 0.9,
                            letterSpacing: "-0.04em",
                            color: "#ffffff",
                            textTransform: "uppercase",
                            margin: 0,
                            marginBottom: "2rem",
                            textShadow: "0 0 60px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        <div
                            style={{
                                overflow: "hidden",
                                paddingBottom: "0.1em",
                            }}
                        >
                            <div
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(100%)",
                                    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                                }}
                            >
                                FROM
                            </div>
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                                paddingBottom: "0.1em",
                            }}
                        >
                            <div
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(100%)",
                                    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                                }}
                            >
                                NOTEBOOK
                            </div>
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                                paddingBottom: "0.1em",
                            }}
                        >
                            <div
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(100%)",
                                    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
                                    WebkitTextStroke: "1.5px #e8b878",
                                    color: "transparent",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    textAlign: "right",
                                }}
                            >
                                TO PRODUCTION
                            </div>
                        </div>
                    </h1>

                    {/* ===== SUBTEXT ===== */}
                    <div
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(30px)",
                            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
                            marginBottom: "2.5rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                                color: "#a8a8b0",
                                maxWidth: "520px",
                                lineHeight: 1.7,
                                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                            }}
                        >
                            I turn AI research into products users love. From prototype to production — I ship what others only demo.
                        </p>
                    </div>

                    {/* ===== CREDIBILITY ROW ===== */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(20px)",
                            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s",
                            marginBottom: "2.5rem",
                            pointerEvents: "auto",
                        }}
                        className="hero-credibility"
                    >
                        {[
                            { value: "10+", label: "Projects Shipped" },
                            { value: "3", label: "Years Experience" },
                            { value: "●", label: "Available Now", accent: true },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: item.accent ? "0.5rem" : "clamp(1.25rem, 2vw, 1.75rem)",
                                        fontWeight: 700,
                                        color: item.accent ? "#51cf66" : "#f5e6d3",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {item.value}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.7rem",
                                        color: "#8a8a92",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {item.label}
                                </span>
                                {i < 2 && (
                                    <span
                                        style={{
                                            fontSize: "0.5rem",
                                            color: "#333",
                                            marginLeft: "0.5rem",
                                        }}
                                    >
                                        |
                                    </span>
                                )}
                            </div>
                        ))}
                        <a
                            href="https://www.linkedin.com/in/nikhilkhetavath-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                color: "#8a8a92",
                                textDecoration: "none",
                                fontSize: "0.7rem",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                transition: "color 0.3s ease",
                                marginLeft: "0.5rem",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#e8b878";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#8a8a92";
                            }}
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                    </div>

                    {/* ===== CTA ===== */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(20px)",
                            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s",
                            pointerEvents: "auto",
                        }}
                    >
                        <Link
                            href="/projects"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "1rem",
                                padding: "1.25rem 2.5rem",
                                backgroundColor: "#e8b878",
                                color: "#000",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                boxShadow: "0 0 40px rgba(232, 184, 120, 0.3)",
                                pointerEvents: "auto",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#f5d4a3";
                                e.currentTarget.style.boxShadow = "0 0 80px rgba(232, 184, 120, 0.6)";
                                e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#e8b878";
                                e.currentTarget.style.boxShadow = "0 0 40px rgba(232, 184, 120, 0.3)";
                                e.currentTarget.style.transform = "scale(1) translateY(0)";
                            }}
                        >
                            See My Work
                            <span style={{ fontSize: "1.25rem", transition: "transform 0.3s ease" }}>→</span>
                        </Link>

                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "1.25rem 2rem",
                                backgroundColor: "transparent",
                                color: "#f5e6d3",
                                border: "1px solid rgba(245, 230, 211, 0.2)",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                letterSpacing: "0.03em",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                pointerEvents: "auto",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#e8b878";
                                e.currentTarget.style.color = "#e8b878";
                                e.currentTarget.style.transform = "scale(1.03)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(245, 230, 211, 0.2)";
                                e.currentTarget.style.color = "#f5e6d3";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    {/* ===== SCROLL INDICATOR ===== */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "3rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "0.75rem",
                            opacity: mounted ? 0.6 : 0,
                            transition: "opacity 1s ease 1.5s",
                        }}
                    >
                        <div
                            style={{
                                width: "1px",
                                height: "60px",
                                background: "linear-gradient(to bottom, transparent, #e8b878, transparent)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "40%",
                                    backgroundColor: "#f5d4a3",
                                    animation: "scrollLineHero 2.5s ease-in-out infinite",
                                }}
                            />
                        </div>
                        <span
                            style={{
                                fontSize: "0.6rem",
                                color: "#8a8a92",
                                letterSpacing: "0.4em",
                                textTransform: "uppercase",
                            }}
                        >
                            Scroll
                        </span>
                    </div>
                </div>
            </TubesBackground>

            <style jsx>{`
                @media (max-width: 768px) {
                    :global(.hero-credibility) {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem !important;
                    }
                    :global(.hero-credibility > div:last-child) {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;