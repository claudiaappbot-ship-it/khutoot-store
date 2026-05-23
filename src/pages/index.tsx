import Head from 'next/head';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedCategories from '@/components/sections/FeaturedCategories';
import BestSellers from '@/components/sections/BestSellers';
import CustomerShowcase from '@/components/sections/CustomerShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t, isArabic } = useLanguage();

  return (
    <>
      <Head>
        <title>{isArabic ? 'خطوط المدينة - متجر فني سعودي' : 'Urban Lines - Saudi Digital Art Store'}</title>
        <meta
          name="description"
          content={isArabic
            ? 'متجر متخصص في بيع التصاميم الفنية والخرائط السعودية والمخططات الحصرية'
            : 'Premium digital art and Saudi maps store - blueprints, architecture, and landmark prints'
          }
        />
        <meta name="keywords" content={isArabic
          ? 'مخططات سيارات, خرائط الرياض, لوحات هندسية, ديكور سعودي'
          : 'blueprint art Saudi, Riyadh maps, digital art, premium prints'
        } />
        <link rel="canonical" href="https://urbanlines.sa/" />
      </Head>

      <main className="w-full">
        <HeroSection />
        <FeaturedCategories />
        <BestSellers />
        <CustomerShowcase />
        <HowItWorks />
        <NewsletterSignup />
      </main>
    </>
  );
}
