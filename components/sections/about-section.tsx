"use client";

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
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100">
            <div className="flex transition-transform duration-500 ease-in-out" id="image-carousel">
              {/* Image 1 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/waterfall-shuttle-cr-costanera-2.jpg"
                  alt="Waterfall Shuttle CR bus on coastal road with happy passengers"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 2 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/close-up-friends-taking-selfie.jpg"
                  alt="Friends taking selfie in shuttle"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 3 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/friends-travel-guys-laugh-have-fun-trip-coach.jpg"
                  alt="Happy travelers laughing in coach"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 4 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/front-view-happy-couple-inside-car.jpg"
                  alt="Happy couple in shuttle"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 5 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/rear-view-tourists-traveling-by-bus.jpg"
                  alt="Tourists traveling by bus"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 6 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/waterfall-shuttle-cr-bus-inside-3.jpg"
                  alt="Interior view of shuttle bus"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
              
              {/* Image 7 */}
              <div className="w-full flex-shrink-0">
                <img
                  src="/images/waterfall-shuttle-cr-shuttle-view.jpg"
                  alt="Waterfall Shuttle CR shuttle view"
                  className="h-[400px] w-full object-cover object-center lg:h-[450px]"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const carousel = document.getElementById('image-carousel');
              const currentTransform = carousel?.style.transform || 'translateX(0%)';
              const currentIndex = Math.abs(parseInt(currentTransform.match(/-?\d+/) || '0')) / 100;
              const newIndex = currentIndex === 0 ? 6 : currentIndex - 1;
              carousel!.style.transform = `translateX(-${newIndex * 100}%)`;
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all duration-200 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const carousel = document.getElementById('image-carousel');
              const currentTransform = carousel?.style.transform || 'translateX(0%)';
              const currentIndex = Math.abs(parseInt(currentTransform.match(/-?\d+/) || '0')) / 100;
              const newIndex = currentIndex === 6 ? 0 : currentIndex + 1;
              carousel!.style.transform = `translateX(-${newIndex * 100}%)`;
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all duration-200 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            aria-label="Next image"
          >
            <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="mt-4 flex justify-center space-x-2">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                onClick={() => {
                  const carousel = document.getElementById('image-carousel');
                  carousel!.style.transform = `translateX(-${index * 100}%)`;
                }}
                className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
