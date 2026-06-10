"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);
    const previousPath = useRef(pathname);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            previousPath.current = pathname;
            setDisplayChildren(children);
            return;
        }

        if (previousPath.current !== pathname) {
            setIsTransitioning(true);

            const swapTimer = setTimeout(() => {
                setDisplayChildren(children);
                window.scrollTo(0, 0);
            }, 700);

            const hideTimer = setTimeout(() => {
                setIsTransitioning(false);
                previousPath.current = pathname;
            }, 1400);

            return () => {
                clearTimeout(swapTimer);
                clearTimeout(hideTimer);
            };
        } else {
            setDisplayChildren(children);
        }
    }, [pathname, children]);

    return (
        <>
            <div
                id="main-content"
                style={{
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: isTransitioning ? "0s" : "0.2s",
                }}
            >
                {displayChildren}
            </div>

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "50vh",
                    backgroundColor: "#000",
                    zIndex: 9998,
                    transform: isTransitioning ? "translateY(0)" : "translateY(-100%)",
                    transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
                    pointerEvents: isTransitioning ? "auto" : "none",
                }}
            />

            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "50vh",
                    backgroundColor: "#000",
                    zIndex: 9998,
                    transform: isTransitioning ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
                    pointerEvents: isTransitioning ? "auto" : "none",
                }}
            />

            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                    opacity: isTransitioning ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    transitionDelay: isTransitioning ? "0.3s" : "0s",
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            border: "1px solid rgba(232, 184, 120, 0.2)",
                            borderTopColor: "#e8b878",
                            borderRightColor: "#e8b878",
                            animation: isTransitioning ? "spin 1s linear infinite" : "none",
                        }}
                    />

                    <div
                        style={{
                            fontSize: "0.65rem",
                            color: "#e8b878",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                        }}
                    >
                        Crossing Dimensions
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    backgroundColor: "#e8b878",
                                    animation: `dotPulse 1.4s ease-in-out infinite ${i * 0.2}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "fixed",
                    top: "50vh",
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, #e8b878, transparent)",
                    boxShadow: "0 0 20px #e8b878",
                    zIndex: 9999,
                    opacity: isTransitioning ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    transitionDelay: isTransitioning ? "0.3s" : "0s",
                    pointerEvents: "none",
                }}
            />

            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dotPulse {
          0%, 80%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
        </>
    );
}