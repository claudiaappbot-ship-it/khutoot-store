'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const { isArabic } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      questionAr: 'هل التصاميم حصرية؟',
      questionEn: 'Are the designs exclusive?',
      answerAr: 'نعم، كل تصميماتنا فريدة وحصرية. نضمن أنك ستحصل على عمل فني لا يملكه أحد آخر بنفس التفاصيل والجودة.',
      answerEn: 'Yes, all our designs are unique and exclusive. We ensure you receive artwork that no one else will have with the same details and quality.',
    },
    {
      questionAr: 'ما هي صيغ التحميل المتاحة؟',
      questionEn: 'What download formats are available?',
      answerAr: 'نوفر تصاميمنا بصيغ متعددة مثل PDF عالي الجودة (للطباعة)، PNG، وصيغ أخرى حسب احتياجاتك.',
      answerEn: 'We provide our designs in multiple formats including high-quality PDF (for printing), PNG, and other formats based on your needs.',
    },
    {
      questionAr: 'هل يمكنني تخصيص التصميم؟',
      questionEn: 'Can I customize a design?',
      answerAr: 'بالتأكيد! نقدم خدمة تخصيص كاملة. يمكنك الاتصال بفريقنا لمناقشة أفكارك وإنشاء تصميم مخصص يعكس رؤيتك.',
      answerEn: 'Absolutely! We offer complete customization services. You can contact our team to discuss your ideas and create a custom design that reflects your vision.',
    },
    {
      questionAr: 'كم الوقت المستغرق لتسليم التصميم المخصص؟',
      questionEn: 'How long does a custom design take?',
      answerAr: 'عادة ما تستغرق الطلبات المخصصة من 7 إلى 14 يوماً، حسب تعقيد التصميم والتفاصيل المطلوبة. سنخبرك بالجدول الزمني المحدد عند الاستشارة.',
      answerEn: 'Custom orders typically take 7-14 days, depending on the complexity of the design and details required. We\'ll confirm the specific timeline during consultation.',
    },
    {
      questionAr: 'هل توفرون خدمة الطباعة؟',
      questionEn: 'Do you provide printing services?',
      answerAr: 'حالياً نركز على توفير التصاميم الرقمية عالية الجودة. يمكنك طباعتها لدى أي متخصص طباعة موثوق. سنقدم نصائحنا حول الطباعة الأمثل.',
      answerEn: 'Currently, we focus on providing high-quality digital designs. You can have them printed at any trusted printing service. We\'ll provide our recommendations for optimal printing.',
    },
    {
      questionAr: 'هل هناك ضمان لرضا العميل؟',
      questionEn: 'Is there a customer satisfaction guarantee?',
      answerAr: 'نحن ملتزمون برضاك. إذا لم تكن راضياً عن التصميم المخصص، سنعدله حتى تحصل على ما تريده بالضبط.',
      answerEn: 'We\'re committed to your satisfaction. If you\'re not happy with a custom design, we\'ll revise it until you get exactly what you want.',
    },
    {
      questionAr: 'كيف أستخدم التصاميم التجاريّة؟',
      questionEn: 'Can I use the designs commercially?',
      answerAr: 'يعتمد ذلك على نوع الترخيص. بعض التصاميم للاستخدام الشخصي فقط، وأخرى متاحة للاستخدام التجاري. سنوضح هذا عند الشراء.',
      answerEn: 'That depends on the license type. Some designs are for personal use only, while others are available for commercial use. We\'ll clarify this at purchase.',
    },
    {
      questionAr: 'كيف يمكنني البقاء محدثاً بالتصاميم الجديدة؟',
      questionEn: 'How can I stay updated with new designs?',
      answerAr: 'اشترك في قائمتنا البريدية للحصول على إشعارات بالتصاميم الجديدة والعروض الحصرية. تابعنا أيضاً على إنستجرام @khutoot.studio',
      answerEn: 'Subscribe to our newsletter to get notifications about new designs and exclusive offers. Also follow us on Instagram @khutoot.studio',
    },
  ];

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'إجابات على أسئلتك الشائعة حول خطوط والتصاميم الخاصة بنا.'
              : 'Answers to your common questions about Khutoot and our designs.'}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4">
        <div className="container-max max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border-light">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left hover:bg-text-primary hover:bg-opacity-5 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-text-primary font-medium">
                    {isArabic ? faq.questionAr : faq.questionEn}
                  </h3>
                  <span className="text-accent-taupe text-xl flex-shrink-0">
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-5 bg-text-primary bg-opacity-5 border-t border-border-light">
                    <p className="text-text-secondary leading-relaxed">
                      {isArabic ? faq.answerAr : faq.answerEn}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-sm text-center space-y-6">
          <h2 className="text-bg-primary">
            {isArabic ? 'لديك سؤال آخر؟' : 'Still have questions?'}
          </h2>
          <p className="text-lg text-bg-primary opacity-90">
            {isArabic
              ? 'لا تتردد في الاتصال بنا. فريقنا هنا للمساعدة.'
              : 'Don\'t hesitate to reach out. Our team is here to help.'}
          </p>
          <Link href="/contact" className="inline-block btn-primary">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </main>
  );
}
