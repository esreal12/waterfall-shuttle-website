const schedule = [
  {
    title: "Salidas desde Dominical",
    items: ["6:30 am", "9:30 am", "1:30 pm"]
  },
  {
    title: "Salidas desde Uvita",
    items: ["6:00 am", "9:00 am", "1:00 pm"]
  },
  {
    title: "Salidas desde Manuel Antonio",
    items: ["5:30 am", "8:30 am"]
  }
];

const pricing = [
  { label: "Adulto", amount: "US$35" },
  { label: "Niño (6-11)", amount: "US$20" },
  { label: "Grupos +6", amount: "Solicitar tarifa especial" }
];

export function InfoSection() {
  return (
    <section id="informacion" className="bg-brand-light py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Información práctica</p>
          <h2 className="section-title">Horarios, tarifas y puntos de encuentro</h2>
          <p className="lead">
            Planea tu visita con datos claros. Ajustaremos los horarios dependiendo de la temporada y la disponibilidad de entradas.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-brand-deep">Horarios</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {schedule.map((slot) => (
                  <div key={slot.title} className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-charcoal/70">
                      {slot.title}
                    </p>
                    <ul className="space-y-1 text-sm text-brand-charcoal/80">
                      {slot.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-brand-deep">Tarifas</h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-charcoal/85">
                {pricing.map((price) => (
                  <li key={price.label} className="flex items-center justify-between">
                    <span>{price.label}</span>
                    <span className="font-semibold text-brand-natural">{price.amount}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-charcoal/60">
                * Tarifas de ejemplo. Ajustar cuando se definan precios oficiales.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-brand-deep">Mapa de pickups</h3>
              <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-brand-natural/20">
                <div className="placeholder-media h-full">
                  Mapa interactivo: insertar iframe de Google Maps con puntos clave (pendiente).
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-brand-deep p-6 text-white">
              <h3 className="font-display text-xl">¿Necesitas un horario privado?</h3>
              <p className="mt-3 text-sm text-white/80">
                Coordinamos shuttles privados para grupos, bodas y producciones. Escríbenos para cotizar.
              </p>
              <a
                href="mailto:info@waterfallshuttlecr.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent hover:text-white"
              >
                Contacto directo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
