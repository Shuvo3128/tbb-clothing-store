import ProductGrid from '@/components/product/ProductGrid';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
import products from '@/data/products';
import Link from 'next/link';

const categories = [
  {
    name: 'Dresses',
    slug: 'dresses',
    image: '/images/categories/dressss.webp',
  },
  {
    name: 'Kurtis',
    slug: 'kurtis',
    image: '/images/categories/kurtiiii.webp',
  },
  {
    name: 'Sarees',
    slug: 'sarees',
    image: '/images/categories/shareee.jpg',
  },
  {
    name: 'Tops',
    slug: 'tops',
    image: '/images/categories/tops.jpg',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    image: '/images/categories/acess.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />

      <AnimatedSection delay={100}>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">New Arrivals</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Latest collection for women
              </h2>
            </div>
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg"
            >
              View all
            </a>
          </div>
          <ProductGrid products={products.slice(0, 8)} />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Categories</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Women’s categories
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="group relative block overflow-hidden rounded-[2rem] bg-slate-950"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.24em] text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, image: '/images/products/jjjjj.jpg.webp', title: 'SUMMER COLLECTION', subtitle: 'Explore the latest trends' },
              { id: 2, image: '/images/products/evening.jpg', title: 'EVENING WEAR', subtitle: 'Elegance redefined' },
              { id: 3, image: '/images/products/night.webp', title: 'ESSENTIALS', subtitle: 'Timeless pieces' },
            ].map((model) => (
              <div key={model.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="relative h-80 w-full overflow-hidden">
                  <img src={model.image} alt={model.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-2">{model.title}</h3>
                  <p className="text-white/80 text-sm font-light tracking-wider">{model.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Recently Viewed</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Your latest favorites
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-500">
              Browse your recently viewed pieces in a clean product grid.
            </p>
          </div>

          <ProductGrid products={products.slice(0, 8)} />
        </section>
      </AnimatedSection>
    </div>
  );
}
