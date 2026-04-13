export default function ProductDetails({ product }) {
  return (
    <section>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </section>
  );
}
