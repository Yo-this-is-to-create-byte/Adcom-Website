import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 28, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target;
      if (t && (t.closest('a') || t.closest('button') || t.closest('[data-cursor="hover"]'))) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.6 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white mix-blend-difference"
        />
      </motion.div>
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30"
        />
      </motion.div>
    </>
  );
}
