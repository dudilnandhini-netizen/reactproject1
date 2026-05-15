import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AppContext);

  // Check both context state and localStorage for robustness
  const isAuthenticated = isLoggedIn || localStorage.getItem("isLoggedIn") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;