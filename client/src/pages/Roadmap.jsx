import { useNavigate } from "react-router-dom";

function Roadmap() {
  const navigate = useNavigate();

  const frontendRoadmap = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "API Integration",
    "Projects",
    "Deployment",
  ];

  const backendRoadmap = [
    "Node JS",
    "Express JS",
    "MongoDB",
    "Authentication",
    "REST APIs",
    "Projects",
  ];

  const dsaRoadmap = [
    "Arrays",
    "Strings",
    "Linked List",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
  ];

  return (
    <div style={styles.container}>
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
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          Learning Roadmaps 🚀
        </h1>

        <p style={styles.subHeading}>
          Follow these paths to become
          industry ready.
        </p>

        {/* Grid */}

        <div style={styles.grid}>
          {/* Frontend */}

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              🎨 Frontend Roadmap
            </h2>

            {frontendRoadmap.map(
              (item, index) => (
                <div
                  key={index}
                  style={styles.step}
                >
                  <div
                    style={styles.number}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={styles.stepText}
                  >
                    {item}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Backend */}

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              ⚙️ Backend Roadmap
            </h2>

            {backendRoadmap.map(
              (item, index) => (
                <div
                  key={index}
                  style={styles.step}
                >
                  <div
                    style={styles.number}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={styles.stepText}
                  >
                    {item}
                  </div>
                </div>
              )
            )}
          </div>

          {/* DSA */}

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              🧠 DSA Roadmap
            </h2>

            {dsaRoadmap.map(
              (item, index) => (
                <div
                  key={index}
                  style={styles.step}
                >
                  <div
                    style={styles.number}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={styles.stepText}
                  >
                    {item}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}

        <div style={styles.footer}>
          🚀 Keep Building Projects
          Daily
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom right,#020617,#0f172a)",
    color: "white",
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
  },

  menuButton: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    border: "none",
    background: "rgba(30,41,59,0.75)",
    color: "white",
    fontSize: "24px",
    backdropFilter: "blur(12px)",
  },

  main: {
    flex: 1,
    padding: "50px",
  },

  heading: {
    fontSize: "60px",
    textAlign: "center",
    marginBottom: "20px",
  },

  subHeading: {
    textAlign: "center",
    fontSize: "22px",
    color: "#cbd5e1",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(30,41,59,0.75)",
    padding: "35px",
    borderRadius: "24px",
    backdropFilter: "blur(12px)",
    border:
      "1px solid rgba(255,255,255,0.1)",
    boxShadow:
      "0 0 25px rgba(37,99,235,0.15)",
  },

  cardTitle: {
    fontSize: "30px",
    marginBottom: "30px",
  },

  step: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
    background: "rgba(15,23,42,0.8)",
    padding: "15px",
    borderRadius: "14px",
  },

  number: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  stepText: {
    fontSize: "18px",
  },

  footer: {
    marginTop: "60px",
    textAlign: "center",
    fontSize: "22px",
    color: "#60a5fa",
  },
};

export default Roadmap;