"use client";

interface CosmicGlowBgProps {
    color?: string;
    intensity?: number;
    size?: number;
    position?: "center" | "top" | "bottom" | "left" | "right";
    animated?: boolean;
}

export default function CosmicGlowBg({
    color = "#e8b878",
    intensity = 0.15,
    size = 800,
    position = "center",
    animated = true,
}: CosmicGlowBgProps) {
    const getPosition = () => {
        switch (position) {
            case "top":
                return { top: "10%", left: "50%", transform: "translateX(-50%)" };
            case "bottom":
                return { bottom: "10%", left: "50%", transform: "translateX(-50%)" };
            case "left":
                return { top: "50%", left: "10%", transform: "translateY(-50%)" };
            case "right":
                return { top: "50%", right: "10%", transform: "translateY(-50%)" };
            default:
                return {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                };
        }
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${color}${Math.round(intensity * 255).toString(16).padStart(2, "0")}, transparent 70%)`,
                    filter: "blur(80px)",
                    pointerEvents: "none",
                    animation: animated ? "cosmicPulse 6s ease-in-out infinite" : "none",
                    ...getPosition(),
                }}
            />

            <style jsx>{`
        @keyframes cosmicPulse {
          0%, 100% {
            opacity: 1;
            transform: ${position === "center"
                    ? "translate(-50%, -50%) scale(1)"
                    : "scale(1)"};
          }
          50% {
            opacity: 0.6;
            transform: ${position === "center"
                    ? "translate(-50%, -50%) scale(1.2)"
                    : "scale(1.2)"};
          }
        }
      `}</style>
        </>
    );
}