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
    address: "",
    detail: "",
    channel: "",
    refCode: "",
    agree: false,
  });

  const handleChange = (key) => (e) => {
    const value = key === "agree" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) {
      return setError("약관에 동의해 주세요.");
    }
    setError("");
    try {
      await signup(form.email, form.password);
      // 실제로는 signup({ ...form })
    } catch (err) {
      setError(err.message || "회원가입에 실패했습니다");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* 제목 */}
        <h2 className="text-3xl font-semibold text-gray-800">회원가입</h2>

        {/* 폼 시작 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 / 별명 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-600">이름</label>
              <Input
                value={form.name}
                onChange={handleChange("name")}
                placeholder="홍길동"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">별명</label>
              <Input
                value={form.nickname}
                onChange={handleChange("nickname")}
                placeholder="길동이"
                required
              />
            </div>
          </div>

          {/* 이메일 */}
          <div>
            <label className="block mb-1 text-gray-600">이메일</label>
            <Input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* 주소 / 상세주소 */}
          <div>
            <label className="block mb-1 text-gray-600">주소</label>
            <Input
              value={form.address}
              onChange={handleChange("address")}
              placeholder="서울특별시 강남구"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">
              상세주소 <span className="text-sm text-gray-400">(선택)</span>
            </label>
            <Input
              value={form.detail}
              onChange={handleChange("detail")}
              placeholder="상세주소를 입력해주세요."
            />
          </div>

          {/* 가입 경로 / 추천인 코드 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-600">가입 경로</label>
              <Select
                value={form.channel}
                onValueChange={(v) => setForm((f) => ({ ...f, channel: v }))}
              >
                <SelectItem value="">선택하세요</SelectItem>
                <SelectItem value="sns">SNS 광고</SelectItem>
                <SelectItem value="friend">친구 추천</SelectItem>
                <SelectItem value="search">검색 엔진</SelectItem>
              </Select>
            </div>
            <div>
              <label className="block mb-1 text-gray-600">추천인 코드</label>
              <Input
                value={form.refCode}
                onChange={handleChange("refCode")}
                placeholder="선택사항"
              />
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              checked={form.agree}
              onChange={handleChange("agree")}
            />
            <label htmlFor="agree" className="text-gray-600 text-sm">
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>

          {/* 에러 메시지 */}
          {error && (
            <p className="text-center text-red-500 text-sm">{error}</p>
          )}

          {/* 제출 버튼 */}
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            가입 완료
          </Button>
        </form>

        {/* 푸터 */}
        <footer className="text-center text-sm text-gray-400 pt-4">
          © 2025 Your Company
          <br />
          <Link to="/login" className="text-blue-500 hover:underline">
            로그인하러 가기
          </Link>
        </footer>
      </div>
    </div>
  );
}