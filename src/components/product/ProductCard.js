import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 ease-out"
        />
      </div>
      <div className="space-y-4 pt-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">{product.name}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-600">{product.price}</p>
        </div>
        <Link
          href={`/shop/${product.slug}`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
