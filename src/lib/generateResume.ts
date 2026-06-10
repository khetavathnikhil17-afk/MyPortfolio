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
    doc.text("GenAI Job Simulation", margin + 2, y);
    setFont(10, "normal");
    doc.text(" | Forage | May 2025", margin + 2 + doc.getTextWidth("GenAI Job Simulation"), y);
    line(5);

    setFont(10, "normal");
    doc.text("• Performed data extraction and initial analysis on business datasets.", margin + 2, y); line(4.5);
    doc.text("• Developed an AI-powered financial chatbot using Generative AI concepts.", margin + 2, y); line(4.5);
    doc.text("• Applied problem-solving and AI-driven approaches to real-world business scenarios.", margin + 2, y); line(6);

    setFont(10, "bold");
    doc.text("Software Engineering Job Simulation", margin + 2, y);
    setFont(10, "normal");
    doc.text(" | Forage | May 2025", margin + 2 + doc.getTextWidth("Software Engineering Job Simulation"), y);
    line(5);

    setFont(10, "normal");
    doc.text("• Completed end-to-end software engineering tasks in a simulated industry environment.", margin + 2, y); line(4.5);
    doc.text("• Integrated Kafka, H2 Database, and REST APIs into application workflows.", margin + 2, y); line(4.5);
    doc.text("• Developed and tested REST API controllers following software engineering best practices.", margin + 2, y); line(5);

    // ── PROJECTS ──
    section("PROJECTS");

    const nyraLinkX = margin + 2;
    setFont(10, "normal");
    const linkText = "[Link]";
    const linkW = doc.getTextWidth(linkText);
    doc.text(linkText, nyraLinkX, y);
    doc.link(nyraLinkX, y - 3.5, linkW, 4.5, { url: "https://github.com/khetavathnikhil17-afk/Nyra.git" });
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(nyraLinkX, y + 0.5, nyraLinkX + linkW, y + 0.5);

    setFont(10, "bold");
    doc.text("  Nyra – Proactive AI Intelligence Platform", nyraLinkX + linkW, y);
    line(5);

    setFont(10, "normal");
    doc.text("• Tech Stack", margin + 2, y);
    setFont(10, "bold");
    doc.text(" - Python, LLMs, Speech AI, FastAPI, APIs", margin + 2 + doc.getTextWidth("• Tech Stack"), y);
    line(4.5);

    setFont(10, "normal");
    doc.text("• Developed an AI-powered conversational intelligence platform capable of", margin + 2, y); line(4.5);
    doc.text("  real-time voice interaction and intelligent task execution.", margin + 2, y); line(4.5);
    doc.text("• Integrated speech recognition, natural language understanding, and voice", margin + 2, y); line(4.5);
    doc.text("  synthesis to deliver human-like conversations.", margin + 2, y); line(4.5);
    doc.text("• Designed a scalable architecture for seamless AI-driven automation and", margin + 2, y); line(4.5);
    doc.text("  user engagement.", margin + 2, y); line(6);

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