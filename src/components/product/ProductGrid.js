import defaultProducts from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = defaultProducts }) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </section>
  );
}
