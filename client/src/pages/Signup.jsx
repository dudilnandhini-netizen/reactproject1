import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Signup() {
  const navigate = useNavigate();
  const { login, darkMode } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError("");
    setLoading(true);

    try {
      if (!name || !email || !password) {
        throw new Error("Please fill out all fields.");
      }

      await new Promise((resolve) => setTimeout(resolve, 700));
      login(email, password, name);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "linear-gradient(135deg, #050816 0%, #131b2b 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)",
      }}
    >
      <div style={styles.cardContainer}>
        <div style={styles.introPanel}>
          <div style={styles.brand}>AI Interview Pro</div>
          <h1 style={styles.heading}>Launch your interview readiness.</h1>
          <p style={styles.subheading}>
            Create your account to access quizzes, mock interviews, practice coding, and AI feedback.
          </p>
          <div style={styles.featureGrid}>
            {[
              "Smart quiz engine",
              "Voice-first interview",
              "Resume score insights",
              "Progress analytics",
            ].map((item) => (
              <div key={item} style={styles.featureItem}>
                <span style={styles.featureBullet}>•</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.formPanel}>
          <h2 style={styles.formTitle}>Create account</h2>
          <p style={styles.formSubtitle}>Enter your info to get started.</p>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              style={styles.input}
            />
          </div>

          {error && <div style={styles.errorBox}>{error}</div>}

          <button
            style={styles.submitButton}
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <div style={styles.footnote}>
            Already have an account?{' '}
            <button
              style={styles.linkButton}
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    maxWidth: "1180px",
    display: "grid",
    gridTemplateColumns: "1.15fr 1fr",
    gap: "30px",
    borderRadius: "32px",
    boxShadow: "0 40px 120px rgba(15, 23, 42, 0.25)",
    overflow: "hidden",
  },
  introPanel: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(28px)",
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
  },
  brand: {
    fontSize: "22px",
    letterSpacing: "1.2px",
    marginBottom: "22px",
    color: "#60a5fa",
  },
  heading: {
    fontSize: "42px",
    lineHeight: "1.02",
    marginBottom: "18px",
  },
  subheading: {
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginBottom: "36px",
    maxWidth: "520px",
  },
  featureGrid: {
    display: "grid",
    gap: "14px",
  },
  featureItem: {
    display: "flex",
    gap: "12px",
    fontSize: "16px",
    color: "#e2e8f0",
  },
  featureBullet: {
    color: "#38bdf8",
  },
  formPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "32px",
  },
  formTitle: {
    fontSize: "34px",
    marginBottom: "10px",
    color: "white",
  },
  formSubtitle: {
    color: "#94a3b8",
    marginBottom: "32px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "22px",
  },
  label: {
    color: "#cbd5e1",
    fontSize: "14px",
    fontWeight: 600,
  },
  input: {
    height: "52px",
    borderRadius: "18px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    background: "rgba(15, 23, 42, 0.85)",
    color: "white",
    padding: "0 18px",
    fontSize: "16px",
  },
  errorBox: {
    marginBottom: "18px",
    background: "rgba(248, 113, 113, 0.15)",
    color: "#f87171",
    borderRadius: "16px",
    padding: "16px",
    fontSize: "15px",
  },
  submitButton: {
    height: "56px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #22c55e)",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: "8px",
  },
  footnote: {
    marginTop: "28px",
    color: "#94a3b8",
    fontSize: "15px",
  },
  linkButton: {
    border: "none",
    background: "transparent",
    color: "#60a5fa",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default Signup;
