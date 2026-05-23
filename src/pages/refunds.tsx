'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Refunds() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'سياسة الاسترجاع والمبالغ المرجعة' : 'Refund Policy'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'نريدك أن تكون راضياً تماماً عن عملياتك معنا.'
              : 'We want you to be completely satisfied with your purchases from us.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl">
          <div className="space-y-8">
            {[
              {
                titleAr: 'رضا العميل مضمون',
                titleEn: 'Customer Satisfaction Guaranteed',
                contentAr: 'نحن واثقون من جودة تصاميمنا. إذا لم تكن راضياً عن شراءك، فنحن هنا لحل المشكلة.',
                contentEn: 'We are confident in the quality of our designs. If you\'re not satisfied with your purchase, we\'re here to help.',
              },
              {
                titleAr: '30 يوم ضمان رضا العملاء',
                titleEn: '30-Day Satisfaction Guarantee',
                contentAr: 'إذا كنت غير راضٍ عن أي تصميم رقمي في غضون 30 يوماً من الشراء، سنقوم برد أموالك بالكامل - بدون أسئلة.',
                contentEn: 'If you\'re not satisfied with any digital design within 30 days of purchase, we\'ll provide a full refund - no questions asked.',
              },
              {
                titleAr: 'كيفية طلب استرجاع المبلغ',
                titleEn: 'How to Request a Refund',
                contentAr: 'للمطالبة باسترجاع، اتصل بنا على hello@khutoot.studio مع تفاصيل طلبك. سنعالج طلبك في غضون 5 أيام عمل.',
                contentEn: 'To request a refund, contact us at hello@khutoot.studio with details of your order. We\'ll process your request within 5 business days.',
              },
              {
                titleAr: 'الطلبات المخصصة',
                titleEn: 'Custom Orders',
                contentAr: 'بالنسبة للطلبات المخصصة، سيتم شرح سياسة الاسترجاع أثناء عملية الاستشارة. عادة ما نقدم مراجعات محدودة لضمان الرضا.',
                contentEn: 'For custom orders, the refund policy will be explained during the consultation process. We typically provide limited revisions to ensure satisfaction.',
              },
              {
                titleAr: 'ملاحظات مهمة',
                titleEn: 'Important Notes',
                contentAr: 'جميع الاسترجاعات للتصاميم الرقمية فقط. بمجرد تحميل التصميم، لا يمكن استرجاع المبلغ بعد 30 يوماً.',
                contentEn: 'All refunds are for digital designs only. Once a design is downloaded, no refunds will be issued after 30 days.',
              },
              {
                titleAr: 'التواصل معنا',
                titleEn: 'Contact Us',
                contentAr: 'هل لديك أسئلة؟ لا تتردد في الاتصال بنا في صفحة الاتصال.',
                contentEn: 'Have questions? Feel free to reach out to us on our contact page.',
              },
            ].map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-2xl font-semibold text-text-primary">
                  {isArabic ? section.titleAr : section.titleEn}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {isArabic ? section.contentAr : section.contentEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-text-primary text-bg-primary px-4">
        <div className="container-sm text-center space-y-6">
          <h2 className="text-bg-primary">
            {isArabic ? 'هل لديك استفسار؟' : 'Have a Question?'}
          </h2>
          <p className="text-lg text-bg-primary opacity-90">
            {isArabic
              ? 'نحن هنا للمساعدة. اتصل بنا إذا كان لديك أي استفسارات.'
              : 'We\'re here to help. Contact us if you have any questions.'}
          </p>
          <Link href="/contact" className="inline-block btn-primary">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </main>
  );
}
