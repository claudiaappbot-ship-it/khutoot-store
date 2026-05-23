'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

interface Collection {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  href: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 'calligraphy',
    title: { ar: 'الخط العربي', en: 'Arabic Calligraphy' },
    description: {
      ar: 'تصاميم مستوحاة من الخط العربي التقليدي والحديث. كل قطعة تمزج بين الفن والكلمة بأناقة.',
      en: 'Designs inspired by traditional and modern Arabic calligraphy. Each piece blends art and language with elegance.',
    },
    href: '/collections',
    image: '/collections/calligraphy.jpg',
  },
  {
    id: 'geometric-patterns',
    title: { ar: 'الأنماط الهندسية', en: 'Geometric Patterns' },
    description: {
      ar: 'أنماط هندسية معاصرة مستوحاة من الفن الإسلامي التقليدي. تصاميم عصرية تحافظ على التراث.',
      en: 'Contemporary geometric patterns inspired by traditional Islamic art. Modern designs that honor heritage.',
    },
    href: '/collections',
    image: '/collections/geometric.jpg',
  },
  {
    id: 'cultural-symbols',
    title: { ar: 'الرموز الثقافية', en: 'Cultural Symbols' },
    description: {
      ar: 'احتفاء بالرموز والعناصر الثقافية السعودية - القهوة العربية، الخيل، الصقور، والعادات الأصيلة.',
      en: 'Celebrating Saudi cultural symbols - Arabic coffee, horses, falcons, and authentic traditions.',
    },
    href: '/collections',
    image: '/collections/cultural.jpg',
  },
  {
    id: 'contemporary-art',
    title: { ar: 'الفن المعاصر', en: 'Contemporary Art' },
    description: {
      ar: 'تصاميم معاصرة جريئة تعكس روح العصر مع احترام التراث. فن حديث بهوية سعودية.',
      en: 'Bold contemporary designs reflecting modern spirit while honoring heritage. Modern art with Saudi identity.',
    },
    href: '/collections',
    image: '/collections/contemporary.jpg',
  },
];

export default function FeaturedCollections() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="mb-16 space-y-4">
          <h2 className="text-text-primary">
            {isArabic ? 'المجموعات المختارة' : 'Featured Collections'}
          </h2>
          <div className="w-16 h-px bg-accent-taupe" />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group"
            >
              <div className="space-y-6 cursor-pointer">
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light overflow-hidden group-hover:border-text-primary transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm">
                    <span>{isArabic ? 'صورة المجموعة' : 'Collection Image'}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-text-primary text-2xl font-semibold">
                    {isArabic ? collection.title.ar : collection.title.en}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {isArabic ? collection.description.ar : collection.description.en}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-text-primary group-hover:text-accent-taupe transition-colors">
                    <span className="text-sm font-medium">
                      {isArabic ? 'استكشف' : 'Explore'}
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
