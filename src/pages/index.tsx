import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khutoot Studio - Celebrating Saudi Culture Through Art</title>
        <meta name="description" content="Creative designs celebrating Saudi culture, heritage, and contemporary art. Khutoot Studio creates exclusive artwork inspired by the beauty of Saudi Arabia." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Khutoot Studio" />
        <meta property="og:description" content="Creative designs celebrating Saudi culture, heritage, and contemporary art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-bg-primary">
        <HeroSection />
        <FeaturedCollections />
        <NewsletterSection />
      </main>
    </>
  );
}
