'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function EditorialStory() {
  const { isArabic } = useLanguage();

  const storyContent = {
    heading: {
      ar: 'استوديو خطوط: خلف كل مخطط قصة',
      en: 'The Studio Behind the Blueprint',
    },
    paragraphs: {
      ar: [
        'نحن في خطوط لا نصنع مجرد ملصقات. نحن ننشئ أيقونات معمارية لمساحات مليئة بالطابع والشخصية. كل تصميم هو نتيجة دراسة عميقة للجماليات المعاصرة والتراث السعودي الغني.',
        'يعكس عملنا رؤية واضحة: أن تصبح الجودة والتصميم المتفكر فيه والحرفية معايير جديدة في مساحتك. نختار كل التفاصيل بعناية، من الخطوط الحادة التي لا تُعفى إلى الألوان الدافئة التي تحكي قصة.',
        'في استوديو خطوط، نؤمن بأن الفن الحقيقي يجب أن يثير الحوار. يجب أن يعكس من أنت وماذا تقدّر. هذا هو ما يحركنا يوميًا.',
      ],
      en: [
        "We at Khutoot don't make just posters. We create architectural icons for spaces filled with character and personality. Each design is the result of deep study into contemporary aesthetics and rich Saudi heritage.",
        'Our work reflects a clear vision: to make quality, thoughtful design, and craftsmanship new standards in your space. We carefully consider every detail, from sharp lines to warm colors that tell a story.',
        'At Khutoot Studio, we believe true art must spark conversation. It should reflect who you are and what you value. This is what drives us every day.',
      ],
    },
    cta: {
      ar: 'اقرأ قصتنا الكاملة',
      en: 'Read Our Full Story',
    },
  };

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-text-primary">
                {isArabic ? storyContent.heading.ar : storyContent.heading.en}
              </h2>
              <div className="w-16 h-px bg-accent-taupe" />
            </div>

            <div className="space-y-6">
              {(isArabic ? storyContent.paragraphs.ar : storyContent.paragraphs.en).map(
                (paragraph, idx) => (
                  <p key={idx} className="text-text-secondary text-lg leading-relaxed">
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <Link href="/about" className="btn-primary inline-block">
              {isArabic ? storyContent.cta.ar : storyContent.cta.en}
            </Link>
          </div>

          {/* Right: Image Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-accent-secondary to-accent-taupe opacity-20 border border-border-light flex items-center justify-center">
              <div className="text-center text-text-secondary text-sm">
                <p className="mb-2">{isArabic ? 'صورة الاستوديو' : 'Studio Lifestyle Image'}</p>
                <p className="text-xs">800x800px</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
