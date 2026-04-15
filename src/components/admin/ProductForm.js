'use client';

import { useState } from 'react';
import axios from 'axios';

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    fabric: '',
    care: '',
    sizes: [],
    images: []
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSizeChange = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    setMessage('');

    try {
      const uploadedImages = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
        formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        uploadedImages.push(data.secure_url);
      }

      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedImages]
      }));

      setMessage(`${uploadedImages.length} image(s) uploaded successfully!`);
      setMessageType('success');
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Failed to upload images. Please try again.');
      setMessageType('error');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      setMessage('Please upload at least one image.');
      setMessageType('error');
      return;
    }

    if (formData.sizes.length === 0) {
      setMessage('Please select at least one size.');
      setMessageType('error');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, formData);

      if (response.data.success) {
        setMessage('Product added successfully!');
        setMessageType('success');

        // Reset form
        setFormData({
          name: '',
          price: '',
          description: '',
          fabric: '',
          care: '',
          sizes: [],
          images: []
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to add product. Please try again.';
      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {message && (
        <div className={`rounded-xl p-4 ${
          messageType === 'success'
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="e.g., Cotton T-Shirt"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="block text-sm font-medium text-slate-700">
            Price *
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="e.g., $29.99"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-slate-700">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-200"
          placeholder="Describe the product..."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fabric" className="block text-sm font-medium text-slate-700">
            Fabric *
          </label>
          <input
            type="text"
            id="fabric"
            name="fabric"
            value={formData.fabric}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="e.g., 100% organic cotton"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="care" className="block text-sm font-medium text-slate-700">
            Care Instructions *
          </label>
          <input
            type="text"
            id="care"
            name="care"
            value={formData.care}
            onChange={handleInputChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="e.g., Machine wash cold"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Available Sizes *
        </label>
        <div className="flex flex-wrap gap-3">
          {availableSizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleSizeChange(size)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                formData.sizes.includes(size)
                  ? 'border-slate-950 bg-slate-950 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-950'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {formData.sizes.length > 0 && (
          <p className="text-sm text-slate-600">
            Selected: {formData.sizes.join(', ')}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Product Images *
        </label>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:bg-slate-50">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Choose Images
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
            {uploading && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"></div>
                Uploading...
              </div>
            )}
          </div>

          {formData.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {formData.images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
                  >
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Adding Product...
            </>
          ) : (
            <>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Product
            </>
          )}
        </button>
      </div>
    </form>
  );
}