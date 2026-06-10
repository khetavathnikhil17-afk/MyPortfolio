"use client";

import { useRef, useState, useEffect } from "react";

interface SkillBarProps {
    name: string;
    level: number; // 0-100
    color?: string;
    delay?: number;
}

export default function SkillBar({
    name,
    level,
    color = "#e8b878",
    delay = 0,
}: SkillBarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animatedWidth, setAnimatedWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setAnimatedWidth(level);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, level, delay]);

    return (
        <div ref={ref} style={{ marginBottom: "1.5rem" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                }}
            >
                <span
                    style={{
                        fontSize: "0.85rem",
                        color: "#f5e6d3",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                    }}
                >
                    {name}
                </span>
                <span
                    style={{
                        fontSize: "0.75rem",
                        color: "#8a8a92",
                        letterSpacing: "0.1em",
                    }}
                >
                    {level}%
                </span>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "rgba(232, 184, 120, 0.1)",
                    borderRadius: "2px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: `${animatedWidth}%`,
                        height: "100%",
                        backgroundColor: color,
                        borderRadius: "2px",
                        transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: `0 0 20px ${color}40`,
                    }}
                />
            </div>
        </div>
    );
}