"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateResume } from "@/lib/generateResume";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollYRef = useRef(0);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect if scrolled past hero
            setIsScrolled(currentScrollY > 50);

            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollYRef.current && currentScrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
    }, [isMobileOpen]);

    return (
        <>
            {/* Main Navbar */}
            <nav
                style={{
                    position: "fixed",
                    top: "1.5rem",
                    left: "50%",
                    transform: `translateX(-50%) translateY(${isVisible ? "0" : "-150%"})`,
                    zIndex: 1000,
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    width: "calc(100% - 3rem)",
                    maxWidth: "1200px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.75rem 1.5rem",
                        backgroundColor: isScrolled ? "rgba(15, 15, 15, 0.85)" : "rgba(15, 15, 15, 0.6)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid #222222",
                        borderRadius: "9999px",
                        transition: "background-color 0.3s ease",
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #e8b878, #f5d4a3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.875rem",
                                fontWeight: 700,
                            }}
                        >
                            N
                        </div>
                        <span
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Nikhil
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div
                        className="desktop-menu"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                        }}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.875rem",
                                        color: isActive ? "white" : "#888888",
                                        textDecoration: "none",
                                        borderRadius: "9999px",
                                        backgroundColor: isActive ? "rgba(232, 184, 120, 0.15)" : "transparent",
                                        transition: "all 0.3s ease",
                                        fontWeight: 500,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) e.currentTarget.style.color = "white";
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) e.currentTarget.style.color = "#888888";
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="cta-button"
                        style={{
                            padding: "0.5rem 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "white",
                            backgroundColor: "#e8b878",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5d4a3";
                            e.currentTarget.style.transform = "scale(1.03)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#e8b878";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        Let&apos;s Talk
                        <span style={{ fontSize: "1rem" }}>→</span>
                    </Link>

                    {/* Resume Button */}
                    <button
                        onClick={() => {
                            const doc = generateResume();
                            doc.save("Nikhil_Khetavath_Resume.pdf");
                        }}
                        className="resume-button"
                        style={{
                            padding: "0.5rem 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#e8b878",
                            backgroundColor: "transparent",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            border: "1px solid rgba(232, 184, 120, 0.3)",
                            cursor: "none",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.1)";
                            e.currentTarget.style.borderColor = "#e8b878";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.3)";
                        }}
                    >
                        Resume
                        <span style={{ fontSize: "1rem" }}>↓</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        style={{
                            display: "none",
                            background: "transparent",
                            border: "none",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "none",
                        }}
                        aria-label="Toggle menu"
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                                width: "20px",
                            }}
                        >
                            <span
                                style={{
                                    display: "block",
                                    height: "2px",
                                    backgroundColor: "white",
                                    borderRadius: "2px",
                                    transition: "all 0.3s ease",
                                    transform: isMobileOpen
                                        ? "rotate(45deg) translate(5px, 5px)"
                                        : "rotate(0)",
                                }}
                            />
                            <span
                                style={{
                                    display: "block",
                                    height: "2px",
                                    backgroundColor: "white",
                                    borderRadius: "2px",
                                    transition: "all 0.3s ease",
                                    opacity: isMobileOpen ? 0 : 1,
                                }}
                            />
                            <span
                                style={{
                                    display: "block",
                                    height: "2px",
                                    backgroundColor: "white",
                                    borderRadius: "2px",
                                    transition: "all 0.3s ease",
                                    transform: isMobileOpen
                                        ? "rotate(-45deg) translate(5px, -5px)"
                                        : "rotate(0)",
                                }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#080808",
                    zIndex: 999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                    transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
            >
                {navLinks.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 600,
                            color: pathname === link.href ? "#e8b878" : "white",
                            textDecoration: "none",
                            letterSpacing: "-0.02em",
                            opacity: isMobileOpen ? 1 : 0,
                            transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
                            transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginTop: "2rem",
                        opacity: isMobileOpen ? 1 : 0,
                        transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${navLinks.length * 0.1}s`,
                    }}
                >
                    <button
                        onClick={() => {
                            const doc = generateResume();
                            doc.save("Nikhil_Khetavath_Resume.pdf");
                            setIsMobileOpen(false);
                        }}
                        style={{
                            padding: "1rem 2rem",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#e8b878",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(232, 184, 120, 0.3)",
                            borderRadius: "9999px",
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                        }}
                    >
                        Resume ↓
                    </button>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileOpen(false)}
                        style={{
                            padding: "1rem 2rem",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#000",
                            backgroundColor: "#e8b878",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            textAlign: "center",
                            transition: "all 0.3s ease",
                        }}
                    >
                        Let&apos;s Talk →
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Navbar;