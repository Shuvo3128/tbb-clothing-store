import ProductGrid from '@/components/product/ProductGrid';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-10 lg:px-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 sm:text-sm">Shop</p>
          <h1 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
            Browse all products
          </h1>
          <p className="max-w-2xl text-sm text-slate-500 sm:text-base">
            Discover our full collection of modern wardrobe essentials, designed for everyday style and simplicity.
          </p>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
}
