export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">About us</p>
          <h2 className="section-title">Your experience begins the moment you hop on the shuttle</h2>
          <p className="lead">
            We are a certified local team connecting travelers with the breathtaking Nauyaca Waterfall. We provide safe, comfortable, and friendly transportation so you can enjoy the journey just as much as the destination.
          </p>
          <ul className="list-disc space-y-4 pl-5 text-brand-charcoal/90">
            <li>Bilingual drivers trained in hospitality.</li>
            <li>Coaster vehicles with air-conditioning and onboard Wi-Fi.</li>
            <li>Direct coordination with the official waterfall entrance.</li>
          </ul>
        </div>
        <div className="placeholder-media h-[320px]">
          This spot will feature a photo of the Waterfall Shuttle CR vehicle with smiling guests.
        </div>
      </div>
    </section>
  );
}
