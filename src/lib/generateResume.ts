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
    doc.text("AI Product Engineer with experience in building intelligent products, AI-powered", margin + 2, y); line(4.5);
    doc.text("applications, data-driven solutions, and scalable digital experiences. Skilled in", margin + 2, y); line(4.5);
    doc.text("leveraging artificial intelligence, software engineering, and product thinking to", margin + 2, y); line(4.5);
    doc.text("develop impactful solutions that solve real-world problems.", margin + 2, y);
    line(5);

    // ── TECHNICAL SKILLS ──
    section("TECHNICAL SKILLS");
    bullet("Frontend", "React.js, Next.js, TypeScript, Tailwind CSS");
    bullet("Backend", "Python, Node.js, FastAPI, PostgreSQL, MongoDB");
    bullet("AI/ML", "OpenAI API, LangChain, TensorFlow, PyTorch, LLMs");
    bullet("Data Science", "EDA, Feature Engineering, Statistical Analysis, Predictive Modeling");
    bullet("Databases", "MySQL, PostgreSQL, MongoDB");
    bullet("Cloud & DevOps", "AWS, Docker, Git, GitHub");
    line(2);

    // ── EXPERIENCE ──
    section("EXPERIENCE");

    setFont(10, "bold");
    doc.text("AI/ML with Python Intern | Teach Maven | Sep 2025 – Oct 2025", margin + 2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Developed machine learning models using Python for real-world datasets.", margin + 2, y); line(4.5);
    doc.text("• Performed data preprocessing, feature engineering, and model evaluation.", margin + 2, y); line(4.5);
    doc.text("• Worked with Python libraries including Pandas, NumPy, Scikit-learn, and TensorFlow.", margin + 2, y); line(6);

    setFont(10, "bold");
    doc.text("Software Engineering Job Simulation | Forage | May 2025", margin + 2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Completed end-to-end software engineering tasks in a simulated industry environment.", margin + 2, y); line(4.5);
    doc.text("• Integrated Kafka, H2 Database, and REST APIs into application workflows.", margin + 2, y); line(4.5);
    doc.text("• Developed and tested REST API controllers following software engineering best practices.", margin + 2, y); line(5);

    // ── PROJECTS ──
    section("PROJECTS");

    // StartupPulse AI
    const startupPulseLinkX = margin + 2;
    setFont(10, "normal");
    const linkText = "[Link]";
    const linkW = doc.getTextWidth(linkText);
    doc.text(linkText, startupPulseLinkX, y);
    doc.link(startupPulseLinkX, y - 3.5, linkW, 4.5, { url: "https://github.com/khetavathnikhil17-afk/StartupPulse-AI" });
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(startupPulseLinkX, y + 0.5, startupPulseLinkX + linkW, y + 0.5);

    setFont(10, "bold");
    doc.text("  StartupPulse AI – Explainable Aspect-Based Sentiment Analysis", startupPulseLinkX + linkW, y);
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
    doc.text(linkText, nyraLinkX, y);
    doc.link(nyraLinkX, y - 3.5, linkW, 4.5, { url: "https://github.com/khetavathnikhil17-afk/Nyra.git" });
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(nyraLinkX, y + 0.5, nyraLinkX + linkW, y + 0.5);

    setFont(10, "bold");
    doc.text("  Nyra – AI Voice Companion", nyraLinkX + linkW, y);
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
    doc.text("Manufacturing Defect Analysis", margin + 2, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Tech Stack", margin + 2, y);
    setFont(10, "bold");
    doc.text(" - R, SPSS, Excel, PCA, Factor Analysis, Regression Analysis", margin + 2 + doc.getTextWidth("• Tech Stack"), y);
    line(4.5);

    setFont(10, "normal");
    doc.text("• Performed multivariate statistical modeling on 1,000 observations from", margin + 2, y); line(4.5);
    doc.text("  smart manufacturing sensors.", margin + 2, y); line(4.5);
    doc.text("• Applied PCA and Factor Analysis to reduce 55 variables to 3 factors", margin + 2, y); line(4.5);
    doc.text("  explaining 70.72% variance.", margin + 2, y); line(4.5);
    doc.text("• Detected 10 out-of-control signals using Hotelling's T² method, reducing", margin + 2, y); line(4.5);
    doc.text("  defect detection time by 40%.", margin + 2, y); line(5);

    // ── EDUCATION ──
    section("EDUCATION");
    setFont(10, "bold");
    doc.text("Bachelor of Science (B.Sc) in Computer Science | Osmania University | 2023 – 2026", margin + 2, y);
    line(5);
    doc.text("AV College of Arts, Science & Commerce, Hyderabad", margin + 2, y);
    line(4.5);
    doc.text("Relevant Coursework: Artificial Intelligence, Machine Learning, Data Structures", margin + 2, y); line(4.5);
    doc.text("& Algorithms, Database Management Systems", margin + 2, y);

    return doc;
}
