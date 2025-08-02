import React from "react";
export function Input({ className = '', ...rest }) {
  return (
    <input
      {...rest}
      className={`block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none dark:bg-slate-800 dark:text-slate-100 ${className}`}
    />
  );
}