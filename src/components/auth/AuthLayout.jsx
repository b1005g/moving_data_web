import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";

export default function AuthLayout({ title, onSubmit, submitLabel }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <motion.form
        onSubmit={e => (e.preventDefault(), onSubmit(email, pw))}
        className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-center text-2xl font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
        <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input placeholder="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} required />
        <Button type="submit" className="w-full">
          {submitLabel}
        </Button>
      </motion.form>
    </div>
  );
}