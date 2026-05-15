import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const rounds = [
  {
    id: "aptitude",
    name: "Aptitude Test",
    description: "Covers quantitative ability, logical reasoning, verbal ability, and sometimes data interpretation.",
    icon: "🧠",
    status: "unlocked",
    score: null,
    requiredScore: 70,
  },
  {
    id: "technical-domain",
    name: "Technical / Domain Test",
    description: "For technical roles: programming, coding challenges, MCQs on core subjects such as Java, Python, SQL. For non-technical roles: case studies and role-specific knowledge tests.",
    icon: "⚙️",
    status: "unlocked",
    score: null,
    requiredScore: 75,
  },
  {
    id: "coding",
    name: "Coding / Problem-Solving Round",
    description: "Live coding on platforms like HackerRank or whiteboard sessions focused on algorithms, data structures, and debugging.",
    icon: "💻",
    status: "unlocked",
    score: null,
    requiredScore: 80,
  },
  {
    id: "group-discussion",
    name: "Group Discussion",
    description: "Tests communication, teamwork, leadership, and reasoning on current topics or abstract ideas.",
    icon: "🗣️",
    status: "unlocked",
    score: null,
    requiredScore: 70,
  },
  {
    id: "technical-1",
    name: "Technical Interview – Round 1",
    description: "In-depth questions about your projects, experience, and technical concepts.",
    icon: "🔧",
    status: "unlocked",
    score: null,
    requiredScore: 75,
  },
  {
    id: "technical-2",
    name: "Technical Interview – Round 2",
    description: "Deeper technical discussion. May include system design and more advanced problem solving for senior roles.",
    icon: "🧩",
    status: "unlocked",
    score: null,
    requiredScore: 80,
  },
  {
    id: "managerial",
    name: "Managerial / Behavioral Interview",
    description: "Focuses on past work behavior, handling conflicts, decision-making, leadership potential, and company fit.",
    icon: "👔",
    status: "unlocked",
    score: null,
    requiredScore: 75,
  },
  {
    id: "hr",
    name: "HR Interview (Final round)",
    description: "Discusses salary, notice period, cultural fit, career goals, and logistics. Often the last step before offer letter.",
    icon: "👥",
    status: "unlocked",
    score: null,
    requiredScore: 70,
  },
];

function JobRounds() {
  const navigate = useNavigate();
  const { darkMode } = useContext(AppContext);
  const [roundsData, setRoundsData] = useState(rounds);

  const startRound = (roundId) => {
    navigate(`/job-round/${roundId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "#10b981";
      case "unlocked": return "#3b82f6";
      default: return "#3b82f6";
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "linear-gradient(135deg, #020617, #111827)"
          : "linear-gradient(135deg, #dbeafe, #e0f2fe)",
      }}
    >
      <div style={styles.sidebar}>
        <h1 style={styles.sidebarLogo}>AI</h1>
        <button style={styles.sidebarButton} onClick={() => navigate("/dashboard")}>🏠</button>
        <button style={styles.sidebarButton} onClick={() => navigate("/analytics")}>📈</button>
        <button style={styles.sidebarButton} onClick={() => navigate("/quiz")}>🧠</button>
        <button style={styles.sidebarButton} onClick={() => navigate("/practice")}>💻</button>
        <button style={styles.sidebarButton} onClick={() => navigate("/interview")}>🎤</button>
      </div>

      <div style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.title}>Job Placement Rounds</h1>
          <p style={styles.subtitle}>
            Practice the full hiring workflow: aptitude and domain MCQs, coding/problem-solving, group discussion, technical rounds, managerial fit, and HR final round.
          </p>
        </div>

        <div style={styles.roundsGrid}>
          {roundsData.map((round, index) => (
            <div
              key={round.id}
              style={{
                ...styles.roundCard,
                borderColor: getStatusColor(round.status),
                cursor: "pointer",
              }}
              onClick={() => startRound(round.id)}
            >
              <div style={styles.roundHeader}>
                <div style={styles.roundIcon}>
                  {round.icon}
                </div>
              </div>

              <div style={styles.roundContent}>
                <h3 style={styles.roundTitle}>{round.name}</h3>
                <p style={styles.roundDescription}>{round.description}</p>

                {round.score !== null && (
                  <div style={styles.scoreDisplay}>
                    <span>Score: {round.score}%</span>
                    <span>Required: {round.requiredScore}%</span>
                  </div>
                )}

              </div>

              <div style={styles.roundFooter}>
                {round.status === "unlocked" && (
                  <button style={styles.startButton}>
                    Start Round
                  </button>
                )}
                {round.status === "completed" && (
                  <div style={styles.completedBadge}>
                    ✓ Completed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.progressSummary}>
          <h2 style={styles.summaryTitle}>Your Progress</h2>
          <div style={styles.progressStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>
                {roundsData.filter(r => r.status === "completed").length}
              </span>
              <span style={styles.statLabel}>Rounds Completed</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>
                {roundsData.filter(r => r.status === "unlocked").length}
              </span>
              <span style={styles.statLabel}>Rounds Available</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>
                {Math.round((roundsData.filter(r => r.status === "completed").length / roundsData.length) * 100)}%
              </span>
              <span style={styles.statLabel}>Overall Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  sidebar: {
    width: "100px",
    background: "rgba(15, 23, 42, 0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    gap: "22px",
  },
  sidebarLogo: {
    fontSize: "40px",
    color: "white",
  },
  sidebarButton: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    border: "none",
    background: "rgba(30, 41, 59, 0.8)",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: "44px",
    color: "white",
    margin: "0 0 14px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    lineHeight: 1.8,
    margin: 0,
    maxWidth: "800px",
    margin: "0 auto",
  },
  roundsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "24px",
  },
  roundCard: {
    background: "rgba(255, 255, 255, 0.06)",
    borderRadius: "24px",
    border: "2px solid",
    padding: "24px",
    transition: "all 0.3s ease",
    color: "white",
  },
  roundHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  roundIcon: {
    fontSize: "32px",
  },
  roundStatus: {
    fontSize: "20px",
  },
  roundContent: {
    marginBottom: "20px",
  },
  roundTitle: {
    fontSize: "22px",
    margin: "0 0 8px 0",
  },
  roundDescription: {
    color: "#cbd5e1",
    margin: "0 0 16px 0",
    lineHeight: 1.5,
  },
  scoreDisplay: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#94a3b8",
  },
  requirement: {
    fontSize: "14px",
    color: "#f59e0b",
    fontStyle: "italic",
  },
  roundFooter: {
    textAlign: "center",
  },
  startButton: {
    background: "linear-gradient(135deg, #2563eb, #22c55e)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
  completedBadge: {
    color: "#10b981",
    fontWeight: 600,
    fontSize: "16px",
  },
  progressSummary: {
    background: "rgba(255, 255, 255, 0.06)",
    borderRadius: "24px",
    padding: "32px",
    textAlign: "center",
  },
  summaryTitle: {
    fontSize: "28px",
    color: "white",
    margin: "0 0 24px 0",
  },
  progressStats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#60a5fa",
  },
  statLabel: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginTop: "4px",
  },
};

export default JobRounds;