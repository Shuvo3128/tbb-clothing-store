export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 md:p-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 sm:text-sm">Checkout</p>
          <h1 className="text-2xl font-semibold text-slate-950 sm:text-3xl">Complete your order</h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Fill in your details below to place your order. This is a clean checkout UI with no backend logic.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Phone
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Address
            <textarea
              rows="5"
              placeholder="Street address, city, postal code"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg sm:w-auto"
            >
              Place Order
            </button>
            <a
              href="https://wa.me/15551234567?text=I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg sm:w-auto"
            >
              Order via WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
