'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductGrid from '@/components/product/ProductGrid';ax-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
export default function CategoryPage() {e="text-3xl font-semibold tracking-tight text-slate-950">
  const params = useParams();       Add New Product
  const categoryName = params.name;
  const [products, setProducts] = useState([]);="mt-2 text-sm text-slate-600">
  const [loading, setLoading] = useState(true);new product to your store.
    </p>
  useEffect(() => {   </div>
    if (categoryName) fetchProducts();
  }, [categoryName]);e="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">

  const fetchProducts = async () => {  </div>
    const res = await fetch(`http://localhost:5000/api/products?category=${categoryName}`); </div>
    const data = await res.json();
    setProducts(data.data || []);  };  return (    <div>      <h1>{categoryName}</h1>      {products.length > 0 ? <ProductGrid products={products} /> : <p>No products found</p>}    </div>  );}