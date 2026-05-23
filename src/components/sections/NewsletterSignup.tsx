import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function NewsletterSignup() {
  const { isArabic } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate email service
    alert(isArabic ? 'شكراً لاشتراكك!' : 'Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-24 bg-primary-dark text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6">
          {isArabic ? 'اشترك في النشرة البريدية' : 'Subscribe to Newsletter'}
        </h2>
        <p className="text-center text-gray-300 mb-12">
          {isArabic ? 'احصل على أحدث التصاميم وتخفيفات حصرية' : 'Get latest designs and exclusive discounts'}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            placeholder={isArabic ? 'البريد الإلكتروني' : 'Email address'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-primary-dark"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-gold text-primary-dark font-bold rounded-lg hover:bg-opacity-90 transition-all"
          >
            {isArabic ? 'اشترك' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
