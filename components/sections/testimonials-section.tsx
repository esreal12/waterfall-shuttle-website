const testimonials = [
  {
    quote:
      "El servicio fue excelente. El conductor nos ayudó con consejos sobre cómo aprovechar mejor la catarata, y el viaje fue muy cómodo.",
    name: "Laura, España"
  },
  {
    quote:
      "Coordinamos por WhatsApp y todo resultó muy fácil. Nos recogieron en el hotel y a la vuelta tenían agua fría esperándonos.",
    name: "Andrés, Chile"
  },
  {
    quote:
      "Perfecto para familias. Los niños viajaron seguros y puntuales. Repetiríamos sin dudarlo.",
    name: "Michelle, Canadá"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-white py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Testimonios</p>
          <h2 className="section-title">Lo que dicen nuestros viajeros</h2>
          <p className="lead">
            Clientes reales que ya visitaron Catarata Nauyaca con Waterfall Shuttle CR. Sus palabras nos inspiran a seguir elevando el servicio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-brand-natural/15 bg-brand-light p-6 shadow-inner"
            >
              <blockquote className="text-sm leading-relaxed text-brand-charcoal/85">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 font-semibold text-brand-deep">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
