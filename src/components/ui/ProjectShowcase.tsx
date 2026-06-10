"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ProjectShowcaseProps {
    images: ProjectImage[];
    accent?: string;
}

export default function ProjectShowcase({
    images,
    accent = "#e8b878",
}: ProjectShowcaseProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ position: "relative" }}>
            {/* Main Image */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/10",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(232, 184, 120, 0.15)",
                    background: "#0a0a0a",
                }}
            >
                {images.map((image, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            inset: 0,
                            opacity: i === activeIndex ? 1 : 0,
                            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                ))}

                {/* Caption overlay */}
                {images[activeIndex]?.caption && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "2rem",
                            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "0.8rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.1em",
                            }}
                        >
                            {images[activeIndex].caption}
                        </span>
                    </div>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginTop: "1rem",
                        justifyContent: "center",
                    }}
                >
                    {images.map((image, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            style={{
                                width: "64px",
                                height: "40px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                border: `2px solid ${i === activeIndex ? accent : "rgba(232, 184, 120, 0.15)"}`,
                                cursor: "none",
                                transition: "all 0.3s ease",
                                opacity: i === activeIndex ? 1 : 0.6,
                                position: "relative",
                                background: "transparent",
                                padding: 0,
                            }}
                            onMouseEnter={(e) => {
                                if (i !== activeIndex) {
                                    e.currentTarget.style.opacity = "0.8";
                                    e.currentTarget.style.borderColor = `${accent}60`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (i !== activeIndex) {
                                    e.currentTarget.style.opacity = "0.6";
                                    e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.15)";
                                }
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="64px"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Dots indicator */}
            {images.length > 1 && (
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        justifyContent: "center",
                        marginTop: "1rem",
                    }}
                >
                    {images.map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: i === activeIndex ? "24px" : "6px",
                                height: "6px",
                                borderRadius: "3px",
                                backgroundColor: i === activeIndex ? accent : "rgba(232, 184, 120, 0.2)",
                                transition: "all 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}