import Link from "next/link";

export default function NotFound() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000",
                color: "#f5e6d3",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    fontSize: "clamp(8rem, 20vw, 20rem)",
                    fontWeight: 900,
                    lineHeight: 0.85,
                    letterSpacing: "-0.05em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #e8b878",
                    marginBottom: "2rem",
                }}
            >
                404
            </div>

            <p
                style={{
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    color: "#a8a8b0",
                    marginBottom: "3rem",
                    maxWidth: "500px",
                    lineHeight: 1.6,
                }}
            >
                This dimension doesn&apos;t exist. Let&apos;s get you back to familiar territory.
            </p>

            <Link
                href="/"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 2.5rem",
                    backgroundColor: "#e8b878",
                    color: "#000",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    transition: "all 0.3s ease",
                }}
            >
                Return Home
                <span>→</span>
            </Link>
        </main>
    );
}
