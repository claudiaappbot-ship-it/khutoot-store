import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductInfo({ product }: { product: Product }) {
  const { isArabic, t } = useLanguage();

  return (
    <div>
      {/* Title & Rating */}
      <h1 className="text-4xl font-bold mb-2 text-primary-text dark:text-primary-text-light">
        {isArabic ? product.title.ar : product.title.en}
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-1">
          {[...Array(Math.round(product.rating))].map((_, i) => (
            <span key={i} className="text-2xl">⭐</span>
          ))}
        </div>
        <span className="text-gray-600 dark:text-gray-400">{product.reviewCount} {isArabic ? 'تقييم' : 'reviews'}</span>
      </div>

      {/* Price */}
      <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
        <p className="text-4xl font-bold text-primary-gold mb-2">
          {product.price.toLocaleString()} {isArabic ? 'ر.س' : 'SAR'}
        </p>
        <span className="inline-block bg-primary-gold text-primary-dark px-4 py-2 rounded-full font-bold text-sm">
          {t('product.instantDownload')}
        </span>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-3 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'الوصف' : 'Description'}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {isArabic ? product.description.ar : product.description.en}
        </p>
      </div>

      {/* Download Formats */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-3 text-primary-text dark:text-primary-text-light">
          {t('product.formats')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.downloadFormats.map(format => (
            <span key={format} className="px-4 py-2 border border-primary-text dark:border-primary-text-light rounded-lg text-sm font-medium">
              {format}
            </span>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-3 text-primary-text dark:text-primary-text-light">
          {t('product.sizes')}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {product.sizes.map(size => (
            <button
              key={size.label}
              className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-gold transition-colors text-sm font-medium"
            >
              {size.label} ({size.dimensions})
            </button>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 py-4 bg-primary-text text-white dark:bg-primary-gold dark:text-primary-dark font-bold rounded-lg hover:shadow-hover transition-all duration-300">
          {t('product.addToCart')}
        </button>
        <button className="flex-1 py-4 border-2 border-primary-text dark:border-primary-gold text-primary-text dark:text-primary-gold font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
          {t('product.addToWishlist')}
        </button>
      </div>

      {/* Made for Saudi Homes Badge */}
      <div className="mt-8 p-4 bg-primary-light dark:bg-gray-800 rounded-lg flex items-center gap-3">
        <span className="text-2xl">🇸🇦</span>
        <span className="font-medium text-primary-text dark:text-primary-text-light">
          {t('product.madeForSaudi')}
        </span>
      </div>
    </div>
  );
}
