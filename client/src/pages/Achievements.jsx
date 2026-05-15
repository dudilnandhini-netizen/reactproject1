import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Achievements() {
  const navigate = useNavigate();

  const {
    darkMode,
    completedQuizzes,
    streakDays,
    progressPercentage,
  } = useContext(AppContext);

  // Dynamic Achievements

  const achievements = [
    {
      title: "Quiz Beginner",
      icon: "🧠",
      unlocked:
        completedQuizzes >= 1,

      description:
        "Complete your first quiz",
    },

    {
      title: "Quiz Master",
      icon: "🏆",
      unlocked:
        completedQuizzes >= 5,

      description:
        "Complete 5 quizzes",
    },

    {
      title: "Consistency King",
      icon: "🔥",
      unlocked:
        streakDays >= 7,

      description:
        "Maintain 7 day streak",
    },

    {
      title: "Progress Expert",
      icon: "📈",
      unlocked:
        progressPercentage >=
        50,

      description:
        "Reach 50% progress",
    },

    {
      title: "AI Explorer",
      icon: "🤖",
      unlocked:
        completedQuizzes >= 3,

      description:
        "Use multiple platform features",
    },
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
            navigate("/analytics")
          }
        >
          📈
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
          Achievements 🏆
        </h1>

        <p style={styles.subHeading}>
          Unlock rewards by learning
          consistently.
        </p>

        {/* Achievement Grid */}

        <div style={styles.grid}>
          {achievements.map(
            (
              achievement,
              index
            ) => (
              <div
                key={index}
                style={{
                  ...styles.card,

                  opacity:
                    achievement.unlocked
                      ? 1
                      : 0.4,

                  border:
                    achievement.unlocked
                      ? "2px solid #3b82f6"
                      : "2px solid transparent",
                }}
              >
                <div
                  style={styles.icon}
                >
                  {
                    achievement.icon
                  }
                </div>

                <h2
                  style={
                    styles.cardTitle
                  }
                >
                  {
                    achievement.title
                  }
                </h2>

                <p
                  style={
                    styles.cardText
                  }
                >
                  {
                    achievement.description
                  }
                </p>

                <div
                  style={{
                    ...styles.status,

                    background:
                      achievement.unlocked
                        ? "#22c55e"
                        : "#ef4444",
                  }}
                >
                  {achievement.unlocked
                    ? "Unlocked"
                    : "Locked"}
                </div>
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

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(300px,1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
    textAlign: "center",
    transition: "0.3s",
  },

  icon: {
    fontSize: "70px",
    marginBottom: "20px",
  },

  cardTitle: {
    fontSize: "28px",
    marginBottom: "15px",
  },

  cardText: {
    fontSize: "18px",
    color: "#cbd5e1",
    lineHeight: "30px",
    marginBottom: "25px",
  },

  status: {
    padding: "10px 20px",
    borderRadius: "20px",
    display: "inline-block",
    fontWeight: "bold",
  },
};

export default Achievements;