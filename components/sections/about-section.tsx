"use client";

import { useEffect, useState } from "react";

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const totalImages = 7;

  useEffect(() => {
    setIsClient(true);
    // Initialize carousel position
    const carousel = document.getElementById('image-carousel');
    if (carousel) {
      carousel.style.transform = 'translateX(0%)';
    }
  }, []);

  const goToSlide = (index: number) => {
    const carousel = document.getElementById('image-carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      setCurrentIndex(index);
      console.log('Slider moved to index:', index);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };
  return (
    <section id="about" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <p className="section-eyebrow">About us</p>
          <h2 className="section-title">Your experience begins the moment you hop on the shuttle</h2>
          <p className="lead">
            We are a certified local team connecting travelers with the breathtaking Nauyaca Waterfall. We provide safe, comfortable, and friendly transportation so you can enjoy the journey just as much as the destination.
          </p>
          <ul className="list-disc space-y-3 sm:space-y-4 pl-5 text-sm sm:text-base text-brand-charcoal/90">
            <li>Bilingual drivers trained in hospitality.</li>
            <li>Coaster vehicles with air-conditioning and onboard Wi-Fi.</li>
            <li>Direct coordination with the official waterfall entrance.</li>
          </ul>
        </div>
        <div className="relative order-1 lg:order-2">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 h-[300px] sm:h-[400px] lg:h-[450px]">
            <div className="flex transition-transform duration-500 ease-in-out h-full" id="image-carousel">
              {/* Image 1 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/waterfall-shuttle-cr-costanera-2.jpg"
                  alt="Waterfall Shuttle CR bus on coastal road with happy passengers"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 2 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/close-up-friends-taking-selfie.jpg"
                  alt="Friends taking selfie in shuttle"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 3 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/friends-travel-guys-laugh-have-fun-trip-coach.jpg"
                  alt="Happy travelers laughing in coach"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 4 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/front-view-happy-couple-inside-car.jpg"
                  alt="Happy couple in shuttle"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 5 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/rear-view-tourists-traveling-by-bus.jpg"
                  alt="Tourists traveling by bus"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 6 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/waterfall-shuttle-cr-bus-inside-3.jpg"
                  alt="Interior view of shuttle bus"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image 7 */}
              <div className="w-full flex-shrink-0 h-full">
                <img
                  src="/images/waterfall-shuttle-cr-shuttle-view.jpg"
                  alt="Waterfall Shuttle CR shuttle view"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows - Only render on client */}
          {isClient && (
            <>
              <button
                onClick={goToPrevious}
                className="slider-arrow slider-arrow-left"
                aria-label="Previous image"
              >
                <svg className="slider-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="slider-arrow slider-arrow-right"
                aria-label="Next image"
              >
                <svg className="slider-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="slider-dots-container">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`slider-dot ${currentIndex === index ? 'slider-dot-active' : ''}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
