'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { isArabic } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-bg-primary">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container-max text-center space-y-4">
          <h1 className="text-text-primary">
            {isArabic ? 'اتصل بنا' : 'Get in Touch'}
          </h1>
          <div className="w-16 h-px bg-accent-taupe mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isArabic
              ? 'نود أن نسمع منك. راسلنا برسالة أو اتصل بنا مباشرة عبر الوسائل أدناه.'
              : 'We\'d love to hear from you. Send us a message or reach out directly through the channels below.'}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <h2 className="text-text-primary">
                {isArabic ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={isArabic ? 'اسمك' : 'Your Name'}
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-border-light text-text-primary placeholder-text-secondary focus:border-accent-taupe focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your Email'}
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-border-light text-text-primary placeholder-text-secondary focus:border-accent-taupe focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={isArabic ? 'الموضوع' : 'Subject'}
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-border-light text-text-primary placeholder-text-secondary focus:border-accent-taupe focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={isArabic ? 'رسالتك' : 'Your Message'}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-border-light text-text-primary placeholder-text-secondary focus:border-accent-taupe focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  {isArabic ? 'أرسل الرسالة' : 'Send Message'}
                </button>
              </form>

              {submitted && (
                <div className="p-4 bg-accent-taupe text-text-primary border border-accent-taupe">
                  <p className="font-medium">
                    {isArabic
                      ? 'شكراً لتواصلك معنا! سنرد عليك قريباً.'
                      : 'Thank you for reaching out! We\'ll get back to you soon.'}
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-text-primary mb-4">
                  {isArabic ? 'تواصل معنا' : 'Contact Information'}
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <p className="text-text-secondary text-sm">
                      {isArabic ? 'واتس أب' : 'WhatsApp'}
                    </p>
                    <a href="https://wa.me/966" className="text-accent-taupe hover:text-accent-secondary transition-colors">
                      +966 5X XXX XXXX
                    </a>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <p className="text-text-secondary text-sm">
                      {isArabic ? 'بريد إلكتروني' : 'Email'}
                    </p>
                    <a href="mailto:hello@khutoot.studio" className="text-accent-taupe hover:text-accent-secondary transition-colors">
                      hello@khutoot.studio
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="space-y-2">
                    <p className="text-text-secondary text-sm">
                      {isArabic ? 'إنستجرام' : 'Instagram'}
                    </p>
                    <a href="https://instagram.com/khutoot.studio" target="_blank" rel="noopener noreferrer" className="text-accent-taupe hover:text-accent-secondary transition-colors">
                      @khutoot.studio
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-border-light pt-8">
                <h3 className="text-text-primary mb-4">
                  {isArabic ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {isArabic
                    ? 'نحن متاحون من الساعة 10 صباحاً إلى 6 مساءً بتوقيت السعودية، من الأحد إلى الخميس.'
                    : 'We\'re available from 10 AM to 6 PM Saudi Time, Sunday through Thursday.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
