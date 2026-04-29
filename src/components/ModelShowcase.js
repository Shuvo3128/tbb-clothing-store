// filepath: src/components/ModelShowcase.js
'use client';

import Image from 'next/image';

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

export default function ModelShowcase() {
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