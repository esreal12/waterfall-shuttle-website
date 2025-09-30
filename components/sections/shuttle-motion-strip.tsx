import { ShuttleAnimation } from "@/components/sections/shuttle-animation";

export function ShuttleMotionStrip() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-12 sm:py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/40 to-transparent" aria-hidden="true" />
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <ShuttleAnimation variant="fullWidth" />
      </div>
    </section>
  );
}
