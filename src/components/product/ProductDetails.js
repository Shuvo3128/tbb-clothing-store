'use client';

import { useState } from 'react';

const FALLBACK_IMAGE = '/images/products/placeholder.svg';

export default function ProductDetails({ product }) {
  const coverImage = product.images?.[0] ?? product.image ?? FALLBACK_IMAGE;
  const [imgError, setImgError] = useState(false);

  return (
    <section>
      <img 
        src={imgError ? FALLBACK_IMAGE : coverImage} 
        alt={product.name}
        onError={() => setImgError(true)}
        className="w-full object-cover"
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </section>
  );
}
