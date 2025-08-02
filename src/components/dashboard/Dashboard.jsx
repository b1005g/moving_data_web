import { useState, useCallback, useEffect } from "react";
import { Input } from "../components/ui/input.jsx";
import { Button } from "../components/ui/button.jsx";
import { Select, SelectItem } from "../components/ui/select.jsx";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import MapPlaceholder from "../components/dashboard/MapPlaceholder.jsx";
import SummaryPanel from "../components/dashboard/SummaryPanel.jsx";
import { Filter, Search, LayoutGrid, Calendar, BarChart3, Bell, User } from "lucide-react";

function Dashboard() {
    const [activeCategory, setActiveCategory] = useState("dessert");
    const [date, setDate] = useState("2024-03-01");
    const [region, setRegion] = useState("서대문구 연희동");
    const [stats, setStats] = useState({
      population: "-",
      events: "-",
      landmarks: "-",
      weather: "-",
    });
  
    const fetchStats = useCallback(async () => {
      // TODO: Replace with real API call e.g., `/api/stats?cat=${activeCategory}&date=${date}&region=${region}`
      // Dummy delay
      await new Promise((r) => setTimeout(r, 300));
      setStats({ population: "1.2M", events: 2, landmarks: 1, weather: "맑음" });
    }, [activeCategory, date, region]);
  
    useEffect(() => {
      fetchStats();
    }, [fetchStats]);
  
    return (
      <div className="flex h-screen flex-col gap-4 p-4 lg:flex-row lg:gap-6 lg:p-6">
        {/* Left Sidebar */}
        <div className="flex-none lg:w-72">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
  
        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
          {/* Top controls */}
          <div className="flex items-center gap-2">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-48"
            />
            <Select value={region} onValueChange={setRegion}>
              {["서대문구 연희동", "마포구 합정동", "용산구 이태원동"].map(
                (r) => (
                  <SelectItem value={r} key={r}>
                    {r}
                  </SelectItem>
                )
              )}
            </Select>
            <Button variant="outline" className="ml-auto flex gap-1">
              <Filter size={16} />
              필터
            </Button>
            <Button variant="outline">
              <Search size={16} />
            </Button>
          </div>
  
          {/* Map area */}
          <div className="flex-1">
            <MapPlaceholder />
          </div>
  
          {/* Summary */}
          <SummaryPanel stats={stats} />
        </div>
  
        {/* Floating nav icons */}
        <div className="fixed left-4 top-1/4 flex flex-col gap-4">
          <Button variant="ghost" size="icon">
            <LayoutGrid />
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar />
          </Button>
          <Button variant="ghost" size="icon">
            <BarChart3 />
          </Button>
        </div>
  
        {/* Top right icons */}
        <div className="fixed right-4 top-4 flex gap-4">
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Button variant="ghost" size="icon">
            <User />
          </Button>
        </div>
      </div>
    );
  }