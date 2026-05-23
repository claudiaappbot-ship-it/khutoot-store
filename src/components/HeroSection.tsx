'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function HeroSection() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-bg-primary py-32 sm:py-48 px-4 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-8">
            {/* Opening Greeting */}
            <div className="text-text-secondary text-lg font-light">
              {isArabic ? 'السلام عليكم ورحمة الله وبركاته' : 'Welcome'}
            </div>

            {/* Main Heading */}
            <h1 className="text-text-primary leading-tight">
              {isArabic
                ? 'احتفاء بالأصالة والمعاصرة'
                : 'Celebrating Heritage and Modernity'}
            </h1>

            {/* Accent Line */}
            <div className="w-16 h-px bg-accent-taupe" />

            {/* Subheading with Cultural Language */}
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              {isArabic
                ? 'تصاميم فنية متنوعة تعكس جمال الثقافة السعودية. من الخط العربي إلى الفن المعاصر، كل قطعة تحكي قصة هويتنا.'
                : 'Diverse artistic designs reflecting the beauty of Saudi culture. From Arabic calligraphy to contemporary art, every piece tells the story of our identity.'}
            </p>

            {/* Trust Indicator */}
            <div className="text-text-secondary text-sm space-y-2">
              <div>✓ {isArabic ? 'تصاميم حصرية 100%' : '100% Exclusive Designs'}</div>
              <div>✓ {isArabic ? 'فنون وثقافة سعودية أصيلة' : 'Authentic Saudi Arts & Culture'}</div>
              <div>✓ {isArabic ? 'حرفية عالية الجودة' : 'Premium Craftsmanship'}</div>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="/collections" className="btn-primary inline-block">
                {isArabic ? 'استكشف المجموعات' : 'Explore Collections'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
