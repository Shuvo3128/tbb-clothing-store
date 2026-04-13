export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950">
            <span className="sr-only">Search</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.7-5.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z" />
            </svg>
          </button>

          <div className="text-center">
            <a href="/" className="text-xl font-semibold tracking-[0.35em] text-slate-950 uppercase">
              TBB
            </a>
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">The Belles Beauty</p>
          </div>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950">
            <span className="sr-only">Cart</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6m0 0a1.2 1.2 0 002.4 0m8.6 0a1.2 1.2 0 002.4 0M7 13h10" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.3em] text-slate-600">
          <a href="#" className="transition hover:text-slate-950">Dresses</a>
          <a href="#" className="transition hover:text-slate-950">Tops</a>
          <a href="#" className="transition hover:text-slate-950">Kurtis</a>
          <a href="#" className="transition hover:text-slate-950">Sarees</a>
          <a href="#" className="transition hover:text-slate-950">Accessories</a>
        </nav>
      </div>
    </header>
  );
}
