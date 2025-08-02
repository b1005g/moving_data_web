import React from "react";
export default function CategoryButton({ cat, active, onPick }) {
  return (
    <button
      onClick={() => onPick(cat.key)}
      className={`flex h-24 w-24 flex-col items-center justify-center rounded-2xl border-2 p-2 text-xs transition hover:bg-slate-200 dark:border-slate-600 dark:hover:bg-slate-700 ${
        active ? "border-blue-500 bg-blue-100 dark:bg-blue-600/40" : ""
      }`}
    >
      <span className="text-2xl">{cat.icon}</span>
      <span className="mt-2 font-medium">{cat.label}</span>
    </button>
  );
}