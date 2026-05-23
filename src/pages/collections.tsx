'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Collections() {
  const { isArabic } = useLanguage();

  const collections = [
    {
      id: 'calligraphy',
      titleAr: 'الخط العربي',
      titleEn: 'Arabic Calligraphy',
      descAr: 'تصاميم مستوحاة من الخط العربي التقليدي والحديث. كل قطعة تمزج بين الفن والكلمة بأناقة.',
      descEn: 'Designs inspired by traditional and modern Arabic calligraphy. Each piece blends art and language with elegance.',
      image: '/collections/calligraphy.jpg',
    },
    {
      id: 'geometric-patterns',
      titleAr: 'الأنماط الهندسية',
      titleEn: 'Geometric Patterns',
      descAr: 'أنماط هندسية معاصرة مستوحاة من الفن الإسلامي التقليدي. تصاميم عصرية تحافظ على التراث.',
      descEn: 'Contemporary geometric patterns inspired by traditional Islamic art. Modern designs that honor heritage.',
      image: '/collections/geometric.jpg',
    },
    {
      id: 'cultural-symbols',
      titleAr: 'الرموز الثقافية',
      titleEn: 'Cultural Symbols',
      descAr: 'احتفاء بالرموز والعناصر الثقافية السعودية - القهوة العربية، الخيل، الصقور، والعادات الأصيلة.',
      descEn: 'Celebrating Saudi cultural symbols - Arabic coffee, horses, falcons, and authentic traditions.',
      image: '/collections/cultural.jpg',
    },
    {
      id: 'landscape-art',
      titleAr: 'الفن التصويري',
      titleEn: 'Landscape & Scenic Art',
      descAr: 'مناظر طبيعية وعناصر بصرية تعكس جمال المملكة - الصحراء والواحات والمدن.',
      descEn: 'Natural scenes and visual elements reflecting Saudi Arabia\'s beauty - deserts, oases, and cities.',
      image: '/collections/landscape.jpg',
    },
    {
      id: 'contemporary-art',
      titleAr: 'الفن المعاصر',
      titleEn: 'Contemporary Art',
      descAr: 'تصاميم معاصرة جريئة تعكس روح العصر مع احترام التراث. فن حديث بهوية سعودية.',
      descEn: 'Bold contemporary designs reflecting modern spirit while honoring heritage. Modern art with Saudi identity.',
      image: '/collections/contemporary.jpg',
    },
    {
      id: 'inspirational',
      titleAr: 'الفن الملهم',
      titleEn: 'Inspirational Art',
      descAr: 'تصاميم ملهمة مستوحاة من الحكم والقيم السعودية. فن يضيف جمالاً ومعنى لفضاءاتك.',
      descEn: 'Inspiring designs based on Saudi wisdom and values. Art that adds beauty and meaning to your spaces.',
      image: '/collections/inspirational.jpg',
    },
    {
      id: 'abstract-minimal',
      titleAr: 'الفن المجرد والبسيط',
      titleEn: 'Abstract & Minimal',
      descAr: 'تصاميم مجردة وبسيطة لمن يحبون الجمالية النظيفة والعصرية. قوة في البساطة.',
      descEn: 'Abstract and minimal designs for those who love clean, modern aesthetics. Power in simplicity.',
      image: '/collections/abstract.jpg',
    },
    {
      id: 'traditional-crafts',
      titleAr: 'الحرف التقليدية',
      titleEn: 'Traditional Crafts',
      descAr: 'احتفاء بالحرف والصنائع التقليدية السعودية - النسيج والخزف والتطريز والفنون اليدوية.',
      descEn: 'Celebrating traditional Saudi crafts - weaving, ceramics, embroidery, and handmade arts.',
      image: '/collections/crafts.jpg',
    },
  ];

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'مجموعاتنا' : 'Our Collections'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'استكشف مجموعاتنا المتنوعة من الفنون والتصاميم. كل قطعة هي احتفاء بالثقافة والإبداع والهوية السعودية.'
              : 'Explore our diverse collections of art and designs. Each piece celebrates culture, creativity, and Saudi identity.'}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {collections.map((collection) => (
              <div key={collection.id} className="space-y-6">
                <div className="aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light flex items-center justify-center">
                  <div className="text-center text-text-secondary">
                    <p className="mb-2">{isArabic ? 'صورة المجموعة' : 'Collection Image'}</p>
                    <p className="text-xs">800x800px</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    {isArabic ? collection.titleAr : collection.titleEn}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {isArabic ? collection.descAr : collection.descEn}
                  </p>
                  <a href="#" className="inline-block text-accent-taupe hover:text-accent-secondary transition-colors font-medium">
                    {isArabic ? 'استكشف' : 'Explore'} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Khutoot */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-max text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-bg-primary">
              {isArabic ? 'لماذا خطوط؟' : 'Why Khutoot?'}
            </h2>
            <div className="w-16 h-px bg-accent-taupe mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                arTitle: 'متنوع وشامل',
                enTitle: 'Diverse & Inclusive',
                arDesc: 'من الخط العربي إلى الفن المعاصر، لدينا شيء لكل ذوق وكل فضاء.',
                enDesc: 'From Arabic calligraphy to contemporary art, we have something for every taste and space.',
              },
              {
                arTitle: 'أصيل وحديث',
                enTitle: 'Authentic & Modern',
                arDesc: 'نحتفي بالتراث السعودي من خلال عدسة معاصرة وجديدة.',
                enDesc: 'We celebrate Saudi heritage through a contemporary and fresh lens.',
              },
              {
                arTitle: 'حرفية عالية',
                enTitle: 'Crafted with Care',
                arDesc: 'كل تصميم يتم إنشاؤه بعناية واهتمام بالتفاصيل والجودة.',
                enDesc: 'Every design is created with meticulous attention to detail and quality.',
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-bg-primary font-semibold">
                  {isArabic ? item.arTitle : item.enTitle}
                </h3>
                <p className="text-bg-primary opacity-80">
                  {isArabic ? item.arDesc : item.enDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
