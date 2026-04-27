'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminProducts() {

  const [products, setProducts] = useState([]);

  // fetch products
  const getProducts = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`
    );
    setProducts(res.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // delete product
  const deleteProduct = async (id) => {
    if (!confirm('Delete this product?')) return;

    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
    );

    getProducts(); // refresh
  };

  return (
    <div className="p-10 bg-slate-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map(product => (
          <div key={product._id} className="bg-white p-4 rounded-xl shadow">

            <img
              src={product.images[0]}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="mt-3 font-semibold">{product.name}</h2>
            <p>${product.price}</p>

            <div className="flex gap-2 mt-3">

              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}