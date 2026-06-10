"use client";

interface StatusBadgeProps {
    text: string;
    variant?: "available" | "busy" | "live" | "info";
    size?: "sm" | "md" | "lg";
    pulse?: boolean;
}

export default function StatusBadge({
    text,
    variant = "available",
    size = "md",
    pulse = true,
}: StatusBadgeProps) {
    const colors = {
        available: { dot: "#22c55e", text: "#f5d4a3" },
        busy: { dot: "#ef4444", text: "#fca5a5" },
        live: { dot: "#e8b878", text: "#f5d4a3" },
        info: { dot: "#4a6fa5", text: "#a5c0e8" },
    };

    const sizes = {
        sm: { padding: "0.4rem 1rem", fontSize: "0.65rem", dot: "6px" },
        md: { padding: "0.6rem 1.5rem", fontSize: "0.75rem", dot: "8px" },
        lg: { padding: "0.875rem 2rem", fontSize: "0.875rem", dot: "10px" },
    };

    const color = colors[variant];
    const sizeStyles = sizes[size];

    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: sizeStyles.padding,
                backgroundColor: "rgba(232, 184, 120, 0.05)",
                border: "1px solid rgba(232, 184, 120, 0.3)",
                borderRadius: "9999px",
                fontSize: sizeStyles.fontSize,
                color: color.text,
                backdropFilter: "blur(10px)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
            }}
        >
            <span
                style={{
                    width: sizeStyles.dot,
                    height: sizeStyles.dot,
                    borderRadius: "50%",
                    backgroundColor: color.dot,
                    boxShadow: `0 0 12px ${color.dot}`,
                    animation: pulse ? "badgePulse 2s ease infinite" : "none",
                }}
            />
            {text}

            <style jsx>{`
        @keyframes badgePulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }
      `}</style>
        </div>
    );
}