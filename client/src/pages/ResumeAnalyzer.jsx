import {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function ResumeAnalyzer() {
  const navigate = useNavigate();

  const { darkMode } =
    useContext(AppContext);

  const [resumeText, setResumeText] =
    useState("");

  const [score, setScore] =
    useState(null);

  const [
    suggestions,
    setSuggestions,
  ] = useState([]);

  const [pdfResume, setPdfResume] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfUploadError, setPdfUploadError] = useState("");

  // Analyze Resume

  const handlePdfUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setPdfUploadError("Please upload a PDF file.");
      setPdfResume(null);
      setPdfUrl("");
      return;
    }

    setPdfUploadError("");
    setPdfResume(file);
    setPdfUrl(URL.createObjectURL(file));
  };

  const downloadTextResume = () => {
    const textContent = resumeText.trim()
      ? resumeText
      : pdfResume
      ? `Resume PDF: ${pdfResume.name}\n\nThis file contains your plain-text resume version. Paste your resume text here so it is ready for forms and text boxes.`
      : "";

    if (!textContent) return;

    const blob = new Blob([textContent], {
      type: "text/plain;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const analyzeResume = () => {
    let tempScore = 0;

    let tips = [];

    // Skills Check

    if (
      resumeText
        .toLowerCase()
        .includes("react")
    ) {
      tempScore += 20;
    } else {
      tips.push(
        "Add ReactJS skills."
      );
    }

    if (
      resumeText
        .toLowerCase()
        .includes("javascript")
    ) {
      tempScore += 20;
    } else {
      tips.push(
        "Mention JavaScript projects."
      );
    }

    if (
      resumeText
        .toLowerCase()
        .includes("python")
    ) {
      tempScore += 20;
    } else {
      tips.push(
        "Add Python knowledge."
      );
    }

    if (
      resumeText
        .toLowerCase()
        .includes("project")
    ) {
      tempScore += 20;
    } else {
      tips.push(
        "Include real projects."
      );
    }

    if (
      resumeText.length > 200
    ) {
      tempScore += 20;
    } else {
      tips.push(
        "Write a more detailed resume."
      );
    }

    setScore(tempScore);

    setSuggestions(tips);
  };

  return (
    <div
      style={{
        ...styles.container,

        background: darkMode
          ? "linear-gradient(to bottom right,#020617,#0f172a)"
          : "linear-gradient(to bottom right,#dbeafe,#eff6ff)",
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
            navigate("/profile")
          }
        >
          👤
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1
          style={{
            ...styles.heading,
            color: darkMode ? "white" : "#020617",
          }}
        >
          AI Resume Analyzer
        </h1>

        <p style={styles.subheading}>
          Upload a polished PDF resume or paste your plain text version for instant review and export.
        </p>

        {/* Resume Box */}

        <div style={styles.uploadRow}>
          <div style={styles.uploadCard}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Resume PDF</h2>
              <p style={styles.cardDescription}>
                Upload your formatted resume for safe storage and preview.
              </p>
            </div>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfUpload}
              style={styles.fileInput}
            />
            {pdfResume && (
              <div style={styles.uploadInfo}>
                Selected file: {pdfResume.name}
              </div>
            )}
            {pdfUploadError && (
              <div style={styles.errorText}>{pdfUploadError}</div>
            )}
            {pdfUrl && (
              <a
                style={styles.fileButton}
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview PDF
              </a>
            )}
          </div>

          <div style={styles.textExportCard}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Plain Text Resume</h2>
              <p style={styles.cardDescription}>
                Download a paste-ready resume for forms, portals, and chat boxes.
              </p>
            </div>
            <button
              style={styles.button}
              onClick={downloadTextResume}
              disabled={!resumeText.trim() && !pdfResume}
            >
              Download Resume.txt
            </button>
            <p style={styles.noteText}>
              If you’ve uploaded a PDF but not pasted text, this button will
              generate a placeholder text file for your resume.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Paste Resume Text</h2>
            <p style={styles.cardDescription}>
              Enter the text version of your resume to analyze and export.
            </p>
          </div>
          <textarea
            placeholder="Paste your resume here..."
            value={resumeText}
            onChange={(e) =>
              setResumeText(
                e.target.value
              )
            }
            style={styles.textarea}
          ></textarea>

          <button
            style={styles.button}
            onClick={analyzeResume}
          >
            Analyze Resume
          </button>
        </div>

        {/* Result */}

        {score !== null && (
          <div style={styles.resultCard}>
            <h2 style={styles.score}>
              Resume Score: {score}/100
            </h2>

            <div
              style={
                styles.progressBar
              }
            >
              <div
                style={{
                  ...styles.progressFill,

                  width: `${score}%`,
                }}
              ></div>
            </div>

            <h3
              style={
                styles.suggestionTitle
              }
            >
              Suggestions
            </h3>

            {suggestions.length >
            0 ? (
              <ul
                style={
                  styles.suggestionList
                }
              >
                {suggestions.map(
                  (
                    suggestion,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {
                        suggestion
                      }
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p
                style={
                  styles.goodText
                }
              >
                🎉 Excellent Resume!
              </p>
            )}
          </div>
        )}
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
    maxWidth: "1120px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "48px",
    marginBottom: "28px",
    letterSpacing: "-0.04em",
    color: "white",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    marginBottom: "40px",
  },

  uploadRow: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.65fr",
    gap: "24px",
    marginBottom: "32px",
  },

  uploadCard: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "28px",
    border: "1px solid rgba(148, 163, 184, 0.14)",
  },

  uploadLabel: {
    display: "block",
    marginBottom: "14px",
    color: "#e2e8f0",
    fontSize: "15px",
    fontWeight: 700,
  },

  fileInput: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.92)",
    color: "white",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    cursor: "pointer",
  },

  uploadInfo: {
    marginTop: "14px",
    color: "#cbd5e1",
  },

  fileButton: {
    display: "inline-flex",
    marginTop: "18px",
    padding: "14px 18px",
    borderRadius: "16px",
    background: "linear-gradient(135deg,#2563eb,#22c55e)",
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow: "0 14px 30px rgba(37, 99, 235, 0.16)",
  },

  errorText: {
    marginTop: "14px",
    color: "#f87171",
  },

  textExportCard: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid rgba(148, 163, 184, 0.14)",
  },
  cardHeader: {
    marginBottom: "24px",
  },

  cardTitle: {
    fontSize: "20px",
    margin: 0,
    color: "white",
  },

  cardDescription: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.75,
  },
  noteText: {
    color: "#94a3b8",
    lineHeight: 1.75,
    marginTop: "18px",
    fontSize: "15px",
  },

  textarea: {
    width: "100%",
    height: "320px",
    borderRadius: "20px",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    outline: "none",
    padding: "24px",
    fontSize: "16px",
    resize: "vertical",
    marginBottom: "25px",
    background: "white",
    color: "#0f172a",
    fontFamily: "Inter, sans-serif",
    lineHeight: 1.75,
  },

  button: {
    padding: "16px 28px",
    border: "none",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#2563eb,#22c55e)",
    color: "white",
    fontSize: "17px",
    cursor: "pointer",
    fontWeight: 700,
    boxShadow: "0 18px 40px rgba(37, 99, 235, 0.18)",
  },

  subheading: {
    fontSize: "17px",
    color: "#cbd5e1",
    marginTop: "-8px",
    marginBottom: "32px",
    maxWidth: "760px",
    lineHeight: 1.75,
  },

  resultCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    color: "white",
  },

  score: {
    fontSize: "38px",
    marginBottom: "25px",
  },

  progressBar: {
    width: "100%",
    height: "22px",
    background: "#334155",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "35px",
  },

  progressFill: {
    height: "100%",
    background:
      "linear-gradient(to right,#2563eb,#60a5fa)",
  },

  suggestionTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },

  suggestionList: {
    paddingLeft: "25px",
    lineHeight: "40px",
    fontSize: "20px",
  },

  goodText: {
    color: "#22c55e",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default ResumeAnalyzer;