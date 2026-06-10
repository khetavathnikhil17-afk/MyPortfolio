"use client";

import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
    message?: string;
    variant?: "fullscreen" | "overlay" | "minimal";
    show?: boolean;
}

export default function LoadingScreen({
    message = "Loading",
    variant = "fullscreen",
    show = true,
}: LoadingScreenProps) {
    const prevShowRef = useRef(show);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (prevShowRef.current && !show) {
            setIsFading(true);
            const timer = setTimeout(() => {
                setIsFading(false);
            }, 500);
            return () => clearTimeout(timer);
        }
        prevShowRef.current = show;
    }, [show]);

    const isVisible = show || isFading;
    if (!isVisible) return null;

    // Minimal variant - just a small indicator
    if (variant === "minimal") {
        return (
            <div
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1.25rem",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(232, 184, 120, 0.3)",
                    borderRadius: "9999px",
                    zIndex: 9990,
                    opacity: show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <div
                    style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(232, 184, 120, 0.3)",
                        borderTopColor: "#e8b878",
                        borderRightColor: "#e8b878",
                        animation: "spinLoader 0.8s linear infinite",
                    }}
                />
                <span
                    style={{
                        fontSize: "0.7rem",
                        color: "#e8b878",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                    }}
                >
                    {message}
                </span>
                <style jsx>{`
          @keyframes spinLoader {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
            </div>
        );
    }

    // Overlay variant - blurred over content
    if (variant === "overlay") {
        return (
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(8px)",
                    zIndex: 9990,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: show ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: show ? "auto" : "none",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "3rem",
                        backgroundColor: "rgba(10, 10, 12, 0.8)",
                        border: "1px solid rgba(232, 184, 120, 0.2)",
                        borderRadius: "16px",
                        backdropFilter: "blur(20px)",
                    }}
                >
                    {/* Dual spinning rings */}
                    <div
                        style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                border: "1.5px solid rgba(232, 184, 120, 0.15)",
                                borderTopColor: "#e8b878",
                                animation: "spinLoader 1s linear infinite",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "8px",
                                borderRadius: "50%",
                                border: "1.5px solid rgba(232, 184, 120, 0.1)",
                                borderRightColor: "#f5d4a3",
                                animation: "spinLoader 1.5s linear infinite reverse",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#e8b878",
                                boxShadow: "0 0 12px #e8b878",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: "0.7rem",
                            color: "#e8b878",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                        }}
                    >
                        {message}
                    </div>

                    {/* Dots */}
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    backgroundColor: "#e8b878",
                                    animation: `loadDots 1.4s ease-in-out infinite ${i * 0.2}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <style jsx>{`
          @keyframes spinLoader {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes loadDots {
            0%,
            80%,
            100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            40% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
            </div>
        );
    }

    // Fullscreen variant (default)
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "#000",
                zIndex: 9990,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: show ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: show ? "auto" : "none",
            }}
        >
            {/* Background glow */}
            <div
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(232, 184, 120, 0.08), transparent 70%)",
                    filter: "blur(50px)",
                }}
            />

            {/* Rotating ring loader */}
            <div
                style={{
                    position: "relative",
                    width: "80px",
                    height: "80px",
                    marginBottom: "2rem",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        border: "1px solid rgba(232, 184, 120, 0.15)",
                        borderTopColor: "#e8b878",
                        borderRightColor: "#e8b878",
                        animation: "spinLoader 1s linear infinite",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: "10px",
                        borderRadius: "50%",
                        border: "1px solid rgba(232, 184, 120, 0.1)",
                        borderBottomColor: "#f5d4a3",
                        animation: "spinLoader 1.5s linear infinite reverse",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#e8b878",
                        boxShadow: "0 0 20px #e8b878",
                        transform: "translate(-50%, -50%)",
                        animation: "pulseLoader 1.5s ease-in-out infinite",
                    }}
                />
            </div>

            <div
                style={{
                    fontSize: "0.7rem",
                    color: "#e8b878",
                    letterSpacing: "0.5em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                }}
            >
                {message}
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "#e8b878",
                            animation: `loadDots 1.4s ease-in-out infinite ${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes spinLoader {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes loadDots {
          0%,
          80%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes pulseLoader {
          0%,
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }
      `}</style>
        </div>
    );
}