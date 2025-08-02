import React from "react";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  return <AuthLayout title="로그인" onSubmit={login} submitLabel="Login" />;
}