import {
  useContext,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Leaderboard() {
  const navigate = useNavigate();

  const { darkMode } =
    useContext(AppContext);

  const leaderboardData = [
    {
      name: "Nandhini",
      score: 98,
      badge: "🥇",
    },

    {
      name: "Rahul",
      score: 92,
      badge: "🥈",
    },

    {
      name: "Priya",
      score: 89,
      badge: "🥉",
    },

    {
      name: "Arjun",
      score: 84,
      badge: "🏅",
    },

    {
      name: "Kiran",
      score: 80,
      badge: "🏅",
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
            navigate("/quiz")
          }
        >
          🧠
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/interview")
          }
        >
          🎤
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/resume")
          }
        >
          📄
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/roadmap")
          }
        >
          🛣️
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          Global Leaderboard 🏆
        </h1>

        <p style={styles.subHeading}>
          Top learners on the AI
          Learning Platform.
        </p>

        {/* Leaderboard */}

        <div style={styles.board}>
          {leaderboardData.map(
            (user, index) => (
              <div
                key={index}
                style={styles.userCard}
              >
                <div
                  style={
                    styles.leftSection
                  }
                >
                  <span
                    style={
                      styles.rank
                    }
                  >
                    #{index + 1}
                  </span>

                  <span
                    style={
                      styles.badge
                    }
                  >
                    {user.badge}
                  </span>

                  <span
                    style={
                      styles.name
                    }
                  >
                    {user.name}
                  </span>
                </div>

                <div
                  style={
                    styles.score
                  }
                >
                  {user.score}%
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
    borderRight:
      "1px solid rgba(255,255,255,0.1)",
  },

  logo: {
    fontSize: "40px",
    marginBottom: "30px",
    color: "white",
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

  board: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  userCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "25px",
    borderRadius: "20px",
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    color: "white",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  rank: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  badge: {
    fontSize: "30px",
  },

  name: {
    fontSize: "22px",
  },

  score: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#60a5fa",
  },
};

export default Leaderboard;