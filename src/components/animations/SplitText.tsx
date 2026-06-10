"use client";

import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
    text: string;
    delay?: number;
    staggerDelay?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
    type?: "letter" | "word";
}

export default function SplitText({
    text,
    delay = 0,
    staggerDelay = 0.03,
    duration = 0.8,
    className = "",
    style = {},
    type = "letter",
}: SplitTextProps) {
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

    const splitItems = type === "letter" ? text.split("") : text.split(" ");

    return (
        <div
            ref={ref}
            className={className}
            style={{
                display: "inline-block",
                ...style,
            }}
        >
            {splitItems.map((item, i) => (
                <span
                    key={i}
                    style={{
                        display: "inline-block",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(50px)",
                        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * staggerDelay
                            }s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * staggerDelay
                            }s`,
                        whiteSpace: type === "word" ? "pre" : "normal",
                    }}
                >
                    {item === " " ? "\u00A0" : item}
                    {type === "word" && i < splitItems.length - 1 && "\u00A0"}
                </span>
            ))}
        </div>
    );
}