"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import CosmicGlowBg from "@/components/backgrounds/CosmicGlowBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import SectionHeader from "@/components/elements/SectionHeader";
import EditorialLabel from "@/components/elements/EditorialLabel";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import LazyVideo from "@/components/ui/LazyVideo";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_jq3rcvu";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_m9b54x8";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "yPMzSUgnooDBjX8kD";

const services = [
    "AI Product Development",
    "Data Science & Analytics",
    "AI Automation Solutions",
    "Interactive Web Experiences",
    "Something Else",
];

const budgetRanges = [
    "Under $5K",
    "$5K - $15K",
    "$15K - $30K",
    "$30K - $50K",
    "$50K+",
    "Let's discuss",
];

const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "Flexible",
];

const faqs = [
    {
        q: "What's your typical process?",
        a: "Discovery → Strategy → Design → Development → Launch. Every step is collaborative, transparent, and tailored to your specific needs.",
    },
    {
        q: "How long does a project usually take?",
        a: "Depends on scope. A landing page can take 2-3 weeks, while a complex platform might take 2-3 months. We'll align on timeline during discovery.",
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely. I work remotely with clients worldwide. Timezone differences become opportunities for round-the-clock progress.",
    },
    {
        q: "What's included in your services?",
        a: "Everything you need to launch: strategy, design, development, deployment, and post-launch support. Full transparency, no surprises.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        website: "", // honeypot
    });

    const [emailCopied, setEmailCopied] = useState(false);
    const [time, setTime] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const email = "khetavathnikhil17@gmail.com";

    useEffect(() => {
        document.title = "Contact | Nikhil Khetavath | AI Product Engineer";
    }, []);

    useEffect(() => {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.website) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    company: formData.company,
                    service: formData.service,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    message: formData.message,
                }
            );
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                service: "",
                budget: "",
                timeline: "",
                message: "",
                website: "",
            });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError("Failed to send message. Please try again or email me directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ position: "relative", backgroundColor: "#000", overflow: "hidden" }}>
            {/* Video background */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <LazyVideo
                    src="/contact-bg.mp4"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
                    }}
                />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
            <StarfieldBg density={120} twinkle={true} opacity={0.3} />
            <CosmicGlowBg color="#e8b878" intensity={0.06} size={1000} position="center" />
            <NoiseBg opacity={0.06} />

            {/* ===== HERO ===== */}
            <section
                style={{
                    position: "relative",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "8rem 3rem 4rem",
                    maxWidth: "1600px",
                    margin: "0 auto",
                }}
            >
                <ChapterMarker chapter="Page 04" title="The Gateway" position="left" />
                <ChapterMarker chapter="Contact" title="Open Channel" position="right" status="Live" />

                <FadeUp delay={0.3}>
                    <div style={{ marginBottom: "2rem" }}>
                        <EditorialLabel text="Let's Begin the Conversation" />
                    </div>
                </FadeUp>

                <h1
                    style={{
                        fontSize: "clamp(3.5rem, 12vw, 14rem)",
                        fontWeight: 700,
                        lineHeight: 0.85,
                        letterSpacing: "-0.05em",
                        color: "#f5e6d3",
                        textTransform: "uppercase",
                        margin: "0 0 3rem",
                    }}
                >
                    <TextReveal duration={1.2} delay={0.4}>
                        <div>SAY</div>
                    </TextReveal>
                    <TextReveal duration={1.2} delay={0.6}>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #e8b878, #f5d4a3, #ffffff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            hello
                        </div>
                    </TextReveal>
                </h1>

                <FadeUp delay={1}>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                            color: "#a8a8b0",
                            maxWidth: "700px",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                        }}
                    >
                        Have a project in mind? A wild idea brewing? Or just want to chat about the future of the web? I&apos;m all ears.
                    </p>
                </FadeUp>

                <FadeUp delay={1.2}>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <StatusBadge text="Available Now" variant="available" />
                        <div
                            style={{
                                fontSize: "0.75rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                padding: "0.6rem 1.5rem",
                                border: "1px solid rgba(232, 184, 120, 0.3)",
                                borderRadius: "9999px",
                            }}
                        >
                            Local Time: {time || "--:--"}
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* ===== QUICK CONTACT METHODS ===== */}
            <section
                style={{
                    padding: "4rem 3rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    borderBottom: "1px solid rgba(232, 184, 120, 0.15)",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2rem",
                    }}
                    className="contact-methods-grid"
                >
                    {/* Email */}
                    <FadeUp delay={0.1}>
                        <button
                            onClick={copyEmail}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "1rem",
                                padding: "2rem",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                borderRadius: "12px",
                                background: "rgba(232, 184, 120, 0.02)",
                                cursor: "none",
                                transition: "all 0.4s ease",
                                width: "100%",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#e8b878";
                                e.currentTarget.style.background = "rgba(232, 184, 120, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.15)";
                                e.currentTarget.style.background = "rgba(232, 184, 120, 0.02)";
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                <EditorialLabel text="Email" />
                            </div>
                            <div
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#f5e6d3",
                                    fontWeight: 600,
                                }}
                            >
                                {emailCopied ? "✓ Copied!" : email}
                            </div>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#e8b878",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Click to copy →
                            </div>
                        </button>
                    </FadeUp>

                    {/* Schedule a Call */}
                    <FadeUp delay={0.2}>
                        <a
                            href="mailto:khetavathnikhil17@gmail.com?subject=Let's%20Schedule%20a%20Call"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "1rem",
                                padding: "2rem",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                borderRadius: "12px",
                                background: "rgba(232, 184, 120, 0.02)",
                                cursor: "none",
                                textDecoration: "none",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#e8b878";
                                e.currentTarget.style.background = "rgba(232, 184, 120, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.15)";
                                e.currentTarget.style.background = "rgba(232, 184, 120, 0.02)";
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <EditorialLabel text="Book a Call" />
                            </div>
                            <div
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#f5e6d3",
                                    fontWeight: 600,
                                }}
                            >
                                Send an Email
                            </div>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#e8b878",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Email →
                            </div>
                        </a>
                    </FadeUp>

                    {/* Social */}
                    <FadeUp delay={0.3}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                padding: "2rem",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                borderRadius: "12px",
                                background: "rgba(232, 184, 120, 0.02)",
                                height: "100%",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                <EditorialLabel text="Social" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                {[ 
                                    { label: "Twitter", href: "https://x.com/KhetavathNikhil", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                                    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhilkhetavath-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                                    { label: "GitHub", href: "https://github.com/khetavathnikhil17-afk", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
                                    { label: "Instagram", href: "https://www.instagram.com/callme____nikk", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            fontSize: "0.875rem",
                                            color: "#a8a8b0",
                                            textDecoration: "none",
                                            padding: "0.4rem 0.875rem",
                                            border: "1px solid rgba(232, 184, 120, 0.15)",
                                            borderRadius: "9999px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#e8b878";
                                            e.currentTarget.style.borderColor = "#e8b878";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "#a8a8b0";
                                            e.currentTarget.style.borderColor =
                                                "rgba(232, 184, 120, 0.15)";
                                        }}
                                    >
                                        {social.icon}
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ===== CONTACT FORM ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="Project Details"
                        primary="TELL ME"
                        secondary="YOUR VISION"
                        secondaryAlign="right"
                    />
                </div>

                <FadeUp delay={0.3}>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        {/* Honeypot - hidden from humans, visible to bots */}
                        <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}>
                            <label htmlFor="website">Leave this blank</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.website}
                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            />
                        </div>

                        {/* Name + Email row */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1.5rem",
                            }}
                            className="form-row"
                        >
                            <FormField
                                label="Your Name"
                                type="text"
                                value={formData.name}
                                onChange={(v) => setFormData({ ...formData, name: v })}
                                required
                            />
                            <FormField
                                label="Email Address"
                                type="email"
                                value={formData.email}
                                onChange={(v) => setFormData({ ...formData, email: v })}
                                required
                            />
                        </div>

                        <FormField
                            label="Company / Organization"
                            type="text"
                            value={formData.company}
                            onChange={(v) => setFormData({ ...formData, company: v })}
                        />

                        {/* Service Selection */}
                        <div>
                            <div style={{ marginBottom: "1rem" }}>
                                <EditorialLabel text="Service Interested In" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, service })}
                                        style={{
                                            padding: "0.75rem 1.25rem",
                                            fontSize: "0.875rem",
                                            color: formData.service === service ? "#000" : "#a8a8b0",
                                            backgroundColor:
                                                formData.service === service ? "#e8b878" : "transparent",
                                            border: `1px solid ${formData.service === service
                                                    ? "#e8b878"
                                                    : "rgba(232, 184, 120, 0.2)"
                                                }`,
                                            borderRadius: "9999px",
                                            cursor: "none",
                                            transition: "all 0.3s ease",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Budget + Timeline row */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1.5rem",
                            }}
                            className="form-row"
                        >
                            <div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <EditorialLabel text="Budget Range" />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "0.5rem",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {budgetRanges.map((budget) => (
                                        <button
                                            key={budget}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, budget })}
                                            style={{
                                                padding: "0.6rem 1rem",
                                                fontSize: "0.8rem",
                                                color: formData.budget === budget ? "#000" : "#a8a8b0",
                                                backgroundColor:
                                                    formData.budget === budget ? "#e8b878" : "transparent",
                                                border: `1px solid ${formData.budget === budget
                                                        ? "#e8b878"
                                                        : "rgba(232, 184, 120, 0.2)"
                                                    }`,
                                                borderRadius: "9999px",
                                                cursor: "none",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            {budget}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <EditorialLabel text="Timeline" />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "0.5rem",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {timelines.map((tl) => (
                                        <button
                                            key={tl}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, timeline: tl })}
                                            style={{
                                                padding: "0.6rem 1rem",
                                                fontSize: "0.8rem",
                                                color: formData.timeline === tl ? "#000" : "#a8a8b0",
                                                backgroundColor:
                                                    formData.timeline === tl ? "#e8b878" : "transparent",
                                                border: `1px solid ${formData.timeline === tl
                                                        ? "#e8b878"
                                                        : "rgba(232, 184, 120, 0.2)"
                                                    }`,
                                                borderRadius: "9999px",
                                                cursor: "none",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            {tl}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <FormField
                            label="Tell Me About Your Project"
                            type="textarea"
                            value={formData.message}
                            onChange={(v) => setFormData({ ...formData, message: v })}
                            required
                        />

                        {/* Submit */}
                        <div style={{ marginTop: "2rem" }}>
                            {error && (
                                <p style={{ color: "#ef4444", marginBottom: "1rem", fontSize: "0.9rem" }}>
                                    {error}
                                </p>
                            )}
                            <MagneticButton strength={0.3}>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.5rem 3rem",
                                        backgroundColor: submitted ? "#22c55e" : "#e8b878",
                                        color: "#000",
                                        border: "none",
                                        borderRadius: "9999px",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        cursor: loading ? "wait" : "none",
                                        transition: "all 0.4s ease",
                                        boxShadow: "0 0 40px rgba(232, 184, 120, 0.3)",
                                        letterSpacing: "0.05em",
                                        opacity: loading ? 0.7 : 1,
                                    }}
                                >
                                    {loading ? "Sending..." : submitted ? "✓ Message Sent!" : "Send Message"}
                                    {!loading && !submitted && <span style={{ fontSize: "1.25rem" }}>→</span>}
                                </button>
                            </MagneticButton>
                        </div>
                    </form>
                </FadeUp>
            </section>

            {/* ===== FAQ ===== */}
            <section
                style={{
                    padding: "8rem 3rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                }}
            >
                <div style={{ marginBottom: "5rem" }}>
                    <SectionHeader
                        label="Common Questions"
                        primary="GOOD TO"
                        secondary="KNOW"
                        secondaryAlign="right"
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((faq, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                aria-expanded={openFaq === i}
                                aria-controls={`faq-answer-${i}`}
                                style={{
                                    width: "100%",
                                    padding: "2rem",
                                    border: "1px solid rgba(232, 184, 120, 0.15)",
                                    borderRadius: "12px",
                                    background:
                                        openFaq === i
                                            ? "rgba(232, 184, 120, 0.05)"
                                            : "rgba(232, 184, 120, 0.02)",
                                    cursor: "pointer",
                                    transition: "all 0.4s ease",
                                    textAlign: "left",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "2rem",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                            fontWeight: 600,
                                            color: "#f5e6d3",
                                            letterSpacing: "-0.01em",
                                            margin: 0,
                                        }}
                                    >
                                        {faq.q}
                                    </h3>
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            border: `1px solid ${openFaq === i ? "#e8b878" : "rgba(232, 184, 120, 0.2)"
                                                }`,
                                            backgroundColor: openFaq === i ? "#e8b878" : "transparent",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            transition: "all 0.3s ease",
                                            transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "1.25rem",
                                                color: openFaq === i ? "#000" : "#e8b878",
                                                fontWeight: 300,
                                                lineHeight: 1,
                                            }}
                                        >
                                            +
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    style={{
                                        maxHeight: openFaq === i ? "200px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#a8a8b0",
                                            lineHeight: 1.7,
                                            marginTop: openFaq === i ? "1.5rem" : "0",
                                            transition: "margin 0.5s ease",
                                        }}
                                    >
                                        {faq.a}
                                    </p>
                                </div>
                            </button>
                        </FadeUp>
                    ))}
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 768px) {
          :global(.contact-methods-grid),
          :global(.form-row) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
            </div>
        </main>
    );
}

// ===== FORM FIELD COMPONENT =====
function FormField({
    label,
    type,
    value,
    onChange,
    required = false,
}: {
    label: string;
    type: "text" | "email" | "textarea";
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}) {
    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const fieldId = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const showError = touched && !focused && required && value.trim() === "";
    const showEmailError = touched && !focused && type === "email" && value.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const borderColor = showError || showEmailError
        ? "#ef4444"
        : focused
        ? "#e8b878"
        : "rgba(232, 184, 120, 0.15)";

    return (
        <div>
            <label
                htmlFor={fieldId}
                style={{
                    display: "block",
                    marginBottom: "0.75rem",
                    fontSize: "0.65rem",
                    color: showError || showEmailError ? "#ef4444" : "#8a8a92",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                }}
            >
                {label}{required ? " *" : ""}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={fieldId}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => { setFocused(false); setTouched(true); }}
                    required={required}
                    rows={6}
                    aria-required={required}
                    aria-invalid={showError || showEmailError}
                    aria-describedby={showError ? `${fieldId}-error` : showEmailError ? `${fieldId}-email-error` : undefined}
                    style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        background: "rgba(232, 184, 120, 0.02)",
                        border: `1px solid ${borderColor}`,
                        borderRadius: "8px",
                        color: "#f5e6d3",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        resize: "vertical",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                />
            ) : (
                <input
                    id={fieldId}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => { setFocused(false); setTouched(true); }}
                    required={required}
                    aria-required={required}
                    aria-invalid={showError || showEmailError}
                    aria-describedby={showError ? `${fieldId}-error` : showEmailError ? `${fieldId}-email-error` : undefined}
                    style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        background: "rgba(232, 184, 120, 0.02)",
                        border: `1px solid ${borderColor}`,
                        borderRadius: "8px",
                        color: "#f5e6d3",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                />
            )}
            {showError && (
                <p id={`${fieldId}-error`} role="alert" style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.5rem" }}>
                    {label} is required
                </p>
            )}
            {showEmailError && (
                <p id={`${fieldId}-email-error`} role="alert" style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.5rem" }}>
                    Please enter a valid email address
                </p>
            )}
        </div>
    );
}