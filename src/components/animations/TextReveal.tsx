"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface TextRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function TextReveal({
    children,
    delay = 0,
    duration = 1,
    direction = "up",
    className = "",
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return "translateY(100%)";
            case "down":
                return "translateY(-100%)";
            case "left":
                return "translateX(100%)";
            case "right":
                return "translateX(-100%)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-block",
            }}
        >
            <div
                style={{
                    transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
                    transition: `transform ${duration}s cubic-bezier(0.76, 0, 0.24, 1) ${delay}s`,
                    willChange: "transform",
                }}
            >
                {children}
            </div>
        </div>
    );
}