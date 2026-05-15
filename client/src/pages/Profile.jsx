import {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Profile() {
  const navigate = useNavigate();

  const {
    darkMode,
    completedQuizzes,
    progressPercentage,
    streakDays,
  } = useContext(AppContext);

  const [profileName, setProfileName] =
    useState(
      localStorage.getItem(
        "profileName"
      ) || "Nandhini"
    );

  const [bio, setBio] = useState(
    localStorage.getItem(
      "profileBio"
    ) ||
      "Future Software Engineer 🚀"
  );

  const saveProfile = () => {
    localStorage.setItem(
      "profileName",
      profileName
    );

    localStorage.setItem(
      "profileBio",
      bio
    );

    alert(
      "Profile Updated Successfully"
    );
  };

  return (
    <div
      style={{
        ...styles.container,

        background: darkMode
          ? "linear-gradient(to bottom right,#020617,#0f172a)"
          : "linear-gradient(to bottom right,#dbeafe,#eff6ff)",

        color: darkMode
          ? "white"
          : "#020617",
      }}
    >
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
            navigate("/analytics")
          }
        >
          📈
        </button>

        <button
          style={styles.menuButton}
          onClick={() =>
            navigate("/achievements")
          }
        >
          🏆
        </button>
      </div>

      {/* Main */}

      <div style={styles.main}>
        <h1 style={styles.heading}>
          My Profile 👤
        </h1>

        {/* Profile Card */}

        <div style={styles.profileCard}>
          <div style={styles.avatar}>
            👩‍💻
          </div>

          <h2 style={styles.name}>
            {profileName}
          </h2>

          <p style={styles.bio}>
            {bio}
          </p>

          {/* Stats */}

          <div style={styles.statsGrid}>
            <div style={styles.statsCard}>
              <h3>Quizzes</h3>

              <p>
                {completedQuizzes}
              </p>
            </div>

            <div style={styles.statsCard}>
              <h3>Progress</h3>

              <p>
                {
                  progressPercentage
                }
                %
              </p>
            </div>

            <div style={styles.statsCard}>
              <h3>Streak</h3>

              <p>
                🔥 {streakDays}
              </p>
            </div>
          </div>
        </div>

        {/* Edit Section */}

        <div style={styles.editCard}>
          <h2 style={styles.editTitle}>
            Edit Profile
          </h2>

          <input
            type="text"
            value={profileName}
            onChange={(e) =>
              setProfileName(
                e.target.value
              )
            }
            placeholder="Enter Name"
            style={styles.input}
          />

          <textarea
            value={bio}
            onChange={(e) =>
              setBio(
                e.target.value
              )
            }
            placeholder="Enter Bio"
            style={styles.textarea}
          ></textarea>

          <button
            style={styles.button}
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: "100px",
    background: "rgba(15,23,42,0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    gap: "25px",
  },

  logo: {
    fontSize: "40px",
    color: "white",
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
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "50px",
  },

  heading: {
    fontSize: "56px",
    marginBottom: "40px",
  },

  profileCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "40px",
    borderRadius: "24px",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
  },

  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background:
      "linear-gradient(to right,#2563eb,#3b82f6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    margin: "auto",
    marginBottom: "25px",
  },

  name: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  bio: {
    fontSize: "20px",
    color: "#cbd5e1",
    marginBottom: "35px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
  },

  statsCard: {
    background: "#0f172a",
    padding: "25px",
    borderRadius: "20px",
  },

  editCard: {
    background: "rgba(30,41,59,0.75)",
    padding: "40px",
    borderRadius: "24px",
    color: "white",
  },

  editTitle: {
    fontSize: "30px",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "18px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    marginBottom: "20px",
    fontSize: "16px",
  },

  textarea: {
    width: "100%",
    height: "140px",
    padding: "18px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    marginBottom: "20px",
    fontSize: "16px",
    resize: "none",
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
  },
};

export default Profile;