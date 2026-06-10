"use client";

import { useRef, useState, useEffect } from "react";

const technologies = [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛" },
    { name: "Python", icon: "◆" },
    { name: "TypeScript", icon: "TS" },
    { name: "OpenAI", icon: "●" },
    { name: "FastAPI", icon: "⚡" },
    { name: "PostgreSQL", icon: "DB" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁" },
    { name: "TensorFlow", icon: "TF" },
];

export default function TechLogos() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            style={{
                padding: "6rem 3rem",
                borderTop: "1px solid rgba(232, 184, 120, 0.1)",
                borderBottom: "1px solid rgba(232, 184, 120, 0.1)",
                backgroundColor: "rgba(232, 184, 120, 0.02)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        fontSize: "0.65rem",
                        color: "#8a8a92",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        marginBottom: "3rem",
                    }}
                >
                    Built With
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "2rem",
                    }}
                >
                    {technologies.map((tech, i) => (
                        <div
                            key={tech.name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "1rem 1.5rem",
                                border: "1px solid rgba(232, 184, 120, 0.1)",
                                borderRadius: "12px",
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#e8b878";
                                e.currentTarget.style.background = "rgba(232, 184, 120, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.1)";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#e8b878",
                                }}
                            >
                                {tech.icon}
                            </span>
                            <span
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#a8a8b0",
                                    fontWeight: 500,
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}