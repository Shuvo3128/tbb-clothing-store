import { useState } from 'react';

export default function useCart() {
  const [items, setItems] = useState([]);

  const addToCart = (product) => setItems((current) => [...current, product]);
  const removeFromCart = (slug) => setItems((current) => current.filter((item) => item.slug !== slug));

  return { items, addToCart, removeFromCart };
}
