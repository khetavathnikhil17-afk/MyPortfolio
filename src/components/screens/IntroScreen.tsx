"use client";

import { useEffect, useState, useCallback } from "react";

interface IntroScreenProps {
    onComplete: () => void;
}

type Stage = "boot" | "counter" | "reveal" | "ready" | "exiting";

export default function IntroScreen({ onComplete }: IntroScreenProps) {
    const [stage, setStage] = useState<Stage>("boot");
    const [counter, setCounter] = useState(0);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        if (stage === "boot") {
            const t = setTimeout(() => setStage("counter"), 800);
            return () => clearTimeout(t);
        }
    }, [stage]);

    useEffect(() => {
        if (stage !== "counter") return;
        let step = 0;
        const total = 80;
        const t = setInterval(() => {
            step++;
            const p = step / total;
            const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
            setCounter(Math.min(100, Math.round(e * 100)));
            if (step >= total) {
                clearInterval(t);
                setTimeout(() => setStage("reveal"), 300);
            }
        }, 20);
        return () => clearInterval(t);
    }, [stage]);

    useEffect(() => {
        if (stage !== "reveal") return;
        const text = "PORTFOLIO";
        let i = 0;
        const t = setInterval(() => {
            i++;
            setVisibleLetters(i);
            if (i >= text.length) {
                clearInterval(t);
                setTimeout(() => setStage("ready"), 400);
            }
        }, 60);
        return () => clearInterval(t);
    }, [stage]);

    const exit = useCallback(() => {
        setStage("exiting");
        setTimeout(() => onComplete(), 1200);
    }, [onComplete]);

    useEffect(() => {
        if (stage !== "ready") return;
        const h = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                exit();
            }
        };
        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [stage, exit]);

    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                zIndex: 99999,
                backgroundColor: "#0a0806",
                overflow: "hidden",
                opacity: stage === "exiting" ? 0 : 1,
                transition: "opacity 0.8s ease",
            }}
        >
            {/* Background glow */}
            <div
                style={{
                    position: "absolute",
                    width: "70%",
                    height: "70%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(232,184,120,0.06), transparent 60%)",
                    filter: "blur(80px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                }}
            />

            {/* Center content */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 5,
                }}
            >
                {/* BOOT - expanding rings */}
                {stage === "boot" && (
                    <div style={{ position: "relative", width: "300px", height: "300px" }}>
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "280px",
                                height: "280px",
                                borderRadius: "50%",
                                border: "1px solid rgba(232,184,120,0.08)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                border: "1px solid rgba(232,184,120,0.12)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "120px",
                                height: "120px",
                                borderRadius: "50%",
                                border: "1px solid rgba(232,184,120,0.18)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "#e8b878",
                                transform: "translate(-50%, -50%)",
                                boxShadow: "0 0 30px rgba(232,184,120,0.7), 0 0 60px rgba(232,184,120,0.3)",
                            }}
                        />
                    </div>
                )}

                {/* COUNTER */}
                {stage === "counter" && (
                    <div style={{ textAlign: "center" }}>
                        {/* Expanding rings */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "500px",
                                height: "500px",
                                borderRadius: "50%",
                                border: "1px solid rgba(232,184,120,0.04)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "350px",
                                height: "350px",
                                borderRadius: "50%",
                                border: "1px solid rgba(232,184,120,0.06)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "600px",
                                height: "600px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(232,184,120,0.08), transparent 60%)",
                                filter: "blur(50px)",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                        <div
                            style={{
                                fontSize: "clamp(8rem, 24vw, 22rem)",
                                fontWeight: 200,
                                color: "#f5e6d3",
                                lineHeight: 1,
                                fontVariantNumeric: "tabular-nums",
                                textShadow: "0 0 80px rgba(232,184,120,0.4), 0 0 160px rgba(232,184,120,0.15)",
                                position: "relative",
                            }}
                        >
                            {String(counter).padStart(2, "0")}
                        </div>
                        <div
                            style={{
                                marginTop: "2rem",
                                fontSize: "0.65rem",
                                color: "#8a8a92",
                                letterSpacing: "0.5em",
                                textTransform: "uppercase",
                                fontWeight: 500,
                            }}
                        >
                            Loading Experience
                        </div>
                    </div>
                )}

                {/* REVEAL / READY */}
                {(stage === "reveal" || stage === "ready") && (
                    <div style={{ textAlign: "center", position: "relative" }}>
                        {/* Glow behind title */}
                        <div
                            style={{
                                position: "absolute",
                                width: "800px",
                                height: "400px",
                                borderRadius: "50%",
                                background: "radial-gradient(ellipse, rgba(232,184,120,0.08), transparent 60%)",
                                filter: "blur(60px)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                pointerEvents: "none",
                            }}
                        />

                        <div
                            style={{
                                fontSize: "0.6rem",
                                color: "#e8b878",
                                letterSpacing: "0.6em",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                marginBottom: "2rem",
                            }}
                        >
                            Welcome to
                        </div>
                        <h1
                            style={{
                                fontSize: "clamp(4rem, 12vw, 11rem)",
                                fontWeight: 700,
                                color: "#f5e6d3",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                margin: 0,
                                textShadow: "0 0 60px rgba(232,184,120,0.3), 0 0 120px rgba(232,184,120,0.1)",
                                position: "relative",
                            }}
                        >
                            {"PORTFOLIO".split("").map((ch, i) => (
                                <span
                                    key={i}
                                    style={{
                                        display: "inline-block",
                                        opacity: i < visibleLetters ? 1 : 0,
                                        transform: i < visibleLetters ? "none" : "translateY(40px)",
                                        transition: "opacity 0.5s ease, transform 0.6s ease",
                                    }}
                                >
                                    {ch}
                                </span>
                            ))}
                        </h1>

                        {/* Tagline */}
                        <p
                            style={{
                                fontSize: "0.75rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                fontWeight: 400,
                                maxWidth: "700px",
                                lineHeight: 1.8,
                                textAlign: "center",
                                margin: "2.5rem auto 0",
                                opacity: stage === "ready" ? 1 : 0,
                                transition: "opacity 0.8s ease 0.3s",
                            }}
                        >
                            From model to production. AI products that ship.
                        </p>

                        {/* CTA with corner brackets */}
                        {stage === "ready" && (
                            <div
                                style={{
                                    position: "relative",
                                    marginTop: "3.5rem",
                                    padding: "1.5rem 2.5rem",
                                    display: "inline-block",
                                }}
                            >
                                {[
                                    { pos: { top: 0, left: 0 }, t: true, l: true },
                                    { pos: { top: 0, right: 0 }, t: true, r: true },
                                    { pos: { bottom: 0, left: 0 }, b: true, l: true },
                                    { pos: { bottom: 0, right: 0 }, b: true, r: true },
                                ].map((c, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            ...c.pos,
                                            width: "20px",
                                            height: "20px",
                                            borderColor: "#e8b878",
                                            borderStyle: "solid",
                                            borderWidth: 0,
                                            ...(c.t && { borderTopWidth: "2px" }),
                                            ...(c.l && { borderLeftWidth: "2px" }),
                                            ...(c.r && { borderRightWidth: "2px" }),
                                            ...(c.b && { borderBottomWidth: "2px" }),
                                        }}
                                    />
                                ))}
                                <button
                                    onClick={exit}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        padding: "0.5rem 2rem",
                                        fontSize: "0.9rem",
                                        color: "#ffffff",
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8b878")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                                >
                                    View My Work
                                </button>
                            </div>
                        )}

                        {/* Press Enter / Space */}
                        {stage === "ready" && (
                            <div
                                style={{
                                    marginTop: "2rem",
                                    fontSize: "0.55rem",
                                    color: "#777777",
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Press <span style={{ color: "#e8b878" }}>Enter</span> or{" "}
                                <span style={{ color: "#e8b878" }}>Space</span> to begin
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom progress bar - only during counter */}
            {stage === "counter" && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        maxWidth: "500px",
                        zIndex: 5,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "1px",
                            backgroundColor: "rgba(232,184,120,0.1)",
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
                                background: "linear-gradient(90deg, transparent, #e8b878 50%, #f5d4a3)",
                                boxShadow: "0 0 20px rgba(232,184,120,0.6)",
                                transition: "width 0.05s linear",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "0.75rem",
                            fontSize: "0.5rem",
                            color: "#777777",
                            letterSpacing: "0.3em",
                        }}
                    >
                        <span>00</span>
                        <span>25</span>
                        <span>50</span>
                        <span>75</span>
                        <span>100</span>
                    </div>
                </div>
            )}

            {/* Skip Intro button */}
            {stage === "ready" && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "2.5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 5,
                    }}
                >
                    <button
                        onClick={exit}
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(232,184,120,0.3)",
                            padding: "0.75rem 2rem",
                            fontSize: "0.65rem",
                            color: "#a8a8b0",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            borderRadius: "9999px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#e8b878";
                            e.currentTarget.style.borderColor = "#e8b878";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#a8a8b0";
                            e.currentTarget.style.borderColor = "rgba(232,184,120,0.3)";
                        }}
                    >
                        Skip Intro →
                    </button>
                </div>
            )}
        </div>
    );
}
