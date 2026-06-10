"use client";

interface ScrollIndicatorProps {
    label?: string;
    position?: "center" | "left" | "right";
    variant?: "vertical" | "horizontal";
}

export default function ScrollIndicator({
    label = "Scroll",
    position = "center",
}: ScrollIndicatorProps) {
    const positionStyles = {
        center: { left: "50%", transform: "translateX(-50%)" },
        left: { left: "3rem" },
        right: { right: "3rem" },
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                ...positionStyles[position],
            }}
        >
            <div
                style={{
                    width: "1px",
                    height: "80px",
                    background:
                        "linear-gradient(to bottom, transparent, #e8b878, transparent)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "40%",
                        backgroundColor: "#f5d4a3",
                        animation: "scrollLineAnim 2.5s ease-in-out infinite",
                    }}
                />
            </div>
            <div
                style={{
                    fontSize: "0.65rem",
                    color: "#8a8a92",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </div>

            <style jsx>{`
        @keyframes scrollLineAnim {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }
      `}</style>
        </div>
    );
}