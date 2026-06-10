"use client";

interface ChapterMarkerProps {
    chapter: string;
    title: string;
    position?: "left" | "right";
    status?: string;
    statusColor?: string;
}

export default function ChapterMarker({
    chapter,
    title,
    position = "left",
    status,
    statusColor = "#e8b878",
}: ChapterMarkerProps) {
    return (
        <div
            style={{
                position: "absolute",
                top: "3rem",
                [position]: "3rem",
                fontSize: "0.65rem",
                color: "#4a4a5a",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textAlign: position === "right" ? "right" : "left",
                zIndex: 5,
            }}
        >
            {position === "left" ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <span>{chapter}</span>
                    <span style={{ color: "#e8b878" }}>/</span>
                    <span>{title}</span>
                </div>
            ) : (
                <>
                    <div>{title}</div>
                    {status && (
                        <div style={{ marginTop: "0.25rem", color: statusColor }}>
                            ● {status}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}