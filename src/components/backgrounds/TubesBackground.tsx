"use client";

import { useEffect, useRef, useState } from "react";

interface TubesBackgroundProps {
    children?: React.ReactNode;
    enableClickInteraction?: boolean;
}

// Cosmic gold palette (matches your portfolio)
const COSMIC_TUBE_COLORS = ["#e8b878", "#c89860", "#f5d4a3"];
const COSMIC_LIGHT_COLORS = ["#e8b878", "#f5d4a3", "#ffffff", "#c89860"];

// Variations for click randomization (still gold-themed)
const COSMIC_VARIATIONS = [
    ["#e8b878", "#c89860", "#f5d4a3"],
    ["#d4a070", "#b88850", "#ffeacc"],
    ["#f5d4a3", "#e8b878", "#ffffff"],
    ["#c89860", "#a07840", "#e8b878"],
    ["#ffeacc", "#f5d4a3", "#c89860"],
];

const LIGHT_VARIATIONS = [
    ["#e8b878", "#f5d4a3", "#ffffff", "#c89860"],
    ["#ffeacc", "#e8b878", "#c89860", "#a07840"],
    ["#f5d4a3", "#ffffff", "#e8b878", "#d4a070"],
];

export default function TubesBackground({
    children,
    enableClickInteraction = true,
}: TubesBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const tubesRef = useRef<{ tubes: { setColors: (colors: string[]) => void; setLightsColors: (colors: string[]) => void }; destroy: () => void } | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let mounted = true;
        let cleanup: (() => void) | undefined;

        const initTubes = async () => {
            if (!canvasRef.current) return;

            try {
                // Dynamic import from CDN
                const tubesModule = await import(
                    /* webpackIgnore: true */
                    // @ts-expect-error CDN module has no type declarations
                    "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
                );
                const TubesCursor = tubesModule.default;

                if (!mounted || !canvasRef.current) return;

                const app = TubesCursor(canvasRef.current, {
                    tubes: {
                        colors: COSMIC_TUBE_COLORS,
                        lights: {
                            intensity: 200,
                            colors: COSMIC_LIGHT_COLORS,
                        },
                    },
                });

                tubesRef.current = app;

                // Small delay to ensure smooth appearance
                setTimeout(() => {
                    if (mounted) setIsLoaded(true);
                }, 300);

                cleanup = () => {
                    if (app && typeof app.destroy === "function") {
                        app.destroy();
                    }
                };
            } catch (error) {
                console.error("Failed to load TubesBackground:", error);
                if (mounted) setIsLoaded(true); // Show fallback
            }
        };

        initTubes();

        return () => {
            mounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    const handleClick = () => {
        if (!enableClickInteraction || !tubesRef.current) return;

        // Pick random cosmic variation
        const tubeColors =
            COSMIC_VARIATIONS[Math.floor(Math.random() * COSMIC_VARIATIONS.length)];
        const lightColors =
            LIGHT_VARIATIONS[Math.floor(Math.random() * LIGHT_VARIATIONS.length)];

        tubesRef.current.tubes.setColors(tubeColors);
        tubesRef.current.tubes.setLightsColors(lightColors);
    };

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: "#000",
            }}
            onClick={handleClick}
        >
            {/* WebGL Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    touchAction: "none",
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            />

            {/* Dark vignette overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.7) 100%)",
                    pointerEvents: "none",
                    zIndex: 5,
                }}
            />

            {/* Top fade */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "200px",
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 5,
                }}
            />

            {/* Bottom fade (blends into next section) */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "300px",
                    background:
                        "linear-gradient(0deg, #000 0%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 5,
                }}
            />

            {/* Grain overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.08,
                    pointerEvents: "none",
                    zIndex: 6,
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    mixBlendMode: "overlay",
                }}
            />

            {/* Loading indicator */}
            {!isLoaded && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 8,
                        backgroundColor: "#000",
                    }}
                >
                    <div
                        style={{
                            fontSize: "0.65rem",
                            color: "#e8b878",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                        }}
                    >
                        Initializing Portal...
                    </div>
                </div>
            )}

            {/* Content overlay */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    pointerEvents: "none",
                }}
            >
                {children}
            </div>
        </div>
    );
}