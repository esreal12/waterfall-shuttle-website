const benefits = [
  {
    title: "Daily departures",
    description:
      "Schedules aligned with tours so you can spend the whole day exploring the waterfall.",
    icon: "🕒"
  },
  {
    title: "Flexible bookings",
    description: "Instant confirmation via WhatsApp or email and changes subject to availability.",
    icon: "📲"
  },
  {
    title: "Local hosts",
    description:
      "Our team knows every detail of the area and shares tips so you get the most out of the visit.",
    icon: "🧭"
  },
  {
    title: "Door-to-door service",
    description:
      "Pickups at hotels, hostels, and key spots in Dominical, Uvita, and Manuel Antonio.",
    icon: "🚐"
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-brand-light py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Benefits</p>
          <h2 className="section-title">Everything you need to travel stress-free</h2>
          <p className="lead">
            We designed each detail with the traveler in mind: clear logistics, direct communication, and an authentic experience.
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
