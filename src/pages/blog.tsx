'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Blog() {
  const { isArabic } = useLanguage();

  const blogPosts = [
    {
      id: 'coming-soon-1',
      titleAr: 'الفن والتراث: رحلة استكشافية',
      titleEn: 'Art and Heritage: An Explorative Journey',
      excerptAr: 'استكشاف العلاقة العميقة بين الفن المعاصر والتراث السعودي الأصيل...',
      excerptEn: 'Exploring the deep connection between contemporary art and authentic Saudi heritage...',
      dateAr: 'قريباً',
      dateEn: 'Coming Soon',
    },
    {
      id: 'coming-soon-2',
      titleAr: 'خلف الكواليس: عملية التصميم',
      titleEn: 'Behind the Scenes: Our Design Process',
      excerptAr: 'اكتشف كيف ننشئ كل تصميم بعناية وشغف واهتمام بالتفاصيل...',
      excerptEn: 'Discover how we create each design with care, passion, and attention to detail...',
      dateAr: 'قريباً',
      dateEn: 'Coming Soon',
    },
    {
      id: 'coming-soon-3',
      titleAr: 'الثقافة السعودية في التصميم الحديث',
      titleEn: 'Saudi Culture in Modern Design',
      excerptAr: 'كيف نحتفي بالثقافة السعودية من خلال التصاميم المعاصرة والجريئة...',
      excerptEn: 'How we celebrate Saudi culture through contemporary and bold designs...',
      dateAr: 'قريباً',
      dateEn: 'Coming Soon',
    },
  ];

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'المدونة' : 'Blog'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'اقرأ عن الفن والتصاميم والثقافة السعودية. نشاركك أفكارنا وخبراتنا.'
              : 'Read about art, design, and Saudi culture. We share our insights and experiences.'}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="space-y-4 pb-12 border-b border-border-light last:border-b-0">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-text-primary">
                    {isArabic ? post.titleAr : post.titleEn}
                  </h2>
                  <p className="text-sm text-text-secondary">
                    {isArabic ? post.dateAr : post.dateEn}
                  </p>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {isArabic ? post.excerptAr : post.excerptEn}
                </p>
                <a href="#" className="inline-block text-accent-taupe hover:text-accent-secondary transition-colors font-medium">
                  {isArabic ? 'اقرأ المزيد' : 'Read More'} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-sm text-center space-y-6">
          <h2 className="text-bg-primary">
            {isArabic ? 'تابع آخر منشوراتنا' : 'Stay Updated'}
          </h2>
          <p className="text-lg text-bg-primary opacity-90">
            {isArabic
              ? 'اشترك في رسالتنا البريدية للحصول على آخر المنشورات والأفكار مباشرة إلى بريدك.'
              : 'Subscribe to our newsletter to get our latest posts and insights delivered to your inbox.'}
          </p>
        </div>
      </section>
    </main>
  );
}
