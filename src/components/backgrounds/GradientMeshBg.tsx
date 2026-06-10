"use client";

interface GradientMeshBgProps {
    colors?: string[];
    speed?: number;
    opacity?: number;
}

export default function GradientMeshBg({
    colors = ["#e8b878", "#c89860", "#4a6fa5", "#2d4263"],
    speed = 15,
    opacity = 0.3,
}: GradientMeshBgProps) {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
            >
                {colors.map((color, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: "60%",
                            height: "60%",
                            borderRadius: "50%",
                            background: `radial-gradient(circle, ${color}, transparent 70%)`,
                            filter: "blur(80px)",
                            animation: `meshFloat${i} ${speed + i * 2}s ease-in-out infinite`,
                            top: `${20 + i * 10}%`,
                            left: `${10 + i * 20}%`,
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes meshFloat0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20%, 10%); }
        }
        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15%, 20%); }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10%, -20%); }
        }
        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20%, -10%); }
        }
      `}</style>
        </>
    );
}