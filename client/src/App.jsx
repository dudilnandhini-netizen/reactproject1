import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import QuizSetup from "./pages/QuizSetup";
import Quiz from "./pages/Quiz";
import CodingPractice from "./pages/CodingPractice";
import Interview from "./pages/Interview";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";
import Certificate from "./pages/Certificate";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import AIChat from "./pages/AIChat";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Achievements from "./pages/Achievements";
import Notifications from "./pages/Notifications";
import DailyChallenge from "./pages/DailyChallenge";
import Streak from "./pages/Streak";
import JobRounds from "./pages/JobRounds";
import RoundDetail from "./pages/RoundDetail";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* Signup */}

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Quiz Home */}

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizSetup />
            </ProtectedRoute>
          }
        />

        {/* Quiz Setup */}

        <Route
          path="/quiz-setup"
          element={
            <ProtectedRoute>
              <QuizSetup />
            </ProtectedRoute>
          }
        />

        {/* Quiz */}

        <Route
          path="/quiz/:category/:level"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        {/* Practice */}

        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <CodingPractice />
            </ProtectedRoute>
          }
        />

        {/* Interview */}

        <Route
          path="/interview"
          element={
            <ProtectedRoute>
              <Interview />
            </ProtectedRoute>
          }
        />

        {/* Job Rounds */}

        <Route
          path="/job-rounds"
          element={
            <ProtectedRoute>
              <JobRounds />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job-round/:roundId"
          element={
            <ProtectedRoute>
              <RoundDetail />
            </ProtectedRoute>
          }
        />

        {/* Resume */}

        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <ResumeAnalyzer />
            </ProtectedRoute>
          }
        />

        {/* Roadmap */}

        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          }
        />

        {/* Certificate */}

        <Route
          path="/certificate"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />

        {/* Leaderboard */}

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* AI Chat */}

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          }
        />

        {/* Settings */}

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Analytics */}

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Achievements */}

        <Route
          path="/achievements"
          element={
            <ProtectedRoute>
              <Achievements />
            </ProtectedRoute>
          }
        />

        {/* Notifications */}

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        {/* Daily Challenge */}

        <Route
          path="/daily-challenge"
          element={
            <ProtectedRoute>
              <DailyChallenge />
            </ProtectedRoute>
          }
        />

        {/* Streak */}

        <Route
          path="/streak"
          element={
            <ProtectedRoute>
              <Streak />
            </ProtectedRoute>
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;