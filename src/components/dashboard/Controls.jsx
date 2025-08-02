import React from "react";
import { Input } from "../ui/input.jsx";
import { Select, SelectItem } from "../ui/select.jsx";
import { Button } from "../ui/button.jsx";
import { Filter, Search } from "lucide-react";

const districtMap = {
  "전체 서울시": [],
  "서대문구": ["연희동", "충현동", "신촌동"],
  "마포구":  ["합정동", "망원동", "연남동"],
  "용산구":  ["이태원동", "한남동", "서빙고동"],
};

export default function Controls({
  date, onDateChange,
  district, onDistrictChange,
  dong, onDongChange,
  onFilterClick,
}) {
  // 선택된 구에 따라 동 목록
  const dongList = districtMap[district] || [];

  return (
    <div className="flex items-center gap-2">
      {/* 날짜 */}
      <Input
        type="date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-48"
      />

      {/* 구 선택 */}
      <Select value={district} onValueChange={onDistrictChange}>
        {Object.keys(districtMap).map((g) => (
          <SelectItem value={g} key={g}>
            {g}
          </SelectItem>
        ))}
      </Select>

      {/* 동 선택 (전체 서울시는 숨김) */}
      {district !== "전체 서울시" && (
        <Select value={dong} onValueChange={onDongChange}>
          {dongList.map((d) => (
            <SelectItem value={d} key={d}>
              {d}
            </SelectItem>
          ))}
        </Select>
      )}

      {/* 필터/검색 */}
      <Button variant="outline" className="flex items-center gap-1" onClick={onFilterClick}>
        <Filter size={16} /> 필터
      </Button>
      <Button variant="outline">
        <Search size={16} />
      </Button>
    </div>
  );
}