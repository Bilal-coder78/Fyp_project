import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-green-500 text-4xl font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  return children;
}