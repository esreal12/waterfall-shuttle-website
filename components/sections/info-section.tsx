const schedule = [
  {
    title: "Manuel Antonio / Quepos",
    items: ["8:00 am", "12:00 pm"]
  },
  {
    title: "Uvita / Dominical",
    items: ["9:00 am", "1:00 pm"]
  }
];

const pricing = [
  { label: "Adult", amount: "US$35" },
  { label: "Child (6-11)", amount: "US$20" },
  { label: "Groups 6+", amount: "Request custom quote" }
];

export function InfoSection() {
  return (
    <section id="information" className="bg-brand-light py-12 sm:py-16 md:py-20">
      <div className="container space-y-8 sm:space-y-10 md:space-y-12">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <p className="section-eyebrow">Practical information</p>
          <h2 className="section-title">Schedules, rates, and pickup locations</h2>
          <p className="lead">
            Plan your visit with clear information. Morning pickups are our standard schedule. Afternoon pickups (12:00 PM and 1:00 PM) are available when the morning fills up or for groups of 6+ people.
          </p>
        </div>
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl text-brand-deep">Schedules</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {schedule.map((slot) => (
                  <div key={slot.title} className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-charcoal/70">
                      {slot.title}
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-brand-charcoal/80">
                      {slot.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl text-brand-deep">Rates</h3>
              <ul className="mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-brand-charcoal/85">
                {pricing.map((price) => (
                  <li key={price.label} className="flex items-center justify-between">
                    <span>{price.label}</span>
                    <span className="font-semibold text-brand-natural">{price.amount}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-charcoal/60">
                * Sample rates. Replace with confirmed pricing when finalized.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
                <h3 className="font-display text-lg sm:text-xl text-brand-deep">Manuel Antonio / Quepos</h3>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg sm:rounded-xl border border-brand-natural/20">
                  <iframe
                    title="Manuel Antonio and Quepos pickup area"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.324480518052!2d-84.1553!3d9.3914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa177c2821f0fbb%3A0xc42fbaa3af9acf90!2sManuel%20Antonio%20National%20Park!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
                <h3 className="font-display text-lg sm:text-xl text-brand-deep">Uvita / Dominical</h3>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg sm:rounded-xl border border-brand-natural/20">
                  <iframe
                    title="Uvita and Dominical pickup area"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.324480518052!2d-83.7531!3d9.1634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa177c2821f0fbb%3A0xc42fbaa3af9acf90!2sUvita%20Beach!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-brand-deep p-4 sm:p-6 text-white">
              <h3 className="font-display text-lg sm:text-xl">Need a private schedule?</h3>
              <p className="mt-3 text-xs sm:text-sm text-white/80">
                We coordinate private shuttles for groups, weddings, and productions. Reach out for a quote.
              </p>
              <a
                href="mailto:info@waterfallshuttlecr.com"
                className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent hover:text-white transition-colors"
              >
                Contact us -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
