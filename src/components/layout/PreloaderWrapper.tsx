"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/ui/Preloader";

const PreloaderWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => setShowContent(true), 100);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    // Prevent scroll while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transition: "opacity 0.8s ease",
                }}
            >
                {children}
            </div>
        </>
    );
};

export default PreloaderWrapper;