'use client';

import { useEffect, useState } from 'react';
import ProductDetailsPanel from '@/components/product/ProductDetailsPanel';
import ProductGallery from '@/components/product/ProductGallery';

function buildSku(slug) {
  return `TBB-${slug.replace(/-/g, '').toUpperCase()}`;
}

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
  const sku = buildSku(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Product details</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {product.name}
          </h1>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-950 hover:shadow-sm"
        >
          Back to shop
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
        <ProductGallery images={product.images} name={product.name} />

        <div className="space-y-8">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-500">
              <span>Brand: TBB</span>
              <span className="h-0.5 w-8 rounded-full bg-slate-200" />
              <span>Availability: In Stock</span>
              <span className="h-0.5 w-8 rounded-full bg-slate-200" />
              <span>SKU: {sku}</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{product.price}</p>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-slate-500">(120 reviews)</span>
              </div>
              <p className="text-sm leading-7 text-slate-600">{product.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Fabric</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.fabric}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Care</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.care}</p>
              </div>
            </div>
          </div>

          <ProductDetailsPanel product={product} whatsappLink={whatsappLink} />
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">More details</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {product.description} It is designed to keep the look clean, minimal, and luxurious while offering everyday comfort and polish.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Fabric</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{product.fabric}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Care</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{product.care}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Size chart</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-4 font-medium">Size</th>
                  <th className="px-4 py-4 font-medium">Bust</th>
                  <th className="px-4 py-4 font-medium">Waist</th>
                  <th className="px-4 py-4 font-medium">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">S</td>
                  <td className="px-4 py-4">32"</td>
                  <td className="px-4 py-4">25"</td>
                  <td className="px-4 py-4">35"</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">M</td>
                  <td className="px-4 py-4">34"</td>
                  <td className="px-4 py-4">27"</td>
                  <td className="px-4 py-4">37"</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">L</td>
                  <td className="px-4 py-4">36"</td>
                  <td className="px-4 py-4">29"</td>
                  <td className="px-4 py-4">39"</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">XL</td>
                  <td className="px-4 py-4">38"</td>
                  <td className="px-4 py-4">31"</td>
                  <td className="px-4 py-4">41"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
