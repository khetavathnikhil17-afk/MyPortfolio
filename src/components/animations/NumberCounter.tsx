"use client";

import { useEffect, useRef, useState } from "react";

interface NumberCounterProps {
    end: number;
    start?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    separator?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function NumberCounter({
    end,
    start = 0,
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
    separator = ",",
    className = "",
    style = {},
}: NumberCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(start);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = performance.now();
        const range = end - start;

        const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function
            const eased =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            setValue(start + range * eased);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setValue(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, start, end, duration]);

    const formatNumber = (num: number) => {
        const fixed = num.toFixed(decimals);
        const parts = fixed.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        return parts.join(".");
    };

    return (
        <span ref={ref} className={className} style={style}>
            {prefix}
            {formatNumber(value)}
            {suffix}
        </span>
    );
}