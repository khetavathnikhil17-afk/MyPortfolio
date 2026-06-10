"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionTransitionProps {
    children: ReactNode;
    chapter?: string;
    chapterTitle?: string;
    showDivider?: boolean;
    delay?: number;
}

export default function SectionTransition({
    children,
    chapter,
    chapterTitle,
    showDivider = true,
    delay = 0,
}: SectionTransitionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }, delay);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [delay, hasAnimated]);

    return (
        <div ref={sectionRef} style={{ position: "relative" }}>
            {/* ===== GOLD DIVIDER LINE ===== */}
            {showDivider && (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent 0%, rgba(232, 184, 120, 0.4) 50%, transparent 100%)",
                        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                        transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                        margin: "0 auto",
                        maxWidth: "1400px",
                    }}
                >
                    {/* Center dot accent */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#e8b878",
                            boxShadow: "0 0 20px #e8b878",
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 0.6s ease 0.8s",
                        }}
                    />
                </div>
            )}

            {/* ===== CHAPTER LABEL (optional) ===== */}
            {chapter && chapterTitle && (
                <div
                    style={{
                        position: "absolute",
                        top: "2rem",
                        left: "50%",
                        transform: isVisible
                            ? "translateX(-50%) translateY(0)"
                            : "translateX(-50%) translateY(-20px)",
                        opacity: isVisible ? 1 : 0,
                        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                        zIndex: 5,
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "0.65rem",
                        color: "#777777",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        padding: "0.5rem 1.25rem",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(232, 184, 120, 0.15)",
                        borderRadius: "9999px",
                    }}
                >
                    <span>{chapter}</span>
                    <span style={{ color: "#e8b878" }}>/</span>
                    <span style={{ color: "#e8b878" }}>{chapterTitle}</span>
                </div>
            )}

            {/* ===== CONTENT WRAPPER WITH SCROLL ANIMATIONS ===== */}
            <div
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(60px)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                }}
            >
                {children}
            </div>
        </div>
    );
}