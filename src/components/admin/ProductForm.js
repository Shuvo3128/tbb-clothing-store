'use client';

import { useState } from 'react';
import axios from 'axios';

const sizesList = ['XS','S','M','L','XL','XXL'];

export default function ProductForm() {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    fabric: '',
    care: '',
    sizes: [],
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  // input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // size select
  const handleSize = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  // image upload (Cloudinary)
  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);

    try {
      const uploaded = [];

      for (let file of files) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: data
          }
        );

        const result = await res.json();
        uploaded.push(result.secure_url);
      }

      setImages(prev => [...prev, ...uploaded]);
      setMessage('Image uploaded successfully ✅');

    } catch (err) {
      console.error(err);
      setMessage('Upload failed ❌');
    }
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        { ...formData, images }
      );

      if (res.data.success) {
        setMessage('Product added successfully 🎉');

        setFormData({
          name: '',
          price: '',
          description: '',
          fabric: '',
          care: '',
          sizes: [],
        });

        setImages([]);
      }

    } catch (err) {
      console.error(err);
      setMessage('Failed to add product ❌');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16">

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border">

        <h2 className="text-4xl font-bold mb-2">Add New Product</h2>
        <p className="text-gray-500 mb-8">Create a new product for your store</p>

        {message && (
          <div className="mb-4 text-sm text-blue-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="p-4 rounded-xl border"
          />

          {/* Price */}
          <input
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="p-4 rounded-xl border"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="col-span-2 p-4 rounded-xl border"
          />

          {/* Fabric */}
          <input
            name="fabric"
            value={formData.fabric}
            onChange={handleInputChange}
            placeholder="Fabric"
            className="p-4 rounded-xl border"
          />

          {/* Care */}
          <input
            name="care"
            value={formData.care}
            onChange={handleInputChange}
            placeholder="Care Instructions"
            className="p-4 rounded-xl border"
          />

          {/* Sizes */}
          <div className="col-span-2">
            <p className="mb-2">Select Sizes</p>
            <div className="flex gap-3 flex-wrap">
              {sizesList.map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSize(size)}
                  className={`px-4 py-2 rounded-full border ${
                    formData.sizes.includes(size)
                      ? 'bg-black text-white'
                      : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="col-span-2">
            <input type="file" multiple onChange={handleImageChange} />
          </div>

          {/* Preview */}
          <div className="col-span-2 flex gap-3 flex-wrap">
            {images.map((img, i) => (
              <img key={i} src={img} className="w-20 h-20 rounded-lg object-cover" />
            ))}
          </div>

          {/* Button */}
          <button className="col-span-2 bg-black text-white py-4 rounded-xl hover:bg-gray-800">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}