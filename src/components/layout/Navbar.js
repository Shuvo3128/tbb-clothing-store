'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { href: '/shop?category=dresses', label: 'Dresses' },
  { href: '/shop?category=tops', label: 'Tops' },
  { href: '/shop?category=kurtis', label: 'Kurtis' },
  { href: '/shop?category=sarees', label: 'Sarees' },
  { href: '/shop?category=accessories', label: 'Accessories' },
];

function Icon({ children, label }) {
  return (
    <button 
      className="group relative flex h-11 w-11 items-center justify-center text-slate-500 transition-all duration-300 hover:text-[#c9a96e]"
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-[0_2px_30px_rgba(0,0,0,0.08)]'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex flex-col items-start shrink-0">
            <span className="text-4xl font-light tracking-[0.45em] text-[#c9a96e]">TBB</span>
            <span className="mt-1 text-[10px] font-light tracking-[0.4em] text-slate-400 uppercase whitespace-nowrap">
              The Bella's Beauty
            </span>
          </Link>

          {/* Nav - Center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 hover:text-[#c9a96e]"
              >
                {link.label}
                <span className="absolute bottom-2 left-0 h-px w-0 bg-[#c9a96e] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Icons - Right */}
          <div className="flex items-center gap-2">
            <Icon label="Search">
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.7-5.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z" />
              </svg>
            </Icon>

            {/* Auth Buttons / User Menu */}
            {loading ? (
              <div className="h-11 w-20 animate-pulse bg-slate-100 rounded-full" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600 hidden sm:block">
                  Hi, {user.name.split(' ')[0]}
                </span>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-slate-600 hover:text-[#c9a96e] transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-300 rounded-full hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}

            <Icon label="Cart">
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Icon>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex h-11 w-11 items-center justify-center text-slate-500 transition-colors duration-300 hover:text-[#c9a96e]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-100 py-8">
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 hover:text-[#c9a96e]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Auth Links */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-slate-600 hover:text-[#c9a96e]"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-slate-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="text-sm font-medium text-slate-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
