import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

interface BestSellerProduct {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number;
  href: string;
  isBestSeller: boolean;
}

const bestSellers: BestSellerProduct[] = [
  {
    id: 'lp500-blueprint',
    titleAr: 'مخطط لامبورجيني',
    titleEn: 'Lamborghini Blueprint',
    descriptionAr: 'تصميم معماري دقيق للامبورجيني الأيقونية',
    descriptionEn: 'Precision architectural design of the iconic Lamborghini',
    price: 249,
    href: '/blueprints/lamborghini',
    isBestSeller: true,
  },
  {
    id: 'riyadh-map',
    titleAr: 'خريطة الرياض الفنية',
    titleEn: 'Riyadh Artistic Map',
    descriptionAr: 'خريطة معاصرة لعاصمة المملكة',
    descriptionEn: 'Contemporary map of the Kingdom\'s capital',
    price: 199,
    href: '/maps/riyadh',
    isBestSeller: true,
  },
  {
    id: 'kingdom-tower',
    titleAr: 'برج المملكة',
    titleEn: 'Kingdom Tower',
    descriptionAr: 'تصميم فني لأشهر معلم في الرياض',
    descriptionEn: 'Artistic design of Riyadh\'s most iconic landmark',
    price: 229,
    href: '/landmarks/kingdom-tower',
    isBestSeller: true,
  },
  {
    id: 'arabic-calligraphy',
    titleAr: 'خط عربي حديث',
    titleEn: 'Modern Arabic Script',
    descriptionAr: 'تصميم خطي عربي معاصر',
    descriptionEn: 'Contemporary Arabic calligraphy design',
    price: 179,
    href: '/typography/modern-script',
    isBestSeller: false,
  },
  {
    id: 'jeddah-sunset',
    titleAr: 'جدة عند الغروب',
    titleEn: 'Jeddah Sunset',
    descriptionAr: 'خريطة فنية لمدينة جدة الساحرة',
    descriptionEn: 'Artistic map of enchanting Jeddah',
    price: 209,
    href: '/maps/jeddah',
    isBestSeller: true,
  },
  {
    id: 'formula-1',
    titleAr: 'فيراري F1',
    titleEn: 'Ferrari F1',
    descriptionAr: 'مخطط دقيق لسيارة الفورمولا 1',
    descriptionEn: 'Precision blueprint of Formula 1 racing',
    price: 279,
    href: '/blueprints/ferrari-f1',
    isBestSeller: true,
  },
];

export default function BestSellers() {
  const { isArabic } = useLanguage();

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container-max">
        <div className="mb-16 space-y-4">
          <h2 className="text-text-primary">
            {isArabic ? 'الأكثر شيوعًا' : 'Best Sellers'}
          </h2>
          <div className="w-16 h-px bg-accent-taupe" />
          <p className="text-text-secondary max-w-md">
            {isArabic
              ? 'أشهر التصاميم المختارة من قبل مقتنينا'
              : 'Most loved designs chosen by our collectors'}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <Link key={product.id} href={product.href}>
              <div className="group cursor-pointer space-y-4">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-accent-taupe to-accent-secondary opacity-20 border border-border-light overflow-hidden group-hover:border-text-primary transition-all duration-300">
                  {product.isBestSeller && (
                    <div className="absolute top-4 right-4 bg-text-primary text-bg-primary px-3 py-1 text-xs font-medium uppercase tracking-wider">
                      {isArabic ? 'الأكثر شهرة' : 'Best Seller'}
                    </div>
                  )}
                  <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm">
                    <span>{isArabic ? 'صورة المنتج' : 'Product Image'}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent-taupe transition-colors">
                    {isArabic ? product.titleAr : product.titleEn}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {isArabic ? product.descriptionAr : product.descriptionEn}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border-light">
                    <div className="text-2xl font-bold text-text-primary">
                      {product.price}
                      <span className="text-sm ml-1">SAR</span>
                    </div>
                    <button className="btn-secondary px-6 py-2 text-sm">
                      {isArabic ? 'عرض' : 'View'}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link href="/collections" className="btn-primary inline-block">
            {isArabic ? 'اعرض جميع المجموعات' : 'View All Collections'}
          </Link>
        </div>
      </div>
    </section>
  );
}
