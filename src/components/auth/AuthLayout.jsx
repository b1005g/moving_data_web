import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";

export default function AuthLayout({ title, onSubmit, submitLabel }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handle = (e) => {
    e.preventDefault();
    onSubmit(email, pw);
  };

  return (
    <motion.form
      onSubmit={handle}
      className="max-w-xs space-y-4 rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2 className="text-center text-2xl font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </motion.form>
  );
}