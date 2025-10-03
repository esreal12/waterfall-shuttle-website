import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "The Ride" },
  { href: "#information", label: "Information" },
  { href: "#booking", label: "Booking" }
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-brand-charcoal/10 bg-white">
      <div className="container grid gap-8 py-10 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/waterfall-shuttle-costa-rica-logo.svg"
              alt="Waterfall Shuttle Costa Rica"
              width={48}
              height={48}
            />
            <div>
              <p className="font-display text-lg sm:text-xl text-brand-deep">Waterfall Shuttle CR</p>
              <p className="text-xs sm:text-sm text-brand-charcoal/80">
                Official shuttle service to Nauyaca Waterfall, Costa Rica.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-brand-charcoal/70">
            Comfortable, safe, and on-time transportation from Dominical, Uvita, and Manuel Antonio to Nauyaca Waterfall.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-base sm:text-lg text-brand-deep">Quick links</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-brand-charcoal/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-natural transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-base sm:text-lg text-brand-deep">Contact</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-brand-charcoal/80">
            <li>WhatsApp: +506 8888-8888 (placeholder)</li>
            <li>Email: info@waterfallshuttlecr.com</li>
            <li>Hours: 6:00 am - 6:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-deep py-3 sm:py-4 text-center text-xs uppercase tracking-widest text-white/80">
        Copyright {year} Waterfall Shuttle CR. All rights reserved.
      </div>
    </footer>
  );
}
