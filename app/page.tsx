import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { BookingSection } from "@/components/sections/booking-section";
import { DestinationSection } from "@/components/sections/destination-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { InfoSection } from "@/components/sections/info-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <DestinationSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <InfoSection />
      <BookingSection />
    </>
  );
}
