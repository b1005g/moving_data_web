import React from "react";
export function Button({ variant = 'solid', className = '', children, ...rest }) {
  const base =
    'rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50';
  const styles =
    variant === 'outline'
      ? 'border border-slate-300 text-slate-700 hover:bg-slate-100'
      : variant === 'ghost'
      ? 'text-slate-600 hover:bg-slate-100'
      : 'bg-blue-600 text-white hover:bg-blue-500';

  return (
    <button {...rest} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}