"use client";

interface NoiseBgProps {
    opacity?: number;
    animated?: boolean;
    blendMode?: "overlay" | "multiply" | "screen" | "normal";
}

export default function NoiseBg({
    opacity = 0.08,
    animated = true,
    blendMode = "overlay",
}: NoiseBgProps) {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity,
                    pointerEvents: "none",
                    mixBlendMode: blendMode,
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    animation: animated ? "grainShift 8s steps(10) infinite" : "none",
                }}
            />

            <style jsx>{`
        @keyframes grainShift {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
        </>
    );
}