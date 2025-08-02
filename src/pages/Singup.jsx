import React from "react";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  return <AuthLayout title="회원가입" onSubmit={signup} submitLabel="Sign Up" />;
}