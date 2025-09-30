export function DestinationSection() {
  return (
    <section id="destination" className="bg-white py-20">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">Destination</p>
          <h2 className="section-title">Nauyaca Waterfall: the hidden jewel of Costa Rica's South Pacific</h2>
          <p className="lead">
            The most iconic double waterfall in Costa Rica, surrounded by lush rainforest and natural pools perfect for swimming. Our shuttle takes you to the official entrance and coordinates your return trip.
          </p>
          <ul className="list-disc space-y-3 pl-5 text-sm text-brand-charcoal/85">
            <li>45-meter drop with a steady water flow year-round.</li>
            <li>Maintained trails, basic amenities, and local guides available.</li>
            <li>Choose between a horseback tour or a hike, depending on your style.</li>
          </ul>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-natural hover:text-brand-deep"
          >
            Book your ride now ->
          </a>
        </div>
        <div className="placeholder-media h-[360px]">
          This area will showcase a panoramic shot of Nauyaca Waterfall at sunset.
        </div>
      </div>
    </section>
  );
}
