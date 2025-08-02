// test
import React from "react";
export function Card({ className = '', children }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow dark:bg-slate-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children }) {
  return <div className={className}>{children}</div>;
}