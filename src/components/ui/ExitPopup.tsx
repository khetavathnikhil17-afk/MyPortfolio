"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const alreadyDismissed = dismissed || sessionStorage.getItem("exitPopupDismissed");
        if (alreadyDismissed) return;

        const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (isMobile) {
            const handleScroll = () => {
                const scrollDepth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                if (scrollDepth > 0.7) {
                    setShow(true);
                    window.removeEventListener("scroll", handleScroll);
                }
            };

            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            const handleMouseLeave = (e: MouseEvent) => {
                if (e.clientY <= 0) {
                    setShow(true);
                }
            };

            document.addEventListener("mouseleave", handleMouseLeave);
            return () => document.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [dismissed]);

    const handleDismiss = () => {
        setShow(false);
        setDismissed(true);
        sessionStorage.setItem("exitPopupDismissed", "true");
    };

    if (!show) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(10px)",
                animation: "fadeIn 0.3s ease",
            }}
            onClick={handleDismiss}
        >
            <div
                style={{
                    maxWidth: "480px",
                    width: "90%",
                    padding: "3rem",
                    backgroundColor: "#0f0f0f",
                    border: "1px solid rgba(232, 184, 120, 0.2)",
                    borderRadius: "20px",
                    textAlign: "center",
                    position: "relative",
                    animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleDismiss}
                    aria-label="Close popup"
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid rgba(232, 184, 120, 0.2)",
                        background: "transparent",
                        color: "#8a8a92",
                        fontSize: "1rem",
                        cursor: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#e8b878";
                        e.currentTarget.style.color = "#e8b878";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.2)";
                        e.currentTarget.style.color = "#8a8a92";
                    }}
                >
                    ×
                </button>

                <div
                    style={{
                        fontSize: "0.65rem",
                        color: "#e8b878",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        marginBottom: "1.5rem",
                    }}
                >
                    Before You Go
                </div>

                <h3
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "#f5e6d3",
                        marginBottom: "1rem",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                    }}
                >
                    Let&apos;s Build Something
                    <br />
                    <span style={{ color: "#e8b878" }}>Together</span>
                </h3>

                <p
                    style={{
                        fontSize: "0.95rem",
                        color: "#a8a8b0",
                        lineHeight: 1.6,
                        marginBottom: "2rem",
                    }}
                >
                    I&apos;m available for freelance projects and full-time opportunities.
                    Let&apos;s turn your idea into reality.
                </p>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                    }}
                >
                    <Link
                        href="/contact"
                        onClick={handleDismiss}
                        style={{
                            display: "block",
                            padding: "1rem 2rem",
                            backgroundColor: "#e8b878",
                            color: "#000",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5d4a3";
                            e.currentTarget.style.transform = "scale(1.02)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#e8b878";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        Get In Touch →
                    </Link>

                    <Link
                        href="/projects"
                        onClick={handleDismiss}
                        style={{
                            display: "block",
                            padding: "1rem 2rem",
                            backgroundColor: "transparent",
                            color: "#f5e6d3",
                            border: "1px solid rgba(245, 230, 211, 0.2)",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#e8b878";
                            e.currentTarget.style.color = "#e8b878";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(245, 230, 211, 0.2)";
                            e.currentTarget.style.color = "#f5e6d3";
                        }}
                    >
                        View My Work
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}