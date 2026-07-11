"use client";

import { useRef, useState, useEffect } from "react";

const technologies = [
    {
        name: "Next.js",
        svg: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5zm3.78 11.28H7.5V5.22h1.44v6.06h3.36c.42 0 .78-.12 1.02-.36.24-.24.36-.6.36-1.08 0-.48-.12-.84-.36-1.08-.24-.24-.6-.36-1.02-.36H9.66V6.3h2.28c.96 0 1.74.3 2.34.9.6.6.9 1.38.9 2.34 0 .96-.3 1.74-.9 2.34-.6.6-1.38.9-2.34.9z" fill="#e8b878"/>
            </svg>
        ),
    },
    {
        name: "React",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2.5" fill="#e8b878"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#e8b878" strokeWidth="1.2" fill="none"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#e8b878" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#e8b878" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
            </svg>
        ),
    },
    {
        name: "Python",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 6.73 4.56 6.73 4.56l.01 2.88h5.34v.86H5.5S2 7.84 2 12.18c0 4.34 2.94 4.18 2.94 4.18h1.74v-1.98s-.09-2.94 2.94-2.94h5.04s2.85.05 2.85-2.76V4.94S18.34 2 12 2zm-3.12 1.56a1.08 1.08 0 110 2.16 1.08 1.08 0 010-2.16z" fill="#e8b878"/>
                <path d="M12 22c5.52 0 5.27-2.56 5.27-2.56l-.01-2.88h-5.34v-.86H18.5S22 16.16 22 11.82c0-4.34-2.94-4.18-2.94-4.18h-1.74v1.98s.09 2.94-2.94 2.94H9.28s-2.85-.05-2.85 2.76v2.86S5.66 22 12 22zm3.12-1.56a1.08 1.08 0 110-2.16 1.08 1.08 0 010 2.16z" fill="#e8b878"/>
            </svg>
        ),
    },
    {
        name: "TypeScript",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="3" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <path d="M13.5 16.5h-3v-1.5c-.5.6-1.14 1.05-2 1.2v1.44c1.35-.15 2.4-.9 3.25-2.14h1.75V7h-4.5v1.5h3v6.5h1.5z" fill="#e8b878"/>
                <path d="M16.5 16.5l1.5-1.5c.5.45.95.8 1.5 1.05v1.44c-1.05-.3-1.95-.95-3-1.99z" fill="#e8b878"/>
            </svg>
        ),
    },
    {
        name: "OpenAI",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0014.98 2.1a5.985 5.985 0 00-3.998 1.8 6.046 6.046 0 00-2.012 7.51 5.985 5.985 0 00.516 4.91 6.046 6.046 0 006.51 2.9A6.065 6.065 0 009.02 21.9a5.985 5.985 0 003.998-1.8 6.046 6.046 0 002.012-7.51zM9.02 19.922a4.463 4.463 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.38 8.422a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.38 8.424zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#e8b878"/>
            </svg>
        ),
    },
    {
        name: "FastAPI",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <path d="M12 12v10M2 7l10 5 10-5" stroke="#e8b878" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="2" fill="#e8b878"/>
            </svg>
        ),
    },
    {
        name: "PostgreSQL",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
            </svg>
        ),
    },
    {
        name: "Docker",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="10" width="20" height="10" rx="2" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <rect x="4" y="12" width="3" height="2.5" rx="0.5" fill="#e8b878"/>
                <rect x="8" y="12" width="3" height="2.5" rx="0.5" fill="#e8b878"/>
                <rect x="12" y="12" width="3" height="2.5" rx="0.5" fill="#e8b878"/>
                <rect x="4" y="15.5" width="3" height="2.5" rx="0.5" fill="#e8b878"/>
                <rect x="8" y="15.5" width="3" height="2.5" rx="0.5" fill="#e8b878"/>
                <path d="M19 13c1.5 0 2.5-.5 3-1.5" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "AWS",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 16.5c-1.5.5-3.2-.2-3.5-1.5-.3-1.3.5-2.7 2-3.2 1.5-.5 3.2.2 3.5 1.5.3 1.3-.5 2.7-2 3.2z" stroke="#e8b878" strokeWidth="1.5" fill="none"/>
                <path d="M8.5 14.5c-.8.3-1.7-.1-2-.8-.3-.7.2-1.5 1-1.8.8-.3 1.7.1 2 .8.3.7-.2 1.5-1 1.8z" fill="#e8b878"/>
                <path d="M3 19.5h18M5 16c1 3 4 5 7 5s6-2 7-5" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 8l-5 6-3-3-4 4" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        name: "TensorFlow",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v2h18V7L12 2z" fill="#e8b878"/>
                <path d="M3 9v6h4v-6H3zM7 9l5 3v6l-5-3V9zM17 9v6h4V9h-4z" stroke="#e8b878" strokeWidth="1.2" fill="none"/>
                <circle cx="5" cy="18" r="1.5" fill="#e8b878"/>
                <circle cx="12" cy="18" r="1.5" fill="#e8b878"/>
                <circle cx="19" cy="18" r="1.5" fill="#e8b878"/>
            </svg>
        ),
    },
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
                        gap: "1.5rem",
                    }}
                >
                    {technologies.map((tech, i) => (
                        <div
                            key={tech.name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "0.875rem 1.25rem",
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
                            {tech.svg}
                            <span
                                style={{
                                    fontSize: "0.8rem",
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
