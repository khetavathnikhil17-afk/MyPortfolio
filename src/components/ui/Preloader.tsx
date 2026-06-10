"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [counter, setCounter] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const duration = 2500; // total duration in ms
        const interval = 20;
        const increment = (100 * interval) / duration;

        const counterInterval = setInterval(() => {
            setCounter((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(counterInterval);
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(() => {
                            onComplete();
                        }, 1000);
                    }, 300);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(counterInterval);
    }, [onComplete]);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#080808",
                zIndex: 99999,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                transform: isExiting ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 1s cubic-bezier(0.76, 0, 0.24, 1)",
                pointerEvents: isExiting ? "none" : "auto",
            }}
        >
            {/* Top label */}
            <div
                style={{
                    fontSize: "0.875rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#888888",
                    opacity: isExiting ? 0 : 1,
                    transition: "opacity 0.5s ease",
                }}
            >
                Loading Experience
            </div>

            {/* Center counter */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        fontSize: "clamp(6rem, 20vw, 18rem)",
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: "-0.05em",
                        color: "white",
                    }}
                >
                    {Math.floor(counter)}
                </div>
                <div
                    style={{
                        fontSize: "clamp(2rem, 4vw, 4rem)",
                        fontWeight: 400,
                        color: "#888888",
                        marginBottom: "1rem",
                    }}
                >
                    %
                </div>
            </div>

            {/* Bottom progress bar */}
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#222222",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: `${counter}%`,
                            backgroundColor: "#e8b878",
                            transition: "width 0.1s linear",
                        }}
                    />
                </div>
                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#555555",
                    }}
                >
                    <span>Portfolio</span>
                            <span>2026</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;