"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealOnScrollProps {
    children: ReactNode;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    distance?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
    style?: CSSProperties;
}

export default function RevealOnScroll({
    children,
    direction = "up",
    delay = 0,
    duration = 1,
    distance = 60,
    threshold = 0.15,
    once = true,
    className = "",
    style = {},
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, once]);

    const getTransform = () => {
        if (isVisible) return "translate3d(0, 0, 0) scale(1)";

        switch (direction) {
            case "up":
                return `translate3d(0, ${distance}px, 0) scale(1)`;
            case "down":
                return `translate3d(0, -${distance}px, 0) scale(1)`;
            case "left":
                return `translate3d(${distance}px, 0, 0) scale(1)`;
            case "right":
                return `translate3d(-${distance}px, 0, 0) scale(1)`;
            case "scale":
                return "translate3d(0, 0, 0) scale(0.9)";
            case "fade":
            default:
                return "translate3d(0, 0, 0) scale(1)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}