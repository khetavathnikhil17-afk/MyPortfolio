"use client";

interface CornerBracketsProps {
    size?: number;
    color?: string;
    thickness?: number;
    opacity?: number;
    inset?: number;
}

export default function CornerBrackets({
    size = 40,
    color = "#e8b878",
    thickness = 1,
    opacity = 0.3,
    inset = 0,
}: CornerBracketsProps) {
    const corners = [
        { pos: { top: inset, left: inset }, t: true, l: true },
        { pos: { top: inset, right: inset }, t: true, r: true },
        { pos: { bottom: inset, left: inset }, b: true, l: true },
        { pos: { bottom: inset, right: inset }, b: true, r: true },
    ];

    return (
        <>
            {corners.map((c, i) => (
                <span
                    key={i}
                    style={{
                        position: "absolute",
                        ...c.pos,
                        width: `${size}px`,
                        height: `${size}px`,
                        borderColor: color,
                        borderStyle: "solid",
                        borderWidth: 0,
                        opacity,
                        pointerEvents: "none",
                        ...(c.t && { borderTopWidth: `${thickness}px` }),
                        ...(c.l && { borderLeftWidth: `${thickness}px` }),
                        ...(c.r && { borderRightWidth: `${thickness}px` }),
                        ...(c.b && { borderBottomWidth: `${thickness}px` }),
                    }}
                />
            ))}
        </>
    );
}