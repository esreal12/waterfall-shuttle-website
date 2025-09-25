import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "#sobre-nosotros", label: "Sobre nosotros" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#informacion", label: "Información" },
  { href: "#reservas", label: "Reserva" }
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-brand-charcoal/10 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/waterfall-shuttle-costa-rica-logo.svg"
              alt="Waterfall Shuttle Costa Rica"
              width={48}
              height={48}
            />
            <div>
              <p className="font-display text-xl text-brand-deep">Waterfall Shuttle CR</p>
              <p className="text-sm text-brand-charcoal/80">
                Transporte oficial a Catarata Nauyaca, Costa Rica.
              </p>
            </div>
          </div>
          <p className="text-sm text-brand-charcoal/70">
            Shuttle cómodo, seguro y puntual desde Dominical, Uvita y Manuel Antonio hacia la catarata Nauyaca.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg text-brand-deep">Enlaces rápidos</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-natural">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-brand-deep">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/80">
            <li>WhatsApp: +506 8888-8888 (placeholder)</li>
            <li>Email: info@waterfallshuttlecr.com</li>
            <li>Horario: 6:00 am – 6:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-deep py-4 text-center text-xs uppercase tracking-widest text-white/80">
        © {year} Waterfall Shuttle CR. Todos los derechos reservados.
      </div>
    </footer>
  );
}
