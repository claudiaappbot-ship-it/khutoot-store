'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Terms() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'الشروط والأحكام' : 'Terms of Service'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا.'
              : 'Please read these terms and conditions carefully before using our website.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl">
          <div className="space-y-8">
            {[
              {
                titleAr: 'قبول الشروط',
                titleEn: 'Acceptance of Terms',
                contentAr: 'باستخدامك لموقع خطوط ستوديو، فأنت توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.',
                contentEn: 'By using Khutoot Studio\'s website, you agree to comply with these terms and conditions. If you do not agree with any of these terms, please do not use the site.',
              },
              {
                titleAr: 'الملكية الفكرية',
                titleEn: 'Intellectual Property',
                contentAr: 'جميع التصاميم والمحتوى على موقعنا محمي بقوانين الملكية الفكرية. لا يجوز نسخ أو إعادة إنتاج أي محتوى دون الحصول على إذن كتابي منا.',
                contentEn: 'All designs and content on our website are protected by intellectual property laws. You may not copy or reproduce any content without our written permission.',
              },
              {
                titleAr: 'استخدام الموقع',
                titleEn: 'Use of Website',
                contentAr: 'توافق على استخدام الموقع فقط للأغراض القانونية والشرعية. لا يجوز استخدام الموقع بأي طريقة قد تضر به أو تتعارض مع حقوق الآخرين.',
                contentEn: 'You agree to use the website only for lawful and legitimate purposes. You may not use the site in any way that could harm it or infringe on others\' rights.',
              },
              {
                titleAr: 'التعديلات',
                titleEn: 'Modifications',
                contentAr: 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر بريدك الإلكتروني.',
                contentEn: 'We reserve the right to modify these terms and conditions at any time. You will be notified of any material changes via email.',
              },
              {
                titleAr: 'التواصل معنا',
                titleEn: 'Contact Us',
                contentAr: 'إذا كان لديك أي أسئلة حول الشروط والأحكام، يرجى الاتصال بنا على hello@khutoot.studio',
                contentEn: 'If you have any questions about these terms and conditions, please contact us at hello@khutoot.studio',
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
