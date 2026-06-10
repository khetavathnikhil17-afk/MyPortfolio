"use client";

import { useRef, useState, useEffect } from "react";

interface SectionDividerProps {
    color?: string;
    width?: string;
}

export default function SectionDivider({
    color = "#e8b878",
    width = "100%",
}: SectionDividerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                width,
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: isVisible ? "100%" : "0%",
                    height: "100%",
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            />
        </div>
    );
}