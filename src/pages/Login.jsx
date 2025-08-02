import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (email, pw) => {
    try {
      await login(email, pw);
    } catch {
      setError("로그인에 실패했습니다");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="space-y-4">
        {/* 1) 순수 폼 */}
        <AuthLayout
          title="로그인"
          onSubmit={handleSubmit}
          submitLabel="Login"
        />

        {/* 2) 에러 메시지 */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* 3) 회원가입 링크 */}
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          아직 계정이 없으신가요?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}