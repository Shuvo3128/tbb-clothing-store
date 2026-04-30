// filepath: src/components/ModelShowcase.js
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const models = [
  {
    id: 1,
    image: '/images/models/model-1.jpg',
    title: 'SUMMER COLLECTION',
    subtitle: 'Explore the latest trends',
  },
  {
    id: 2,
    image: '/images/models/model-2.jpg',
    title: 'EVENING WEAR',
    subtitle: 'Elegance redefined',
  },
  {
    id: 3,
    image: '/images/models/model-3.jpg',
    title: 'ESSENTIALS',
    subtitle: 'Timeless pieces',
  },
];

const navLinks = [
  { href: '/shop?category=dresses', label: 'Dresses' },
  { href: '/shop?category=tops', label: 'Tops' },
  { href: '/shop?category=kurtis', label: 'Kurtis' },
  { href: '/shop?category=sarees', label: 'Sarees' },
  { href: '/shop?category=accessories', label: 'Accessories' },
];

const GOLD = '#c9a96e';

function Icon({ children, label }) {
  return (
    <button 
      className="group relative flex h-11 w-11 items-center justify-center text-slate-500 transition-all duration-300 hover:text-[#c9a96e]"
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function ModelShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-[400px] w-full overflow-hidden">
              <img
                src={model.image}
                alt={model.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-2">
                {model.title}
              </h3>
              <p className="text-white/80 text-sm font-light tracking-wider">
                {model.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const metadata = {
  title: 'Clothing Store',
  description: 'A modern clothing store built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased selection:bg-slate-900 selection:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}