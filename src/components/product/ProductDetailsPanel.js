'use client';

import { useState } from 'react';
import Link from 'next/link';

const defaultSizes = ['S', 'M', 'L', 'XL'];

export default function ProductDetailsPanel({ product, whatsappLink }) {
  const sizes = product?.sizes ?? defaultSizes;
  const [selectedSize, setSelectedSize] = useState(sizes.includes('M') ? 'M' : sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:shadow-lg">
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Choose your size</h2>
            <p className="text-sm text-slate-500">Select the size that fits your style.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
                selectedSize === size
                  ? 'border-slate-950 bg-slate-950 text-white shadow-lg'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-950 hover:text-slate-950'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quantity</p>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-700 transition duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              −
            </button>
            <span className="min-w-[3rem] text-center text-2xl font-semibold text-slate-950">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-700 transition duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              +
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/checkout"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Order Now
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
