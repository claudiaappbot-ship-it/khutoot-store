import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: { ar: 'حول خطوط', en: 'About Khutoot' }, href: '/about' },
      { label: { ar: 'مدونتنا', en: 'Our Blog' }, href: '/blog' },
      { label: { ar: 'الوظائف', en: 'Careers' }, href: '/careers' },
    ],
    support: [
      { label: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, href: '/faq' },
      { label: { ar: 'اتصل بنا', en: 'Contact' }, href: '/contact' },
      { label: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' }, href: '/privacy' },
    ],
    legal: [
      { label: { ar: 'الشروط والأحكام', en: 'Terms of Service' }, href: '/terms' },
      { label: { ar: 'سياسة الاسترجاع', en: 'Refund Policy' }, href: '/refunds' },
      { label: { ar: 'سياسة الشحن', en: 'Shipping Policy' }, href: '/shipping' },
    ],
  };

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/khutoot.studio' },
    { label: 'TikTok', href: 'https://tiktok.com/@khutoot.studio' },
    { label: 'Twitter', href: 'https://twitter.com/khutoot.studio' },
  ];

  return (
    <footer className="bg-text-primary text-bg-primary border-t border-accent-secondary mt-24">
      <div className="container-max py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-bg-primary">
              {isArabic ? 'خطوط ستوديو' : 'Khutoot Studio'}
            </h3>
            <p className="text-sm text-bg-primary opacity-75 leading-relaxed">
              {isArabic
                ? 'استوديو فني متخصص في التصاميم المعمارية والخرائط السعودية.'
                : 'An art studio specializing in architectural designs and Saudi maps.'}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-bg-primary uppercase tracking-wider mb-6">
              {isArabic ? 'الشركة' : 'Company'}
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bg-primary opacity-75 hover:opacity-100 transition-opacity">
                    {isArabic ? link.label.ar : link.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-bold text-bg-primary uppercase tracking-wider mb-6">
              {isArabic ? 'الدعم' : 'Support'}
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bg-primary opacity-75 hover:opacity-100 transition-opacity">
                    {isArabic ? link.label.ar : link.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-bg-primary uppercase tracking-wider mb-6">
              {isArabic ? 'قانوني' : 'Legal'}
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bg-primary opacity-75 hover:opacity-100 transition-opacity">
                    {isArabic ? link.label.ar : link.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-secondary pt-8 space-y-8">
          {/* Contact and Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-bg-primary uppercase tracking-wider mb-4">
                {isArabic ? 'اتصل بنا' : 'Contact'}
              </h4>
              <div className="space-y-2 text-sm text-bg-primary opacity-75">
                <p>Email: hello@khutoot.studio</p>
                <p>Phone: +966 11 4706 000</p>
                <p>{isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-bg-primary uppercase tracking-wider mb-4">
                {isArabic ? 'تابعنا' : 'Follow Us'}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg-primary opacity-75 hover:opacity-100 transition-opacity text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-accent-secondary pt-8">
            <p className="text-xs text-bg-primary opacity-50 text-center">
              © {currentYear} {isArabic ? 'خطوط ستوديو' : 'Khutoot Studio'}. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966114706000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-text-primary hover:bg-accent-hover text-bg-primary flex items-center justify-center transition-all duration-300 z-40"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.651.675 5.238 1.955 7.489L1.645 23.048l7.894-2.064c2.199 1.2 4.686 1.832 7.165 1.832 5.289 0 9.957-4.668 9.986-10.039C21.139 7.995 16.712 2.98 10.051 2.98z" />
        </svg>
      </a>
    </footer>
  );
}
