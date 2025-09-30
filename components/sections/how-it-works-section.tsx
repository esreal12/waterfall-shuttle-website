const steps = [
  {
    title: "Book",
    description:
      "Fill out the form or message us on WhatsApp to choose your date, time, and pickup location."
  },
  {
    title: "Meet",
    description:
      "We confirm the exact spot and departure time. Your driver will be waiting with your name."
  },
  {
    title: "Enjoy",
    description:
      "Arrive at the Nauyaca entrance and explore at your own pace. We coordinate the ride back."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-brand-light py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">Reaching the waterfall has never been easier</h2>
          <p className="lead">
            A transparent process to book, coordinate, and arrive without stress. Your only task is to live the experience.
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
