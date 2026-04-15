import ProductGrid from '@/components/product/ProductGrid';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
import products from '@/data/products';

const categories = [
  {
    name: 'Dresses',
    image: '/images/categories/dresses.svg',
  },
  {
    name: 'Kurtis',
    image: '/images/categories/kurtis.svg',
  },
  {
    name: 'Sarees',
    image: '/images/categories/sarees.svg',
  },
  {
    name: 'Tops',
    image: '/images/categories/tops.svg',
  },
  {
    name: 'Accessories',
    image: '/images/categories/accessories.svg',
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
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-[2rem] bg-slate-950"
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
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-[2rem] bg-slate-950">
              <img
                src="/images/banners/promo-left.svg"
                alt="Moments in Elegance"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-200">Moments in Elegance</p>
                <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Discover refined silhouettes</h3>
              </div>
            </div>

            <div className="relative h-72 overflow-hidden rounded-[2rem] bg-slate-950">
              <img
                src="/images/banners/promo-right.svg"
                alt="Bold & Beautiful"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-200">Bold & Beautiful</p>
                <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Express your modern allure</h3>
              </div>
            </div>
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
