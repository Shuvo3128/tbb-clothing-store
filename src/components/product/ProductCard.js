import Link from 'next/link';

export default function ProductCard({ product, compact = false }) {
  const coverImage = product.images?.[0] ?? product.image;
  const productId = product._id || product.slug;

  return (
    <article className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${compact ? 'p-3' : 'p-5'}`}>
      <div className={`aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100 ${compact ? 'mb-3' : ''}`}>
        <img
          src={coverImage}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className={`space-y-4 pt-4 ${compact ? 'space-y-2 pt-2' : ''}`}>
        <div>
          <h3 className={`font-semibold tracking-tight text-slate-950 ${compact ? 'text-base' : 'text-lg'}`}>{product.name}</h3>
          <p className={`font-semibold text-slate-600 ${compact ? 'mt-1 text-sm' : 'mt-2 text-sm'}`}>{product.price}</p>
        </div>
        {!compact && (
          <Link
            href={`/shop/${productId}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Details
          </Link>
        )}
      </div>
    </article>
  );
}
