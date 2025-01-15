"use client";
import { cn } from "@/app/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const HoverEffect = ({
  className,
  children,
}: {
  className?: string;

  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative rounded-xl bg-gradient-to-r from-neutral-900/90 to-neutral-900/90 hover:from-purple-500/10 hover:to-blue-500/10 p-[1px] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
