function LoadingScreen() {
  return (
    <div style={styles.container}>
      {/* Glow */}

      <div style={styles.glow}></div>

      {/* Loader */}

      <div style={styles.loader}></div>

      {/* Text */}

      <h1 style={styles.text}>
        Loading AI Platform...
      </h1>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom right,#020617,#0f172a)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },

  glow: {
    width: "300px",
    height: "300px",
    background:
      "rgba(59,130,246,0.35)",
    borderRadius: "50%",
    filter: "blur(150px)",
    position: "absolute",
  },

  loader: {
    width: "90px",
    height: "90px",
    border:
      "10px solid rgba(255,255,255,0.2)",
    borderTop:
      "10px solid #3b82f6",
    borderRadius: "50%",
    animation:
      "spin 1s linear infinite",
  },

  text: {
    color: "white",
    marginTop: "35px",
    fontSize: "32px",
    letterSpacing: "1px",
  },
};

export default LoadingScreen;