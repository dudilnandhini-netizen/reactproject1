import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const roundInfo = {
  aptitude: {
    title: "Aptitude Test",
    description:
      "Covers quantitative ability, logical reasoning, verbal ability, and data interpretation. This is the maths-style round used in many online assessments.",
    details: [
      "Quantitative aptitude",
      "Logical reasoning",
      "Verbal ability",
      "Data interpretation",
    ],
    actionLabel: "Start Aptitude Quiz",
    actionPath: "/quiz/Aptitude/1",
    icon: "🧠",
  },
  "technical-domain": {
    title: "Technical / Domain Test",
    description:
      "A role-specific technical assessment for programming roles or domain knowledge tests for non-technical roles.",
    details: [
      "Programming MCQs for tech roles",
      "Case studies for non-tech roles",
      "Core subject questions like Java, Python, SQL",
      "Role-specific knowledge evaluation",
    ],
    actionLabel: "Start Technical Quiz",
    actionPath: "/quiz-setup",
    icon: "⚙️",
  },
  coding: {
    title: "Coding / Problem-Solving Round",
    description:
      "Live coding or platform-based coding practice focused on algorithms, data structures, and debugging.",
    details: [
      "Algorithm problems",
      "Data structure practice",
      "Debugging challenges",
      "Platform-style coding questions",
    ],
    actionLabel: "Open Coding Practice",
    actionPath: "/practice",
    icon: "💻",
  },
  "group-discussion": {
    title: "Group Discussion",
    description:
      "Tests communication, teamwork, leadership, and reasoning on current topics or abstract ideas.",
    details: [
      "Clear expression of ideas",
      "Listening and collaboration",
      "Logical argument flow",
      "Leadership and confidence",
    ],
    actionLabel: "Explore Group Discussion Tips",
    actionPath: "/job-rounds",
    icon: "🗣️",
  },
  "technical-1": {
    title: "Technical Interview – Round 1",
    description:
      "In-depth questions about your projects, experience, and technical concepts.",
    details: [
      "Project discussion",
      "Core technical concepts",
      "Problem-solving questions",
      "Behavior during technical discussion",
    ],
    actionLabel: "Practice Interview Skills",
    actionPath: "/interview?type=technical-1",
    icon: "🔧",
  },
  "technical-2": {
    title: "Technical Interview – Round 2",
    description:
      "Deeper technical discussion. May include system design or advanced technical problems for senior roles.",
    details: [
      "System design questions",
      "Advanced architecture discussion",
      "Complex technical problem solving",
      "Role-specific deep concepts",
    ],
    actionLabel: "Practice Interview Skills",
    actionPath: "/interview?type=technical-2",
    icon: "🧩",
  },
  managerial: {
    title: "Managerial / Behavioral Interview",
    description:
      "Focuses on past work behavior, handling conflicts, decision-making, leadership potential, and alignment with company values.",
    details: [
      "STAR-based answers",
      "Leadership examples",
      "Conflict resolution",
      "Career goals and motivations",
    ],
    actionLabel: "Practice Behavioral Interview",
    actionPath: "/interview?type=managerial",
    icon: "👔",
  },
  hr: {
    title: "HR Interview (Final round)",
    description:
      "Discusses salary, notice period, cultural fit, career goals, and logistics before the offer letter.",
    details: [
      "Salary expectations",
      "Notice period discussion",
      "Cultural fit",
      "Career objectives",
    ],
    actionLabel: "Practice HR Interview",
    actionPath: "/interview?type=hr",
    icon: "👥",
  },
};

function RoundDetail() {
  const { roundId } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(AppContext);
  const round = roundInfo[roundId];

  if (!round) {
    return (
      <div style={styles.notFoundContainer}>
        <h1 style={styles.title}>Round not found</h1>
        <p style={styles.description}>The selected round is not available.</p>
        <button style={styles.button} onClick={() => navigate("/job-rounds")}>Back to Job Rounds</button>
      </div>
    );
  }

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "linear-gradient(135deg, #020617, #111827)"
          : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      }}
    >
      <div style={styles.content}>
        <button style={styles.backButton} onClick={() => navigate("/job-rounds")}>← Back to Job Rounds</button>
        <div style={styles.card}>
          <div style={styles.icon}>{round.icon}</div>
          <h1 style={styles.title}>{round.title}</h1>
          <p style={styles.description}>{round.description}</p>

          <div style={styles.details}>
            {round.details.map((item) => (
              <div key={item} style={styles.detailItem}>
                ✓ {item}
              </div>
            ))}
          </div>

          <div style={styles.actions}>
            <button
              style={styles.primaryButton}
              onClick={() => navigate(round.actionPath)}
            >
              {round.actionLabel}
            </button>
            {roundId !== "group-discussion" && (
              <button style={styles.secondaryButton} onClick={() => navigate("/job-rounds")}>Back to all rounds</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    color: "white",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  backButton: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "white",
    padding: "10px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    marginBottom: "24px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "32px",
    padding: "40px",
    boxShadow: "0 20px 80px rgba(0,0,0,0.25)",
  },
  icon: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "38px",
    margin: "0 0 18px",
  },
  description: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#cbd5e1",
    marginBottom: "30px",
  },
  details: {
    display: "grid",
    gap: "14px",
    marginBottom: "32px",
  },
  detailItem: {
    background: "rgba(255,255,255,0.05)",
    padding: "16px 18px",
    borderRadius: "18px",
    fontSize: "16px",
    color: "#e2e8f0",
  },
  actions: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "linear-gradient(135deg, #2563eb, #22c55e)",
    border: "none",
    borderRadius: "14px",
    color: "white",
    padding: "16px 28px",
    fontSize: "16px",
    cursor: "pointer",
  },
  secondaryButton: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "14px",
    color: "white",
    padding: "16px 28px",
    cursor: "pointer",
  },
  notFoundContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    color: "white",
  },
};

export default RoundDetail;
