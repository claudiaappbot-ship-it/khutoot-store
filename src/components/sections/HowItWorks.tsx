import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { isArabic } = useLanguage();

  const steps = [
    { num: 1, title: { ar: 'اختر التصميم', en: 'Choose Design' }, desc: { ar: 'تصفح آلاف التصاميم', en: 'Browse thousands of designs' } },
    { num: 2, title: { ar: 'حمّل الملف', en: 'Download File' }, desc: { ar: 'حمّل بصيغ متعددة', en: 'Download in multiple formats' } },
    { num: 3, title: { ar: 'اطبع أو علّق', en: 'Print or Frame' }, desc: { ar: 'اطبع في منزلك أو عند محترف', en: 'Print at home or professionally' } },
  ];

  return (
    <section className="py-24 bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'كيف يعمل' : 'How It Works'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-primary-gold text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-text dark:text-primary-text-light">
                {isArabic ? step.title.ar : step.title.en}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {isArabic ? step.desc.ar : step.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
