import { useLanguage } from '@/context/LanguageContext';

export default function CustomerShowcase() {
  const { isArabic } = useLanguage();

  const testimonials = [
    { author: isArabic ? 'فاطمة' : 'Fatima', text: isArabic ? 'التصاميم رائعة والجودة عالية جداً' : 'Amazing designs, excellent quality', rating: 5 },
    { author: isArabic ? 'محمد' : 'Mohammed', text: isArabic ? 'خدمة العملاء احترافية جداً' : 'Professional customer service', rating: 5 },
    { author: isArabic ? 'نور' : 'Noor', text: isArabic ? 'أفضل متجر للتصاميم الفنية' : 'Best art design store', rating: 5 },
  ];

  return (
    <section className="py-24 bg-primary-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'آراء العملاء' : 'Customer Reviews'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white dark:bg-primary-dark p-8 rounded-lg shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-primary-text dark:text-primary-text-light">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
