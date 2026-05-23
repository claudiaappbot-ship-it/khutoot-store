import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface LanguageContextType {
  language: 'ar' | 'en';
  isArabic: boolean;
  t: (key: string) => string;
  setLanguage: (lang: 'ar' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'ar': {
    'nav.shop': 'المتجر',
    'nav.blueprints': 'المخططات',
    'nav.maps': 'الخرائط',
    'nav.landmarks': 'المعالم',
    'nav.arabic-art': 'الفن العربي',
    'nav.custom': 'طلبات مخصصة',
    'nav.gallery': 'المعرض',
    'nav.about': 'عن المتجر',
    'nav.contact': 'اتصل بنا',
    'nav.cart': 'السلة',
    'nav.account': 'حسابي',
    'hero.title': 'حوّل شغفك إلى قطعة فنية',
    'hero.subtitle': 'مجموعة حصرية من التصاميم الفنية والخرائط السعودية',
    'hero.cta.shop': 'تصفح المتجر',
    'hero.cta.gallery': 'شاهد المعرض',
    'product.instantDownload': 'تحميل فوري',
    'product.addToCart': 'أضف للسلة',
    'product.addToWishlist': 'أضف للمفضلة',
    'product.formats': 'صيغ التحميل',
    'product.sizes': 'الأحجام',
    'product.printRecommendations': 'توصيات الطباعة',
    'product.madeForSaudi': 'صُنع لمنزل سعودي',
    'product.reviews': 'التقييمات',
    'footer.about': 'عن المتجر',
    'footer.policies': 'السياسات',
    'footer.contact': 'التواصل',
    'footer.social': 'تابعنا',
    'footer.newsletter': 'اشترك للحصول على تخفيفات خاصة',
    'footer.whatsapp': 'راسلنا على واتس أب',
  },
  'en': {
    'nav.shop': 'Shop',
    'nav.blueprints': 'Blueprints',
    'nav.maps': 'Maps',
    'nav.landmarks': 'Landmarks',
    'nav.arabic-art': 'Arabic Art',
    'nav.custom': 'Custom Orders',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.account': 'Account',
    'hero.title': 'Transform Your Passion Into Art',
    'hero.subtitle': 'Exclusive collection of digital designs and Saudi maps',
    'hero.cta.shop': 'Shop Now',
    'hero.cta.gallery': 'View Gallery',
    'product.instantDownload': 'Instant Download',
    'product.addToCart': 'Add to Cart',
    'product.addToWishlist': 'Add to Wishlist',
    'product.formats': 'Download Formats',
    'product.sizes': 'Sizes',
    'product.printRecommendations': 'Print Recommendations',
    'product.madeForSaudi': 'Made for Saudi homes',
    'product.reviews': 'Reviews',
    'footer.about': 'About Us',
    'footer.policies': 'Policies',
    'footer.contact': 'Contact',
    'footer.social': 'Follow Us',
    'footer.newsletter': 'Subscribe for exclusive discounts',
    'footer.whatsapp': 'Message us on WhatsApp',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [language, setLanguageState] = useState<'ar' | 'en'>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('language') as 'ar' | 'en' | null;
    const locale = (router.locale as 'ar' | 'en') || 'ar';
    setLanguageState(stored || locale || 'ar');
  }, [router.locale]);

  const setLanguage = (lang: 'ar' | 'en') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic: language === 'ar',
        t,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
