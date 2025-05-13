import React from 'react'
import { motion as m, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Use the useSpring hook to create a smooth animation for scaleX based on scrollYProgress
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  return (
    <m.div
      className="fixed left-0 right-0 bottom-[3%] bg-accent h-1 rounded-lg "
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress