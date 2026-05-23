import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { LanguageProvider } from '@/context/LanguageContext';

export default function App({ Component, pageProps }: AppProps) {
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('language');
    setIsArabic(stored === 'en' ? false : true);
  }, []);

  const isRTL = isArabic;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="خطوط المدينة - متجر فني ديجيتالي سعودي متخصص بالمخططات والخرائط" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={isArabic ? 'ar' : 'en'} />
      </Head>

      <LanguageProvider>
        <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-white dark:bg-primary-dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </LanguageProvider>
    </>
  );
}
