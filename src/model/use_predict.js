import { useState, useEffect } from "react";

export function useForecast(days = 7) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/forecast/?days=${days}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [days]);
  return data;
}