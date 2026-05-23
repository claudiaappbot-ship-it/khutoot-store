import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function HeroSection() {
  const { isArabic, t } = useLanguage();

  const heroTitle = {
    ar: 'مصمم للمساحات ذات الطابع',
    en: 'Designed for spaces with character',
  };

  const heroSubtitle = {
    ar: 'في استوديو خطوط، نحول الفن المعماري والتصاميم الجريئة إلى قطع فنية مُجمَّعة تروي قصة مساحتك.',
    en: 'At Khutoot Studio, we transform architectural art and bold designs into collectible pieces that tell the story of your space.',
  };

  return (
    <section className="min-h-screen bg-bg-primary relative overflow-hidden pt-32 pb-16 sm:pt-48 sm:pb-24">
      {/* Architectural background element */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="1200" y2="100" stroke="#111111" strokeWidth="1" />
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#111111" strokeWidth="1" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#111111" strokeWidth="1" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="#111111" strokeWidth="1" />
          <line x1="0" y1="500" x2="1200" y2="500" stroke="#111111" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="600" stroke="#111111" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="600" stroke="#111111" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="#111111" strokeWidth="1" />
          <line x1="400" y1="0" x2="400" y2="600" stroke="#111111" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="600" stroke="#111111" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-text-primary leading-tight">
                {isArabic ? heroTitle.ar : heroTitle.en}
              </h1>
              <div className="w-16 h-px bg-accent-taupe" />
            </div>

            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              {isArabic ? heroSubtitle.ar : heroSubtitle.en}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link
                href="/collections"
                className="btn-primary inline-block text-center"
              >
                {isArabic ? 'استكشف المجموعات' : 'Explore Collections'}
              </Link>
              <Link
                href="/custom-orders"
                className="btn-secondary inline-block text-center"
              >
                {isArabic ? 'طلب مخصص' : 'Custom Orders'}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-border-light">
              <div>
                <p className="text-3xl font-bold text-text-primary">500+</p>
                <p className="text-sm text-text-secondary mt-2">
                  {isArabic ? 'تصميم حصري' : 'Exclusive Designs'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary">2K+</p>
                <p className="text-sm text-text-secondary mt-2">
                  {isArabic ? 'مقتن راضي' : 'Happy Collectors'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary">100%</p>
                <p className="text-sm text-text-secondary mt-2">
                  {isArabic ? 'ضمان الجودة' : 'Quality Assured'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light flex items-center justify-center">
              <div className="text-center text-text-secondary text-sm">
                <p className="mb-2">{isArabic ? 'صورة بطولة ضاحكة' : 'Hero Image Placeholder'}</p>
                <p className="text-xs">800x800px</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-text-secondary opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-xs uppercase tracking-widest">
              {isArabic ? 'اكتشف المزيد' : 'Scroll to explore'}
            </p>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
