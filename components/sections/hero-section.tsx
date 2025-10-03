import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-black text-white">
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/nauyaca-background-1.jpg')"
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/70 via-brand-charcoal/60 to-brand-deep/80" />
      </div>
      <div className="relative container py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="w-full max-w-4xl space-y-6 sm:space-y-8 text-center lg:text-left lg:w-3/4 xl:w-1/2">
          <p className="section-eyebrow text-brand-aqua">Official shuttle to Nauyaca Waterfall</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Travel comfortably and safely to Costa Rica&apos;s most iconic waterfall
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90 sm:text-xl md:text-2xl lg:mx-0">
            Daily transfers from Dominical, Uvita, and Manuel Antonio with professional drivers, on-time departures, and personalized service for your Nauyaca Waterfalls adventure.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button asChild size="large" className="w-full sm:w-auto">
              <a href="#booking">
                Book Your Shuttle
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <a
              href="#information"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              See schedules and rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
