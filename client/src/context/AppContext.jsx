import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const defaultCategoryScores = {
  Aptitude: 0,
  Java: 0,
  Python: 0,
  "JavaScript": 0,
  C: 0,
  "C++": 0,
  SQL: 0,
  React: 0,
  DBMS: 0,
  OS: 0,
  CN: 0,
};

const defaultCategoryLevels = {
  Aptitude: { unlockedLevels: [1] },
  Java: { unlockedLevels: [1] },
  Python: { unlockedLevels: [1] },
  "JavaScript": { unlockedLevels: [1] },
  C: { unlockedLevels: [1] },
  "C++": { unlockedLevels: [1] },
  SQL: { unlockedLevels: [1] },
  React: { unlockedLevels: [1] },
  DBMS: { unlockedLevels: [1] },
  OS: { unlockedLevels: [1] },
  CN: { unlockedLevels: [1] },
};

function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [userProfile, setUserProfile] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("userProfile")) || {
        name: "AI Learner",
        email: "",
        avatar: "🤖",
      }
    );
  });

  const [quizProgress, setQuizProgress] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("quizProgress"));
    
    // If no stored data, return new structure
    if (!stored) {
      return {
        completedQuizzes: 0,
        totalScore: 0,
        categoryLevels: defaultCategoryLevels,
        categoryScores: defaultCategoryScores,
        history: [],
      };
    }
    
    // Migrate old data structure to new per-category structure
    if (stored.unlockedLevels && !stored.categoryLevels) {
      const categoryLevels = { ...defaultCategoryLevels };
      Object.keys(categoryLevels).forEach(category => {
        categoryLevels[category] = { unlockedLevels: stored.unlockedLevels };
      });
      return {
        ...stored,
        categoryLevels,
        unlockedLevels: undefined, // Remove old field
      };
    }
    
    return stored;
  });

  const [lastQuizScore, setLastQuizScore] = useState(() => {
    return Number(localStorage.getItem("lastQuizScore")) || 0;
  });

  const [interviewProgress, setInterviewProgress] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("interviewProgress")) || {
        completedInterviews: 0,
        currentQuestion: 0,
        transcript: "",
        history: [],
      }
    );
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === null ? true : JSON.parse(saved);
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem("notificationsEnabled");
    return saved === null ? true : JSON.parse(saved);
  });

  const [challengeReminder, setChallengeReminder] = useState(() => {
    const saved = localStorage.getItem("challengeReminder");
    return saved === null ? true : JSON.parse(saved);
  });

  const [streakDays, setStreakDays] = useState(() => {
    return Number(localStorage.getItem("streakDays")) || 0;
  });

  const [leaderboard, setLeaderboard] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("leaderboard")) || [
        { name: "Nandhini", score: 98, badge: "🥇" },
        { name: "Rahul", score: 92, badge: "🥈" },
        { name: "Priya", score: 89, badge: "🥉" },
        { name: "Arjun", score: 84, badge: "🏅" },
        { name: "Kiran", score: 80, badge: "🏅" },
      ]
    );
  });

  const progressPercentage = quizProgress.completedQuizzes
    ? Math.round((quizProgress.totalScore / (quizProgress.completedQuizzes * 10)) * 100)
    : 0;

  const login = (email, password, name) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid email address");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    const displayName = name?.trim() || email.split("@")[0];

    setIsLoggedIn(true);
    setUserProfile({
      name: displayName,
      email,
      avatar: "🤖",
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile({
      name: "AI Learner",
      email: "",
      avatar: "🤖",
    });
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const updateQuizProgress = (category, level, score, passed) => {
    setQuizProgress((prev) => {
      const updatedCategoryScore = Math.max(prev.categoryScores[category] || 0, score);
      
      // Update category-specific level unlocking
      const updatedCategoryLevels = { ...prev.categoryLevels };
      if (!updatedCategoryLevels[category]) {
        updatedCategoryLevels[category] = { unlockedLevels: [1] };
      }
      
      const categoryLevelData = { ...updatedCategoryLevels[category] };
      const unlockedLevels = [...categoryLevelData.unlockedLevels];
      
      // If passed and this is the highest unlocked level, unlock the next one
      if (passed && level === Math.max(...unlockedLevels) && level < 3) {
        unlockedLevels.push(level + 1);
      }
      
      categoryLevelData.unlockedLevels = unlockedLevels;
      updatedCategoryLevels[category] = categoryLevelData;

      const historyEntry = {
        category,
        level,
        score,
        passed,
        date: new Date().toLocaleDateString(),
      };

      return {
        ...prev,
        completedQuizzes: prev.completedQuizzes + 1,
        totalScore: prev.totalScore + score,
        categoryLevels: updatedCategoryLevels,
        categoryScores: {
          ...prev.categoryScores,
          [category]: updatedCategoryScore,
        },
        history: [historyEntry, ...prev.history].slice(0, 20),
      };
    });

    setLastQuizScore(Math.round((score / 10) * 100));
    setLeaderboard((prev) => {
      const entry = {
        name: userProfile.name || "AI Learner",
        score: Math.round((score / 10) * 100),
        date: new Date().toLocaleDateString(),
        badge: score >= 8 ? "🥇" : score >= 6 ? "🥈" : "🏅",
      };
      return [entry, ...prev].sort((a, b) => b.score - a.score).slice(0, 10);
    });
    setStreakDays((prev) => Math.min(prev + 1, 365));
  };

  const recordInterviewSession = (summary) => {
    setInterviewProgress((prev) => ({
      ...prev,
      completedInterviews: prev.completedInterviews + 1,
      history: [summary, ...prev.history].slice(0, 10),
    }));
  };

  const completeDailyChallenge = () => {
    setStreakDays((prev) => Math.min(prev + 1, 365));
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
  }, [quizProgress]);

  useEffect(() => {
    localStorage.setItem("lastQuizScore", String(lastQuizScore));
  }, [lastQuizScore]);

  useEffect(() => {
    localStorage.setItem("interviewProgress", JSON.stringify(interviewProgress));
  }, [interviewProgress]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("notificationsEnabled", JSON.stringify(notificationsEnabled));
  }, [notificationsEnabled]);

  useEffect(() => {
    localStorage.setItem("challengeReminder", JSON.stringify(challengeReminder));
  }, [challengeReminder]);

  useEffect(() => {
    localStorage.setItem("streakDays", String(streakDays));
  }, [streakDays]);

  useEffect(() => {
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }, [leaderboard]);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        userProfile,
        setUserProfile,
        quizProgress,
        updateQuizProgress,
        lastQuizScore,
        interviewProgress,
        recordInterviewSession,
        completeDailyChallenge,
        darkMode,
        setDarkMode,
        toggleTheme,
        notificationsEnabled,
        setNotificationsEnabled,
        challengeReminder,
        setChallengeReminder,
        streakDays,
        progressPercentage,
        leaderboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
