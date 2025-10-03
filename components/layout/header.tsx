"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "The Ride" },
  { href: "#benefits", label: "Benefits" },
  { href: "#destination", label: "Destination" },
  { href: "#booking", label: "Booking" }
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-charcoal/5 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-4 sm:gap-6 sm:py-5 md:py-6">
        <Link href="#hero" className="flex items-center gap-2 sm:gap-4">
          <Image
            src="/waterfall-shuttle-costa-rica-logo.svg"
            alt="Waterfall Shuttle Costa Rica"
            width={60}
            height={60}
            className="sm:w-[82px] sm:h-[82px]"
            priority
          />
          <span className="text-sm sm:text-lg font-display tracking-[0.18em] text-brand-deep lg:text-xl">
            Waterfall Shuttle CR
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal lg:gap-7 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-natural transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden xl:block">
          <Button asChild size="small">
            <Link href="#booking">Book Your Shuttle</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="small" 
          className="xl:hidden" 
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-brand-charcoal/5 bg-white/95 backdrop-blur">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-charcoal hover:text-brand-natural transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-charcoal/10">
                <Button asChild size="small" className="w-full">
                  <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Your Shuttle
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
