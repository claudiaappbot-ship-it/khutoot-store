import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { useLanguage } from '@/context/LanguageContext';

export default function SimilarProducts({ products }: { products: Product[] }) {
  const { isArabic } = useLanguage();

  if (products.length === 0) return null;

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-12 text-primary-text dark:text-primary-text-light">
        {isArabic ? 'قد يعجبك أيضاً' : 'You May Also Like'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
