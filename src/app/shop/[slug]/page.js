import Link from 'next/link';
import products from '@/data/products';

export default function ProductPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Not found</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Product not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          We couldn’t find the product you were looking for. Please return to the shop and explore other items.
        </p>
        <div className="mt-8">
          <Link
            href="/shop"
            className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(
    `I want to order ${product.name}`
  )}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 sm:text-sm">Product</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">{product.price}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Product details</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Crafted for everyday wear, this piece blends comfort and clean design. It’s made from premium materials with a timeless silhouette that works for both casual and elevated looks.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Perfect for layering or wearing on its own, this item brings a refined, modern attitude to any outfit.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/checkout"
              className="inline-flex w-full items-center justify-center rounded-lg bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Order Now
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-950 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white sm:w-auto"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
