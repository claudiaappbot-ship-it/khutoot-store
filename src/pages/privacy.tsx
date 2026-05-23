'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Privacy() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'نحن نحترم خصوصيتك ونلتزم بحماية بيانات العملاء.'
              : 'We respect your privacy and are committed to protecting your personal data.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl prose prose-invert">
          <div className="space-y-8">
            {[
              {
                titleAr: 'مقدمة',
                titleEn: 'Introduction',
                contentAr: 'تحترم خطوط ستوديو خصوصيتك وملتزمة بحماية بيانات شخصية التي تشاركها معنا. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والحفاظ على معلوماتك.',
                contentEn: 'Khutoot Studio respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.',
              },
              {
                titleAr: 'المعلومات التي نجمعها',
                titleEn: 'Information We Collect',
                contentAr: 'نجمع المعلومات التي تختار مشاركتها معنا طواعية، مثل اسمك وبريدك الإلكتروني عند التسجيل في النشرة البريدية أو ملء نموذج الاتصال.',
                contentEn: 'We collect information you voluntarily share with us, such as your name and email address when subscribing to our newsletter or filling out contact forms.',
              },
              {
                titleAr: 'استخدام المعلومات',
                titleEn: 'Use of Information',
                contentAr: 'نستخدم معلوماتك لتحسين خدماتنا، الرد على استفساراتك، وإرسال المحتوى والعروض ذات الصلة. لا نبيع أو نشارك بيانات العملاء مع جهات خارجية.',
                contentEn: 'We use your information to improve our services, respond to your inquiries, and send relevant content and offers. We do not sell or share your data with third parties.',
              },
              {
                titleAr: 'الأمان',
                titleEn: 'Security',
                contentAr: 'نستخدم إجراءات أمان قياسية لحماية معلوماتك من الوصول غير المصرح به أو التغييرات.',
                contentEn: 'We implement standard security measures to protect your information from unauthorized access or alteration.',
              },
              {
                titleAr: 'التواصل معنا',
                titleEn: 'Contact Us',
                contentAr: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا على hello@khutoot.studio',
                contentEn: 'If you have any questions about this privacy policy, please contact us at hello@khutoot.studio',
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
    </main>
  );
}
