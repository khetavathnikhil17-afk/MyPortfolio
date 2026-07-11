"use client";

import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Hls from "hls.js";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import GridBg from "@/components/backgrounds/GridBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import NumberCounter from "@/components/animations/NumberCounter";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import ScaleIn from "@/components/animations/ScaleIn";
import {
    BrainIcon,
    SearchIcon,
    ChartIcon,
    TargetIcon,
    ZapIcon,
    UsersIcon,
    CheckCircleIcon,
    TrendingUpIcon,
    CodeIcon,
    DatabaseIcon,
    LayersIcon,
    ClockIcon,
    RocketIcon,
    GlobeIcon,
    BuildingIcon,
    FileTextIcon,
    PlugIcon,
    CloudIcon,
    AlertIcon,
    LightbulbIcon,
    CrosshairIcon,
    GithubIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DownloadIcon,
    BookIcon,
    BarChartIcon,
    WorkflowIcon,
    CpuIcon,
    PlayIcon,
} from "@/components/elements/ProjectIcons";

const caseStudy = {
    id: "03",
    title: "StartupPulse AI",
    subtitle: "Explainable Aspect-Based Sentiment Analysis using DeBERTa-v3 + SHAP",
    category: "AI / NLP / Explainable AI",
    year: "2025",
    type: "Flagship Project",
    tagline:
        "Explainable Aspect-Based Sentiment Analysis using DeBERTa-v3 and SHAP.",
    description:
        "An AI-powered employee feedback intelligence platform that combines state-of-the-art Transformer models with Explainable AI to deliver transparent sentiment insights.",
    problem:
        "Traditional sentiment analysis tools provide binary positive/negative labels without explaining why a sentiment was detected. For HR teams and product managers analyzing employee feedback, this black-box approach fails to identify specific aspects driving sentiment — making it impossible to take targeted action on retention, culture, or product improvements.",
    solution:
        "Built an end-to-end Aspect-Based Sentiment Analysis (ABSA) system using DeBERTa-v3 for contextual understanding and SHAP (SHapley Additive exPlanations) for model interpretability. The system classifies sentiment at the aspect level — identifying not just what employees feel, but which specific aspects (management, work-life balance, compensation, culture) drive their sentiment. An interactive Streamlit dashboard provides real-time inference, analytics visualizations, and explainable predictions.",
    impact:
        "The platform delivers transparent, aspect-level sentiment predictions with SHAP-powered explanations that make model decisions interpretable. HR teams can now identify exactly which workplace factors drive positive or negative sentiment, enabling data-driven decisions for employee retention and organizational improvement.",
    stats: [
        { label: "Model", value: "DeBERTa-v3", unit: "86M parameters", icon: "brain" as const },
        { label: "Dataset", value: "66,557", unit: "employee reviews", icon: "database" as const },
        { label: "Accuracy", value: "94.2%", unit: "test set", icon: "target" as const },
        { label: "Inference", value: "45ms", unit: "prediction", icon: "zap" as const },
        { label: "Explainability", value: "SHAP", unit: "token-level", icon: "search" as const },
        { label: "License", value: "MIT", unit: "open source", icon: "code" as const },
    ],
    features: [
        {
            title: "Explainable AI",
            description: "SHAP-powered transparency that reveals exactly which words drive each prediction — no black boxes.",
            icon: "search" as const,
        },
        {
            title: "DeBERTa-v3 Transformer",
            description: "State-of-the-art contextual understanding with disentangled attention for nuanced sentiment analysis.",
            icon: "brain" as const,
        },
        {
            title: "SHAP Token Attribution",
            description: "Token-level feature importance showing which words contribute positively or negatively to sentiment.",
            icon: "target" as const,
        },
        {
            title: "Employee Sentiment Analysis",
            description: "Aspect-level classification across management, culture, compensation, and work-life balance.",
            icon: "users" as const,
        },
        {
            title: "Interactive Dashboard",
            description: "Real-time inference with visual analytics, making ML accessible to non-technical stakeholders.",
            icon: "chart" as const,
        },
        {
            title: "Model Performance Analytics",
            description: "Comprehensive evaluation metrics including accuracy, F1, precision, and recall analysis.",
            icon: "trending" as const,
        },
        {
            title: "Confidence Scores",
            description: "Probabilistic predictions with confidence intervals for reliable decision-making.",
            icon: "check" as const,
        },
        {
            title: "Real-time Predictions",
            description: "Instant sentiment analysis and SHAP explanation generation for live feedback streams.",
            icon: "zap" as const,
        },
    ],
    architecture: {
        description:
            "The system follows a modular pipeline architecture: raw feedback text is tokenized and fed through the DeBERTa-v3 encoder, which produces contextual embeddings. A classification head maps these to aspect-level sentiment predictions. SHAP is applied post-hoc to generate feature importance explanations. The Streamlit dashboard orchestrates the full inference pipeline and presents results through interactive visualizations.",
        pipeline: [
            { step: "Input", description: "Raw employee feedback", icon: "code" as const },
            { step: "Preprocess", description: "Tokenization & cleaning", icon: "workflow" as const },
            { step: "DeBERTa-v3", description: "Contextual embeddings", icon: "brain" as const },
            { step: "Classify", description: "Sentiment prediction", icon: "target" as const },
            { step: "SHAP", description: "Feature importance", icon: "search" as const },
            { step: "Dashboard", description: "Interactive viz", icon: "chart" as const },
        ],
    },
    evaluation: {
        description:
            "Model performance was evaluated on a held-out test set of 6,656 employee reviews using stratified sampling. The DeBERTa-v3 backbone achieved strong results across all sentiment classes, with particularly high precision on negative sentiment detection — critical for identifying early warning signs in employee feedback.",
        metrics: [
            { label: "Accuracy", value: 94.2, suffix: "%", description: "Overall classification accuracy" },
            { label: "F1 Score", value: 93.8, suffix: "%", description: "Weighted F1 across all classes" },
            { label: "Precision", value: 93.9, suffix: "%", description: "Weighted precision across classes" },
            { label: "Recall", value: 94.2, suffix: "%", description: "Weighted recall across classes" },
            { label: "Test Samples", value: 6656, suffix: "", description: "Stratified 80/10/10 split" },
            { label: "Inference", value: 45, suffix: "ms", description: "Average prediction latency" },
        ],
        confusionMatrix:
            "Confusion matrix reveals strong diagonal dominance with minimal cross-class confusion, validating the model's ability to distinguish nuanced sentiment across Positive, Neutral, and Negative classes.",
        dataset:
            "Trained on 66,557 employee reviews from major technology companies. Stratified 80/10/10 split: 53,245 training, 6,656 validation, 6,656 test samples.",
    },
    shapExplanation: {
        description:
            "SHAP (SHapley Additive exPlanations) provides local and global interpretability for the sentiment model. For each prediction, SHAP values reveal which tokens contributed positively or negatively toward each sentiment class. Global SHAP analysis identifies the most influential tokens across the entire dataset, offering insights into the model's learned linguistic patterns.",
        keyInsights: [
            "Tokens like 'excellent', 'supportive', 'growth' strongly push predictions toward positive sentiment",
            "Words like 'micromanagement', 'unfair', 'burnout' are top contributors to negative sentiment predictions",
            "Neutral predictions are driven by factual, descriptive language without strong emotional markers",
            "SHAP waterfall plots provide per-sample explanations suitable for stakeholder presentations",
        ],
        visualizations: [
            { title: "Waterfall Plot", description: "Per-sample token contribution breakdown", icon: "chart" as const },
            { title: "Token Importance", description: "Global feature importance ranking", icon: "target" as const },
            { title: "Bar Summary", description: "Aggregate SHAP value distributions", icon: "bar" as const },
            { title: "Force Plot", description: "Interactive prediction explanation", icon: "search" as const },
        ],
    },
    techStack: [
        { name: "Python 3.10+", description: "Core language", color: "#3776ab" },
        { name: "PyTorch 2.2", description: "Deep learning", color: "#ee4c2c" },
        { name: "Transformers 4.40", description: "Model hub", color: "#ffd21e" },
        { name: "DeBERTa-v3-base", description: "12-layer, 768-hidden transformer", color: "#7c5cff" },
        { name: "SHAP 0.45", description: "Token-level explainability", color: "#e8b878" },
        { name: "Streamlit 1.33", description: "Interactive dashboard", color: "#ff4b4b" },
        { name: "Pandas 2.2", description: "Data manipulation", color: "#150458" },
        { name: "NumPy 1.26", description: "Numerical computing", color: "#4dabcf" },
        { name: "Scikit-learn 1.4", description: "Evaluation metrics", color: "#f7931e" },
        { name: "SentencePiece 0.2", description: "Subword tokenization", color: "#a8a8b0" },
    ],
    challenges: [
        {
            title: "Large Transformer Optimization",
            description: "Optimizing DeBERTa-v3's 86M parameters for efficient inference while maintaining accuracy.",
            solution: "Implemented mixed-precision training, gradient checkpointing, and ONNX Runtime optimization for 3x faster inference.",
            timeline: "Week 1-2",
        },
        {
            title: "Model Fine-tuning",
            description: "Achieving optimal performance on domain-specific employee feedback data.",
            solution: "Applied learning rate scheduling, early stopping, and cross-validation to prevent overfitting.",
            timeline: "Week 3-4",
        },
        {
            title: "Dashboard Performance",
            description: "Streamlit's single-threaded architecture creating latency with large models.",
            solution: "Implemented model caching, session state management, and async inference pipelines.",
            timeline: "Week 5-6",
        },
        {
            title: "SHAP Computation",
            description: "SHAP's exponential complexity with transformer token sequences.",
            solution: "Used Partition explainer with background data sampling for 10x faster explanations.",
            timeline: "Week 7-8",
        },
        {
            title: "Large Model Management",
            description: "Managing 86M parameter model in git with storage constraints.",
            solution: "Implemented Git LFS with selective tracking and model artifact versioning.",
            timeline: "Week 9",
        },
        {
            title: "Git Optimization",
            description: "Repository size exceeding limits due to model weights and datasets.",
            solution: "Created .gitignore rules, compressed artifacts, and externalized large files.",
            timeline: "Week 10",
        },
    ],
    impactMetrics: [
        { metric: "40%", description: "Reduction in feedback analysis time", icon: "clock" as const },
        { metric: "3x", description: "Faster insights than manual review", icon: "rocket" as const },
        { metric: "94.2%", description: "Model accuracy on test data", icon: "target" as const },
        { metric: "100%", description: "Transparent, explainable predictions", icon: "search" as const },
    ],
    impactAreas: [
        {
            title: "Employee Satisfaction Analysis",
            description: "Automated sentiment tracking across workplace factors with aspect-level granularity.",
            icon: "users" as const,
        },
        {
            title: "HR Decision Support",
            description: "Data-driven insights for retention, culture improvement, and policy changes.",
            icon: "building" as const,
        },
        {
            title: "Transparent AI",
            description: "Every prediction includes human-interpretable explanations — no black boxes.",
            icon: "search" as const,
        },
        {
            title: "Explainable Predictions",
            description: "SHAP-powered explanations showing exactly which words drive sentiment.",
            icon: "lightbulb" as const,
        },
        {
            title: "Scalable Analytics",
            description: "Architecture supports growing feedback volumes without performance degradation.",
            icon: "trending" as const,
        },
    ],
    roadmap: [
        {
            title: "REST API",
            description: "Deploy model as a RESTful API for seamless integration with existing HRIS platforms.",
            status: "In Progress" as const,
            icon: "plug" as const,
        },
        {
            title: "Cloud Deployment",
            description: "AWS/Azure deployment with auto-scaling for enterprise-grade reliability.",
            status: "Planned" as const,
            icon: "cloud" as const,
        },
        {
            title: "Multi-language Support",
            description: "Extend to Spanish, French, German for global employee feedback analysis.",
            status: "Planned" as const,
            icon: "globe" as const,
        },
        {
            title: "Advanced Analytics",
            description: "Temporal sentiment tracking, trend detection, and predictive analytics.",
            status: "Planned" as const,
            icon: "chart" as const,
        },
        {
            title: "Research Publication",
            description: "Academic paper on explainable aspect-based sentiment analysis.",
            status: "Coming Soon" as const,
            icon: "file" as const,
        },
        {
            title: "Enterprise Dashboard",
            description: "Multi-tenant dashboard with role-based access and automated reporting.",
            status: "Planned" as const,
            icon: "building" as const,
        },
    ],
};

const HLSVideo = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (src.includes(".m3u8") && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
            return () => hls.destroy();
        } else {
            video.src = src;
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
    );
};

function IconRenderer({ name, size = 20, color = "#7c5cff" }: { name: string; size?: number; color?: string }) {
    const props = { size, color };
    switch (name) {
        case "brain": return <BrainIcon {...props} />;
        case "search": return <SearchIcon {...props} />;
        case "chart": return <ChartIcon {...props} />;
        case "target": return <TargetIcon {...props} />;
        case "zap": return <ZapIcon {...props} />;
        case "users": return <UsersIcon {...props} />;
        case "check": return <CheckCircleIcon {...props} />;
        case "trending": return <TrendingUpIcon {...props} />;
        case "code": return <CodeIcon {...props} />;
        case "database": return <DatabaseIcon {...props} />;
        case "layers": return <LayersIcon {...props} />;
        case "clock": return <ClockIcon {...props} />;
        case "rocket": return <RocketIcon {...props} />;
        case "globe": return <GlobeIcon {...props} />;
        case "building": return <BuildingIcon {...props} />;
        case "file": return <FileTextIcon {...props} />;
        case "play": return <PlayIcon {...props} />;
        case "plug": return <PlugIcon {...props} />;
        case "cloud": return <CloudIcon {...props} />;
        case "alert": return <AlertIcon {...props} />;
        case "lightbulb": return <LightbulbIcon {...props} />;
        case "crosshair": return <CrosshairIcon {...props} />;
        case "bar": return <BarChartIcon {...props} />;
        case "workflow": return <WorkflowIcon {...props} />;
        case "cpu": return <CpuIcon {...props} />;
        default: return <BrainIcon {...props} />;
    }
}

function GlassCard({
    children,
    hover = true,
    style = {},
    className = "",
}: {
    children: ReactNode;
    hover?: boolean;
    style?: React.CSSProperties;
    className?: string;
}) {
    return (
        <div
            className={className}
            style={{
                background: "rgba(12, 12, 15, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(124, 92, 255, 0.1)",
                borderRadius: "16px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                ...style,
            }}
            onMouseEnter={(e) => {
                if (hover) {
                    e.currentTarget.style.borderColor = "rgba(124, 92, 255, 0.25)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(124, 92, 255, 0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                }
            }}
            onMouseLeave={(e) => {
                if (hover) {
                    e.currentTarget.style.borderColor = "rgba(124, 92, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                }
            }}
        >
            {children}
        </div>
    );
}

function SectionLabel({ text }: { text: string }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.5rem 1.25rem",
                background: "rgba(124, 92, 255, 0.06)",
                border: "1px solid rgba(124, 92, 255, 0.15)",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                color: "#7c5cff",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
            }}
        >
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7c5cff" }} />
            {text}
        </div>
    );
}

function MetricCard({
    label,
    value,
    suffix = "",
    decimals = 0,
    description,
}: {
    label: string;
    value: number;
    suffix?: string;
    decimals?: number;
    description: string;
}) {
    return (
        <GlassCard style={{ padding: "2rem", textAlign: "center" }}>
            <div
                style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-clash)",
                    background: "linear-gradient(135deg, #7c5cff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.5rem",
                    lineHeight: 1,
                }}
            >
                <NumberCounter end={value} decimals={decimals} suffix={suffix} duration={2} />
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.25rem" }}>
                {label}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#8a8a92" }}>{description}</div>
        </GlassCard>
    );
}

export default function StartupPulseCaseStudyPage() {
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "StartupPulse AI | Nikhil Khetavath";
    }, []);

    const screenshots = [
        { src: "/projects/startuppulse/dashboard_home.png", alt: "StartupPulse AI Home Dashboard", label: "Dashboard Home" },
        { src: "/projects/startuppulse/prediction_result.png", alt: "StartupPulse AI Prediction Screen", label: "Prediction Screen" },
        { src: "/projects/startuppulse/shap_explanation.png", alt: "StartupPulse AI SHAP Explanation", label: "SHAP Explanation" },
        { src: "/projects/startuppulse/confusion_matrix.png", alt: "StartupPulse AI Confusion Matrix", label: "Confusion Matrix" },
    ];

    const navigateGallery = useCallback((direction: "prev" | "next") => {
        setActiveScreenshot((prev) => {
            if (direction === "next") return (prev + 1) % screenshots.length;
            return (prev - 1 + screenshots.length) % screenshots.length;
        });
    }, [screenshots.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") navigateGallery("next");
            if (e.key === "ArrowLeft") navigateGallery("prev");
            if (e.key === "Escape") setIsLightboxOpen(false);
        };
        if (isLightboxOpen) {
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isLightboxOpen, navigateGallery]);

    return (
        <main style={{ position: "relative", backgroundColor: "#080808", overflow: "hidden" }}>
            {/* Video background */}
            <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
                <HLSVideo src="https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8" />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
                    }}
                />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
                <StarfieldBg density={120} twinkle={true} opacity={0.3} />
                <GridBg size={80} color="rgba(124, 92, 255, 0.03)" fade={true} />
                <NoiseBg opacity={0.04} />

                {/* ===== HERO ===== */}
                <section
                    style={{
                        position: "relative",
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "8rem 3rem 6rem",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    {/* Ambient gradient orbs */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20%",
                            left: "-10%",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(124, 92, 255, 0.08) 0%, transparent 70%)",
                            filter: "blur(80px)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "10%",
                            right: "-5%",
                            width: "400px",
                            height: "400px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
                            filter: "blur(60px)",
                            pointerEvents: "none",
                        }}
                    />

                    <ChapterMarker chapter="Flagship Project" title="AI / NLP" position="left" />
                    <ChapterMarker chapter="Project" title={caseStudy.id} position="right" status={caseStudy.type} />

                    <FadeUp delay={0.2}>
                        <div style={{ marginBottom: "2rem" }}>
                            <SectionLabel text={caseStudy.category} />
                        </div>
                    </FadeUp>

                    <h1
                        style={{
                            fontSize: "clamp(3rem, 10vw, 9rem)",
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: "-0.05em",
                            color: "#f5e6d3",
                            textTransform: "uppercase",
                            margin: "0 0 1.5rem",
                            fontFamily: "var(--font-clash)",
                        }}
                    >
                        <TextReveal duration={1.2} delay={0.3}>
                            <div>STARTUP</div>
                        </TextReveal>
                        <TextReveal duration={1.2} delay={0.5}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #7c5cff 0%, #a78bfa 40%, #c4b5fd 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                }}
                            >
                                PULSE AI
                            </div>
                        </TextReveal>
                    </h1>

                    <FadeUp delay={0.8}>
                        <p
                            style={{
                                fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                                color: "#a8a8b0",
                                maxWidth: "750px",
                                lineHeight: 1.7,
                                marginBottom: "1rem",
                                fontWeight: 300,
                            }}
                        >
                            {caseStudy.tagline}
                        </p>
                    </FadeUp>

                    <FadeUp delay={1}>
                        <p
                            style={{
                                fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                                color: "#8a8a92",
                                maxWidth: "650px",
                                lineHeight: 1.7,
                                marginBottom: "2.5rem",
                            }}
                        >
                            {caseStudy.description}
                        </p>
                    </FadeUp>

                    <FadeUp delay={1.1}>
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                            <StatusBadge text={caseStudy.type} variant="live" />
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#a8a8b0",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    padding: "0.5rem 1.25rem",
                                    border: "1px solid rgba(124, 92, 255, 0.2)",
                                    borderRadius: "9999px",
                                }}
                            >
                                {caseStudy.year}
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={1.3}>
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}>
                            <MagneticButton strength={0.3}>
                                <Link
                                    href="https://github.com/khetavathnikhil17-afk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        padding: "0.9rem 2rem",
                                        backgroundColor: "#7c5cff",
                                        color: "#fff",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        boxShadow: "0 0 40px rgba(124, 92, 255, 0.25)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 0 60px rgba(124, 92, 255, 0.45)";
                                        e.currentTarget.style.transform = "scale(1.02)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "0 0 40px rgba(124, 92, 255, 0.25)";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    <GithubIcon size={16} color="#fff" />
                                    View GitHub
                                </Link>
                            </MagneticButton>

                            <MagneticButton strength={0.3}>
                                <Link
                                    href="#"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        padding: "0.9rem 2rem",
                                        backgroundColor: "transparent",
                                        color: "#f5e6d3",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        border: "1px solid rgba(232, 184, 120, 0.25)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "#e8b878";
                                        e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.25)";
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    }}
                                >
                                    <BookIcon size={16} color="#f5e6d3" />
                                    Documentation
                                </Link>
                            </MagneticButton>

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "0.9rem 2rem",
                                    color: "#8a8a92",
                                    borderRadius: "9999px",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    border: "1px solid rgba(138, 138, 146, 0.15)",
                                    cursor: "default",
                                }}
                            >
                                <FileTextIcon size={16} color="#8a8a92" />
                                Research Paper (Soon)
                            </div>

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "0.9rem 2rem",
                                    color: "#8a8a92",
                                    borderRadius: "9999px",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    border: "1px solid rgba(138, 138, 146, 0.15)",
                                    cursor: "default",
                                }}
                            >
                                <PlayIcon size={16} color="#8a8a92" />
                                Live Demo (Soon)
                            </div>
                        </div>
                    </FadeUp>
                </section>

                {/* ===== QUICK STATS ===== */}
                <section
                    style={{
                        padding: "2rem 3rem 4rem",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6, 1fr)",
                            gap: "1rem",
                        }}
                        className="stats-grid-responsive"
                    >
                        {caseStudy.stats.map((stat, i) => (
                            <FadeUp key={stat.label} delay={i * 0.08}>
                                <GlassCard style={{ padding: "1.25rem 1rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
                                        <IconRenderer name={stat.icon} size={20} color="#7c5cff" />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.95rem",
                                            fontWeight: 700,
                                            color: "#7c5cff",
                                            marginBottom: "0.15rem",
                                            fontFamily: "var(--font-clash)",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.65rem",
                                            color: "#a8a8b0",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== PROJECT OVERVIEW ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Project Overview" />
                        </div>
                    </FadeUp>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="overview-grid-responsive">
                        <FadeUp delay={0.1}>
                            <GlassCard style={{ padding: "2rem", height: "100%", borderLeft: "3px solid #ef4444" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <AlertIcon size={22} color="#ef4444" />
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#f5e6d3", fontFamily: "var(--font-clash)" }}>
                                        The Problem
                                    </h3>
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "#a8a8b0", lineHeight: 1.7 }}>{caseStudy.problem}</p>
                            </GlassCard>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <GlassCard style={{ padding: "2rem", height: "100%", borderLeft: "3px solid #7c5cff" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <LightbulbIcon size={22} color="#7c5cff" />
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#f5e6d3", fontFamily: "var(--font-clash)" }}>
                                        The Solution
                                    </h3>
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "#a8a8b0", lineHeight: 1.7 }}>{caseStudy.solution}</p>
                            </GlassCard>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <GlassCard style={{ padding: "2rem", height: "100%", borderLeft: "3px solid #22c55e" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <CrosshairIcon size={22} color="#22c55e" />
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#f5e6d3", fontFamily: "var(--font-clash)" }}>
                                        The Impact
                                    </h3>
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "#a8a8b0", lineHeight: 1.7 }}>{caseStudy.impact}</p>
                            </GlassCard>
                        </FadeUp>
                    </div>
                </section>

                {/* ===== KEY FEATURES ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Key Features" />
                        </div>
                    </FadeUp>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }} className="features-grid-responsive">
                        {caseStudy.features.map((feature, i) => (
                            <FadeUp key={feature.title} delay={i * 0.06}>
                                <GlassCard style={{ padding: "1.5rem", height: "100%" }}>
                                    <div style={{ marginBottom: "1rem" }}>
                                        <IconRenderer name={feature.icon} size={24} color="#7c5cff" />
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "0.95rem",
                                            fontWeight: 600,
                                            color: "#f5e6d3",
                                            marginBottom: "0.5rem",
                                            fontFamily: "var(--font-clash)",
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p style={{ fontSize: "0.82rem", color: "#8a8a92", lineHeight: 1.6 }}>{feature.description}</p>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== DASHBOARD SHOWCASE ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Dashboard Showcase" />
                        </div>
                    </FadeUp>

                    {/* Main Preview */}
                    <FadeUp delay={0.1}>
                        <GlassCard
                            hover={false}
                            style={{ padding: "0.75rem", marginBottom: "1rem", position: "relative" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                <Image
                                    src={screenshots[activeScreenshot].src}
                                    alt={screenshots[activeScreenshot].alt}
                                    fill
                                    style={{ objectFit: "contain", transition: "opacity 0.3s ease" }}
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                    priority={activeScreenshot === 0}
                                />
                                {/* Navigation arrows */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigateGallery("prev"); }}
                                    style={{
                                        position: "absolute",
                                        left: "1rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "rgba(0,0,0,0.6)",
                                        backdropFilter: "blur(8px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        color: "#fff",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,92,255,0.4)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
                                    aria-label="Previous screenshot"
                                >
                                    <ChevronLeftIcon size={20} color="#fff" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigateGallery("next"); }}
                                    style={{
                                        position: "absolute",
                                        right: "1rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "rgba(0,0,0,0.6)",
                                        backdropFilter: "blur(8px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        color: "#fff",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,92,255,0.4)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
                                    aria-label="Next screenshot"
                                >
                                    <ChevronRightIcon size={20} color="#fff" />
                                </button>
                                {/* Label overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: "1.5rem 1.5rem 1rem",
                                        background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))",
                                    }}
                                >
                                    <span style={{ fontSize: "0.75rem", color: "#a8a8b0", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                                        {screenshots[activeScreenshot].label}
                                    </span>
                                    <span style={{ fontSize: "0.7rem", color: "#8a8a92", marginLeft: "0.75rem" }}>
                                        {activeScreenshot + 1} / {screenshots.length}
                                    </span>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeUp>

                    {/* Thumbnail Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "0.75rem",
                        }}
                        className="thumb-grid-responsive"
                    >
                        {screenshots.map((screenshot, i) => (
                            <FadeUp key={screenshot.src} delay={0.15 + i * 0.05}>
                                <button
                                    onClick={() => setActiveScreenshot(i)}
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        aspectRatio: "16/9",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        border: activeScreenshot === i ? "2px solid #7c5cff" : "1px solid rgba(124, 92, 255, 0.1)",
                                        background: "transparent",
                                        padding: 0,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        opacity: activeScreenshot === i ? 1 : 0.5,
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                                    onMouseLeave={(e) => { if (activeScreenshot !== i) e.currentTarget.style.opacity = "0.5"; }}
                                >
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </button>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== SYSTEM ARCHITECTURE ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="System Architecture" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <p
                            style={{
                                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                                color: "#a8a8b0",
                                lineHeight: 1.7,
                                maxWidth: "900px",
                                marginBottom: "2.5rem",
                            }}
                        >
                            {caseStudy.architecture.description}
                        </p>
                    </FadeUp>

                    {/* Architecture Diagram */}
                    <FadeUp delay={0.2}>
                        <GlassCard hover={false} style={{ padding: "1.5rem", marginBottom: "2.5rem" }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden" }}>
                                <Image
                                    src="/projects/startuppulse/architecture.png"
                                    alt="StartupPulse AI System Architecture"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                    priority
                                />
                            </div>
                        </GlassCard>
                    </FadeUp>

                    {/* Pipeline Flow */}
                    <FadeUp delay={0.3}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0",
                                overflowX: "auto",
                                padding: "0.5rem 0",
                            }}
                            className="pipeline-scroll"
                        >
                            {caseStudy.architecture.pipeline.map((step, i) => (
                                <div key={step.step} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                                    <GlassCard hover={false} style={{ padding: "1.25rem 1rem", minWidth: "130px", textAlign: "center" }}>
                                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
                                            <IconRenderer name={step.icon} size={20} color="#7c5cff" />
                                        </div>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.15rem" }}>
                                            {step.step}
                                        </div>
                                        <div style={{ fontSize: "0.65rem", color: "#8a8a92" }}>{step.description}</div>
                                    </GlassCard>
                                    {i < caseStudy.architecture.pipeline.length - 1 && (
                                        <div style={{ padding: "0 0.5rem", color: "#7c5cff", opacity: 0.5, flexShrink: 0 }}>
                                            <ArrowRightIcon size={16} color="#7c5cff" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </section>

                {/* ===== TECHNOLOGY STACK ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Technology Stack" />
                        </div>
                    </FadeUp>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                        {caseStudy.techStack.map((tech, i) => (
                            <FadeUp key={tech.name} delay={i * 0.04}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem 1.25rem",
                                        background: "rgba(12, 12, 15, 0.6)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(124, 92, 255, 0.1)",
                                        borderRadius: "12px",
                                        transition: "all 0.3s ease",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${tech.color}40`;
                                        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}15`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(124, 92, 255, 0.1)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            background: tech.color,
                                            boxShadow: `0 0 8px ${tech.color}60`,
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div>
                                        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f5e6d3" }}>{tech.name}</span>
                                        <span style={{ fontSize: "0.75rem", color: "#8a8a92", marginLeft: "0.5rem" }}>{tech.description}</span>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== MODEL PERFORMANCE ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Model Performance" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <p style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: "#a8a8b0", lineHeight: 1.7, maxWidth: "900px", marginBottom: "2.5rem" }}>
                            {caseStudy.evaluation.description}
                        </p>
                    </FadeUp>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }} className="metrics-grid-responsive">
                        {caseStudy.evaluation.metrics.map((metric, i) => (
                            <FadeUp key={metric.label} delay={0.15 + i * 0.06}>
                                <MetricCard label={metric.label} value={metric.value} suffix={metric.suffix} decimals={0} description={metric.description} />
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.4}>
                        <GlassCard hover={false} style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "1.25rem", textAlign: "center", fontFamily: "var(--font-clash)" }}>
                                Confusion Matrix
                            </h3>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden" }}>
                                <Image
                                    src="/projects/startuppulse/confusion_matrix.png"
                                    alt="StartupPulse AI Confusion Matrix"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 500px) 100vw, 500px"
                                />
                            </div>
                            <p style={{ fontSize: "0.8rem", color: "#8a8a92", textAlign: "center", marginTop: "1.25rem", lineHeight: 1.6 }}>
                                {caseStudy.evaluation.confusionMatrix}
                            </p>
                        </GlassCard>
                    </FadeUp>
                </section>

                {/* ===== EXPLAINABLE AI ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Explainable AI — SHAP" />
                        </div>
                    </FadeUp>

                    {/* How SHAP Works callout */}
                    <FadeUp delay={0.05}>
                        <GlassCard
                            hover={false}
                            style={{
                                padding: "1.5rem 2rem",
                                marginBottom: "2rem",
                                borderLeft: "3px solid #7c5cff",
                                background: "rgba(124, 92, 255, 0.04)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <div style={{ flexShrink: 0, marginTop: "0.15rem" }}>
                                    <LightbulbIcon size={20} color="#f5d4a3" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.5rem" }}>
                                        How SHAP Makes AI Transparent
                                    </h4>
                                    <p style={{ fontSize: "0.85rem", color: "#a8a8b0", lineHeight: 1.6, margin: 0 }}>
                                        SHAP assigns each word a contribution score toward the prediction. Positive scores push toward a sentiment class, negative scores push away.
                                        This means every prediction comes with a human-readable explanation of <em>why</em> the model made its decision.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <p style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: "#a8a8b0", lineHeight: 1.7, maxWidth: "900px", marginBottom: "2.5rem" }}>
                            {caseStudy.shapExplanation.description}
                        </p>
                    </FadeUp>

                    {/* SHAP Visualizations */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }} className="shap-viz-grid-responsive">
                        {caseStudy.shapExplanation.visualizations.map((viz, i) => (
                            <FadeUp key={viz.title} delay={0.15 + i * 0.06}>
                                <GlassCard style={{ padding: "1.25rem" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
                                        <IconRenderer name={viz.icon} size={20} color="#7c5cff" />
                                    </div>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.2rem", textAlign: "center" }}>
                                        {viz.title}
                                    </div>
                                    <div style={{ fontSize: "0.72rem", color: "#8a8a92", textAlign: "center" }}>{viz.description}</div>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>

                    {/* SHAP Main Visualization */}
                    <FadeUp delay={0.3}>
                        <GlassCard hover={false} style={{ padding: "1rem", marginBottom: "2rem" }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden" }}>
                                <Image
                                    src="/projects/startuppulse/shap_explanation.png"
                                    alt="SHAP Token Importance Explanation"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                />
                            </div>
                        </GlassCard>
                    </FadeUp>

                    {/* Key Insights */}
                    <div style={{ display: "grid", gap: "0.75rem" }}>
                        {caseStudy.shapExplanation.keyInsights.map((insight, i) => (
                            <FadeUp key={i} delay={0.35 + i * 0.06}>
                                <GlassCard style={{ padding: "1rem 1.25rem" }}>
                                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <div
                                            style={{
                                                width: "22px",
                                                height: "22px",
                                                borderRadius: "50%",
                                                background: "rgba(124, 92, 255, 0.15)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                fontSize: "0.65rem",
                                                color: "#7c5cff",
                                                fontWeight: 700,
                                                marginTop: "0.1rem",
                                            }}
                                        >
                                            {i + 1}
                                        </div>
                                        <p style={{ fontSize: "0.85rem", color: "#a8a8b0", lineHeight: 1.6, margin: 0 }}>{insight}</p>
                                    </div>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== DEVELOPMENT CHALLENGES ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Development Challenges" />
                        </div>
                    </FadeUp>

                    <div style={{ position: "relative" }}>
                        {/* Vertical timeline line */}
                        <div
                            style={{
                                position: "absolute",
                                left: "1.5rem",
                                top: "1.5rem",
                                bottom: "1.5rem",
                                width: "1px",
                                background: "linear-gradient(180deg, rgba(124, 92, 255, 0.3), rgba(124, 92, 255, 0.05))",
                            }}
                            className="timeline-line-desktop"
                        />

                        <div style={{ display: "grid", gap: "1.25rem" }}>
                            {caseStudy.challenges.map((challenge, i) => (
                                <FadeUp key={challenge.title} delay={i * 0.08}>
                                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                                        {/* Timeline dot */}
                                        <div
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                borderRadius: "50%",
                                                background: "#7c5cff",
                                                boxShadow: "0 0 12px rgba(124, 92, 255, 0.4)",
                                                flexShrink: 0,
                                                marginTop: "1.75rem",
                                                position: "relative",
                                                zIndex: 2,
                                            }}
                                            className="timeline-dot-desktop"
                                        />
                                        <GlassCard style={{ padding: "1.5rem", flex: 1 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                                                <div
                                                    style={{
                                                        fontSize: "0.65rem",
                                                        color: "#7c5cff",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        padding: "0.25rem 0.6rem",
                                                        border: "1px solid rgba(124, 92, 255, 0.25)",
                                                        borderRadius: "9999px",
                                                    }}
                                                >
                                                    {challenge.timeline}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.6rem",
                                                        color: "#22c55e",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        padding: "0.25rem 0.6rem",
                                                        background: "rgba(34, 197, 94, 0.08)",
                                                        border: "1px solid rgba(34, 197, 94, 0.25)",
                                                        borderRadius: "9999px",
                                                    }}
                                                >
                                                    Solved
                                                </div>
                                            </div>
                                            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.5rem", fontFamily: "var(--font-clash)" }}>
                                                {challenge.title}
                                            </h3>
                                            <p style={{ fontSize: "0.85rem", color: "#a8a8b0", lineHeight: 1.6, marginBottom: "1rem" }}>
                                                {challenge.description}
                                            </p>
                                            <div
                                                style={{
                                                    padding: "0.85rem 1rem",
                                                    background: "rgba(124, 92, 255, 0.04)",
                                                    borderRadius: "8px",
                                                    border: "1px solid rgba(124, 92, 255, 0.08)",
                                                }}
                                            >
                                                <div style={{ fontSize: "0.65rem", color: "#7c5cff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                                                    Solution
                                                </div>
                                                <p style={{ fontSize: "0.8rem", color: "#a8a8b0", lineHeight: 1.6, margin: 0 }}>
                                                    {challenge.solution}
                                                </p>
                                            </div>
                                        </GlassCard>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== PROJECT IMPACT ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Project Impact" />
                        </div>
                    </FadeUp>

                    {/* Impact Metrics */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }} className="impact-metrics-responsive">
                        {caseStudy.impactMetrics.map((item, i) => (
                            <FadeUp key={item.metric} delay={i * 0.08}>
                                <GlassCard style={{ padding: "1.5rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
                                        <IconRenderer name={item.icon} size={22} color="#7c5cff" />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                                            fontWeight: 700,
                                            color: "#7c5cff",
                                            marginBottom: "0.35rem",
                                            fontFamily: "var(--font-clash)",
                                        }}
                                    >
                                        {item.metric}
                                    </div>
                                    <div style={{ fontSize: "0.8rem", color: "#a8a8b0" }}>{item.description}</div>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Impact Areas */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                        {caseStudy.impactAreas.map((area, i) => (
                            <FadeUp key={area.title} delay={0.2 + i * 0.06}>
                                <GlassCard style={{ padding: "1.25rem" }}>
                                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <div style={{ flexShrink: 0, marginTop: "0.1rem" }}>
                                            <IconRenderer name={area.icon} size={18} color="#7c5cff" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.35rem" }}>
                                                {area.title}
                                            </h4>
                                            <p style={{ fontSize: "0.8rem", color: "#8a8a92", lineHeight: 1.6, margin: 0 }}>
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== FUTURE ROADMAP ===== */}
                <section
                    style={{
                        padding: "4rem 3rem 6rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <SectionLabel text="Future Roadmap" />
                        </div>
                    </FadeUp>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="roadmap-grid-responsive">
                        {caseStudy.roadmap.map((item, i) => (
                            <FadeUp key={item.title} delay={i * 0.06}>
                                <GlassCard style={{ padding: "1.5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                                        <div style={{ flexShrink: 0 }}>
                                            <IconRenderer
                                                name={item.icon}
                                                size={22}
                                                color={
                                                    item.status === "In Progress" ? "#e8b878" :
                                                    item.status === "Coming Soon" ? "#7c5cff" :
                                                    "#8a8a92"
                                                }
                                            />
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "0.6rem",
                                                color:
                                                    item.status === "In Progress" ? "#e8b878" :
                                                    item.status === "Coming Soon" ? "#7c5cff" :
                                                    "#8a8a92",
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                                padding: "0.25rem 0.6rem",
                                                background:
                                                    item.status === "In Progress" ? "rgba(232, 184, 120, 0.08)" :
                                                    item.status === "Coming Soon" ? "rgba(124, 92, 255, 0.08)" :
                                                    "rgba(138, 138, 146, 0.06)",
                                                border: `1px solid ${
                                                    item.status === "In Progress" ? "rgba(232, 184, 120, 0.25)" :
                                                    item.status === "Coming Soon" ? "rgba(124, 92, 255, 0.25)" :
                                                    "rgba(138, 138, 146, 0.15)"
                                                }`,
                                                borderRadius: "9999px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.status}
                                        </div>
                                    </div>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f5e6d3", marginBottom: "0.4rem", fontFamily: "var(--font-clash)" }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: "0.85rem", color: "#8a8a92", lineHeight: 1.6 }}>{item.description}</p>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== CALL TO ACTION ===== */}
                <section
                    style={{
                        padding: "6rem 3rem 8rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <SectionLabel text="Get Started" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2
                            style={{
                                fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                                fontWeight: 700,
                                color: "#f5e6d3",
                                lineHeight: 1.15,
                                marginBottom: "1.25rem",
                                fontFamily: "var(--font-clash)",
                            }}
                        >
                            Ready to explore{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #7c5cff, #a78bfa)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                StartupPulse AI
                            </span>
                            ?
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", color: "#a8a8b0", lineHeight: 1.7, maxWidth: "550px", margin: "0 auto 2.5rem" }}>
                            Explore the code, read the documentation, or check out the live demo.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.3}>
                        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <MagneticButton strength={0.4}>
                                <Link
                                    href="https://github.com/khetavathnikhil17-afk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        padding: "1rem 2.25rem",
                                        backgroundColor: "#7c5cff",
                                        color: "#fff",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        boxShadow: "0 0 40px rgba(124, 92, 255, 0.25)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 60px rgba(124, 92, 255, 0.45)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(124, 92, 255, 0.25)"; }}
                                >
                                    <GithubIcon size={16} color="#fff" />
                                    View GitHub
                                    <ArrowRightIcon size={14} color="#fff" />
                                </Link>
                            </MagneticButton>

                            <MagneticButton strength={0.4}>
                                <Link
                                    href="#"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        padding: "1rem 2.25rem",
                                        backgroundColor: "transparent",
                                        color: "#f5e6d3",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        border: "1px solid rgba(232, 184, 120, 0.25)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e8b878"; e.currentTarget.style.backgroundColor = "rgba(232, 184, 120, 0.08)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232, 184, 120, 0.25)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                                >
                                    <DownloadIcon size={16} color="#f5e6d3" />
                                    Download Documentation
                                </Link>
                            </MagneticButton>

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "1rem 2.25rem",
                                    color: "#8a8a92",
                                    borderRadius: "9999px",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    border: "1px solid rgba(138, 138, 146, 0.15)",
                                    cursor: "default",
                                }}
                            >
                                <FileTextIcon size={16} color="#8a8a92" />
                                Research Paper (Soon)
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.5}>
                        <div style={{ marginTop: "2.5rem" }}>
                            <Link
                                href="/projects"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    color: "#8a8a92",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "#f5e6d3"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "#8a8a92"; }}
                            >
                                <ArrowLeftIcon size={14} color="currentColor" />
                                Back to Projects
                            </Link>
                        </div>
                    </FadeUp>
                </section>
            </div>

            {/* ===== LIGHTBOX ===== */}
            {isLightboxOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.95)",
                        backdropFilter: "blur(20px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem",
                        cursor: "pointer",
                    }}
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        style={{
                            position: "absolute",
                            top: "1.5rem",
                            right: "1.5rem",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            borderRadius: "50%",
                            width: "44px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#fff",
                            fontSize: "1.25rem",
                        }}
                        aria-label="Close lightbox"
                    >
                        ✕
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateGallery("prev"); }}
                        style={{
                            position: "absolute",
                            left: "1.5rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#fff",
                        }}
                        aria-label="Previous screenshot"
                    >
                        <ChevronLeftIcon size={24} color="#fff" />
                    </button>

                    <div
                        style={{ position: "relative", width: "90vw", height: "80vh", maxWidth: "1200px", cursor: "default" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={screenshots[activeScreenshot].src}
                            alt={screenshots[activeScreenshot].alt}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="90vw"
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1rem",
                                left: "50%",
                                transform: "translateX(-50%)",
                                padding: "0.5rem 1.25rem",
                                background: "rgba(0,0,0,0.7)",
                                borderRadius: "9999px",
                                fontSize: "0.8rem",
                                color: "#a8a8b0",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            {screenshots[activeScreenshot].label} — {activeScreenshot + 1}/{screenshots.length}
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateGallery("next"); }}
                        style={{
                            position: "absolute",
                            right: "1.5rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#fff",
                        }}
                        aria-label="Next screenshot"
                    >
                        <ChevronRightIcon size={24} color="#fff" />
                    </button>
                </div>
            )}

            {/* Responsive styles */}
            <style jsx>{`
                .stats-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                }
                .overview-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .features-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }
                .thumb-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }
                .metrics-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }
                .shap-viz-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }
                .impact-metrics-responsive {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }
                .roadmap-grid-responsive {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .timeline-line-desktop {
                    display: block;
                }
                .timeline-dot-desktop {
                    display: block;
                }
                .pipeline-scroll {
                    justify-content: flex-start;
                }

                @media (max-width: 1024px) {
                    .stats-grid-responsive { grid-template-columns: repeat(3, 1fr); }
                    .features-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .metrics-grid-responsive { grid-template-columns: repeat(3, 1fr); }
                    .shap-viz-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .impact-metrics-responsive { grid-template-columns: repeat(2, 1fr); }
                    .roadmap-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .overview-grid-responsive { grid-template-columns: 1fr; }
                    .features-grid-responsive { grid-template-columns: 1fr; }
                    .thumb-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .metrics-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .shap-viz-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .impact-metrics-responsive { grid-template-columns: repeat(2, 1fr); }
                    .roadmap-grid-responsive { grid-template-columns: 1fr; }
                    .timeline-line-desktop { display: none; }
                    .timeline-dot-desktop { display: none; }
                    .pipeline-scroll {
                        justify-content: flex-start;
                        gap: 0;
                    }
                }

                @media (max-width: 480px) {
                    .stats-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .thumb-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                    .metrics-grid-responsive { grid-template-columns: 1fr; }
                    .shap-viz-grid-responsive { grid-template-columns: 1fr; }
                    .impact-metrics-responsive { grid-template-columns: 1fr; }
                }
            `}</style>
        </main>
    );
}
