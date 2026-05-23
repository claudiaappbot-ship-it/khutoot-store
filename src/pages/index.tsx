import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import EditorialStory from '@/components/EditorialStory';
import BestSellers from '@/components/BestSellers';
import HowItWorks from '@/components/HowItWorks';
import CustomerSpaces from '@/components/CustomerSpaces';
import CustomOrdersCTA from '@/components/CustomOrdersCTA';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khutoot Studio - Designed for spaces with character</title>
        <meta name="description" content="Premium architectural art and curated designs for contemporary Saudi spaces. Khutoot Studio creates collectible framed artwork for modern interiors." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Khutoot Studio" />
        <meta property="og:description" content="Premium architectural art and curated designs for contemporary Saudi spaces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-bg-primary">
        <HeroSection />
        <FeaturedCollections />
        <EditorialStory />
        <BestSellers />
        <HowItWorks />
        <CustomerSpaces />
        <CustomOrdersCTA />
        <NewsletterSection />
      </main>
    </>
  );
}
