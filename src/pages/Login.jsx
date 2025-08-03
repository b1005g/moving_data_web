import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
    } catch {
      setError("로그인에 실패했습니다");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg border-0" style={{borderRadius: '20px'}}>
              <div className="card-body p-5">
                {/* 로고/제목 */}
                <div className="text-center mb-4">
                  <i className="fas fa-database fa-3x text-primary mb-3"></i>
                  <h2 className="fw-bold text-dark">Moving Data</h2>
                  <p className="text-muted">데이터 관리 시스템에 로그인하세요</p>
                </div>

                {/* 로그인 폼 */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="fas fa-envelope me-2 text-primary"></i>이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-lock me-2 text-primary"></i>비밀번호
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="비밀번호를 입력하세요"
                      required
                    />
                  </div>

                  {/* 에러 메시지 */}
                  {error && (
                    <div className="alert alert-danger text-center" role="alert">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      {error}
                    </div>
                  )}

                  {/* 로그인 버튼 */}
                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none'
                    }}
                  >
                    <i className="fas fa-sign-in-alt me-2"></i>로그인
                  </button>
                </form>

                {/* 회원가입 링크 */}
                <div className="text-center mt-4">
                  <p className="text-muted mb-2">아직 계정이 없으신가요?</p>
                  <Link 
                    to="/signup" 
                    className="btn btn-outline-primary"
                  >
                    <i className="fas fa-user-plus me-2"></i>회원가입
                  </Link>
                </div>
              </div>
            </div>

            {/* 푸터 */}
            <div className="text-center mt-4">
              <p className="text-white-50">
                © 2024 Moving Data Web. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}