import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useForecast } from "../model/useForecast";

export default function ForecastChart({ days = 7 }) {
  const data = useForecast(days);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="ds" tickFormatter={(d) => d.slice(5)} />
        <YAxis />
        <Tooltip labelFormatter={(label) => `날짜: ${label}`} />
        <Line type="monotone" dataKey="yhat" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}