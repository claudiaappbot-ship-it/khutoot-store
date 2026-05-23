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
    id: 'vehicles',
    title: { ar: 'مخططات المركبات', en: 'Vehicle Blueprints' },
    description: {
      ar: 'تصاميم معمارية دقيقة لأشهر المركبات، تحول الشغف الحقيقي إلى قطعة فنية.',
      en: 'Architectural precision designs of iconic vehicles, transforming passion into art.',
    },
    href: '/collections/vehicle-blueprints',
    image: '/collections/vehicles.jpg',
  },
  {
    id: 'maps',
    title: { ar: 'خرائط المدن السعودية', en: 'Saudi City Maps' },
    description: {
      ar: 'خرائط فنية لأشهر المدن السعودية، تجسيد حب الوطن في ديكورك.',
      en: 'Artistic maps of iconic Saudi cities, capturing national pride in your space.',
    },
    href: '/collections/city-maps',
    image: '/collections/maps.jpg',
  },
  {
    id: 'landmarks',
    title: { ar: 'فن المعالم', en: 'Landmark Art' },
    description: {
      ar: 'تصاميم حديثة للمعالم السعودية الشهيرة، تاريخ وحداثة في إطار واحد.',
      en: 'Contemporary designs of Saudi landmarks, bridging history and modernity.',
    },
    href: '/collections/landmarks',
    image: '/collections/landmarks.jpg',
  },
  {
    id: 'typography',
    title: { ar: 'فن الخطوط العربية', en: 'Arabic Typography' },
    description: {
      ar: 'تصاميم خطية عربية معاصرة، إعادة تعريف الجمال في الكتابة.',
      en: 'Contemporary Arabic typography designs, redefining written beauty.',
    },
    href: '/collections/arabic-typography',
    image: '/collections/typography.jpg',
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
