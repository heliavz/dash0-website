"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedRowProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedRow({ children, delay = 0 }: AnimatedRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
