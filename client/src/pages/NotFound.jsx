import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Glow Effect */}

      <div style={styles.glow}></div>

      {/* Card */}

      <div style={styles.card}>
        <h1 style={styles.errorCode}>
          404
        </h1>

        <h2 style={styles.heading}>
          Page Not Found 😢
        </h2>

        <p style={styles.text}>
          The page you are trying to
          access does not exist.
        </p>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom right,#020617,#0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
  },

  glow: {
    width: "350px",
    height: "350px",
    background:
      "rgba(59,130,246,0.3)",
    borderRadius: "50%",
    filter: "blur(150px)",
    position: "absolute",
    top: "-100px",
    left: "-100px",
  },

  card: {
    width: "500px",
    background: "rgba(30,41,59,0.75)",
    padding: "50px",
    borderRadius: "24px",
    backdropFilter: "blur(12px)",
    border:
      "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
    boxShadow:
      "0 0 30px rgba(37,99,235,0.2)",
  },

  errorCode: {
    fontSize: "120px",
    marginBottom: "10px",
    color: "#3b82f6",
  },

  heading: {
    fontSize: "40px",
    marginBottom: "20px",
  },

  text: {
    fontSize: "20px",
    color: "#cbd5e1",
    marginBottom: "35px",
    lineHeight: "32px",
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
    boxShadow:
      "0 0 20px rgba(59,130,246,0.4)",
  },
};

export default NotFound;