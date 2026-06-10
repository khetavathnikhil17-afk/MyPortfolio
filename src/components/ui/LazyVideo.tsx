"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
    src: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
    className?: string;
    style?: React.CSSProperties;
    priority?: boolean;
}

const LazyVideo = ({
    src,
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    className,
    style,
    priority = false,
}: LazyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: priority ? "200px" : "100px",
                threshold: 0,
            }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, [priority]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !isVisible) return;

        if (!hasLoaded) {
            video.src = src;
            video.load();
            setHasLoaded(true);
        }

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was prevented - this is expected
            });
        }
    }, [isVisible, src, hasLoaded]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                video.pause();
            } else if (isVisible && hasLoaded) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [isVisible, hasLoaded]);

    return (
        <video
            ref={videoRef}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            className={className}
            style={style}
        />
    );
};

export default LazyVideo;