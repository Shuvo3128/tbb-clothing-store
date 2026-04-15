import AnimatedSection from '@/components/AnimatedSection';

export default function Footer() {
  return (
    <AnimatedSection delay={500}>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Left Section - Brand & Contact */}
          <div className="space-y-6">
            {/* Brand */}
            <div>
              <p className="text-2xl font-bold tracking-[0.35em] text-slate-950 uppercase">TBB</p>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-600 mt-1">The Bella's Beauty</p>
            </div>

            {/* Hotline */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] font-semibold text-slate-950">
                Hotline Free 24/7
              </p>
              <p className="text-sm font-semibold text-slate-950">+8801718917192</p>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] font-semibold text-slate-950">
                Outlet Address
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                123 Fashion Street<br />
                Dhaka, Bangladesh<br />
          
              </p>
            </div>

            {/* Email & Phone */}
            <div className="space-y-2 text-xs text-slate-600">
              <p>
                <span className="font-semibold text-slate-950">Email:</span> shuvo.ds.ml@gmail.com
              </p>
              <p>
                <span className="font-semibold text-slate-950">Phone:</span> +8801703785355
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-950 hover:text-white hover:border-slate-950"
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.877-.2-3.707-.2-3.872 0-6.286 2.369-6.286 6.686v2.214z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-950 hover:text-white hover:border-slate-950"
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Left - Information & Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-950">
              Information & Services
            </h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Home
              </a>
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                About Us
              </a>
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Contact Us
              </a>
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Blog
              </a>
            </nav>
          </div>

          {/* Middle Right - My Account & Payments */}
          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-950">
              My Account & Payments
            </h3>
            <nav className="flex flex-col gap-6">
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Terms and Conditions
              </a>
              <a href="#" className="text-xs text-slate-600 transition hover:text-slate-950 hover:font-semibold">
                Refund Policy
              </a>
            </nav>
          </div>

          {/* Right - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-950">
              Sign Up For Newsletter
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Subscribe to get special offers and exclusive updates on new collections.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Full Width Footer Bottom */}
      <div className="w-full border-t border-gray-300 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm md:text-base tracking-[0.15em] text-gray-200">
              &copy; 2024 The Bella's Beauty. All rights reserved.
            </p>
            <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase">
              Designed with elegance for premium fashion enthusiasts
            </p>
            <p className="text-xs text-gray-500 pt-2">
              Crafted by TBB — Timeless Beauty, Elegant Style
            </p>
          </div>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
}
