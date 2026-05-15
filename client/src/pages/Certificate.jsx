import {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Certificate() {
  const navigate = useNavigate();

  const { darkMode } =
    useContext(AppContext);

  const [name, setName] =
    useState("");

  const generateCertificate = () => {
    if (!name) {
      alert("Enter your name");

      return;
    }

    alert(
      `🎉 Certificate Generated for ${name}`
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
          AI Course Certificate 🏆
        </h1>

        <p style={styles.subHeading}>
          Generate your achievement
          certificate.
        </p>

        {/* Certificate Card */}

        <div style={styles.card}>
          <h2 style={styles.title}>
            Certificate Generator
          </h2>

          <input
            type="text"
            placeholder="Enter Your Name"
            style={styles.input}
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <button
            style={styles.button}
            onClick={
              generateCertificate
            }
          >
            Generate Certificate
          </button>

          {/* Preview */}

          {name && (
            <div
              style={styles.certificate}
            >
              <h1
                style={
                  styles.certificateTitle
                }
              >
                Certificate of Completion
              </h1>

              <p
                style={
                  styles.certificateText
                }
              >
                This certificate is
                proudly awarded to
              </p>

              <h2
                style={
                  styles.certificateName
                }
              >
                {name}
              </h2>

              <p
                style={
                  styles.certificateText
                }
              >
                for successfully
                completing AI Learning
                Platform.
              </p>

              <div
                style={
                  styles.signatureSection
                }
              >
                <div>
                  <hr />
                  <p>Instructor</p>
                </div>

                <div>
                  <hr />
                  <p>Student</p>
                </div>
              </div>
            </div>
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
    marginBottom: "40px",
    color: "#94a3b8",
  },

  card: {
    maxWidth: "950px",
    background: "rgba(30,41,59,0.75)",
    padding: "40px",
    borderRadius: "24px",
    backdropFilter: "blur(12px)",
    border:
      "1px solid rgba(255,255,255,0.1)",
  },

  title: {
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    marginBottom: "25px",
    fontSize: "16px",
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
    marginBottom: "40px",
  },

  certificate: {
    background: "white",
    color: "#020617",
    padding: "50px",
    borderRadius: "24px",
    textAlign: "center",
  },

  certificateTitle: {
    fontSize: "42px",
    marginBottom: "30px",
  },

  certificateText: {
    fontSize: "20px",
    marginBottom: "20px",
  },

  certificateName: {
    fontSize: "40px",
    color: "#2563eb",
    marginBottom: "20px",
  },

  signatureSection: {
    display: "flex",
    justifyContent:
      "space-between",
    marginTop: "60px",
  },
};

export default Certificate;