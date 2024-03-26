"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  const inviews = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      animate={inviews ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
