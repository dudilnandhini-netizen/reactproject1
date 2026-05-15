import {
  useContext,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Login() {
  const navigate = useNavigate();

  const {
    isLoggedIn,
    login,
    userProfile,
  } = useContext(AppContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [socialProvider, setSocialProvider] =
    useState("");

  const socialAccounts = {
    google: [
      { name: "Dudilnandhini", email: "dudilnandhini@gmail.com" },
      { name: "Dudi Yashoda", email: "dudi.yashoda@gmail.com" },
    ],
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        throw new Error("Please enter both email and password");
      }

      // Basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Login and navigate
      login(email, password);

      // Small delay to ensure state is updated
      setTimeout(() => {
        navigate("/dashboard");
      }, 100);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeSocialLogin = () => {
    setSocialProvider("");
    setError("");
  };

  const handleSocialLogin = (provider) => {
    setError("");
    setSocialProvider(provider);
  };

  const handleSocialAccount = async (emailToUse) => {
    setError("");
    setLoading(true);

    try {
      if (!emailToUse) {
        throw new Error("Please select an account to continue.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailToUse)) {
        throw new Error("Please select a valid account email.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const displayName = emailToUse.split("@")[0];
      const providerPassword = `${socialProvider}-oauth-token`;

      login(emailToUse, providerPassword, displayName);
      setSocialProvider("");

      setTimeout(() => {
        navigate("/dashboard");
      }, 100);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div style={styles.container}>
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      {/* Background Effects */}
      <div style={styles.backgroundGlow1}></div>
      <div style={styles.backgroundGlow2}></div>

      {/* Left Side */}
      <div style={styles.leftPanel}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>
            AI Interview
            <span style={styles.logoAccent}>Pro</span>
          </h1>
          <div style={styles.aiIcon}>🤖</div>
        </div>

        <div style={styles.features}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🎯</div>
            <div>
              <h3 style={styles.featureTitle}>Smart Quizzes</h3>
              <p style={styles.featureDesc}>AI-powered coding assessments</p>
            </div>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>🎤</div>
            <div>
              <h3 style={styles.featureTitle}>Voice Interviews</h3>
              <p style={styles.featureDesc}>Real-time AI interviewer</p>
            </div>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>📄</div>
            <div>
              <h3 style={styles.featureTitle}>Resume Analysis</h3>
              <p style={styles.featureDesc}>AI-powered resume scoring</p>
            </div>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>🚀</div>
            <div>
              <h3 style={styles.featureTitle}>Career Growth</h3>
              <p style={styles.featureDesc}>Track your progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={styles.rightPanel}>
        <div style={styles.loginCard}>
          <div style={styles.header}>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={styles.subtitle}>
              Continue your AI-powered learning journey
            </p>
          </div>

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            {error && (
              <div style={styles.error}>
                <span style={styles.errorIcon}>⚠️</span>
                {error}
              </div>
            )}

            <button
              style={{
                ...styles.loginButton,
                ...(loading ? styles.loginButtonDisabled : {}),
              }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <div style={styles.loadingSpinner}></div>
              ) : (
                "Login"
              )}
            </button>

            <div style={styles.demoSection}>
              <p style={styles.demoText}>Demo Credentials:</p>
              <div style={styles.demoCredentials}>
                <button
                  style={styles.demoButton}
                  onClick={() => {
                    setEmail("demo@example.com");
                    setPassword("password123");
                  }}
                >
                  Use Demo Account
                </button>
              </div>
            </div>

            <button
              style={styles.googleButton}
              onClick={() => handleSocialLogin("google")}
              disabled={loading}
            >
              <span style={styles.googleIcon}>G</span>
              Continue with Google
            </button>
          </div>

          {socialProvider && (
            <div style={styles.overlay}>
              <div style={styles.providerModal}>
                <div style={styles.providerModalHeader}>
                  <span style={styles.providerIcon}>
                    {socialProvider === "google" ? "G" : "🐙"}
                  </span>
                  <div>
                    <h3 style={styles.providerTitle}>
                      Continue with {socialProvider === "google" ? "Google" : "GitHub"}
                    </h3>
                    <p style={styles.providerSubtitle}>
                      Authenticate with your {socialProvider === "google" ? "Google" : "GitHub"} account.
                    </p>
                  </div>
                </div>

                          <div style={styles.accountList}>
                  {socialAccounts[socialProvider].map((account) => (
                    <button
                      key={account.email}
                      style={styles.accountItem}
                      onClick={() => handleSocialAccount(account.email)}
                      disabled={loading}
                    >
                      <div style={styles.accountInfo}>
                        <span style={styles.accountBadge}>
                          {account.name.charAt(0).toUpperCase()}
                        </span>
                        <div>
                          <div style={styles.accountName}>{account.name}</div>
                          <div style={styles.accountEmail}>{account.email}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {error && (
                  <div style={styles.error}>
                    <span style={styles.errorIcon}>⚠️</span>
                    {error}
                  </div>
                )}

                <div style={styles.providerActions}>
                  <button
                    style={styles.cancelButton}
                    onClick={closeSocialLogin}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div style={styles.footer}>
            <p style={styles.footerText}>
              New to AI Interview Pro?{" "}
              <button
                style={styles.footerLink}
                onClick={() => navigate("/signup")}
              >
                Create Account
              </button>
            </p>
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
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(100px)",
  },

  backgroundGlow2: {
    position: "absolute",
    bottom: "-30%",
    right: "-20%",
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(100px)",
  },

  leftPanel: {
    flex: 1,
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "60px",
  },

  logo: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
    margin: 0,
  },

  logoAccent: {
    color: "#3b82f6",
  },

  aiIcon: {
    fontSize: "60px",
    animation: "float 3s ease-in-out infinite",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "30px",
  },

  feature: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  featureIcon: {
    fontSize: "32px",
  },

  featureTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "white",
    margin: "0 0 5px 0",
  },

  featureDesc: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
  },

  rightPanel: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    position: "relative",
    zIndex: 2,
  },

  loginCard: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "40px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    margin: "0 0 10px 0",
  },

  subtitle: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: 0,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "white",
  },

  input: {
    padding: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },

  error: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px",
    background: "rgba(239, 68, 68, 0.1)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    borderRadius: "8px",
    color: "#fca5a5",
    fontSize: "14px",
  },

  errorIcon: {
    fontSize: "16px",
  },

  loginButton: {
    padding: "16px",
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  loginButtonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  loadingSpinner: {
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  divider: {
    position: "relative",
    textAlign: "center",
    margin: "20px 0",
  },

  dividerText: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "0 16px",
    color: "#cbd5e1",
    fontSize: "14px",
  },

  demoSection: {
    textAlign: "center",
    margin: "20px 0",
  },

  demoText: {
    color: "#cbd5e1",
    fontSize: "14px",
    margin: "0 0 10px 0",
  },

  demoCredentials: {
    display: "flex",
    justifyContent: "center",
  },

  demoButton: {
    padding: "12px 20px",
    background: "rgba(59, 130, 246, 0.2)",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    borderRadius: "8px",
    color: "#3b82f6",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  googleButton: {
    padding: "14px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    transition: "background 0.3s ease",
  },

  googleIcon: {
    background: "#4285f4",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "bold",
  },

  githubButton: {
    padding: "14px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    transition: "background 0.3s ease",
  },

  githubIcon: {
    fontSize: "18px",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    padding: "20px",
  },

  providerModal: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(15, 23, 42, 0.98)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
  },

  providerModalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "20px",
  },

  providerIcon: {
    width: "46px",
    height: "46px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
  },

  providerTitle: {
    margin: 0,
    fontSize: "22px",
    color: "white",
  },

  providerSubtitle: {
    margin: "6px 0 0 0",
    color: "#cbd5e1",
    fontSize: "14px",
  },

  accountList: {
    display: "grid",
    gap: "12px",
    marginTop: "20px",
  },

  accountItem: {
    width: "100%",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    borderRadius: "16px",
    color: "white",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.2s ease",
  },

  accountItemHover: {
    transform: "translateY(-1px)",
    background: "rgba(255, 255, 255, 0.12)",
  },

  accountInfo: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  accountBadge: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(59, 130, 246, 0.2)",
    color: "#93c5fd",
    fontWeight: "700",
    fontSize: "18px",
  },

  accountName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: 0,
  },

  accountEmail: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginTop: "4px",
  },

  providerActions: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  cancelButton: {
    padding: "14px 20px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    marginTop: "30px",
  },

  footerText: {
    color: "#cbd5e1",
    fontSize: "14px",
    margin: 0,
  },

  footerLink: {
    color: "#3b82f6",
    cursor: "pointer",
    fontWeight: "500",
  },
};
export default Login;