"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ShuttleAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "45%"]);

  return (
    <div ref={ref} className="relative h-full min-h-[320px]">
      <div className="placeholder-media h-full">
        Animación shuttle: aquí irá la ilustración SVG final del shuttle en movimiento.
      </div>
      <motion.div
        style={{ x }}
        className="absolute bottom-8 left-0 right-0 mx-auto flex w-[70%] items-center justify-center"
      >
        <div className="rounded-full border border-brand-aqua/50 bg-brand-aqua/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-aqua">
          Shuttle en movimiento
        </div>
      </motion.div>
    </div>
  );
}
