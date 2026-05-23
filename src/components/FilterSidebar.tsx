import { useLanguage } from '@/context/LanguageContext';

interface FilterProps {
  categories: any[];
  priceRanges: any[];
  selectedCategory: string;
  selectedPrice: string;
  sortBy: string;
  onCategoryChange: (cat: string) => void;
  onPriceChange: (price: string) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterSidebar({
  categories,
  priceRanges,
  selectedCategory,
  selectedPrice,
  sortBy,
  onCategoryChange,
  onPriceChange,
  onSortChange,
}: FilterProps) {
  const { isArabic } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'الفئات' : 'Categories'}
        </h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={selectedCategory === cat.id}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-3"
              />
              <span>{isArabic ? cat.label.ar : cat.label.en}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'السعر' : 'Price'}
        </h3>
        <div className="space-y-2">
          {priceRanges.map(price => (
            <label key={price.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                value={price.id}
                checked={selectedPrice === price.id}
                onChange={(e) => onPriceChange(e.target.value)}
                className="mr-3"
              />
              <span>{isArabic ? price.label.ar : price.label.en}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-primary-text dark:text-primary-text-light">
          {isArabic ? 'ترتيب' : 'Sort'}
        </h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-primary-dark"
        >
          <option value="newest">{isArabic ? 'الأحدث' : 'Newest'}</option>
          <option value="price-low">{isArabic ? 'السعر: الأقل أولاً' : 'Price: Low to High'}</option>
          <option value="price-high">{isArabic ? 'السعر: الأعلى أولاً' : 'Price: High to Low'}</option>
          <option value="rating">{isArabic ? 'الأعلى تقييماً' : 'Top Rated'}</option>
        </select>
      </div>
    </div>
  );
}
