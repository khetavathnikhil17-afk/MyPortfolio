"use client";

import { useRef, useState, ReactNode } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    strength?: number;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    strength = 0.3,
    className = "",
    style = {},
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={className}
            style={{
                display: "inline-block",
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
                ...style,
            }}
        >
            {children}
        </div>
    );
}