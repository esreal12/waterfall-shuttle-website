import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { BookingSection } from "@/components/sections/booking-section";
import { DestinationSection } from "@/components/sections/destination-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { InfoSection } from "@/components/sections/info-section";
import { ShuttleMotionStrip } from "@/components/sections/shuttle-motion-strip";
import { ShuttleJourneySection } from "@/components/sections/shuttle-journey-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShuttleMotionStrip />
      <ShuttleJourneySection />
      <BenefitsSection />
      <DestinationSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <InfoSection />
      <BookingSection />
    </>
  );
}
