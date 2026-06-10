"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor } from "./CursorContext";

const PremiumCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { cursorState, cursorText } = useCursor();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    let rafId: number;
    const render = () => {
      dotPos.x += (mouse.x - dotPos.x) * 0.95;
      dotPos.y += (mouse.y - dotPos.y) * 0.95;
      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;

      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;

      rafId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  const getCursorStyles = () => {
    switch (cursorState) {
      case "hover":
        return {
          dot: { width: "0px", height: "0px" },
          ring: {
            width: "70px",
            height: "70px",
            border: "1px solid #e8b878",
            backgroundColor: "rgba(232, 184, 120, 0.1)",
          },
        };
      case "view":
        return {
          dot: { width: "0px", height: "0px" },
          ring: {
            width: "100px",
            height: "100px",
            border: "1px solid #e8b878",
            backgroundColor: "#e8b878",
          },
        };
      case "drag":
        return {
          dot: { width: "0px", height: "0px" },
          ring: {
            width: "90px",
            height: "90px",
            border: "1px solid #e8b878",
            backgroundColor: "rgba(232, 184, 120, 0.15)",
          },
        };
      case "text":
        return {
          dot: { width: "0px", height: "0px" },
          ring: {
            width: "3px",
            height: "40px",
            border: "none",
            backgroundColor: "#e8b878",
            borderRadius: "2px",
          },
        };
      default:
        return {
          dot: {
            width: "6px",
            height: "6px",
            backgroundColor: "#ffffff",
          },
          ring: {
            width: "32px",
            height: "32px",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            backgroundColor: "transparent",
          },
        };
    }
  };

  const styles = getCursorStyles();

  return (
    <>
      {/* DOT - highest z-index */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 100001,
          mixBlendMode: "difference",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
          marginLeft: "-3px",
          marginTop: "-3px",
        }}
      >
        <div
          style={{
            ...styles.dot,
            borderRadius: "50%",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* RING - second highest z-index */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 100000,
          mixBlendMode: cursorState === "view" ? "normal" : "difference",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      >
        <div
          style={{
            ...styles.ring,
            borderRadius:
              cursorState === "text" ? styles.ring.borderRadius || "2px" : "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cursorText && (
            <span
              style={{
                fontSize: "0.7rem",
                color: cursorState === "view" ? "#0a0a0f" : "#ffffff",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PremiumCursor;