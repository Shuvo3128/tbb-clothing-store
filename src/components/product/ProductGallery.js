'use client';

import { useState } from 'react';

const FALLBACK_IMAGE = '/images/products/placeholder.svg';

export default function ProductGallery({ images = [], name }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || FALLBACK_IMAGE);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition duration-500 hover:shadow-xl">
        <img
          src={imgError ? FALLBACK_IMAGE : selectedImage}
          alt={name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <ImageThumbnail
            key={`${name}-thumb-${index}`}
            image={image}
            name={name}
            index={index}
            selectedImage={selectedImage}
            onSelect={setSelectedImage}
          />
        ))}
      </div>
    </div>
  );
}

function ImageThumbnail({ image, name, index, selectedImage, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(image)}
      className={`group overflow-hidden rounded-3xl border bg-white transition duration-300 ${
        image === selectedImage
          ? 'border-slate-950 shadow-lg'
          : 'border-slate-200 hover:border-slate-950 hover:shadow-sm'
      }`}
    >
      <img
        src={imgError ? '/images/products/placeholder.svg' : image}
        alt={`${name} thumbnail ${index + 1}`}
        onError={() => setImgError(true)}
        className="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </button>
  );
}
