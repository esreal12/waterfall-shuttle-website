"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

type ShuttleAnimationProps = {
  variant?: "contained" | "fullWidth";
};

export function ShuttleAnimation({ variant = "contained" }: ShuttleAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const [xStart, xEnd] = useMemo(() => {
    if (variant === "fullWidth") {
      return ["-55vw", "55vw"] as const;
    }
    return ["-42%", "38%"] as const;
  }, [variant]);

  const x = useTransform(scrollYProgress, [0, 1], [xStart, xEnd]);

  const wrapperClasses =
    variant === "fullWidth"
      ? "relative h-[240px] md:h-[320px] overflow-hidden"
      : "relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-brand-natural/25 bg-gradient-to-br from-brand-light via-white to-brand-light p-6";

  const shadowClasses =
    variant === "fullWidth"
      ? "pointer-events-none absolute inset-x-16 bottom-10 h-12 rounded-full bg-brand-aqua/15 blur-2xl"
      : "pointer-events-none absolute inset-x-4 bottom-10 h-8 rounded-full bg-gradient-to-r from-brand-aqua/20 via-white/60 to-brand-aqua/20 blur-xl";

  const shuttleWidth =
    variant === "fullWidth"
      ? "w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px]"
      : "w-[320px] md:w-[380px]";

  return (
    <div ref={ref} className={wrapperClasses}>
      <div className={shadowClasses} />
      <motion.div style={{ x }} className={`relative z-10 mx-auto ${shuttleWidth}`}>
        <Image
          src="/images/coaster.webp"
          alt="Waterfall Shuttle CR illustrated vehicle"
          width={720}
          height={320}
          priority={false}
          className="h-auto w-full drop-shadow-2xl"
        />
        <span className="sr-only">Animated shuttle moving towards Nauyaca Waterfall</span>
      </motion.div>
    </div>
  );
}
