import ProductGrid from '@/components/product/ProductGrid';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 sm:text-sm">Shop</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Browse our curated collection
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Discover clean, premium pieces for everyday dressing that feel minimal, modern, and effortless.
          </p>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
}
