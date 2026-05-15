import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { questions } from "../data/questions";

function Quiz() {
  const navigate = useNavigate();
  const { category, level } = useParams();
  const { updateQuizProgress } = useContext(AppContext);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [explanation, setExplanation] = useState("");

  // Initialize quiz with random questions
  useEffect(() => {
    const categoryQuestions = questions.filter(
      (q) => q.category === category && q.level === parseInt(level)
    );

    if (categoryQuestions.length === 0) {
      setQuizQuestions([]);
      return;
    }

    const shuffleArray = (items) => {
      const arr = [...items];
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    const shuffled = shuffleArray(categoryQuestions);
    const numQuestions = Math.min(10, shuffled.length);
    const selectedQuestions = shuffled.slice(0, numQuestions);

    setQuizQuestions(selectedQuestions);
  }, [category, level]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !quizFinished && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizFinished) {
      handleAnswer("");
    }
  }, [timeLeft, quizFinished, showResult]);

  const handleAnswer = (answer) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    const correct = answer === currentQuestion.answer;
    const updatedScore = score + (correct ? 1 : 0);

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setExplanation(
      currentQuestion.explanation ||
        `The correct answer is “${currentQuestion.answer}”. This choice is best because it matches the expected concept.`
    );
    setScore(updatedScore);
    setShowResult(true);

    // Show result for 2 seconds, then move to next question
    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer("");
      setExplanation("");

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setTimeLeft(30);
      } else {
        finishQuiz(updatedScore);
      }
    }, 2000);
  };

  const finishQuiz = (finalScore) => {
    setQuizFinished(true);

    // Calculate final score and update progress
    const percentage = (finalScore / quizQuestions.length) * 100;

    // Update quiz progress
    updateQuizProgress(category, parseInt(level), finalScore, percentage >= 70);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "#10b981";
      case "Medium":
        return "#f59e0b";
      case "Hard":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getProgressColor = () => {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    if (progress < 33) return "#ef4444";
    if (progress < 66) return "#f59e0b";
    return "#10b981";
  };

  if (quizQuestions.length === 0) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>
          {questions.filter(q => q.category === category && q.level === parseInt(level)).length === 0
            ? `No questions available for ${category} Level ${level}. Please try a different category or level.`
            : "Loading Quiz Questions..."
          }
        </p>
        {questions.filter(q => q.category === category && q.level === parseInt(level)).length === 0 && (
          <button
            style={styles.backButton}
            onClick={() => navigate("/quiz-setup")}
          >
            Back to Quiz Setup
          </button>
        )}
      </div>
    );
  }

  const safeQuestionIndex = Math.min(
    Math.max(currentQuestionIndex, 0),
    Math.max(quizQuestions.length - 1, 0)
  );
  const currentQuestion = quizQuestions[safeQuestionIndex] || null;
  const finalPercentage = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;
  const passedQuiz = finalPercentage >= 70;
  const displayQuestionCount = quizFinished ? quizQuestions.length : currentQuestionIndex + 1;
  const displayDifficulty = currentQuestion?.difficulty || "Unknown";

  if (!currentQuestion && !quizFinished) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>Loading quiz results...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.backgroundGlow1}></div>
      <div style={styles.backgroundGlow2}></div>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.quizInfo}>
          <h1 style={styles.quizTitle}>
            {category} Quiz - Level {level}
          </h1>
          <div style={styles.quizMeta}>
            <span style={styles.difficulty}>
              Difficulty: <span style={{ color: getDifficultyColor(displayDifficulty) }}>
                {displayDifficulty}
              </span>
            </span>
            <span style={styles.questionCount}>
              Question {displayQuestionCount} of {quizQuestions.length}
            </span>
          </div>
        </div>

        <button
          style={styles.exitButton}
          onClick={() => navigate("/quiz-setup")}
        >
          Exit Quiz
        </button>
      </div>

      {/* Progress Bar */}
      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
            background: getProgressColor(),
          }}
        ></div>
      </div>

      {/* Main Quiz Area */}
      <div style={styles.quizArea}>
        {!quizFinished ? (
          <div style={styles.questionCard}>
            {/* Timer */}
            <div style={styles.timerContainer}>
              <div style={styles.timerCircle}>
                <span style={styles.timerText}>{timeLeft}</span>
              </div>
              <span style={styles.timerLabel}>seconds left</span>
            </div>

            {/* Question */}
            <div style={styles.questionSection}>
              <h2 style={styles.questionText}>
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div style={styles.optionsGrid}>
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.optionButton,
                    ...(showResult && option === currentQuestion.answer ? styles.correctOption : {}),
                    ...(showResult && selectedAnswer === option && option !== currentQuestion.answer ? styles.incorrectOption : {}),
                    ...(selectedAnswer === option && !showResult ? styles.selectedOption : {}),
                  }}
                  onClick={() => !showResult && handleAnswer(option)}
                  disabled={showResult}
                >
                  <span style={styles.optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span style={styles.optionText}>{option}</span>
                </button>
              ))}
            </div>

            {/* Result Feedback */}
            {showResult && (
              <div style={styles.resultFeedback}>
                <div style={{
                  ...styles.resultIcon,
                  color: isCorrect ? "#10b981" : "#ef4444"
                }}>
                  {isCorrect ? "✅" : "❌"}
                </div>
                <div>
                  <p style={styles.resultText}>
                    {isCorrect ? "Correct!" : `Incorrect.`}
                  </p>
                  <p style={styles.explanationText}>{explanation}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Results Screen */
          <div style={styles.resultsCard}>
            <div style={styles.resultsHeader}>
              <div style={styles.resultsIcon}>
                {passedQuiz ? "🎉" : score >= Math.ceil(quizQuestions.length * 0.5) ? "👍" : "💪"}
              </div>
              <h1 style={styles.resultsTitle}>Quiz Complete!</h1>
            </div>

            <div style={styles.scoreSection}>
              <div style={styles.scoreCircle}>
                <span style={styles.scoreNumber}>{score}</span>
                <span style={styles.scoreTotal}>/{quizQuestions.length}</span>
              </div>
              <p style={styles.scorePercentage}>
                {finalPercentage}% Correct
              </p>
            </div>

            <div style={styles.resultsStats}>
              <div style={styles.stat}>
                <span style={styles.statLabel}>Category:</span>
                <span style={styles.statValue}>{category}</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statLabel}>Level:</span>
                <span style={styles.statValue}>{level}</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statLabel}>Status:</span>
                <span style={{
                  ...styles.statValue,
                  color: passedQuiz ? "#10b981" : "#ef4444"
                }}>
                  {passedQuiz ? "Passed ✓" : "Try Again"}
                </span>
              </div>
            </div>

            <div style={styles.resultsActions}>
              <button
                style={styles.retryButton}
                onClick={() => navigate("/quiz-setup")}
              >
                Take Another Quiz
              </button>
              <button
                style={styles.dashboardButton}
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
    padding: "20px",
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

  loadingContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
    color: "white",
  },

  loadingSpinner: {
    width: "60px",
    height: "60px",
    border: "4px solid rgba(255, 255, 255, 0.1)",
    borderTop: "4px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  loadingText: {
    fontSize: "18px",
    marginTop: "20px",
    color: "#cbd5e1",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    position: "relative",
    zIndex: 2,
  },

  quizInfo: {
    flex: 1,
  },

  quizTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 8px 0",
  },

  quizMeta: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  difficulty: {
    fontSize: "16px",
    color: "#cbd5e1",
  },

  questionCount: {
    fontSize: "16px",
    color: "#cbd5e1",
  },

  exitButton: {
    padding: "12px 24px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },

  progressContainer: {
    width: "100%",
    height: "8px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 2,
  },

  progressBar: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },

  quizArea: {
    maxWidth: "900px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  questionCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "40px",
  },

  timerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },

  timerCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
  },

  timerText: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
  },

  timerLabel: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginTop: "8px",
  },

  questionSection: {
    marginBottom: "40px",
  },

  questionText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    lineHeight: "1.4",
    textAlign: "center",
  },

  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "30px",
  },

  optionButton: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
  },

  selectedOption: {
    border: "2px solid #3b82f6",
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
  },

  correctOption: {
    border: "2px solid #10b981",
    background: "rgba(16, 185, 129, 0.1)",
  },

  incorrectOption: {
    border: "2px solid #ef4444",
    background: "rgba(239, 68, 68, 0.1)",
  },

  optionLetter: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "16px",
    fontWeight: "bold",
    flexShrink: 0,
  },

  optionText: {
    flex: 1,
  },

  resultFeedback: {
    textAlign: "center",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
  },

  resultIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },

  resultText: {
    fontSize: "18px",
    color: "white",
    margin: 0,
  },

  explanationText: {
    marginTop: "12px",
    color: "#cbd5e1",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  resultsCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "40px",
    textAlign: "center",
  },

  resultsHeader: {
    marginBottom: "40px",
  },

  resultsIcon: {
    fontSize: "64px",
    marginBottom: "16px",
  },

  resultsTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "white",
    margin: 0,
  },

  scoreSection: {
    marginBottom: "40px",
  },

  scoreCircle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
    boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
  },

  scoreNumber: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
  },

  scoreTotal: {
    fontSize: "20px",
    color: "#cbd5e1",
  },

  scorePercentage: {
    fontSize: "20px",
    color: "#cbd5e1",
    margin: 0,
  },

  resultsStats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "40px",
  },

  stat: {
    textAlign: "center",
  },

  statLabel: {
    display: "block",
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "4px",
  },

  statValue: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },

  resultsActions: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },

  retryButton: {
    padding: "16px 32px",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  dashboardButton: {
    padding: "16px 32px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  backButton: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    transition: "all 0.3s ease",
  },
};

export default Quiz;