"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScaleInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    scale?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
}

export default function ScaleIn({
    children,
    delay = 0,
    duration = 1,
    scale = 0.8,
    threshold = 0.15,
    once = true,
    className = "",
}: ScaleInProps) {
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

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : `scale(${scale})`,
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}