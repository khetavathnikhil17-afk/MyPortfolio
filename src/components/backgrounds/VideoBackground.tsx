"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface VideoBackgroundProps {
    // Video source
    src: string;
    poster?: string;

    // Playback
    playbackRate?: number;
    loop?: boolean;
    muted?: boolean;

    // Visual filters
    brightness?: number;  // 0-1
    contrast?: number;    // 0-2
    saturation?: number;  // 0-2
    blur?: number;        // 0-10

    // Overlays
    darkOverlay?: number;     // 0-1
    warmTint?: boolean;
    vignette?: boolean;
    grain?: boolean;

    // Edge fades
    fadeTop?: boolean;
    fadeBottom?: boolean;

    // Parallax
    parallax?: boolean;
    parallaxStrength?: number; // 0-1

    // Performance
    pauseOffScreen?: boolean;

    // Content overlay
    children?: ReactNode;

    // Container
    className?: string;
    minHeight?: string;
}

export default function VideoBackground({
    src,
    poster,
    playbackRate = 0.7,
    loop = true,
    muted = true,
    brightness = 0.7,
    contrast = 1.15,
    saturation = 1.1,
    blur = 0,
    darkOverlay = 0.5,
    warmTint = true,
    vignette = true,
    grain = true,
    fadeTop = false,
    fadeBottom = true,
    parallax = false,
    parallaxStrength = 0.3,
    pauseOffScreen = true,
    children,
    className = "",
    minHeight = "100vh",
}: VideoBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scrollY, setScrollY] = useState(0);

    // Setup video
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.playbackRate = playbackRate;
        const playVideo = async () => {
            try {
                await video.play();
            } catch {
                // Autoplay prevented
            }
        };
        playVideo();
    }, [playbackRate]);

    // Intersection observer for performance
    useEffect(() => {
        if (!pauseOffScreen) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const video = videoRef.current;
                if (!video) return;

                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [pauseOffScreen]);

    // Parallax scroll
    useEffect(() => {
        if (!parallax) return;

        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setScrollY(rect.top);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [parallax]);

    const filterString = `brightness(${brightness}) contrast(${contrast}) saturate(${saturation})${blur > 0 ? ` blur(${blur}px)` : ""}`;

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: "relative",
                width: "100%",
                minHeight,
                overflow: "hidden",
                backgroundColor: "#000",
            }}
        >
            {/* ===== VIDEO LAYER ===== */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    transform: parallax
                        ? `translate3d(0, ${scrollY * parallaxStrength * -1}px, 0)`
                        : "none",
                    willChange: parallax ? "transform" : "auto",
                }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop={loop}
                    muted={muted}
                    playsInline
                    preload="auto"
                    poster={poster}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: filterString,
                    }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>

            {/* ===== DARK OVERLAY ===== */}
            {darkOverlay > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(180deg, rgba(0,0,0,${darkOverlay}) 0%, rgba(0,0,0,${darkOverlay * 0.7}) 50%, rgba(0,0,0,${darkOverlay + 0.2}) 100%)`,
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* ===== WARM TINT ===== */}
            {warmTint && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at center, rgba(232, 184, 120, 0.08), transparent 70%)",
                        mixBlendMode: "screen",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* ===== VIGNETTE ===== */}
            {vignette && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 110%)",
                        zIndex: 3,
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* ===== TOP EDGE FADE ===== */}
            {fadeTop && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "200px",
                        background:
                            "linear-gradient(180deg, #000 0%, transparent 100%)",
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* ===== BOTTOM EDGE FADE ===== */}
            {fadeBottom && (
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "300px",
                        background:
                            "linear-gradient(0deg, #000 0%, transparent 100%)",
                        zIndex: 4,
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* ===== GRAIN ===== */}
            {grain && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.08,
                        pointerEvents: "none",
                        zIndex: 5,
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        mixBlendMode: "overlay",
                    }}
                />
            )}

            {/* ===== CONTENT ===== */}
            {children && (
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}