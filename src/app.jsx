import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider} from "./contexts/AuthContext.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"

function Protected({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 1) 루트로 들어오면 토큰 여부에 따라 로그인 또는 대시보드로 */}
          <Route path="/" element={
            <ProtectedRoute><Dashboard/></ProtectedRoute>}/>

           {/* 2) 로그인, 회원가입 */}  
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          {/* 3) 그 외 모든 경로는 /login 으로 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
