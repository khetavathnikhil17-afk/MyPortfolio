"use client";

interface AccentLineProps {
    width?: string;
    thickness?: number;
    glow?: boolean;
    vertical?: boolean;
}

export default function AccentLine({
    width = "60%",
    thickness = 1,
    glow = true,
    vertical = false,
}: AccentLineProps) {
    if (vertical) {
        return (
            <div
                style={{
                    width: `${thickness}px`,
                    height: width,
                    background:
                        "linear-gradient(to bottom, transparent, #e8b878, transparent)",
                    boxShadow: glow ? "0 0 20px #e8b878" : "none",
                }}
            />
        );
    }

    return (
        <div
            style={{
                width,
                height: `${thickness}px`,
                background:
                    "linear-gradient(90deg, transparent, #e8b878, transparent)",
                boxShadow: glow ? "0 0 20px #e8b878" : "none",
                margin: "0 auto",
            }}
        />
    );
}