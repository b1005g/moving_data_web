import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Input } from "../components/ui/input.jsx";
import { Select, SelectItem } from "../components/ui/select.jsx";
// import { Button } from "../components/ui/button.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx"; 
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    customCompany: "",
    email: "",
    password: "",
    address: "",
    detail: "",
    channel: "",
    refCode: "",
    agree: false,
  });

  const companies = [
    "학생",
    "회사원",
    "요식업",
    "숙박업소",
    "Other"  // 기타 선택지
  ];

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

    const company =
      form.company === "Other" ? form.customCompany : form.company;

    try {
      await signup(form.email, form.password);

    } catch (err) {
      setError(err.message || "회원가입에 실패했습니다");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",}}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">회원가입</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>

              {/* 이름 / 직장 */}
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="company">
                    <Form.Label>직장</Form.Label>
                    <Form.Select
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                    >
                      <option value="">선택하세요</option>
                      {companies.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  {form.company === "Other" && (
                    <Form.Group controlId="customCompany" className="mt-2">
                      <Form.Label>직장 직접 입력</Form.Label>
                      <Form.Control
                        name="customCompany"
                        value={form.customCompany}
                        onChange={handleChange}
                        placeholder="직장을 입력하세요"
                        required
                      />
                    </Form.Group>
                  )}
                </Col>
              </Row>

              {/* 이메일 / 비밀번호 */}
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="비밀번호"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* 주소 / 상세주소 */}
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>주소</Form.Label>
                <Form.Control
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="서울특별시 강남구"
                  required
                />
              </Form.Group>
              <Form.Group controlId="detail" className="mb-3">
                <Form.Label>상세주소 <small className="text-muted">(선택)</small></Form.Label>
                <Form.Control
                  name="detail"
                  value={form.detail}
                  onChange={handleChange}
                  placeholder="상세주소를 입력해주세요."
                />
              </Form.Group>

              {/* 가입 경로 / 추천인 코드 */}
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="channel">
                    <Form.Label>가입 경로</Form.Label>
                    <Form.Select
                      name="channel"
                      value={form.channel}
                      onChange={handleChange}
                      required
                    >
                      <option value="">선택하세요</option>
                      <option value="sns">SNS 광고</option>
                      <option value="friend">친구 추천</option>
                      <option value="search">검색 엔진</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="refCode">
                    <Form.Label>추천인 코드 <small className="text-muted">(선택)</small></Form.Label>
                    <Form.Control
                      name="refCode"
                      value={form.refCode}
                      onChange={handleChange}
                      placeholder="선택사항"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* 약관 동의 */}
              <Form.Group controlId="agree" className="mb-4">
                <Form.Check
                  type="checkbox"
                  name="agree"
                  label="개인정보 수집 및 이용에 동의합니다."
                  checked={form.agree}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 py-2">
                가입 완료
              </Button>
            </Form>

            <div className="text-center mt-3">
              이미 계정이 있으신가요? <a href="/login">로그인하러 가기</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}