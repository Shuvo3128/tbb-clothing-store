export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-4">
            <div>
              <p className="text-xl font-semibold tracking-[0.35em] text-slate-950 uppercase">TBB</p>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">The Belles Beauty</p>
            </div>
            <p className="max-w-sm text-sm text-slate-600">
              Minimal, elegant fashion designed for women who appreciate premium silhouettes and timeless details.
            </p>
            <p className="text-sm text-slate-500">Contact: +8801XXXXXXXXX</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <a href="#" className="transition hover:text-slate-950">About</a>
              <a href="#" className="transition hover:text-slate-950">Contact</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-950">Newsletter</p>
            <p className="mt-3 text-sm text-slate-600">
              Subscribe for exclusive launches and styling updates.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              />
              <button className="inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
