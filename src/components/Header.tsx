import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { setLanguage, t, isArabic } = useLanguage();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.shop', href: '/shop' },
    { key: 'nav.blueprints', href: '/blueprints' },
    { key: 'nav.maps', href: '/maps' },
    { key: 'nav.landmarks', href: '/landmarks' },
    { key: 'nav.arabic-art', href: '/arabic-art' },
    { key: 'nav.gallery', href: '/gallery' },
  ];

  const toggleLanguage = () => {
    setLanguage(isArabic ? 'en' : 'ar');
  };

  return (
    <header className={`fixed top-0 w-full z-50 bg-white dark:bg-primary-dark border-b border-gray-100 dark:border-gray-800 ${isArabic ? 'rtl' : 'ltr'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-text dark:bg-primary-gold rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-primary-dark font-bold text-lg">خ</span>
          </div>
          <span className="hidden sm:inline text-lg font-bold text-primary-text dark:text-primary-text-light">
            {isArabic ? 'خطوط ستوديو' : 'Khutoot'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium text-primary-text dark:text-primary-text-light hover:text-primary-gold transition-colors ${
                router.pathname.startsWith(item.href.split('/')[1]) ? 'text-primary-gold' : ''
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm font-medium text-primary-text dark:text-primary-text-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isArabic ? 'EN' : 'AR'}
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 text-primary-text dark:text-primary-text-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary-gold text-white text-xs rounded-full flex items-center justify-center">0</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary-text dark:text-primary-text-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-primary-dark border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-primary-text dark:text-primary-text-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
