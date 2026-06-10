"use client";

import { useState, useEffect, useCallback } from "react";
import { GhostCursor } from "./GhostCursor";

type GhostCursorWrapperProps = {
  showOnScroll?: boolean;
  scrollThreshold?: number;
  color?: string;
  trailLength?: number;
  bloomStrength?: number;
};

const GhostCursorWrapper = ({
  showOnScroll = true,
  scrollThreshold = 100,
  color = "#e8b878",
  trailLength = 20,
  bloomStrength = 0.3,
}: GhostCursorWrapperProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (!showOnScroll || isMobile) return;
    const scrollY = window.scrollY;
    setIsActive(scrollY > scrollThreshold);
  }, [showOnScroll, scrollThreshold, isMobile]);

  useEffect(() => {
    if (!showOnScroll || isMobile) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, showOnScroll, isMobile]);

  if (isMobile) return null;

  if (!isActive) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <GhostCursor
        color={color}
        trailLength={trailLength}
        bloomStrength={bloomStrength}
        bloomRadius={0.7}
        bloomThreshold={0}
        grainIntensity={0.03}
        inertia={0.4}
        fadeDelayMs={200}
        fadeDurationMs={800}
        mixBlendMode="screen"
      />
    </div>
  );
};

export default GhostCursorWrapper;