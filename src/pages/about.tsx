'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function About() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-text-primary">
                {isArabic ? 'عن خطوط' : 'About Khutoot'}
              </h1>
              <div className="w-16 h-px bg-accent-taupe mx-auto" />
            </div>
            <p className="text-xl text-text-secondary leading-relaxed">
              {isArabic
                ? 'استوديو تصميم مكرس لإحياء الثقافة والهوية السعودية من خلال الفن والإبداع.'
                : 'A design studio dedicated to bringing Saudi culture and identity to life through art and creativity.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-bg-primary">
                {isArabic ? 'رسالتنا' : 'Our Mission'}
              </h2>
              <p className="text-lg text-bg-primary opacity-90 leading-relaxed">
                {isArabic
                  ? 'في خطوط، نؤمن أن الفن هو لغة عالمية تحكي قصتنا. نعمل على إنشاء تصاميم تعكس غنى وتنوع الثقافة السعودية - من الخط العربي الأنيق إلى الفن المعاصر الجريء.'
                  : 'At Khutoot, we believe art is a universal language that tells our story. We create designs that reflect the richness and diversity of Saudi culture—from elegant Arabic calligraphy to bold contemporary art.'}
              </p>
              <p className="text-lg text-bg-primary opacity-90 leading-relaxed">
                {isArabic
                  ? 'كل قطعة فنية نصنعها هي دعوة لك لتشعر بفخرك بوطنك، لتحتفي بتراثك، ولتعيش في فضاء يعكس هويتك وقيمك.'
                  : 'Every artwork we create is an invitation for you to feel pride in your nation, celebrate your heritage, and live in spaces that reflect your identity and values.'}
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light flex items-center justify-center">
              <div className="text-center text-text-secondary">
                <p className="mb-2">{isArabic ? 'صورة المحتوى' : 'Content Image'}</p>
                <p className="text-xs">800x800px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-24 px-4">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center space-y-4">
              <h2 className="text-text-primary">
                {isArabic ? 'ماذا نخلق؟' : 'What We Create'}
              </h2>
              <div className="w-16 h-px bg-accent-taupe mx-auto" />
            </div>

            <div className="space-y-12">
              {[
                {
                  arTitle: 'الفن الثقافي',
                  enTitle: 'Cultural Art',
                  arDesc: 'تصاميم تحتفي بالتراث السعودي الأصيل - الحرف التقليدية، الرموز الثقافية، والعناصر التاريخية التي تشكل هويتنا.',
                  enDesc: 'Designs celebrating authentic Saudi heritage—traditional crafts, cultural symbols, and historical elements that shape our identity.',
                },
                {
                  arTitle: 'الفن المعاصر',
                  enTitle: 'Contemporary Art',
                  arDesc: 'تصاميم حديثة وجريئة تعكس روح العصر. فن معاصر له جذور في ثقافتنا وهويتنا.',
                  enDesc: 'Modern and bold designs reflecting contemporary spirit. Contemporary art with roots in our culture and identity.',
                },
                {
                  arTitle: 'الفن الملهم',
                  enTitle: 'Inspirational Art',
                  arDesc: 'تصاميم تضيف معنى وجمالاً لفضاءاتك. فن يحكي قصة وينشر الإيجابية والقيم الأصيلة.',
                  enDesc: 'Designs that add meaning and beauty to your spaces. Art that tells a story and spreads positivity and authentic values.',
                },
                {
                  arTitle: 'الطلبات المخصصة',
                  enTitle: 'Custom Commissions',
                  arDesc: 'نخلق بناءً على رؤيتك. إذا كان لديك فكرة تريد تحويلها إلى فن، فنحن هنا لجعلها حقيقة.',
                  enDesc: 'We create based on your vision. If you have an idea you want to transform into art, we\'re here to make it real.',
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4 pb-8 border-b border-border-light last:border-b-0">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {isArabic ? item.arTitle : item.enTitle}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {isArabic ? item.arDesc : item.enDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center space-y-4">
              <h2 className="text-text-primary">
                {isArabic ? 'قيمنا الأساسية' : 'Our Core Values'}
              </h2>
              <div className="w-16 h-px bg-accent-taupe mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  ar: 'الأصالة',
                  en: 'Authenticity',
                  descAr: 'احتفاء حقيقي بالثقافة بدون تقليد. ننسج التراث بخيوط معاصرة.',
                  descEn: 'Genuine celebration of culture without imitation. We weave heritage with contemporary threads.',
                },
                {
                  ar: 'الإبداع',
                  en: 'Creativity',
                  descAr: 'لا حدود لخيالنا. كل تصميم هو فرصة لاستكشاف آفاق جديدة.',
                  descEn: 'No limits to our imagination. Every design is an opportunity to explore new horizons.',
                },
                {
                  ar: 'الجودة',
                  en: 'Excellence',
                  descAr: 'لا نساوم على الجودة. كل بكسل، كل خط، كل لون مختار بعناية.',
                  descEn: 'We never compromise on quality. Every pixel, every line, every color is carefully chosen.',
                },
                {
                  ar: 'الشغف',
                  en: 'Passion',
                  descAr: 'نشعر بما نفعله. حبنا لوطننا وثقافتنا ينعكس في كل عملنا.',
                  descEn: 'We feel what we do. Our love for our nation and culture reflects in every work.',
                },
              ].map((value, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-taupe flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {isArabic ? value.ar : value.en}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {isArabic ? value.descAr : value.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-sm text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-bg-primary">
              {isArabic ? 'هل أنت مستعد للاحتفاء؟' : 'Ready to Celebrate?'}
            </h2>
            <div className="w-16 h-px bg-accent-taupe mx-auto" />
          </div>
          <p className="text-lg text-bg-primary opacity-90">
            {isArabic
              ? 'استكشف مجموعاتنا وجد القطعة التي تعكس روحك وهويتك.'
              : 'Explore our collections and find the piece that reflects your spirit and identity.'}
          </p>
          <Link href="/collections" className="btn-primary inline-block">
            {isArabic ? 'استكشف المجموعات' : 'Explore Collections'}
          </Link>
        </div>
      </section>
    </main>
  );
}
