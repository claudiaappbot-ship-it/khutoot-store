'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { setLanguage, isArabic } = useLanguage();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: { ar: 'المجموعات', en: 'Collections' }, href: '/collections' },
    { label: { ar: 'حول المتجر', en: 'About' }, href: '/about' },
    { label: { ar: 'اتصل بنا', en: 'Contact' }, href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(isArabic ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-bg-primary border-b border-border-light">
      <nav className="container-max h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-3">
          <div className="w-10 h-10 bg-text-primary flex items-center justify-center">
            <span className="text-bg-primary font-bold text-lg">خ</span>
          </div>
          <span className="hidden sm:inline text-lg font-bold text-text-primary">
            {isArabic ? 'خطوط' : 'Khutoot'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                router.pathname === item.href
                  ? 'text-accent-taupe'
                  : 'text-text-primary hover:text-accent-taupe'
              }`}
            >
              {isArabic ? item.label.ar : item.label.en}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm font-medium text-text-primary border border-border-light hover:border-accent-taupe transition-colors duration-200"
          >
            {isArabic ? 'EN' : 'AR'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg-primary border-b border-border-light">
          <div className="container-max py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-text-primary hover:bg-border-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isArabic ? item.label.ar : item.label.en}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
