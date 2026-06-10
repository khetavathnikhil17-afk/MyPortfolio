"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export default function Parallax({
    children,
    speed = 0.5,
    className = "",
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;
                const distance = elementCenter - viewportCenter;
                ref.current.style.transform = `translateY(${distance * speed * -1}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ willChange: "transform" }}
        >
            {children}
        </div>
    );
}