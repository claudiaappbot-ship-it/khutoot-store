'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function NewsletterSection() {
  const { isArabic } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend/email service
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-text-primary text-bg-primary py-24 sm:py-32">
      <div className="container-sm">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-bg-primary">
              {isArabic ? 'استقبل الإلهام' : 'Stay Inspired'}
            </h2>
            <div className="w-16 h-px bg-accent-taupe mx-auto" />
          </div>

          <p className="text-lg text-bg-primary opacity-90 max-w-2xl mx-auto">
            {isArabic
              ? 'اشترك في رسالتنا الفنية الشهرية. نشارك عملياتنا الإبداعية، والتصاميم الجديدة، والعروض الحصرية.'
              : 'Join our monthly creative newsletter. We share our design process, new releases, and exclusive offers.'}
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-bg-primary text-text-primary border border-border-light focus:border-accent-taupe focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-3 whitespace-nowrap"
              >
                {isArabic ? 'اشترك' : 'Subscribe'}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 p-4 bg-accent-taupe text-text-primary rounded-none border border-accent-taupe">
              <p className="font-medium">
                {isArabic
                  ? 'شكراً على الاشتراك! تحقق من بريدك الإلكتروني.'
                  : 'Thank you for subscribing! Check your email.'}
              </p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-bg-primary opacity-70">
            {isArabic
              ? 'لن نرسل لك بريدًا عشوائيًا. فقط الإلهام والعروض الحقيقية.'
              : 'We won\'t send spam. Only inspiration and real offers.'}
          </p>
        </div>
      </div>
    </section>
  );
}
