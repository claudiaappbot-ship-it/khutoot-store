import { allProducts } from '@/data/products';
import ProductGrid from '../ProductGrid';
import { useLanguage } from '@/context/LanguageContext';

export default function BestSellers() {
  const { isArabic } = useLanguage();
  const bestSellers = allProducts.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section className="py-24 bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'الأكثر مبيعاً' : 'Best Sellers'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
          {isArabic ? 'أفضل التصاميم والأكثر تقييماً من عملائنا' : 'Top-rated designs from our customers'}
        </p>
        <ProductGrid products={bestSellers} />
      </div>
    </section>
  );
}
