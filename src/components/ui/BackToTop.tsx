"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(232, 184, 120, 0.15)",
                border: "1px solid rgba(232, 184, 120, 0.3)",
                color: "#e8b878",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "none",
                zIndex: 1000,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: isVisible ? "auto" : "none",
                backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e8b878";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(232, 184, 120, 0.4)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.15)";
                e.currentTarget.style.color = "#e8b878";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    );
}