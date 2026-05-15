import {
  useContext,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const {
    darkMode,
    toggleTheme,
  } = useContext(AppContext);

  return (
    <div
      style={{
        ...styles.navbar,

        background: darkMode
          ? "rgba(15,23,42,0.95)"
          : "rgba(255,255,255,0.95)",
      }}
    >
      {/* Logo */}

      <h1
        style={{
          ...styles.logo,

          color: darkMode
            ? "white"
            : "#020617",
        }}
      >
        AI Platform 🚀
      </h1>

      {/* Menu */}

      <div style={styles.menu}>
        <button
          style={styles.button}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Dashboard
        </button>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/quiz")
          }
        >
          Quiz
        </button>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/interview")
          }
        >
          Interview
        </button>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/resume")
          }
        >
          Resume
        </button>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/roadmap")
          }
        >
          Roadmap
        </button>

        {/* Theme */}

        <button
          style={styles.themeButton}
          onClick={toggleTheme}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Logout */}

        <button
          style={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem(
              "isLoggedIn"
            );

            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    backdropFilter: "blur(12px)",
    borderBottom:
      "1px solid rgba(255,255,255,0.1)",
  },

  logo: {
    fontSize: "32px",
  },

  menu: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  button: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "12px",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
  },

  themeButton: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },

  logoutButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "12px",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default Navbar;