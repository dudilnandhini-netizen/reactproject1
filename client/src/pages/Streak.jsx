import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Streak() {
  const navigate = useNavigate();

  const {
    darkMode,
    streakDays,
    progressPercentage,
  } = useContext(AppContext);

  // Weekly Activity

  const weeklyData = [
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "🔥",
    "⭐",
    "⭐",
  ];

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
            navigate(
              "/daily-challenge"
            )
          }
        >
          🚀
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/analytics")
          }
        >
          📈
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          Daily Learning Streak 🔥
        </h1>

        <p style={styles.subHeading}>
          Stay consistent and improve
          every single day.
        </p>

        {/* Main Card */}

        <div style={styles.card}>
          <div style={styles.fireIcon}>
            🔥
          </div>

          <h2 style={styles.days}>
            {streakDays} Days
          </h2>

          <p style={styles.text}>
            Amazing consistency! Keep
            solving quizzes and daily
            challenges.
          </p>

          {/* Progress */}

          <div style={styles.progressBox}>
            <h3>
              Learning Progress
            </h3>

            <div
              style={
                styles.progressBar
              }
            >
              <div
                style={{
                  ...styles.progressFill,

                  width: `${progressPercentage}%`,
                }}
              ></div>
            </div>

            <p
              style={
                styles.progressText
              }
            >
              {
                progressPercentage
              }
              % Completed
            </p>
          </div>
        </div>

        {/* Weekly Grid */}

        <div style={styles.weekContainer}>
          {weeklyData.map(
            (item, index) => (
              <div
                key={index}
                style={styles.dayCard}
              >
                <span
                  style={
                    styles.dayEmoji
                  }
                >
                  {item}
                </span>

                <p>
                  Day {index + 1}
                </p>
              </div>
            )
          )}
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

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "50px",
    borderRadius: "24px",
    color: "white",
    textAlign: "center",
    marginBottom: "50px",
  },

  fireIcon: {
    fontSize: "90px",
    marginBottom: "20px",
  },

  days: {
    fontSize: "54px",
    marginBottom: "15px",
  },

  text: {
    fontSize: "20px",
    color: "#cbd5e1",
    marginBottom: "40px",
  },

  progressBox: {
    marginTop: "20px",
  },

  progressBar: {
    width: "100%",
    height: "22px",
    background: "#334155",
    borderRadius: "20px",
    overflow: "hidden",
    marginTop: "15px",
  },

  progressFill: {
    height: "100%",
    background:
      "linear-gradient(to right,#2563eb,#60a5fa)",
  },

  progressText: {
    marginTop: "15px",
    color: "#cbd5e1",
  },

  weekContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(120px,1fr))",
    gap: "20px",
  },

  dayCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "25px",
    borderRadius: "20px",
    color: "white",
    textAlign: "center",
  },

  dayEmoji: {
    fontSize: "40px",
    display: "block",
    marginBottom: "12px",
  },
};

export default Streak;