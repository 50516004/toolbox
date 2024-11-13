'use client'
import { useEffect, useState } from "react";

export default function Clock() {

  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 500);

    // コンポーネントがアンマウントされたときにタイマーをクリア
    return () => clearInterval(intervalId);
  }, []); // 空の依存配列により、エフェクトはマウント時に一度だけ実行される

  return (
    <div className="text-5xl">
      {now ? formatDate(now) : "Setup..."}
    </div>
  );

}

function formatDate(timestamp: number) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}/${month}/${day}(${dayOfWeek})${hours}:${minutes}:${seconds}`;
}