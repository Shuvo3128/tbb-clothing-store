'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductGrid from '@/components/product/ProductGrid';

export default function CategoryPage() {
  const params = useParams();
  const categoryName = params.name;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (categoryName) {
      fetchProducts();
    }
  }, [categoryName]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/products?category=${categoryName}`);
      const data = await res.json();

      if (data.success) {
        setProducts(data.data || []);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  // Format category name for display
  const displayName = categoryName 
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : '';

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto h-12 w-48 animate-pulse rounded-full bg-slate-200" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-slate-200 pt-[125%]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Collection</p>
        <h1 className="mt-2 text-4xl font-light tracking-[0.25em] text-slate-950">
          {displayName}
        </h1>
      </div>

      {/* Error State */}
      {error && (
        <div className="rounded-xl bg-red-50 p-6 text-center text-red-600">
          {error}
        </div>
      )}

      {/* Products Grid */}
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg text-slate-500">No products found in this category.</p>
          <p className="mt-2 text-sm text-slate-400">Check back soon for new arrivals.</p>
        </div>
      )}
    </div>
  );
}