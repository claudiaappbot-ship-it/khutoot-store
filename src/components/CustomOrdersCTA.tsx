'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function CustomOrdersCTA() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light flex items-center justify-center">
              <div className="text-center text-text-secondary text-sm">
                <p className="mb-2">{isArabic ? 'صورة طلب مخصص' : 'Custom Order Image'}</p>
                <p className="text-xs">800x800px</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-text-primary">
                {isArabic ? 'أحضر رؤيتك إلى الحياة' : 'Bring Your Vision to Life'}
              </h2>
              <div className="w-16 h-px bg-accent-taupe" />
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              {isArabic
                ? 'هل لديك فكرة فريدة؟ نحن نتقبل طلبات مخصصة للتصاميم التي تعكس شخصيتك وأسلوبك. من مدينة مفضلة إلى سيارة حلم، يمكننا أن نصنعها.'
                : 'Have a unique idea? We accept custom orders for designs that reflect your personality and style. From your favorite city to your dream car, we can create it.'}
            </p>

            <ul className="space-y-4">
              {[
                {
                  ar: 'تصاميم فريدة 100% مصممة خصيصًا',
                  en: '100% Unique designs created specifically for you',
                },
                {
                  ar: 'إمكانيات تخصيص لا محدودة',
                  en: 'Unlimited customization possibilities',
                },
                {
                  ar: 'استشارة مجانية مع فريق التصميم',
                  en: 'Free consultation with our design team',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-accent-taupe flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-text-primary">
                    {isArabic ? item.ar : item.en}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary inline-block">
              {isArabic ? 'ابدأ طلبك المخصص' : 'Start Your Custom Order'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
