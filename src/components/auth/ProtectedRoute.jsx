import React from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({children}) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}