import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#sobre-nosotros", label: "Sobre nosotros" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#destino", label: "Destino" },
  { href: "#reservas", label: "Reserva" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-charcoal/5">
      <div className="container flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/waterfall-shuttle-costa-rica-logo.svg"
            alt="Waterfall Shuttle Costa Rica"
            width={56}
            height={56}
            priority
          />
          <span className="hidden text-lg font-display tracking-wide text-brand-deep sm:inline-block">
            Waterfall Shuttle CR
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-charcoal md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-natural">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="small">
            <Link href="#reservas">Reserva tu Shuttle</Link>
          </Button>
        </div>
        <Button variant="ghost" size="small" className="md:hidden" aria-label="Abrir menú">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
