import {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Settings() {
  const navigate = useNavigate();

  const {
    darkMode,
    toggleTheme,
  } = useContext(AppContext);

  const [
    notificationsEnabled,
    setNotificationsEnabled,
  ] = useState(
    JSON.parse(
      localStorage.getItem(
        "notificationsEnabled"
      )
    ) ?? true
  );

  const [
    challengeReminder,
    setChallengeReminder,
  ] = useState(
    JSON.parse(
      localStorage.getItem(
        "challengeReminder"
      )
    ) ?? true
  );

  const saveSettings = () => {
    localStorage.setItem(
      "notificationsEnabled",
      JSON.stringify(
        notificationsEnabled
      )
    );

    localStorage.setItem(
      "challengeReminder",
      JSON.stringify(
        challengeReminder
      )
    );

    alert(
      "Settings Saved Successfully"
    );
  };

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
            navigate("/profile")
          }
        >
          👤
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
          Settings ⚙️
        </h1>

        {/* Theme */}

        <div style={styles.card}>
          <h2 style={styles.title}>
            Theme Mode
          </h2>

          <p style={styles.text}>
            Switch between dark and
            light mode.
          </p>

          <button
            style={styles.button}
            onClick={toggleTheme}
          >
            {darkMode
              ? "🌙 Dark Mode"
              : "☀️ Light Mode"}
          </button>
        </div>

        {/* Notifications */}

        <div style={styles.card}>
          <h2 style={styles.title}>
            Notifications
          </h2>

          <p style={styles.text}>
            Enable learning
            notifications.
          </p>

          <button
            style={styles.toggleButton}
            onClick={() =>
              setNotificationsEnabled(
                !notificationsEnabled
              )
            }
          >
            {notificationsEnabled
              ? "Enabled ✅"
              : "Disabled ❌"}
          </button>
        </div>

        {/* Daily Reminder */}

        <div style={styles.card}>
          <h2 style={styles.title}>
            Daily Challenge Reminder
          </h2>

          <p style={styles.text}>
            Receive daily coding
            challenge reminders.
          </p>

          <button
            style={styles.toggleButton}
            onClick={() =>
              setChallengeReminder(
                !challengeReminder
              )
            }
          >
            {challengeReminder
              ? "Enabled ✅"
              : "Disabled ❌"}
          </button>
        </div>

        {/* Save */}

        <button
          style={styles.saveButton}
          onClick={saveSettings}
        >
          Save Settings
        </button>
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
    marginBottom: "40px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
    marginBottom: "30px",
  },

  title: {
    fontSize: "28px",
    marginBottom: "15px",
  },

  text: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "25px",
  },

  button: {
    padding: "14px 24px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  toggleButton: {
    padding: "14px 24px",
    border: "none",
    borderRadius: "14px",
    background: "#0f172a",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  saveButton: {
    padding: "18px 32px",
    border: "none",
    borderRadius: "16px",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Settings;