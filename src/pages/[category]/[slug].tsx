import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { allProducts } from '@/data/products';
import ProductInfo from '@/components/ProductInfo';
import ReviewsSection from '@/components/ReviewsSection';
import SimilarProducts from '@/components/SimilarProducts';
import { useLanguage } from '@/context/LanguageContext';

export async function getStaticPaths() {
  const paths = allProducts.map(product => ({
    params: {
      category: product.category,
      slug: product.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: any) {
  const product = allProducts.find(
    p => p.category === params.category && p.slug === params.slug
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 3600,
  };
}

export default function ProductPage({ product }: any) {
  const { isArabic } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const similarProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Head>
        <title>{isArabic ? product.title.ar : product.title.en} - خطوط المدينة</title>
        <meta name="description" content={isArabic ? product.description.ar : product.description.en} />
        <meta property="og:image" content={product.images[0]} />
      </Head>

      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Images */}
            <div className="space-y-4">
              <div className="relative bg-primary-light aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={isArabic ? product.title.ar : product.title.en}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded border-2 transition-all ${
                      idx === selectedImage ? 'border-primary-text' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              <ProductInfo product={product} />
            </div>
          </div>

          <ReviewsSection productId={product.id} reviews={product.reviews} />
          <SimilarProducts products={similarProducts} />
        </div>
      </div>
    </>
  );
}
