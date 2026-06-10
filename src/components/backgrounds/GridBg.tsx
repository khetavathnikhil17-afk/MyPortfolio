"use client";

interface GridBgProps {
    size?: number;
    color?: string;
    opacity?: number;
    fade?: boolean;
}

export default function GridBg({
    size = 60,
    color = "rgba(232, 184, 120, 0.05)",
    opacity = 1,
    fade = true,
}: GridBgProps) {
    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
                backgroundSize: `${size}px ${size}px`,
                opacity,
                pointerEvents: "none",
                maskImage: fade
                    ? "radial-gradient(ellipse at center, black 30%, transparent 80%)"
                    : "none",
                WebkitMaskImage: fade
                    ? "radial-gradient(ellipse at center, black 30%, transparent 80%)"
                    : "none",
            }}
        />
    );
}