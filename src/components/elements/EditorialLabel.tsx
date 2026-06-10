"use client";

interface EditorialLabelProps {
    text: string;
    color?: string;
    size?: "xs" | "sm" | "md";
    dash?: boolean;
}

export default function EditorialLabel({
    text,
    color = "#e8b878",
    size = "sm",
    dash = true,
}: EditorialLabelProps) {
    const sizes = {
        xs: "0.6rem",
        sm: "0.65rem",
        md: "0.75rem",
    };

    return (
        <div
            style={{
                fontSize: sizes[size],
                color,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontWeight: 500,
            }}
        >
            {dash ? `— ${text}` : text}
        </div>
    );
}