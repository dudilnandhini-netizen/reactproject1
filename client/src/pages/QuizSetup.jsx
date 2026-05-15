import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function QuizSetup() {
  const navigate = useNavigate();
  const { quizProgress } = useContext(AppContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const categories = [
    "Aptitude",
    "Java",
    "Python",
    "JavaScript",
    "C",
    "C++",
    "SQL",
    "React",
    "DBMS",
    "OS",
    "CN",
  ];
  const levels = [1, 2, 3];

  const startQuiz = () => {
    if (!selectedCategory || !selectedLevel) {
      alert("Please select both category and level");
      return;
    }

    // Check if level is unlocked for this specific category
    const categoryLevels = quizProgress.categoryLevels?.[selectedCategory] || { unlockedLevels: [1] };
    if (!categoryLevels.unlockedLevels.includes(selectedLevel)) {
      alert(`Level ${selectedLevel} is not unlocked yet for ${selectedCategory}. Complete previous levels to unlock.`);
      return;
    }

    navigate(`/quiz/${selectedCategory}/${selectedLevel}`);
  };

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.backgroundGlow1}></div>
      <div style={styles.backgroundGlow2}></div>

      {/* Header */}
      <div style={styles.header}>
        <button
          style={styles.backButton}
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>
        <h1 style={styles.title}>Choose Your Quiz</h1>
        <p style={styles.subtitle}>
          Select a category and difficulty level to start your coding assessment
        </p>
      </div>

      {/* Selection Cards */}
      <div style={styles.selectionContainer}>
        {/* Category Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📚 Select Category</h2>
          <div style={styles.categoryGrid}>
            {categories.map((category) => (
              <div
                key={category}
                style={{
                  ...styles.categoryCard,
                  ...(selectedCategory === category ? styles.categoryCardSelected : {}),
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <div style={styles.categoryIcon}>
                  {category === "Aptitude" && "🎯"}
                  {category === "React" && "⚛️"}
                  {category === "Python" && "🐍"}
                  {category === "SQL" && "🗄️"}
                  {category === "JavaScript" && "✨"}
                  {category === "Java" && "☕"}
                  {category === "C" && "🔧"}
                  {category === "C++" && "💠"}
                  {category === "DBMS" && "🗃️"}
                  {category === "OS" && "🖥️"}
                  {category === "CN" && "📡"}
                </div>
                <h3 style={styles.categoryName}>{category}</h3>
                <p style={styles.categoryScore}>
                  Best Score: {quizProgress.categoryScores[category] || 0} pts
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Level Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🎯 Select Difficulty</h2>
          <div style={styles.levelGrid}>
            {levels.map((level) => {
              const categoryLevels = quizProgress.categoryLevels?.[selectedCategory] || { unlockedLevels: [1] };
              const isUnlocked = categoryLevels.unlockedLevels.includes(level);
              return (
                <div
                  key={level}
                  style={{
                    ...styles.levelCard,
                    ...(selectedLevel === level ? styles.levelCardSelected : {}),
                    ...(!isUnlocked ? styles.levelCardLocked : {}),
                  }}
                  onClick={() => isUnlocked && setSelectedLevel(level)}
                >
                  <div style={styles.levelIcon}>
                    {level === 1 && "🥉"}
                    {level === 2 && "🥈"}
                    {level === 3 && "🥇"}
                  </div>
                  <h3 style={styles.levelName}>
                    Level {level}
                  </h3>
                  <p style={styles.levelDesc}>
                    {level === 1 && "Beginner"}
                    {level === 2 && "Intermediate"}
                    {level === 3 && "Advanced"}
                  </p>
                  {!isUnlocked && (
                    <div style={styles.lockIcon}>🔒</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div style={styles.startSection}>
        <button
          style={{
            ...styles.startButton,
            ...(selectedCategory && selectedLevel ? {} : styles.startButtonDisabled),
          }}
          onClick={startQuiz}
          disabled={!selectedCategory || !selectedLevel}
        >
          🚀 Start Quiz
        </button>
        <p style={styles.instructions}>
          Each quiz contains 10 random questions. Score 70% or higher to unlock the next level!
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
    padding: "40px",
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

  header: {
    textAlign: "center",
    marginBottom: "50px",
    position: "relative",
    zIndex: 2,
  },

  backButton: {
    position: "absolute",
    left: "0",
    top: "0",
    padding: "12px 20px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 10px 0",
  },

  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    margin: 0,
  },

  selectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  section: {
    marginBottom: "60px",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 30px 0",
    textAlign: "center",
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  categoryCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
  },

  categoryCardSelected: {
    border: "2px solid #3b82f6",
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
  },

  categoryIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },

  categoryName: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 8px 0",
  },

  categoryScore: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
  },

  levelGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },

  levelCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    position: "relative",
  },

  levelCardSelected: {
    border: "2px solid #3b82f6",
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
  },

  levelCardLocked: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  levelIcon: {
    fontSize: "40px",
    marginBottom: "16px",
  },

  levelName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 8px 0",
  },

  levelDesc: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
  },

  lockIcon: {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "24px",
  },

  startSection: {
    textAlign: "center",
    marginTop: "60px",
    position: "relative",
    zIndex: 2,
  },

  startButton: {
    padding: "20px 40px",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    border: "none",
    borderRadius: "16px",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
  },

  startButtonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  instructions: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: "20px 0 0 0",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default QuizSetup;