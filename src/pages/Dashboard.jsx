import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Input } from "../components/ui/input.jsx";
import { Button } from "../components/ui/button.jsx";
import { Select, SelectItem } from "../components/ui/select.jsx";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import MapPlaceholder from "../components/dashboard/MapPlaceholder.jsx";
import SummaryPanel from "../components/dashboard/SummaryPanel.jsx";
import Controls from "../components/dashboard/Controls.jsx";
import { Filter, Search, LayoutGrid, Calendar, BarChart3, Bell, User } from "lucide-react";
import LogoutButton from "../components/auth/LogoutButton.jsx";

function Dashboard() {
    const [activeCategory, setActiveCategory] = useState("dessert");
    const [date, setDate]       = useState("2024-03-01");
    const [district, setDistrict] = useState("전체 서울시");
    const [dong, setDong]       = useState(""); 
    const [stats, setStats]     = useState({
      population: "-",
      events: "-",
      landmarks: "-",
      weather: "-",
    });
  
    const fetchStats = useCallback(async () => {
    // region 파라미터: 전체 서울시, 또는 "서대문구 연희동"처럼 합치기
    const region =
      district === "전체 서울시" ? district : `${district} ${dong}`;
    // TODO: 실제 API: `/api/stats?cat=${activeCategory}&date=${date}&region=${region}`
    await new Promise((r) => setTimeout(r, 300));
    setStats({ population: "1.2M", events: 2, landmarks: 1, weather: "맑음" });
  }, [activeCategory, date, district, dong]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-[240px_1fr] gap-4 p-4">
      {/* 1. 상단 컨트롤 바 */}
      <header className="row-span-1 col-span-2">
        <Controls
          date={date}
          onDateChange={setDate}
          district={district}
          onDistrictChange={(g) => { setDistrict(g); setDong(""); }}
          dong={dong}
          onDongChange={setDong}
          onFilterClick={fetchStats}
        />
      </header>

      {/* 2. 좌측 사이드바 */}
      <aside className="row-span-1 col-span-1 overflow-y-auto">
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </aside>

      {/* 3. 우측 지도 영역 */}
      <main className="row-span-1 col-span-1 overflow-hidden">
        <MapPlaceholder />
      </main>

      {/* 4. 하단 요약 패널 */}
      <footer className="row-span-1 col-span-2">
        <SummaryPanel stats={stats} />
      </footer>
    </div>
  );
}
export { Dashboard };