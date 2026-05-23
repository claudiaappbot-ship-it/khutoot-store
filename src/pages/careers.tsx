'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Careers() {
  const { isArabic } = useLanguage();

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'الوظائف والفرص' : 'Careers'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'انضم إلى فريقنا واكن جزءاً من رحلة احتفائنا بالفن والثقافة السعودية.'
              : 'Join our team and be part of our journey celebrating Saudi art and culture.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container-max max-w-4xl">
          <div className="space-y-12">
            {/* About Working Here */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                {isArabic ? 'العمل مع خطوط' : 'Working at Khutoot'}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {isArabic
                  ? 'في خطوط ستوديو، نؤمن بقوة الإبداع والشغف. نبحث عن أفراد موهوبين يشاركوننا حب الثقافة السعودية والفن والتصميم. إذا كنت متحمساً وموهوباً ومكرساً للتميز، فنود أن نسمع منك.'
                  : 'At Khutoot Studio, we believe in the power of creativity and passion. We\'re looking for talented individuals who share our love for Saudi culture, art, and design. If you\'re enthusiastic, talented, and dedicated to excellence, we\'d love to hear from you.'}
              </p>
            </div>

            {/* Current Opportunities */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-text-primary">
                {isArabic ? 'الفرص الحالية' : 'Current Opportunities'}
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    titleAr: 'مصممون جرافيك',
                    titleEn: 'Graphic Designers',
                    descAr: 'نبحث عن مصممين موهوبين يجمعون بين المهارة التقنية والإبداع الفني.',
                    descEn: 'We\'re looking for talented designers who combine technical skills with artistic creativity.',
                    statusAr: 'قريباً',
                    statusEn: 'Coming Soon',
                  },
                  {
                    titleAr: 'مصممو UX/UI',
                    titleEn: 'UX/UI Designers',
                    descAr: 'انضم إلينا لتحسين تجربة المستخدم على موقعنا والتطبيقات.',
                    descEn: 'Join us to enhance user experience on our website and applications.',
                    statusAr: 'قريباً',
                    statusEn: 'Coming Soon',
                  },
                  {
                    titleAr: 'مسوقون رقميون',
                    titleEn: 'Digital Marketers',
                    descAr: 'ساعدنا في الوصول إلى جمهور أوسع والتعريف بفننا.',
                    descEn: 'Help us reach a wider audience and share our art.',
                    statusAr: 'قريباً',
                    statusEn: 'Coming Soon',
                  },
                ].map((job, idx) => (
                  <div key={idx} className="space-y-3 p-6 border border-border-light">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {isArabic ? job.titleAr : job.titleEn}
                      </h3>
                      <span className="text-sm text-text-secondary">
                        {isArabic ? job.statusAr : job.statusEn}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {isArabic ? job.descAr : job.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join Us */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-text-primary">
                {isArabic ? 'لماذا تنضم إلينا؟' : 'Why Join Us?'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    arTitle: 'شغف حقيقي',
                    enTitle: 'Real Passion',
                    arDesc: 'نعمل معاً من أجل شيء ذي معنى - احتفاء الثقافة السعودية.',
                    enDesc: 'We work together for something meaningful - celebrating Saudi culture.',
                  },
                  {
                    arTitle: 'بيئة إبداعية',
                    enTitle: 'Creative Environment',
                    arDesc: 'بيئة عمل تشجع الإبداع والابتكار والتجريب.',
                    enDesc: 'A work environment that encourages creativity, innovation, and experimentation.',
                  },
                  {
                    arTitle: 'فرص التطور',
                    enTitle: 'Growth Opportunities',
                    arDesc: 'نؤمن بتطوير مهارات فريقنا والاستثمار في نموهم.',
                    enDesc: 'We believe in developing our team\'s skills and investing in their growth.',
                  },
                  {
                    arTitle: 'فريق متنوع',
                    enTitle: 'Diverse Team',
                    arDesc: 'فريق من الأفراد الموهوبين من خلفيات متنوعة.',
                    enDesc: 'A team of talented individuals from diverse backgrounds.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-semibold text-text-primary">
                      {isArabic ? item.arTitle : item.enTitle}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {isArabic ? item.arDesc : item.enDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <div className="space-y-4 p-6 bg-text-primary text-bg-primary">
              <h2 className="text-2xl font-semibold text-bg-primary">
                {isArabic ? 'كيفية التقديم' : 'How to Apply'}
              </h2>
              <p className="text-bg-primary opacity-90">
                {isArabic
                  ? 'هل أنت مهتم؟ أرسل لنا سيرتك الذاتية وملفك الشخصي إلى careers@khutoot.studio مع رسالة حول ماذا تريد تحقيقه معنا.'
                  : 'Interested? Send us your resume and portfolio to careers@khutoot.studio along with a message about what you\'d like to achieve with us.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-bg-primary px-4">
        <div className="container-sm text-center space-y-6">
          <h2 className="text-text-primary">
            {isArabic ? 'لديك أسئلة؟' : 'Have Questions?'}
          </h2>
          <p className="text-lg text-text-secondary">
            {isArabic
              ? 'لا تتردد في التواصل معنا مباشرة للمزيد من المعلومات.'
              : 'Feel free to contact us directly for more information.'}
          </p>
          <Link href="/contact" className="inline-block btn-primary">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </main>
  );
}
