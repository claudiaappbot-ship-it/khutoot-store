'use client';

import { useLanguage } from '@/context/LanguageContext';

interface CustomerSpace {
  id: string;
  image: string;
  altAr: string;
  altEn: string;
}

const customerSpaces: CustomerSpace[] = [
  {
    id: 'space-1',
    image: '/spaces/modern-living.jpg',
    altAr: 'غرفة معيشة حديثة مع فن خطوط',
    altEn: 'Modern living room with Khutoot art',
  },
  {
    id: 'space-2',
    image: '/spaces/home-office.jpg',
    altAr: 'مكتب منزلي بتصاميم معمارية',
    altEn: 'Home office with architectural designs',
  },
  {
    id: 'space-3',
    image: '/spaces/bedroom.jpg',
    altAr: 'غرفة نوم مريحة مع خرائط سعودية',
    altEn: 'Cozy bedroom with Saudi maps',
  },
  {
    id: 'space-4',
    image: '/spaces/gallery-wall.jpg',
    altAr: 'جدار معرض بمجموعة متنوعة',
    altEn: 'Gallery wall with curated collection',
  },
  {
    id: 'space-5',
    image: '/spaces/commercial.jpg',
    altAr: 'مساحة تجارية بفن معاصر',
    altEn: 'Commercial space with contemporary art',
  },
  {
    id: 'space-6',
    image: '/spaces/minimal-aesthetic.jpg',
    altAr: 'جمالية بسيطة مع قطعة فنية مركزية',
    altEn: 'Minimalist aesthetic with focal art',
  },
];

export default function CustomerSpaces() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="mb-16 space-y-4">
          <h2 className="text-text-primary">
            {isArabic ? 'مساحات مقتنينا' : 'Customer Spaces'}
          </h2>
          <div className="w-16 h-px bg-accent-taupe" />
          <p className="text-text-secondary max-w-md">
            {isArabic
              ? 'شارك صورك باستخدام #خطوط_ستوديو'
              : 'Share your space using #KhutootStudio'}
          </p>
        </div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerSpaces.map((space) => (
            <div
              key={space.id}
              className="group aspect-square bg-gradient-to-br from-accent-secondary to-accent-taupe opacity-20 border border-border-light overflow-hidden cursor-pointer hover:border-text-primary transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm">
                <span>{isArabic ? 'صورة المساحة' : 'Customer Space'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            {isArabic
              ? 'أخبرنا عن طريقة عرضك لفنك'
              : 'Tell us how you displayed your art'}
          </p>
          <a
            href="https://instagram.com/khutoot.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            {isArabic ? 'تابعنا على إنستجرام' : 'Follow on Instagram'}
          </a>
        </div>
      </div>
    </section>
  );
}
