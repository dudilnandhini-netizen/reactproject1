import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Notifications() {
  const navigate = useNavigate();

  const {
    darkMode,
    completedQuizzes,
    streakDays,
    progressPercentage,
  } = useContext(AppContext);

  // Dynamic Notifications

  const notifications = [
    {
      title:
        "🎉 Quiz Progress",
      message: `You completed ${completedQuizzes} quizzes successfully.`,
      time: "Now",
    },

    {
      title:
        "🔥 Streak Active",
      message: `Your learning streak is ${streakDays} days.`,
      time: "Today",
    },

    {
      title:
        "📈 Progress Updated",
      message: `Your overall learning progress reached ${progressPercentage}%.`,
      time: "Today",
    },

    {
      title:
        "🚀 Daily Challenge",
      message:
        "Complete today's coding challenge to maintain your streak.",
      time: "Reminder",
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
            navigate("/achievements")
          }
        >
          🏆
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          Notifications 🔔
        </h1>

        <p style={styles.subHeading}>
          Real-time learning updates and
          reminders.
        </p>

        {/* Notifications */}

        <div style={styles.notificationList}>
          {notifications.map(
            (
              notification,
              index
            ) => (
              <div
                key={index}
                style={styles.card}
              >
                <div>
                  <h2
                    style={
                      styles.cardTitle
                    }
                  >
                    {
                      notification.title
                    }
                  </h2>

                  <p
                    style={
                      styles.cardMessage
                    }
                  >
                    {
                      notification.message
                    }
                  </p>
                </div>

                <span
                  style={
                    styles.cardTime
                  }
                >
                  {
                    notification.time
                  }
                </span>
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

  notificationList: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "30px",
    borderRadius: "24px",
    color: "white",
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },

  cardMessage: {
    fontSize: "18px",
    color: "#cbd5e1",
  },

  cardTime: {
    color: "#60a5fa",
    fontSize: "16px",
  },
};

export default Notifications;