import React from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";

export default function LogoutButton() {
  const { logout } = useAuth();
  return (
    <button
      onClick={logout}
      className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
    >
      로그아웃
    </button>
  );
}