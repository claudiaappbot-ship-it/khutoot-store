import Head from 'next/head';
import { useState, useMemo } from 'react';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { allProducts } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

const categories = [
  { id: 'all', label: { ar: 'جميع المنتجات', en: 'All Products' } },
  { id: 'blueprints', label: { ar: 'المخططات', en: 'Blueprints' } },
  { id: 'maps', label: { ar: 'الخرائط', en: 'Maps' } },
  { id: 'landmarks', label: { ar: 'المعالم', en: 'Landmarks' } },
  { id: 'arabic-art', label: { ar: 'الفن العربي', en: 'Arabic Art' } },
];

const priceRanges = [
  { id: 'all', label: { ar: 'جميع الأسعار', en: 'All Prices' } },
  { id: '0-100', label: { ar: '0 - 100 ريال', en: '$0 - $100' } },
  { id: '100-300', label: { ar: '100 - 300 ريال', en: '$100 - $300' } },
  { id: '300-500', label: { ar: '300+ ريال', en: '$300+' } },
];

export default function Shop() {
  const { t, isArabic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max === 500) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    // Sort
    if (sortBy === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'price-low') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <>
      <Head>
        <title>{isArabic ? 'المتجر - خطوط المدينة' : 'Shop - Urban Lines'}</title>
        <meta name="description" content={isArabic ? 'تصفح جميع المنتجات والتصاميم' : 'Browse all products and designs'} />
      </Head>

      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-primary-text mb-4">{isArabic ? 'المتجر' : 'Shop'}</h1>
            <p className="text-xl text-gray-600">{isArabic ? 'استكشف مجموعتنا الكاملة من التصاميم الفنية' : 'Explore our complete collection of digital designs'}</p>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <FilterSidebar
                categories={categories}
                priceRanges={priceRanges}
                selectedCategory={selectedCategory}
                selectedPrice={selectedPrice}
                onCategoryChange={setSelectedCategory}
                onPriceChange={setSelectedPrice}
                onSortChange={setSortBy}
                sortBy={sortBy}
              />
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
