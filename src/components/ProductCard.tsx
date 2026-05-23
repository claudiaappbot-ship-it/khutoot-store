import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductCard({ product }: { product: Product }) {
  const { isArabic } = useLanguage();
  const title = isArabic ? product.title.ar : product.title.en;

  return (
    <Link href={`/${product.category}/${product.slug}`}>
      <div className="product-card cursor-pointer">
        <div className="relative bg-primary-light aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-primary-gold text-primary-dark px-3 py-1 rounded-full text-xs font-bold">
            {isArabic ? 'تحميل فوري' : 'Instant Download'}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-primary-text dark:text-primary-text-light mb-2 line-clamp-2">{title}</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-2xl font-bold text-primary-gold">{product.price.toLocaleString()} {isArabic ? 'ر.س' : 'SAR'}</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
              <span className="text-lg">⭐</span>
            </div>
          </div>
          <button className="w-full py-2 bg-primary-text text-white dark:bg-primary-gold dark:text-primary-dark font-bold rounded hover:shadow-card transition-all duration-300">
            {isArabic ? 'أضف للسلة' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </Link>
  );
}
