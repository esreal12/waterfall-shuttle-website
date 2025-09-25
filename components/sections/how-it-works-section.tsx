const steps = [
  {
    title: "Reserva",
    description: "Completa el formulario o escríbenos por WhatsApp para elegir fecha, hora y lugar de pickup."
  },
  {
    title: "Nos encontramos",
    description: "Te confirmamos el punto exacto y hora de salida. Nuestro conductor te espera con tu nombre."
  },
  {
    title: "Disfruta",
    description: "Llegamos directamente al puesto de ingreso de Nauyaca y coordinamos el regreso a tu ritmo."
  }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-brand-light py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Cómo funciona</p>
          <h2 className="section-title">Viajar a la catarata nunca fue tan sencillo</h2>
          <p className="lead">
            Un proceso claro para reservar, coordinar y llegar sin estrés. Queremos que te concentres en vivir la experiencia.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl bg-white p-8 shadow-sm">
              <span className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-natural text-lg font-display text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl text-brand-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-brand-charcoal/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
