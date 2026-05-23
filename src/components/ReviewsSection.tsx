import { Review } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

interface ReviewsSectionProps {
  productId: string;
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const { isArabic, t } = useLanguage();

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-12 text-primary-text dark:text-primary-text-light">
        {t('product.reviews')}
      </h2>

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map(review => (
            <div key={review.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-primary-text dark:text-primary-text-light">
                    {review.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <h5 className="font-bold mb-2">
                {isArabic ? review.title.ar : review.title.en}
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                {isArabic ? review.content.ar : review.content.en}
              </p>
              {review.verified && (
                <span className="inline-block mt-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  ✓ {isArabic ? 'تم التحقق' : 'Verified'}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center py-12">
          {isArabic ? 'لا توجد تقييمات حتى الآن' : 'No reviews yet'}
        </p>
      )}
    </section>
  );
}
