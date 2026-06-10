"use client";

import { useRef, useState, useEffect } from "react";

interface Skill {
    name: string;
    level: number;
    color?: string;
}

interface SkillRadarProps {
    skills: Skill[];
    size?: number;
}

export default function SkillRadar({ skills, size = 300 }: SkillRadarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animatedLevels = useRef(skills.map(() => 0));
    const svgRef = useRef<SVGSVGElement>(null);

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

    useEffect(() => {
        if (!isVisible) return;

        const targetLevels = skills.map((s) => s.level);
        const startLevels = [...animatedLevels.current];
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            animatedLevels.current = startLevels.map((start, i) =>
                start + (targetLevels[i] - start) * eased
            );

            if (svgRef.current) {
                const polygon = svgRef.current.querySelector(".data-polygon") as SVGPolygonElement;
                const circles = svgRef.current.querySelectorAll(".data-circle");
                if (polygon) {
                    polygon.setAttribute(
                        "points",
                        animatedLevels.current
                            .map((level, i) => {
                                const point = getPoint(i, level);
                                return `${point.x},${point.y}`;
                            })
                            .join(" ")
                    );
                }
                circles.forEach((circle, i) => {
                    const point = getPoint(i, animatedLevels.current[i]);
                    circle.setAttribute("cx", String(point.x));
                    circle.setAttribute("cy", String(point.y));
                });
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, skills]);

    const center = size / 2;
    const radius = size / 2 - 40;
    const angleStep = (2 * Math.PI) / skills.length;

    const getPoint = (index: number, level: number) => {
        const angle = angleStep * index - Math.PI / 2;
        const r = (level / 100) * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle),
        };
    };

    const initialPoints = skills
        .map((skill, i) => {
            const point = getPoint(i, 0);
            return `${point.x},${point.y}`;
        })
        .join(" ");

    return (
        <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
            <svg ref={svgRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background rings */}
                {[20, 40, 60, 80, 100].map((level) => (
                    <polygon
                        key={level}
                        points={skills
                            .map((_, i) => {
                                const point = getPoint(i, level);
                                return `${point.x},${point.y}`;
                            })
                            .join(" ")}
                        fill="none"
                        stroke="rgba(232, 184, 120, 0.1)"
                        strokeWidth="1"
                    />
                ))}

                {/* Axis lines */}
                {skills.map((_, i) => {
                    const point = getPoint(i, 100);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={point.x}
                            y2={point.y}
                            stroke="rgba(232, 184, 120, 0.1)"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data polygon */}
                <polygon
                    className="data-polygon"
                    points={initialPoints}
                    fill="rgba(232, 184, 120, 0.15)"
                    stroke="#e8b878"
                    strokeWidth="2"
                />

                {/* Data points */}
                {skills.map((skill, i) => {
                    const point = getPoint(i, 0);
                    return (
                        <circle
                            key={i}
                            className="data-circle"
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="#e8b878"
                        />
                    );
                })}

                {/* Labels */}
                {skills.map((skill, i) => {
                    const point = getPoint(i, 120);
                    return (
                        <text
                            key={i}
                            x={point.x}
                            y={point.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{
                                fontSize: "0.65rem",
                                fill: "#a8a8b0",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {skill.name}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}