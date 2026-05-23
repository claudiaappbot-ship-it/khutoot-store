import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const categories = [
  { id: 'blueprints', title: { ar: 'المخططات', en: 'Blueprints' }, color: 'from-blue-500 to-blue-600' },
  { id: 'maps', title: { ar: 'الخرائط', en: 'Maps' }, color: 'from-green-500 to-green-600' },
  { id: 'landmarks', title: { ar: 'المعالم', en: 'Landmarks' }, color: 'from-orange-500 to-orange-600' },
  { id: 'arabic-art', title: { ar: 'الفن العربي', en: 'Arabic Art' }, color: 'from-purple-500 to-purple-600' },
];

export default function FeaturedCategories() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-24 bg-primary-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'اكتشف الفئات' : 'Explore Categories'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link key={cat.id} href={`/${cat.id}`}>
              <div className={`bg-gradient-to-br ${cat.color} rounded-lg p-8 h-48 flex items-center justify-center text-white text-center font-bold text-2xl cursor-pointer hover:shadow-luxury transition-all duration-300 hover:-translate-y-1`}>
                {isArabic ? cat.title.ar : cat.title.en}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
