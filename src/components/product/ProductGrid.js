'use client';

import { useEffect, useState } from 'react';
import defaultProducts from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState(defaultProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const result = await response.json();
        
        if (result.success) {
          setProducts(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products');
        // Keep default products on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-slate-600">
        {error}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center text-slate-600">
        No products found
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id || product.slug} product={product} />
      ))}
    </section>
  );
}
