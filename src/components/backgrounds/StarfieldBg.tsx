"use client";

import { useEffect, useRef } from "react";

interface StarfieldBgProps {
    density?: number; // number of stars
    speed?: number; // animation speed
    twinkle?: boolean;
    color?: string;
    opacity?: number;
}

export default function StarfieldBg({
    density = 150,
    speed = 0.5,
    twinkle = true,
    color = "#ffffff",
    opacity = 0.6,
}: StarfieldBgProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Array<{
            x: number;
            y: number;
            size: number;
            twinkleSpeed: number;
            twinkleOffset: number;
        }> = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            stars = [];
            for (let i = 0; i < density; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.3,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinkleOffset: Math.random() * Math.PI * 2,
                });
            }
        };

        resize();
        window.addEventListener("resize", resize);

        let time = 0;
        let rafId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.016 * speed;

            stars.forEach((star) => {
                const alpha = twinkle
                    ? (Math.sin(time + star.twinkleOffset) * 0.5 + 0.5) * opacity
                    : opacity;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = alpha;
                ctx.shadowBlur = star.size * 2;
                ctx.shadowColor = color;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            rafId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafId);
        };
    }, [density, speed, twinkle, color, opacity]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
            }}
        />
    );
}