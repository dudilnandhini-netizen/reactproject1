import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Dashboard() {
  const navigate = useNavigate();

  const {
    userProfile,
    quizProgress,
    logout,
    darkMode,
    setDarkMode,
  } = useContext(AppContext);

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.backgroundGlow1}></div>
      <div style={styles.backgroundGlow2}></div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>AI</h1>
          <span style={styles.logoText}>Pro</span>
        </div>

        <nav style={styles.nav}>
          <button
            style={styles.navButton}
            onClick={() => navigate("/dashboard")}
          >
            <span style={styles.navIcon}>🏠</span>
            <span style={styles.navLabel}>Home</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/quiz-setup")}
          >
            <span style={styles.navIcon}>🧠</span>
            <span style={styles.navLabel}>Quiz</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/interview")}
          >
            <span style={styles.navIcon}>🎤</span>
            <span style={styles.navLabel}>Interview</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/job-rounds")}
          >
            <span style={styles.navIcon}>🏢</span>
            <span style={styles.navLabel}>Job Rounds</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/resume")}
          >
            <span style={styles.navIcon}>📄</span>
            <span style={styles.navLabel}>Resume</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/analytics")}
          >
            <span style={styles.navIcon}>📈</span>
            <span style={styles.navLabel}>Analytics</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/chat")}
          >
            <span style={styles.navIcon}>🤖</span>
            <span style={styles.navLabel}>AI Chat</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/settings")}
          >
            <span style={styles.navIcon}>⚙️</span>
            <span style={styles.navLabel}>Settings</span>
          </button>
        </nav>

        <div style={styles.sidebarFooter}>
          <button
            style={styles.themeButton}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            style={styles.logoutButton}
            onClick={logout}
          >
            <span style={styles.logoutIcon}>🚪</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.userInfo}>
            <div style={styles.avatar}>
              {userProfile.avatar}
            </div>
            <div>
              <h1 style={styles.greeting}>
                Welcome back, {userProfile.name}! 👋
              </h1>
              <p style={styles.subtitle}>
                Ready to continue your AI-powered learning journey?
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>🎯</div>
            <div style={styles.statContent}>
              <h3 style={styles.statNumber}>
                {quizProgress.completedQuizzes}
              </h3>
              <p style={styles.statLabel}>Quizzes Completed</p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>🏆</div>
            <div style={styles.statContent}>
              <h3 style={styles.statNumber}>
                {quizProgress.totalScore}
              </h3>
              <p style={styles.statLabel}>Total Score</p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>📊</div>
            <div style={styles.statContent}>
              <h3 style={styles.statNumber}>
                Level {Math.max(...Object.values(quizProgress.categoryLevels || {}).map((c) => Math.max(...(c.unlockedLevels || [1]))).concat([1]))}
              </h3>
              <p style={styles.statLabel}>Highest Level</p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>🔥</div>
            <div style={styles.statContent}>
              <h3 style={styles.statNumber}>
                {Object.values(quizProgress.categoryLevels || {}).reduce((total, c) => total + (c.unlockedLevels || [1]).length, 0)}
              </h3>
              <p style={styles.statLabel}>Levels Unlocked</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Quick Actions</h2>
          <div style={styles.actionsGrid}>
            <div
              style={styles.actionCard}
              onClick={() => navigate("/quiz-setup")}
            >
              <div style={styles.actionIcon}>🧠</div>
              <h3 style={styles.actionTitle}>Start Quiz</h3>
              <p style={styles.actionDesc}>
                Test your coding knowledge with AI-powered questions
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>

            <div
              style={styles.actionCard}
              onClick={() => navigate("/interview")}
            >
              <div style={styles.actionIcon}>🎤</div>
              <h3 style={styles.actionTitle}>AI Interview</h3>
              <p style={styles.actionDesc}>
                Practice with our virtual AI interviewer
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>

            <div
              style={styles.actionCard}
              onClick={() => navigate("/job-rounds")}
            >
              <div style={styles.actionIcon}>🏢</div>
              <h3 style={styles.actionTitle}>Job Rounds</h3>
              <p style={styles.actionDesc}>
                Complete placement rounds from aptitude to final interview
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>

            <div
              style={styles.actionCard}
              onClick={() => navigate("/resume")}
            >
              <div style={styles.actionIcon}>📄</div>
              <h3 style={styles.actionTitle}>Resume Analysis</h3>
              <p style={styles.actionDesc}>
                Get AI-powered feedback on your resume
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>

            <div
              style={styles.actionCard}
              onClick={() => navigate("/analytics")}
            >
              <div style={styles.actionIcon}>📈</div>
              <h3 style={styles.actionTitle}>View Analytics</h3>
              <p style={styles.actionDesc}>
                Track your progress and performance
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>

            <div
              style={styles.actionCard}
              onClick={() => navigate("/chat")}
            >
              <div style={styles.actionIcon}>🤖</div>
              <h3 style={styles.actionTitle}>AI Chat</h3>
              <p style={styles.actionDesc}>
                Get instant help with coding questions and interview prep
              </p>
              <div style={styles.actionArrow}>→</div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Progress</h2>
          <div style={styles.progressGrid}>
            {Object.entries(quizProgress.categoryScores).map(([category, score]) => (
              <div key={category} style={styles.progressCard}>
                <div style={styles.progressHeader}>
                  <span style={styles.progressCategory}>{category}</span>
                  <span style={styles.progressScore}>{score} pts</span>
                </div>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${Math.min((score / 100) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },

  backgroundGlow1: {
    position: "absolute",
    top: "-20%",
    left: "-20%",
    width: "60%",
    height: "60%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(120px)",
  },

  backgroundGlow2: {
    position: "absolute",
    bottom: "-30%",
    right: "-20%",
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(120px)",
  },

  sidebar: {
    width: "280px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    position: "relative",
    zIndex: 2,
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "40px",
  },

  logo: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  },

  logoText: {
    fontSize: "18px",
    color: "#3b82f6",
    fontWeight: "600",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "auto",
  },

  navButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    background: "transparent",
    border: "none",
    borderRadius: "12px",
    color: "#cbd5e1",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
  },

  navIcon: {
    fontSize: "20px",
    width: "24px",
    textAlign: "center",
  },

  navLabel: {
    fontWeight: "500",
  },

  sidebarFooter: {
    display: "flex",
    gap: "12px",
  },

  themeButton: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  logoutButton: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(239, 68, 68, 0.2)",
    color: "#fca5a5",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  logoutIcon: {
    fontSize: "16px",
  },

  main: {
    flex: 1,
    padding: "40px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    marginBottom: "40px",
  },

  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
  },

  greeting: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 8px 0",
  },

  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    margin: 0,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "50px",
  },

  statCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  statIcon: {
    fontSize: "40px",
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "rgba(59, 130, 246, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  statContent: {
    flex: 1,
  },

  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 4px 0",
  },

  statLabel: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
    fontWeight: "500",
  },

  section: {
    marginBottom: "50px",
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 24px 0",
  },

  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },

  actionCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "24px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },

  actionIcon: {
    fontSize: "32px",
    marginBottom: "16px",
  },

  actionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "white",
    margin: "0 0 8px 0",
  },

  actionDesc: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: "0 0 20px 0",
    lineHeight: "1.5",
  },

  actionArrow: {
    position: "absolute",
    top: "24px",
    right: "24px",
    fontSize: "20px",
    color: "#3b82f6",
    transition: "transform 0.3s ease",
  },

  progressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },

  progressCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px",
  },

  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  progressCategory: {
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
  },

  progressScore: {
    fontSize: "14px",
    color: "#3b82f6",
    fontWeight: "500",
  },

  progressBar: {
    width: "100%",
    height: "8px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },
};

export default Dashboard;