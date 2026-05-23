'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Shipping() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'سياسة الشحن' : 'Shipping Policy'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'تصاميمنا الرقمية تُسلّم فوراً - لا توجد تأخيرات في الشحن.'
              : 'Our digital designs are delivered instantly - no shipping delays.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl">
          <div className="space-y-8">
            {[
              {
                titleAr: 'التسليم الفوري',
                titleEn: 'Instant Delivery',
                contentAr: 'جميع المنتجات على خطوط ستوديو عبارة عن تصاميم رقمية. بمجرد الشراء، ستتلقى رابط التحميل الخاص بك على الفور عبر البريد الإلكتروني.',
                contentEn: 'All products at Khutoot Studio are digital designs. Once purchased, you\'ll receive your download link immediately via email.',
              },
              {
                titleAr: 'متطلبات البريد الإلكتروني',
                titleEn: 'Email Requirements',
                contentAr: 'تأكد من إدخال عنوان بريدك الإلكتروني الصحيح. سيتم إرسال رابط التحميل إليك مباشرة. تحقق من مجلد البريد العشوائي إذا لم تتلق الرسالة.',
                contentEn: 'Make sure you enter the correct email address. Your download link will be sent to you immediately. Check your spam folder if you don\'t receive it.',
              },
              {
                titleAr: 'صيغ التحميل',
                titleEn: 'Download Formats',
                contentAr: 'يتم توفير التصاميم في صيغ متعددة (PDF، PNG، وغيرها) حسب المنتج. اختر الصيغة التي تناسب احتياجاتك.',
                contentEn: 'Designs are provided in multiple formats (PDF, PNG, etc.) depending on the product. Choose the format that suits your needs.',
              },
              {
                titleAr: 'دعم التحميل',
                titleEn: 'Download Support',
                contentAr: 'إذا واجهت مشاكل في التحميل، اتصل بنا على hello@khutoot.studio ويسعدنا مساعدتك.',
                contentEn: 'If you encounter any download issues, contact us at hello@khutoot.studio and we\'ll be happy to help.',
              },
              {
                titleAr: 'الطلبات المخصصة',
                titleEn: 'Custom Orders',
                contentAr: 'بالنسبة للطلبات المخصصة، سيتم مناقشة جدول التسليم أثناء الاستشارة. عادة ما يتم تسليم الطلبات المخصصة في غضون 7-14 يوماً.',
                contentEn: 'For custom orders, the delivery timeline will be discussed during consultation. Custom orders are typically delivered within 7-14 days.',
              },
              {
                titleAr: 'ملاحظات مهمة',
                titleEn: 'Important Notes',
                contentAr: 'عند الشراء، فأنت توافق على سياسة الشحن والتسليم هذه. جميع التصاميم الرقمية غير قابلة للاسترجاع بعد التحميل.',
                contentEn: 'Upon purchase, you agree to this shipping and delivery policy. All digital designs are non-returnable after download.',
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
            {isArabic ? 'هل أنت مستعد لشراء؟' : 'Ready to Purchase?'}
          </h2>
          <p className="text-lg text-bg-primary opacity-90">
            {isArabic
              ? 'استكشف مجموعاتنا واختر التصميم المثالي لك.'
              : 'Explore our collections and choose the perfect design for you.'}
          </p>
          <Link href="/collections" className="inline-block btn-primary">
            {isArabic ? 'استكشف المجموعات' : 'Explore Collections'}
          </Link>
        </div>
      </section>
    </main>
  );
}
