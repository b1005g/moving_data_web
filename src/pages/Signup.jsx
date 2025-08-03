import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../components/ui/input.jsx";
import { Select, SelectItem } from "../components/ui/select.jsx";
import { Button } from "../components/ui/button.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx"; 
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    address: "",
    detail: "",
    channel: "",
    refCode: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) {
      return setError("약관에 동의해 주세요.");
    }
    setError("");
    try {
      await signup(form.email, form.password);
    } catch (err) {
      setError(err.message || "회원가입에 실패했습니다");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5" 
         style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card shadow-lg border-0" style={{borderRadius: '20px'}}>
              <div className="card-body p-5">
                {/* 제목 */}
                <div className="text-center mb-4">
                  <i className="fas fa-user-plus fa-3x text-primary mb-3"></i>
                  <h2 className="fw-bold text-dark">회원가입</h2>
                  <p className="text-muted">Moving Data 시스템에 가입하세요</p>
                </div>

                {/* 회원가입 폼 */}
                <form onSubmit={handleSubmit}>
                  {/* 이름 / 별명 */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-user me-2 text-primary"></i>이름
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-id-badge me-2 text-primary"></i>별명
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        className="form-control"
                        value={form.nickname}
                        onChange={handleChange}
                        placeholder="길동이"
                        required
                      />
                    </div>
                  </div>

                  {/* 이메일 / 비밀번호 */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-envelope me-2 text-primary"></i>이메일
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-lock me-2 text-primary"></i>비밀번호
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        required
                      />
                    </div>
                  </div>

                  {/* 주소 */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="fas fa-map-marker-alt me-2 text-primary"></i>주소
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="서울특별시 강남구"
                      required
                    />
                  </div>

                  {/* 상세주소 */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="fas fa-home me-2 text-primary"></i>상세주소 
                      <span className="text-muted fw-normal">(선택)</span>
                    </label>
                    <input
                      type="text"
                      name="detail"
                      className="form-control"
                      value={form.detail}
                      onChange={handleChange}
                      placeholder="상세주소를 입력해주세요"
                    />
                  </div>

                  {/* 가입 경로 / 추천인 코드 */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-route me-2 text-primary"></i>가입 경로
                      </label>
                      <select
                        name="channel"
                        className="form-select"
                        value={form.channel}
                        onChange={handleChange}
                      >
                        <option value="">선택하세요</option>
                        <option value="sns">SNS 광고</option>
                        <option value="friend">친구 추천</option>
                        <option value="search">검색 엔진</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <i className="fas fa-gift me-2 text-primary"></i>추천인 코드
                      </label>
                      <input
                        type="text"
                        name="refCode"
                        className="form-control"
                        value={form.refCode}
                        onChange={handleChange}
                        placeholder="선택사항"
                      />
                    </div>
                  </div>

                  {/* 약관 동의 */}
                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      name="agree"
                      className="form-check-input"
                      id="agree"
                      checked={form.agree}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>

                  {/* 에러 메시지 */}
                  {error && (
                    <div className="alert alert-danger text-center" role="alert">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      {error}
                    </div>
                  )}

                  {/* 제출 버튼 */}
                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      border: 'none'
                    }}
                  >
                    <i className="fas fa-check me-2"></i>가입 완료
                  </button>
                </form>

                {/* 로그인 링크 */}
                <div className="text-center mt-4">
                  <p className="text-muted mb-2">이미 계정이 있으신가요?</p>
                  <Link to="/login" className="btn btn-outline-primary">
                    <i className="fas fa-sign-in-alt me-2"></i>로그인하러 가기
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