import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Analytics() {
  const navigate = useNavigate();

  const {
    darkMode,
    completedQuizzes,
    lastQuizScore,
    progressPercentage,
    streakDays,
  } = useContext(AppContext);

  return (
    <div
      style={{
        ...styles.container,

        background: darkMode
          ? "linear-gradient(to bottom right,#020617,#0f172a)"
          : "linear-gradient(to bottom right,#dbeafe,#eff6ff)",

        color: darkMode
          ? "white"
          : "#020617",
      }}
    >
      {/* Sidebar */}

      <div style={styles.sidebar}>
        <h1 style={styles.logo}>
          AI
        </h1>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          🏠
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/quiz")
          }
        >
          🧠
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/streak")
          }
        >
          🔥
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          Analytics Dashboard 📈
        </h1>

        <p style={styles.subHeading}>
          Real-time learning statistics
          and progress tracking.
        </p>

        {/* Stats */}

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>
              Completed Quizzes
            </h2>

            <h1 style={styles.value}>
              {completedQuizzes}
            </h1>
          </div>

          <div style={styles.card}>
            <h2>Last Quiz Score</h2>

            <h1 style={styles.value}>
              {lastQuizScore}
            </h1>
          </div>

          <div style={styles.card}>
            <h2>
              Overall Progress
            </h2>

            <h1 style={styles.value}>
              {progressPercentage}%
            </h1>
          </div>

          <div style={styles.card}>
            <h2>Daily Streak</h2>

            <h1 style={styles.value}>
              🔥 {streakDays}
            </h1>
          </div>
        </div>

        {/* Progress Bar */}

        <div style={styles.progressCard}>
          <h2>
            Learning Progress
          </h2>

          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,

                width: `${progressPercentage}%`,
              }}
            ></div>
          </div>

          <p style={styles.progressText}>
            {progressPercentage}%
            Completed
          </p>
        </div>

        {/* Performance */}

        <div style={styles.performanceCard}>
          <h2>
            Performance Insights
          </h2>

          <ul style={styles.list}>
            <li>
              ✅ Quiz accuracy is
              improving.
            </li>

            <li>
              🔥 Daily consistency is
              strong.
            </li>

            <li>
              🚀 Continue solving
              challenges daily.
            </li>

            <li>
              📈 Progress tracking is
              active.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: "100px",
    background: "rgba(15,23,42,0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    gap: "25px",
  },

  logo: {
    fontSize: "40px",
    color: "white",
    marginBottom: "30px",
  },

  menuButton: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    border: "none",
    background: "rgba(30,41,59,0.75)",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "50px",
  },

  heading: {
    fontSize: "56px",
    marginBottom: "15px",
  },

  subHeading: {
    fontSize: "22px",
    color: "#94a3b8",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "30px",
    marginBottom: "50px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
    textAlign: "center",
  },

  value: {
    fontSize: "50px",
    marginTop: "20px",
    color: "#60a5fa",
  },

  progressCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
    marginBottom: "40px",
  },

  progressBar: {
    width: "100%",
    height: "22px",
    background: "#334155",
    borderRadius: "20px",
    marginTop: "25px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background:
      "linear-gradient(to right,#2563eb,#60a5fa)",
  },

  progressText: {
    marginTop: "18px",
    color: "#cbd5e1",
    fontSize: "18px",
  },

  performanceCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
  },

  list: {
    marginTop: "25px",
    lineHeight: "40px",
    fontSize: "20px",
    paddingLeft: "20px",
  },
};

export default Analytics;