"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Hls from "hls.js";
import StarfieldBg from "@/components/backgrounds/StarfieldBg";
import GridBg from "@/components/backgrounds/GridBg";
import NoiseBg from "@/components/backgrounds/NoiseBg";
import ChapterMarker from "@/components/elements/ChapterMarker";
import EditorialLabel from "@/components/elements/EditorialLabel";
import CornerBrackets from "@/components/elements/CornerBrackets";
import StatusBadge from "@/components/elements/StatusBadge";
import FadeUp from "@/components/animations/FadeUp";
import NumberCounter from "@/components/animations/NumberCounter";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";

const caseStudy = {
    id: "03",
    title: "StartupPulse AI",
    subtitle: "Explainable Aspect-Based Sentiment Analysis using DeBERTa-v3 + SHAP",
    category: "AI / NLP / Explainable AI",
    year: "2025",
    type: "Case Study",
    tools: ["Python", "PyTorch", "Hugging Face Transformers"],
    methods: ["DeBERTa-v3", "SHAP", "Aspect-Based Sentiment Analysis"],
    description:
        "An AI-powered sentiment analysis platform that leverages DeBERTa-v3 and SHAP Explainability to analyze employee feedback with transparent, interpretable predictions.",
    problem:
        "Traditional sentiment analysis tools provide binary positive/negative labels without explaining why a sentiment was detected. For HR teams and product managers analyzing employee feedback, this black-box approach fails to identify specific aspects driving sentiment — making it impossible to take targeted action on retention, culture, or product improvements.",
    solution:
        "Built an end-to-end Aspect-Based Sentiment Analysis (ABSA) system using DeBERTa-v3 for contextual understanding and SHAP (SHapley Additive exPlanations) for model interpretability. The system classifies sentiment at the aspect level — identifying not just what employees feel, but which specific aspects (management, work-life balance, compensation, culture) drive their sentiment. An interactive Streamlit dashboard provides real-time inference, analytics visualizations, and explainable predictions.",
    result:
        "The platform delivers transparent, aspect-level sentiment predictions with SHAP-powered explanations that make model decisions interpretable. HR teams can now identify exactly which workplace factors drive positive or negative sentiment, enabling data-driven decisions for employee retention and organizational improvement.",
    stats: [
        { label: "Model Architecture", value: "DeBERTa-v3", unit: "transformer" },
        { label: "Explainability", value: "SHAP", unit: "integrations" },
        { label: "Sentiment Classes", value: "3", unit: "pos/neg/neutral" },
        { label: "Dashboard", value: "Streamlit", unit: "interactive" },
    ],
    features: [
        {
            title: "Aspect-Based Sentiment Classification",
            description:
                "Classifies sentiment at the aspect level — identifies sentiment for specific workplace factors like management, work-life balance, compensation, and culture within a single feedback entry.",
            impact:
                "Enables targeted action by pinpointing exactly which aspects drive employee satisfaction or dissatisfaction.",
        },
        {
            title: "SHAP Explainability Layer",
            description:
                "Integrates SHAP (SHapley Additive exPlanations) to visualize which tokens and aspects contributed most to each sentiment prediction, making model decisions transparent.",
            impact:
                "Builds trust with stakeholders by providing human-interpretable explanations for every prediction — not just black-box labels.",
        },
        {
            title: "DeBERTa-v3 Transformer Backbone",
            description:
                "Leverages DeBERTa-v3 (Decoding-enhanced BERT with disentangled attention) for superior contextual understanding of nuanced employee feedback language.",
            impact:
                "Achieves higher accuracy on sentiment tasks compared to BERT/RoBERTa baselines, especially on complex, multi-aspect sentences.",
        },
        {
            title: "Interactive Streamlit Dashboard",
            description:
                "Real-time inference dashboard where users can input feedback text, view aspect-level sentiment breakdowns, SHAP visualizations, and analytics aggregations.",
            impact:
                "Makes the ML system accessible to non-technical stakeholders — HR teams can use it without any ML expertise.",
        },
        {
            title: "Analytics & Visualizations",
            description:
                "Built-in analytics including sentiment distribution charts, aspect frequency analysis, trend visualizations, and confusion matrix evaluation metrics.",
            impact:
                "Provides organizational-level insights beyond individual predictions — enabling strategic workforce planning.",
        },
        {
            title: "Real-Time Sentiment Inference",
            description:
                "Supports real-time sentiment prediction on new feedback text with instant SHAP explanation generation, enabling live analysis workflows.",
            impact:
                "Reduces time-to-insight from days to seconds — feedback can be analyzed as it arrives.",
        },
    ],
    architecture: {
        description:
            "The system follows a modular pipeline architecture: raw feedback text is tokenized and fed through the DeBERTa-v3 encoder, which produces contextual embeddings. A classification head maps these to aspect-level sentiment predictions. SHAP is applied post-hoc to generate feature importance explanations. The Streamlit dashboard orchestrates the full inference pipeline and presents results through interactive visualizations.",
        components: [
            "Input Text Preprocessing & Tokenization",
            "DeBERTa-v3 Encoder (contextual embeddings)",
            "Aspect-Level Classification Head",
            "SHAP Explainer (post-hoc interpretability)",
            "Streamlit Dashboard (visualization & inference)",
            "Analytics Engine (aggregations & trends)",
        ],
    },
    evaluation: {
        description:
            "Model performance was evaluated on a held-out test set of employee feedback annotations. The DeBERTa-v3 backbone achieved strong results across all sentiment classes, with particularly high precision on negative sentiment detection — critical for identifying early warning signs in employee feedback.",
        metrics: [
            { label: "Accuracy", value: "89.2%", description: "Overall classification accuracy" },
            { label: "F1 Score (Macro)", value: "0.87", description: "Balanced F1 across all classes" },
            { label: "Precision (Negative)", value: "0.91", description: "High precision for negative sentiment" },
            { label: "Recall (Positive)", value: "0.88", description: "Strong recall for positive sentiment" },
        ],
        confusionMatrix: "Confusion matrix reveals strong diagonal dominance with minimal cross-class confusion, validating the model's ability to distinguish nuanced sentiment aspects.",
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
    },
    techStack: [
        { name: "Python", description: "Core programming language" },
        { name: "PyTorch", description: "Deep learning framework" },
        { name: "Hugging Face Transformers", description: "Pre-trained model hub & tokenizers" },
        { name: "DeBERTa-v3", description: "Transformer backbone for contextual encoding" },
        { name: "SHAP", description: "Model explainability & feature importance" },
        { name: "Streamlit", description: "Interactive web dashboard" },
        { name: "Scikit-learn", description: "Evaluation metrics & preprocessing" },
        { name: "Pandas", description: "Data manipulation & analysis" },
        { name: "NumPy", description: "Numerical computing" },
        { name: "Matplotlib", description: "Visualization & plotting" },
    ],
    challenges: [
        {
            title: "Multi-Aspect Feedback Disambiguation",
            description:
                "Employee feedback often contains multiple aspects with different sentiments in a single sentence (e.g., 'Great team culture but management needs improvement'). Traditional sentence-level models fail to capture this nuance.",
            solution:
                "Implemented aspect-level tokenization and classification, allowing the model to assign independent sentiment labels to each identified aspect within a single feedback entry.",
        },
        {
            title: "Model Explainability for Non-Technical Stakeholders",
            description:
                "HR teams and product managers need to understand why the model made a prediction — not just what it predicted. Black-box models erode trust in organizational settings.",
            solution:
                "Integrated SHAP explainer with custom visualization layers that translate feature importance into human-readable insights, showing exactly which words drove each sentiment prediction.",
        },
        {
            title: "Domain-Specific Language Understanding",
            description:
                "Employee feedback uses domain-specific language (e.g., 'quiet quitting', 'psychological safety', 'growth mindset') that general-purpose sentiment models struggle to interpret correctly.",
            solution:
                "Fine-tuned DeBERTa-v3 on domain-specific employee feedback data, leveraging its disentangled attention mechanism to better capture the nuanced semantics of workplace language.",
        },
    ],
    futureImprovements: [
        "Expand aspect taxonomy to cover more granular workplace factors (e.g., remote work, benefits, career growth)",
        "Implement few-shot learning for rapid adaptation to new feedback categories without full retraining",
        "Add multi-language support for global employee feedback analysis",
        "Integrate with HRIS platforms (Workday, BambooHR) for automated feedback ingestion and reporting",
        "Deploy as a REST API for seamless integration with existing organizational analytics pipelines",
        "Implement temporal sentiment tracking to detect sentiment shifts over time for proactive intervention",
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
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
    );
};

export default function StartupPulseCaseStudyPage() {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        document.title = "StartupPulse AI | Nikhil Khetavath";
    }, []);

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
                <HLSVideo src="https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8" />
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
                <GridBg size={80} color="rgba(124, 92, 255, 0.03)" fade={true} />
                <NoiseBg opacity={0.05} />

                {/* ===== HERO ===== */}
                <section
                    style={{
                        position: "relative",
                        minHeight: "70vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "8rem 3rem 4rem",
                        maxWidth: "1600px",
                        margin: "0 auto",
                    }}
                >
                    <ChapterMarker chapter="Case Study" title="AI / NLP" position="left" />
                    <ChapterMarker
                        chapter="Project"
                        title={caseStudy.id}
                        position="right"
                        status={caseStudy.type}
                    />

                    <FadeUp delay={0.3}>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text={caseStudy.category} />
                        </div>
                    </FadeUp>

                    <h1
                        style={{
                            fontSize: "clamp(3rem, 10vw, 12rem)",
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: "-0.05em",
                            color: "#f5e6d3",
                            textTransform: "uppercase",
                            margin: "0 0 2rem",
                        }}
                    >
                        <TextReveal duration={1.2} delay={0.4}>
                            <div>STARTUP</div>
                        </TextReveal>
                        <TextReveal duration={1.2} delay={0.6}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #7c5cff, #f5d4a3, #ffffff)",
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
                            {caseStudy.description}
                        </p>
                    </FadeUp>

                    <FadeUp delay={1.2}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <StatusBadge text={caseStudy.type} variant="available" />
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#a8a8b0",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    padding: "0.6rem 1.5rem",
                                    border: "1px solid rgba(124, 92, 255, 0.3)",
                                    borderRadius: "9999px",
                                }}
                            >
                                {caseStudy.year}
                            </div>
                        </div>
                    </FadeUp>
                </section>

                {/* ===== STATS ===== */}
                <section
                    style={{
                        padding: "4rem 3rem",
                        maxWidth: "1600px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {caseStudy.stats.map((stat, i) => (
                            <FadeUp key={stat.label} delay={i * 0.1}>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                            fontWeight: 700,
                                            color: "#7c5cff",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#a8a8b0",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#8a8a92",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {stat.unit}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== PROBLEM ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Problem" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                            }}
                        >
                            {caseStudy.problem}
                        </p>
                    </FadeUp>
                </section>

                {/* ===== SOLUTION ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Solution" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                            }}
                        >
                            {caseStudy.solution}
                        </p>
                    </FadeUp>
                </section>

                {/* ===== KEY FEATURES ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Key Features" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {caseStudy.features.map((feature, i) => (
                            <FadeUp key={feature.title} delay={i * 0.1}>
                                <div
                                    style={{
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                        height: "100%",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 600,
                                            color: "#7c5cff",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            lineHeight: 1.6,
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        {feature.description}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        <strong>Impact:</strong> {feature.impact}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== ARCHITECTURE ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="Architecture" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                                color: "#a8a8b0",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                marginBottom: "3rem",
                            }}
                        >
                            {caseStudy.architecture.description}
                        </p>
                    </FadeUp>

                    {/* Architecture Diagram Placeholder */}
                    <FadeUp delay={0.3}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16/9",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                marginBottom: "3rem",
                            }}
                        >
                            <Image
                                src="/projects/startuppulse/architecture.png"
                                alt="StartupPulse AI Architecture"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gap: "1rem",
                        }}
                    >
                        {caseStudy.architecture.components.map((component, i) => (
                            <FadeUp key={i} delay={i * 0.05}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1.5rem",
                                        alignItems: "center",
                                        padding: "1.25rem 1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#7c5cff",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            padding: "0.4rem 0.75rem",
                                            border: "1px solid rgba(124, 92, 255, 0.3)",
                                            borderRadius: "4px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}
                                    >
                                        {component}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== DASHBOARD SCREENSHOTS ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Dashboard Screenshots" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {[
                            { src: "/projects/startuppulse/dashboard_home.png", alt: "Dashboard Home" },
                            { src: "/projects/startuppulse/prediction_result.png", alt: "Prediction Result" },
                            { src: "/projects/startuppulse/shap_explanation.png", alt: "SHAP Explanation" },
                            { src: "/projects/startuppulse/confusion_matrix.png", alt: "Confusion Matrix" },
                        ].map((screenshot, i) => (
                            <FadeUp key={screenshot.src} delay={i * 0.1}>
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        aspectRatio: "16/10",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                    }}
                                >
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            padding: "1.5rem",
                                            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.8))",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#f5e6d3",
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {screenshot.alt}
                                        </span>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== MODEL EVALUATION ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="Model Evaluation" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                                color: "#a8a8b0",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                marginBottom: "3rem",
                            }}
                        >
                            {caseStudy.evaluation.description}
                        </p>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {caseStudy.evaluation.metrics.map((metric, i) => (
                            <FadeUp key={metric.label} delay={i * 0.1}>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                            fontWeight: 700,
                                            color: "#7c5cff",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {metric.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#a8a8b0",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#8a8a92",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {metric.description}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Confusion Matrix Image */}
                    <FadeUp delay={0.3}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "600px",
                                aspectRatio: "1/1",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                margin: "0 auto",
                            }}
                        >
                            <Image
                                src="/projects/startuppulse/confusion_matrix.png"
                                alt="Confusion Matrix"
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 600px) 100vw, 600px"
                            />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <p
                            style={{
                                fontSize: "0.95rem",
                                color: "#a8a8b0",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                marginTop: "2rem",
                                textAlign: "center",
                            }}
                        >
                            {caseStudy.evaluation.confusionMatrix}
                        </p>
                    </FadeUp>
                </section>

                {/* ===== SHAP EXPLAINABILITY ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="SHAP Explainability" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                                color: "#a8a8b0",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                marginBottom: "3rem",
                            }}
                        >
                            {caseStudy.shapExplanation.description}
                        </p>
                    </FadeUp>

                    {/* SHAP Visualization */}
                    <FadeUp delay={0.3}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16/9",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid rgba(232, 184, 120, 0.15)",
                                marginBottom: "3rem",
                            }}
                        >
                            <Image
                                src="/projects/startuppulse/shap_explanation.png"
                                alt="SHAP Explanation Visualization"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        {caseStudy.shapExplanation.keyInsights.map((insight, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1.5rem",
                                        alignItems: "flex-start",
                                        padding: "1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#7c5cff",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            padding: "0.4rem 0.75rem",
                                            border: "1px solid rgba(124, 92, 255, 0.3)",
                                            borderRadius: "4px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}
                                    >
                                        {insight}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== TECH STACK ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Tech Stack" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {caseStudy.techStack.map((tech, i) => (
                            <FadeUp key={tech.name} delay={i * 0.05}>
                                <div
                                    style={{
                                        padding: "1rem 1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "9999px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#f5e6d3",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech.name}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#8a8a92",
                                        }}
                                    >
                                        •
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#a8a8b0",
                                        }}
                                    >
                                        {tech.description}
                                    </span>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== CHALLENGES ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Challenges" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gap: "2rem",
                        }}
                    >
                        {caseStudy.challenges.map((challenge, i) => (
                            <FadeUp key={challenge.title} delay={i * 0.1}>
                                <div
                                    style={{
                                        padding: "2rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 600,
                                            color: "#7c5cff",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {challenge.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#a8a8b0",
                                            lineHeight: 1.6,
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        {challenge.description}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        <strong>Solution:</strong> {challenge.solution}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== FUTURE IMPROVEMENTS ===== */}
                <section
                    style={{
                        padding: "6rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "3rem" }}>
                            <EditorialLabel text="Future Improvements" />
                        </div>
                    </FadeUp>

                    <div
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        {caseStudy.futureImprovements.map((improvement, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1.5rem",
                                        alignItems: "flex-start",
                                        padding: "1.5rem",
                                        border: "1px solid rgba(232, 184, 120, 0.15)",
                                        borderRadius: "12px",
                                        background: "rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "#7c5cff",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            padding: "0.4rem 0.75rem",
                                            border: "1px solid rgba(124, 92, 255, 0.3)",
                                            borderRadius: "4px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#f5e6d3",
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}
                                    >
                                        {improvement}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </section>

                {/* ===== RESULT ===== */}
                <section
                    style={{
                        padding: "8rem 3rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderTop: "1px solid rgba(232, 184, 120, 0.15)",
                        textAlign: "center",
                    }}
                >
                    <FadeUp>
                        <div style={{ marginBottom: "2rem" }}>
                            <EditorialLabel text="The Result" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p
                            style={{
                                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                color: "#f5e6d3",
                                lineHeight: 1.6,
                                maxWidth: "900px",
                                margin: "0 auto 3rem",
                            }}
                        >
                            {caseStudy.result}
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <MagneticButton strength={0.4}>
                                <Link
                                    href="https://github.com/khetavathnikhil17-afk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.5rem 3rem",
                                        backgroundColor: "#7c5cff",
                                        color: "#fff",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        boxShadow: "0 0 60px rgba(124, 92, 255, 0.4)",
                                        letterSpacing: "0.05em",
                                        transition: "all 0.4s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#9171ff";
                                        e.currentTarget.style.boxShadow = "0 0 80px rgba(124, 92, 255, 0.6)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "#7c5cff";
                                        e.currentTarget.style.boxShadow = "0 0 60px rgba(124, 92, 255, 0.4)";
                                    }}
                                >
                                    GitHub Repository
                                    <span style={{ fontSize: "1.25rem" }}>→</span>
                                </Link>
                            </MagneticButton>

                            <MagneticButton strength={0.4}>
                                <Link
                                    href="/projects"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.5rem 3rem",
                                        backgroundColor: "transparent",
                                        color: "#f5e6d3",
                                        borderRadius: "9999px",
                                        textDecoration: "none",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        border: "1px solid rgba(232, 184, 120, 0.3)",
                                        letterSpacing: "0.05em",
                                        transition: "all 0.4s ease",
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
                                    ← Back to Projects
                                </Link>
                            </MagneticButton>
                        </div>
                    </FadeUp>
                </section>
            </div>
        </main>
    );
}
