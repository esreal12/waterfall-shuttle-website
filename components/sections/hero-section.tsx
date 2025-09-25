import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ShuttleAnimation } from "@/components/sections/shuttle-animation";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-deep opacity-90" />
        <div className="placeholder-media absolute inset-4 hidden border-white/40 bg-white/10 text-white/80 md:flex">
          Imagen hero: Catarata Nauyaca con turistas (pendiente de reemplazar)
        </div>
      </div>
      <div className="relative container grid gap-12 py-24 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:py-32">
        <div className="space-y-6">
          <p className="section-eyebrow text-brand-aqua">Shuttle oficial a Catarata Nauyaca</p>
          <h1 className="font-display text-5xl leading-tight md:text-6xl">
            Viaja cómodo y seguro hasta la catarata más icónica de Costa Rica
          </h1>
          <p className="max-w-xl text-lg text-white/80 md:text-xl">
            Traslados diarios desde Dominical, Uvita y Manuel Antonio con conductores profesionales, horarios puntuales y atención personalizada para tu aventura a Nauyaca Waterfalls.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="large">
              <a href="#reservas">
                Reserva tu Shuttle
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <a href="#informacion" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white">
              Ver horarios y tarifas
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <ShuttleAnimation />
        </div>
      </div>
    </section>
  );
}
