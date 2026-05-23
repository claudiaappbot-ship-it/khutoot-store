'use client';

import { useLanguage } from '@/context/LanguageContext';

interface Step {
  number: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

const steps: Step[] = [
  {
    number: 1,
    titleAr: 'اختر',
    titleEn: 'Choose',
    descriptionAr: 'اختر من مجموعتنا الحصرية من التصاميم أو أنشئ تصميمًا مخصصًا فقط لمساحتك.',
    descriptionEn: 'Select from our exclusive collection or create a custom design just for your space.',
  },
  {
    number: 2,
    titleAr: 'حمّل',
    titleEn: 'Download',
    descriptionAr: 'احصل على ملفات عالية الدقة جاهزة للطباعة بصيغ متعددة.',
    descriptionEn: 'Receive high-resolution files ready to print in multiple formats.',
  },
  {
    number: 3,
    titleAr: 'اطبع',
    titleEn: 'Print',
    descriptionAr: 'اطبع على ورق مميز واختر من خياراتنا الموصى بها.',
    descriptionEn: 'Print on premium paper with our recommended specifications.',
  },
  {
    number: 4,
    titleAr: 'عرّف',
    titleEn: 'Display',
    descriptionAr: 'أضف إطار مميز وضع قطعتك الفنية في المكان المثالي في مساحتك.',
    descriptionEn: 'Frame it beautifully and display your art in the perfect spot.',
  },
];

export default function HowItWorks() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-text-primary text-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="mb-16 space-y-4">
          <h2 className="text-bg-primary">
            {isArabic ? 'كيف يعمل' : 'How It Works'}
          </h2>
          <div className="w-16 h-px bg-accent-taupe" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="mb-8">
                <div className="w-12 h-12 bg-accent-taupe text-text-primary flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h3 className="text-bg-primary text-xl font-bold">
                  {isArabic ? step.titleAr : step.titleEn}
                </h3>
                <p className="text-bg-primary opacity-80">
                  {isArabic ? step.descriptionAr : step.descriptionEn}
                </p>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-6 w-12 h-px bg-accent-taupe opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
