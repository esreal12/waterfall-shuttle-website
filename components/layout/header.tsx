import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "The Ride" },
  { href: "#benefits", label: "Benefits" },
  { href: "#destination", label: "Destination" },
  { href: "#booking", label: "Booking" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-charcoal/5 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4 md:py-5">
        <Link href="#hero" className="flex items-center gap-4">
          <Image
            src="/waterfall-shuttle-costa-rica-logo.svg"
            alt="Waterfall Shuttle Costa Rica"
            width={82}
            height={82}
            priority
          />
          <span className="hidden text-xl font-display tracking-[0.18em] text-brand-deep lg:inline-block">
            Waterfall Shuttle CR
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-natural">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Button asChild size="small">
            <Link href="#booking">Book Your Shuttle</Link>
          </Button>
        </div>
        <Button variant="ghost" size="small" className="xl:hidden" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
