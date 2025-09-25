const benefits = [
  {
    title: "Salidas diarias",
    description: "Horarios pensados para conectar con los tours y permitirte disfrutar todo el día en la catarata.",
    icon: "🕒"
  },
  {
    title: "Reserva flexible",
    description: "Confirmación instantánea vía WhatsApp o email y modificaciones sujetas a disponibilidad.",
    icon: "📲"
  },
  {
    title: "Guías locales",
    description: "Nuestro equipo conoce cada detalle de la zona y te comparte consejos para aprovechar la visita.",
    icon: "🧭"
  },
  {
    title: "Servicio puerta a puerta",
    description: "Pickups en hoteles, hostels y puntos clave de Dominical, Uvita y Manuel Antonio.",
    icon: "🚐"
  }
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-brand-light py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Beneficios</p>
          <h2 className="section-title">Todo lo que necesitas para llegar sin preocupaciones</h2>
          <p className="lead">
            Diseñamos cada detalle pensando en la comodidad del viajero: logística clara, comunicación directa y una experiencia auténtica.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-brand-natural/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">{benefit.icon}</div>
              <h3 className="mt-4 font-display text-2xl text-brand-deep">{benefit.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
