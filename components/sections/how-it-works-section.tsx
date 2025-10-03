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
    <section id="how-it-works" className="bg-brand-light py-12 sm:py-16 md:py-20">
      <div className="container space-y-8 sm:space-y-10 md:space-y-12">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">Reaching the waterfall has never been easier</h2>
          <p className="lead">
            A transparent process to book, coordinate, and arrive without stress. Your only task is to live the experience.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
              <span className="absolute -top-4 sm:-top-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-natural text-sm sm:text-lg font-display text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl lg:text-2xl text-brand-deep">{step.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-brand-charcoal/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
