"use client";

import { useEffect, useRef, useState, Children, ReactNode } from "react";

interface StaggerChildrenProps {
    children: ReactNode;
    staggerDelay?: number;
    initialDelay?: number;
    duration?: number;
    distance?: number;
    threshold?: number;
    className?: string;
}

export default function StaggerChildren({
    children,
    staggerDelay = 0.1,
    initialDelay = 0,
    duration = 0.8,
    distance = 30,
    threshold = 0.15,
    className = "",
}: StaggerChildrenProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    const childArray = Children.toArray(children);

    return (
        <div ref={ref} className={className}>
            {childArray.map((child, i) => (
                <div
                    key={i}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
                        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + i * staggerDelay
                            }s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + i * staggerDelay
                            }s`,
                        willChange: "transform, opacity",
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}