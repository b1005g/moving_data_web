import React from "react";
import { Users2, PartyPopper, MapPin, LucideSun } from "lucide-react";
import { Card, CardContent } from "../ui/card.jsx";

export default function SummaryPanel({ stats }) {
    const items = [
      { icon: <Users2 size={32} />, label: "예상인구", value: stats.population },
      { icon: <PartyPopper size={32} />, label: "행사", value: stats.events },
      { icon: <MapPin size={32} />, label: "랜드마크", value: stats.landmarks },
      { icon: <LucideSun size={32} />, label: "날씨", value: stats.weather },
    ];
  
    return (
      <Card className="rounded-3xl p-4 shadow-md">
        <CardContent className="grid grid-cols-4 gap-4 text-center">
          {items.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                {item.icon}
              </div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {item.value}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }