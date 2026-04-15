import defaultProducts from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = defaultProducts }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </section>
  );
}
