export function ShuttleJourneySection() {
  return (
    <section id="journey" className="bg-white py-20">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:items-center">
        <div className="space-y-5">
          <p className="section-eyebrow">The ride</p>
          <h2 className="section-title">From pickup to plunge, this is how the journey flows</h2>
          <p className="lead">
            Expect punctual pickups, bilingual hosts, and insider guidance on how to time your visit so you can swim beneath the falls with the perfect light.
          </p>
          <ul className="list-disc space-y-3 pl-5 text-sm text-brand-charcoal/85">
            <li>Coastal departures out of Dominical, Uvita, and Manuel Antonio each morning.</li>
            <li>Comfort stops and local tips en route to keep everyone energized.</li>
            <li>Coordinated return rides tailored to your chosen hiking pace or horseback tour.</li>
          </ul>
          <p className="text-sm text-brand-charcoal/70">
            Scroll the animation above to visualize how the shuttle glides from the coast into the Nauyaca valley.
          </p>
        </div>
        <div className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-natural/20 bg-brand-light/80 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-natural">Duration</p>
              <p className="mt-3 font-display text-2xl text-brand-deep">~25 min ride</p>
              <p className="mt-2 text-sm text-brand-charcoal/80">
                Enough time for a scenic drive and quick orientation before reaching the Nauyaca entrance.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-natural/20 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-natural">Comfort</p>
              <p className="mt-3 font-display text-2xl text-brand-deep">A/C & Wi-Fi</p>
              <p className="mt-2 text-sm text-brand-charcoal/80">
                The coaster is equipped with cold air, roomy seating, and connectivity for those pre-waterfall selfies.
              </p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/images/waterfall-shuttle-coaster-jungle.jpg"
                alt="Waterfall Shuttle Coaster driving through the jungle"
                className="h-48 w-full object-cover transition hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/images/waterfall-shuttle-coaster-beach.jpg"
                alt="Waterfall Shuttle Coaster parked by the beach"
                className="h-48 w-full object-cover transition hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
