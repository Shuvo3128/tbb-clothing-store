'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RecentlyViewedCarousel({ products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if (products.length === 0) {
    return null;
  }

  const currentProduct = products[currentIndex];

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Recently Viewed
        </h2>
        <p className="mt-2 text-slate-600">
          Continue browsing your recently viewed products
        </p>
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl bg-white">
          <div className="relative flex items-center justify-center">
            {/* Product Display */}
            <div className="w-full">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
                  key={currentIndex}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {currentProduct.name}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-slate-600">
                    {currentProduct.price}
                  </p>
                </div>

                <Link
                  href={`/shop/${currentProduct.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={goToPrev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-950 hover:text-slate-950 hover:shadow-lg"
          aria-label="Previous product"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={goToNext}
          className="absolute -right-5 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-950 hover:text-slate-950 hover:shadow-lg"
          aria-label="Next product"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition ${
                index === currentIndex ? 'w-6 bg-slate-950' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="mt-4 text-center text-sm text-slate-600">
          {currentIndex + 1} of {products.length}
        </div>
      </div>
    </section>
  );
}
