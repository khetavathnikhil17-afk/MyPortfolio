"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
    label: string;
    primary: string;
    secondary: string;
    align?: "left" | "right" | "center";
    secondaryAlign?: "left" | "right";
}

export default function SectionHeader({
    label,
    primary,
    secondary,
    align = "left",
    secondaryAlign = "right",
}: SectionHeaderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ textAlign: align }}>
            {/* Label */}
            <div
                style={{
                    fontSize: "0.65rem",
                    color: "#e8b878",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                    fontWeight: 500,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                — {label}
            </div>

            {/* Split heading */}
            <h2
                style={{
                    fontSize: "clamp(3rem, 12vw, 13rem)",
                    fontWeight: 700,
                    lineHeight: 0.85,
                    letterSpacing: "-0.05em",
                    color: "#f5e6d3",
                    textTransform: "uppercase",
                    margin: 0,
                }}
            >
                <div
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(80px)",
                        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                    }}
                >
                    {primary}
                </div>
                <div
                    style={{
                        textAlign: secondaryAlign,
                        opacity: isVisible ? 0.5 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(80px)",
                        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                        WebkitTextStroke: "1.5px #e8b878",
                        color: "transparent",
                        fontStyle: "italic",
                        fontWeight: 400,
                    }}
                >
                    {secondary}
                </div>
            </h2>
        </div>
    );
}