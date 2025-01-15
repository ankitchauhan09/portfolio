import React from "react";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};
