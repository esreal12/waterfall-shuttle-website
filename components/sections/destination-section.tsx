import { ImageSlider } from "@/components/ui/image-slider";

const nauyacaImages = [
  {
    src: "/images/nauyaca-waterfall-shtuttle-1.jpg",
    alt: "Nauyaca Waterfall shuttle view 1"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-2.jpg",
    alt: "Nauyaca Waterfall shuttle view 2"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-3.jpg",
    alt: "Nauyaca Waterfall shuttle view 3"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-4.jpg",
    alt: "Nauyaca Waterfall shuttle view 4"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-5.jpg",
    alt: "Nauyaca Waterfall shuttle view 5"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-6.jpg",
    alt: "Nauyaca Waterfall shuttle view 6"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-7.jpg",
    alt: "Nauyaca Waterfall shuttle view 7"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-8.jpg",
    alt: "Nauyaca Waterfall shuttle view 8"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-9.jpg",
    alt: "Nauyaca Waterfall shuttle view 9"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-10.jpg",
    alt: "Nauyaca Waterfall shuttle view 10"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-11.jpg",
    alt: "Nauyaca Waterfall shuttle view 11"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-12.jpg",
    alt: "Nauyaca Waterfall shuttle view 12"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-13.jpg",
    alt: "Nauyaca Waterfall shuttle view 13"
  },
  {
    src: "/images/nauyaca-waterfall-shtuttle-14.jpg",
    alt: "Nauyaca Waterfall shuttle view 14"
  }
];

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
            Book your ride now →
          </a>
        </div>
        <ImageSlider 
          images={nauyacaImages}
          height="h-[360px] lg:h-[400px]"
          showDots={true}
          showArrows={true}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
}
