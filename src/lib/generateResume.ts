import jsPDF from "jspdf";

export function generateResume(): jsPDF {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 22;
    let y = 20;

    const setFont = (size: number, style: "normal" | "bold" = "normal") => {
        doc.setFontSize(size);
        doc.setFont("times", style);
    };

    const line = (space = 4) => { y += space; };

    const section = (title: string) => {
        line(4);
        setFont(11, "bold");
        doc.text(title, margin, y);
        y += 1;
        doc.setDrawColor(0);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
    };

    const bullet = (label: string, value: string) => {
        setFont(10, "bold");
        doc.text("• " + label, margin + 2, y);
        setFont(10, "normal");
        doc.text(" - " + value, margin + 2 + doc.getTextWidth("• " + label), y);
        line(5);
    };

    const hyperlink = (label: string, url: string, x: number) => {
        setFont(10, "normal");
        const textWidth = doc.getTextWidth(label);
        doc.text(label, x, y);
        doc.link(x, y - 3.5, textWidth, 4.5, { url });
        // underline
        doc.setDrawColor(100, 100, 100);
        doc.setLineWidth(0.2);
        doc.line(x, y + 0.5, x + textWidth, y + 0.5);
        return x + textWidth;
    };

    // ── NAME ──
    setFont(16, "bold");
    doc.text("Nikhil Khetavath", margin, y);
    y += 7;

    // ── CONTACT ──
    let cx = margin;
    cx = hyperlink("+91 7993499546", "tel:+917993499546", cx);
    cx += 4; setFont(10, "normal"); doc.text("|", cx, y); cx += 4;
    cx = hyperlink("Email", "mailto:khetavathnikhil17@gmail.com", cx);
    cx += 4; doc.text("|", cx, y); cx += 4;
    cx = hyperlink("GitHub", "https://github.com/khetavathnikhil17-afk", cx);
    cx += 4; doc.text("|", cx, y); cx += 4;
    cx = hyperlink("LinkedIn", "https://www.linkedin.com/in/nikhilkhetavath-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android", cx);
    cx += 4; doc.text("|", cx, y); cx += 4;
    cx = hyperlink("Portfolio", "https://nikhilkhetavath.vercel.app", cx);
    cx += 4; doc.text("|", cx, y); cx += 4;
    hyperlink("Twitter", "https://twitter.com/nikhilkhetavath", cx);
    y += 7;

    // ── SUMMARY ──
    section("SUMMARY");
    setFont(10, "normal");
    doc.text("Building intelligent products at the intersection of AI, data science, and product", margin + 2, y);
    line(4.5);
    doc.text("innovation to create impactful real-world experiences.", margin + 2, y);
    line(5);

    // ── TECHNICAL SKILLS ──
    section("TECHNICAL SKILLS");
    bullet("Frontend", "React.js, Next.js, TypeScript, Tailwind CSS");
    bullet("Backend", "Python, Node.js, FastAPI, PostgreSQL, MongoDB");
    bullet("AI/ML", "Open-AI API, Lang-Chain, TensorFlow, PyTorch, LLMs");
    bullet("Data Science", "EDA, Feature Engineering, Statistical Analysis, Predictive Modeling");
    bullet("Databases", "MySQL, PostgreSQL, MongoDB");
    bullet("Cloud & DevOps", "AWS, Docker, Git, GitHub");
    line(2);

    // ── EXPERIENCE ──
    section("EXPERIENCE");

    setFont(10, "bold");
    doc.text("AI/ML with Python Intern", margin + 2, y);
    setFont(10, "normal");
    doc.text(" | Teach Maven | Sep 2025 – Oct 2025", margin + 2 + doc.getTextWidth("AI/ML with Python Intern"), y);
    line(5);

    setFont(10, "normal");
    doc.text("• Developed machine learning models using Python for real-world datasets.", margin + 2, y); line(4.5);
    doc.text("• Performed data preprocessing, feature engineering, and model evaluation.", margin + 2, y); line(4.5);
    doc.text("• Worked with Python libraries including Pandas, NumPy, Scikit-learn, and TensorFlow.", margin + 2, y); line(6);

    setFont(10, "bold");
    doc.text("Software Engineering Job Simulation", margin + 2, y);
    setFont(10, "normal");
    doc.text(" | Forage | May 2025", margin + 2 + doc.getTextWidth("Software Engineering Job Simulation"), y);
    line(5);

    setFont(10, "normal");
    doc.text("• Completed end-to-end software engineering tasks in a simulated industry environment.", margin + 2, y); line(4.5);
    doc.text("• Integrated Kafka, H2 Database, and REST APIs into application workflows.", margin + 2, y); line(4.5);
    doc.text("• Developed and tested REST API controllers following software engineering best practices.", margin + 2, y); line(6);

    setFont(10, "bold");
    doc.text("GenAI Job Simulation", margin + 2, y);
    setFont(10, "normal");
    doc.text(" | Forage | May 2025", margin + 2 + doc.getTextWidth("GenAI Job Simulation"), y);
    line(5);

    setFont(10, "normal");
    doc.text("• Performed data extraction and initial analysis on business datasets.", margin + 2, y); line(4.5);
    doc.text("• Developed an AI-powered financial chatbot using Generative AI concepts.", margin + 2, y); line(4.5);
    doc.text("• Applied problem-solving and AI-driven approaches to real-world business scenarios.", margin + 2, y); line(5);

    // ── PROJECTS ──
    section("PROJECTS");

    // StartupPulse AI
    const startupPulseLinkX = margin + 2;
    setFont(10, "normal");
    const linkText2 = "[Link]";
    const linkW2 = doc.getTextWidth(linkText2);
    doc.text(linkText2, startupPulseLinkX, y);
    doc.link(startupPulseLinkX, y - 3.5, linkW2, 4.5, { url: "https://github.com/khetavathnikhil17-afk/StartupPulse-AI" });
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(startupPulseLinkX, y + 0.5, startupPulseLinkX + linkW2, y + 0.5);

    setFont(10, "bold");
    doc.text("  StartupPulse AI – Explainable Aspect-Based Sentiment Analysis", startupPulseLinkX + linkW2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Tech Stack", margin + 2, y);
    setFont(10, "bold");
    doc.text(" - Python, DeBERTa-v3, SHAP, Streamlit, Hugging Face", margin + 2 + doc.getTextWidth("• Tech Stack"), y);
    line(4.5);

    setFont(10, "normal");
    doc.text("• Built an AI system to analyze employee reviews using DeBERTa-v3.", margin + 2, y); line(4.5);
    doc.text("• Performed aspect-based sentiment analysis with explainable AI (SHAP).", margin + 2, y); line(4.5);
    doc.text("• Developed an interactive Streamlit dashboard for predictions and insights.", margin + 2, y); line(4.5);
    doc.text("• Improved transparency by showing the key factors behind each prediction.", margin + 2, y); line(6);

    // Nyra
    const nyraLinkX = margin + 2;
    setFont(10, "normal");
    doc.text(linkText2, nyraLinkX, y);
    doc.link(nyraLinkX, y - 3.5, linkW2, 4.5, { url: "https://github.com/khetavathnikhil17-afk/Nyra.git" });
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(nyraLinkX, y + 0.5, nyraLinkX + linkW2, y + 0.5);

    setFont(10, "bold");
    doc.text("  Nyra – AI Voice Companion", nyraLinkX + linkW2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Tech Stack", margin + 2, y);
    setFont(10, "bold");
    doc.text(" - Python, Next.js, Gemini, LiveKit, ElevenLabs, React", margin + 2 + doc.getTextWidth("• Tech Stack"), y);
    line(4.5);

    setFont(10, "normal");
    doc.text("• Developed a voice-based AI companion with real-time conversations.", margin + 2, y); line(4.5);
    doc.text("• Integrated Gemini AI, ElevenLabs, and LiveKit for voice interactions.", margin + 2, y); line(4.5);
    doc.text("• Added long-term memory using Mem0 and ChromaDB.", margin + 2, y); line(4.5);
    doc.text("• Built a modern web interface using Next.js and React.", margin + 2, y); line(6);

    setFont(10, "bold");
    doc.text("Multivariate Data Analysis Case Study", margin + 2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Tech Stack", margin + 2, y);
    setFont(10, "bold");
    doc.text(" - Python, Pandas, Matplotlib, Seaborn, Statistical Analysis", margin + 2 + doc.getTextWidth("• Tech Stack"), y);
    line(4.5);

    setFont(10, "normal");
    doc.text("• Conducted comprehensive statistical and exploratory analysis on complex", margin + 2, y); line(4.5);
    doc.text("  datasets to uncover patterns and relationships.", margin + 2, y); line(4.5);
    doc.text("• Applied data preprocessing, visualization, and analytical techniques to", margin + 2, y); line(4.5);
    doc.text("  derive meaningful business insights.", margin + 2, y); line(4.5);
    doc.text("• Presented findings through interactive dashboards and reports.", margin + 2, y); line(5);

    // ── EDUCATION ──
    section("EDUCATION");
    setFont(10, "normal");
    doc.text("Osmania University, Hyderabad | Bachelor of Science (MSCs) in Computer Science", margin + 2, y); line(4.5);
    doc.text("AV College of Arts, Science & Commerce | 2023 – 2026", margin + 2, y);

    return doc;
}