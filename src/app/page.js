import ProductGrid from '@/components/product/ProductGrid';
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
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-[0_40px_120px_-48px_rgba(15,23,42,0.45)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banners/hero.svg')" }}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
            <div className="max-w-2xl space-y-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
                Women’s fashion collection
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Timeless Beauty
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                Elegant styles made for every moment. Discover premium pieces designed with soft silhouettes and modern details.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/shop"
                  className="inline-flex rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="hidden gap-4 lg:grid">
              <div className="grid gap-4">
                <img
                  src="/images/hero-model-1.svg"
                  alt="Model 1"
                  className="h-64 w-full rounded-[2rem] object-cover shadow-2xl"
                />
                <img
                  src="/images/hero-model-2.svg"
                  alt="Model 2"
                  className="h-64 w-full rounded-[2rem] object-cover shadow-2xl"
                />
              </div>
              <img
                src="/images/hero-model-3.svg"
                alt="Model 3"
                className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

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
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
          >
            View all
          </a>
        </div>
        <ProductGrid products={products.slice(0, 8)} />
      </section>

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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Recently Viewed</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Your latest favorites
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Scroll through pieces you viewed recently and keep your style story going.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.slug} className="min-w-[280px] flex-shrink-0">
                <ProductGrid products={[product]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
