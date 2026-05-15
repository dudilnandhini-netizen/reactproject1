import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function DailyChallenge() {
  const navigate = useNavigate();

  const { darkMode } =
    useContext(AppContext);

  const challenge = {
    title:
      "Reverse a String",
    difficulty: "Easy",

    question:
      "Write a function to reverse a string without using built-in reverse method.",

    example:
      "Input: hello → Output: olleh",
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
            navigate("/quiz")
          }
        >
          🧠
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
          Daily Coding Challenge 🚀
        </h1>

        <div style={styles.card}>
          <span style={styles.badge}>
            {challenge.difficulty}
          </span>

          <h2 style={styles.title}>
            {challenge.title}
          </h2>

          <p style={styles.question}>
            {challenge.question}
          </p>

          <div style={styles.exampleBox}>
            <h3>Example</h3>

            <p>
              {challenge.example}
            </p>
          </div>

          <textarea
            placeholder="Write your solution here..."
            style={styles.textarea}
          ></textarea>

          <button
            style={styles.button}
          >
            Submit Solution
          </button>
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
    marginBottom: "40px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "40px",
    borderRadius: "24px",
    color: "white",
    maxWidth: "900px",
  },

  badge: {
    background: "#22c55e",
    padding: "8px 18px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  title: {
    fontSize: "36px",
    marginTop: "25px",
    marginBottom: "20px",
  },

  question: {
    fontSize: "20px",
    lineHeight: "35px",
    marginBottom: "30px",
  },

  exampleBox: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "18px",
    marginBottom: "30px",
  },

  textarea: {
    width: "100%",
    height: "200px",
    borderRadius: "18px",
    border: "none",
    outline: "none",
    padding: "20px",
    fontSize: "16px",
    marginBottom: "25px",
  },

  button: {
    padding: "16px 28px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default DailyChallenge;