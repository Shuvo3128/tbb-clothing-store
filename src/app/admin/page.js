import ProductForm from '@/components/admin/ProductForm';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Add New Product
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Fill in the details below to add a new product to your store.
        </p>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <ProductForm />
      </div>
    </div>
  );
}