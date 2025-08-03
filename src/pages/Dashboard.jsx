import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  ButtonGroup,
  InputGroup,
  Button,
} from "react-bootstrap";
import {
  LayoutGrid,
  Calendar as CalIcon,
  BarChart3,
  Bell,
  User,
  Search,
  Sliders,
} from "lucide-react";

import Sidebar from "../components/dashboard/Sidebar.jsx";
import MapPlaceholder from "../components/dashboard/MapPlaceholder.jsx";
import SummaryPanel from "../components/dashboard/SummaryPanel.jsx";

export default function Dashboard() {
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [district, setDistrict] = useState("전체 서울시");
  const [dong, setDong] = useState("연희동");
  const [activeCategory, setActiveCategory] = useState("dessert");
  const [stats, setStats] = useState({
    population: "-",
    events: "-",
    landmarks: "-",
    weather: "-",
  });

  const fetchStats = useCallback(async () => {
    const region =
      district === "전체 서울시" ? district : `${district} ${dong}`;
    // TODO: 실제 API 호출
    // `/api/stats?cat=${activeCategory}&date=${date}&region=${region}`
    await new Promise((r) => setTimeout(r, 300));
    setStats({
      population: "1.2M",
      events: 2,
      landmarks: 1,
      weather: "맑음",
    });
  }, [activeCategory, date, district, dong]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <Container fluid className="vh-100 p-3 position-relative">
      <Row className="h-100 gx-3">

        {/* 1. 사이드 내비 */}
        <Col
          xs={12}
          md={1}
          className="d-flex flex-column align-items-center gap-4 pt-2"
        >
          <Button variant="light" className="p-2">
            <LayoutGrid size={24} />
          </Button>
          <Button variant="light" className="p-2">
            <CalIcon size={24} />
          </Button>
          <Button variant="light" className="p-2">
            <BarChart3 size={24} />
          </Button>
          <Button variant="light" className="p-2 mt-auto">
            <Bell size={24} />
          </Button>
          <Button variant="light" className="p-2">
            <User size={24} />
          </Button>
        </Col>

        {/* 2. 좌측 카테고리 */}
        <Col xs={12} md={4} className="overflow-auto">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </Col>

        {/* 3. 우측 메인 영역 */}
        <Col xs={12} md={7} className="d-flex flex-column">

          {/* 3-1. 컨트롤 바 */}
          <Card className="mb-3 flex-shrink-0">
            <Card.Body className="d-flex align-items-center gap-2">
              {/* 날짜 */}
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ maxWidth: "180px" }}
              />

              {/* 구/동 */}
              <Form.Select
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setDong("");
                }}
                style={{ maxWidth: "140px" }}
              >
                <option>전체 서울시</option>
                <option>서대문구</option>
                <option>마포구</option>
                <option>용산구</option>
              </Form.Select>
              {district !== "전체 서울시" && (
                <Form.Select
                  value={dong}
                  onChange={(e) => setDong(e.target.value)}
                  style={{ maxWidth: "140px" }}
                >
                  <option>연희동</option>
                  <option>망원동</option>
                  <option>합정동</option>
                </Form.Select>
              )}

              {/* 설정 / 검색 아이콘 */}
              <ButtonGroup className="ms-auto">
                <Button variant="outline-secondary">
                  <Sliders size={18} />
                </Button>
                <Button variant="outline-secondary">
                  <Search size={18} />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>

          {/* 3-2. 지도 */}
          <Card className="flex-grow-1 mb-3 overflow-hidden">
            <Card.Body className="p-0">
              <MapPlaceholder />
            </Card.Body>
          </Card>

          {/* 3-3. 요약 패널 */}
          <SummaryPanel stats={stats} />
        </Col>
      </Row>
    </Container>
  );
}