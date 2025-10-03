const testimonials = [
  {
    quote:
      "Excellent service. The driver shared tips on how to make the most of the waterfall, and the ride was very comfortable.",
    name: "Laura, Spain"
  },
  {
    quote:
      "We coordinated everything through WhatsApp and it was super easy. They picked us up at the hotel and had cold water waiting after the hike.",
    name: "Andres, Chile"
  },
  {
    quote:
      "Perfect for families. The kids felt safe and we were always on time. We would book again without hesitation.",
    name: "Michelle, Canada"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container space-y-8 sm:space-y-10 md:space-y-12">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">What travelers are saying</h2>
          <p className="lead">
            Real guests who already visited Nauyaca Waterfall with Waterfall Shuttle CR. Their words push us to keep elevating the experience.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-brand-natural/15 bg-brand-light p-4 sm:p-6 shadow-inner"
            >
              <blockquote className="text-xs sm:text-sm leading-relaxed text-brand-charcoal/85">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-brand-deep">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
