'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white shadow-[0_40px_120px_-48px_rgba(15,23,42,0.45)]">
      {/* Video Background with Zoom Effect */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[8000ms] ease-out hover:scale-105"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ transform: isLoaded ? 'scale(1.02)' : 'scale(1)' }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-10" />

      {/* Content with Animations */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex min-h-[70vh] items-center justify-center text-center">
          <div className="max-w-3xl space-y-10">
            {/* Subtitle with Animation */}
            <p
              className={`text-sm uppercase tracking-[0.4em] text-slate-200 transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Women's fashion collection
            </p>

            {/* Main Heading with Animation */}
            <h1
              className={`text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Timeless Beauty
            </h1>

            {/* Description with Animation */}
            <p
              className={`mx-auto max-w-xl text-lg leading-8 text-slate-200 sm:text-xl transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Elegant styles made for every moment. Discover premium pieces designed with soft silhouettes and modern details.
            </p>

            {/* Button with Animation */}
            <div
              className={`pt-6 transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a
                href="/shop"
                className="inline-flex rounded-xl bg-white px-10 py-5 text-sm font-semibold text-slate-950 shadow-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-3xl hover:scale-105 hover:-translate-y-1"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}