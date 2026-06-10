"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LetterByLetterProps {
    children?: ReactNode;
    text: string;
    delay?: number;
    speed?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export default function LetterByLetter({
    children,
    text,
    delay = 0,
    speed = 0.03,
    threshold = 0.15,
    once = true,
    className = "",
    style = {},
}: LetterByLetterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (!once) {
                    setIsVisible(false);
                    setVisibleLetters(0);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, once]);

    useEffect(() => {
        if (!isVisible) return;

        const letters = text.length;
        let current = 0;

        const timer = setInterval(() => {
            current++;
            setVisibleLetters(current);
            if (current >= letters) clearInterval(timer);
        }, speed * 1000);

        return () => clearInterval(timer);
    }, [isVisible, text, speed]);

    return (
        <div ref={ref} className={className} style={style}>
            {text.split("").map((letter, i) => (
                <span
                    key={i}
                    style={{
                        opacity: i < visibleLetters ? 1 : 0,
                        transition: "opacity 0.1s ease",
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
}

export function AnimatedText({
    text,
    delay = 0,
    speed = 0.03,
    threshold = 0.15,
    once = true,
    className = "",
    style = {},
}: Omit<LetterByLetterProps, "children">) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (!once) {
                    setIsVisible(false);
                    setVisibleLetters(0);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, once]);

    useEffect(() => {
        if (!isVisible) return;

        const letters = text.length;
        let current = 0;

        const timer = setInterval(() => {
            current++;
            setVisibleLetters(current);
            if (current >= letters) clearInterval(timer);
        }, speed * 1000);

        return () => clearInterval(timer);
    }, [isVisible, text, speed]);

    return (
        <div ref={ref} className={className} style={style}>
            {text.split("").map((letter, i) => (
                <span
                    key={i}
                    style={{
                        opacity: i < visibleLetters ? 1 : 0,
                        transition: "opacity 0.1s ease",
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
}