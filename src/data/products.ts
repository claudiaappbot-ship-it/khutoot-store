export interface Product {
  id: string;
  slug: string;
  category: 'blueprints' | 'maps' | 'landmarks' | 'arabic-art';
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  price: number;
  images: string[];
  rating: number;
  reviewCount: number;
  downloadFormats: string[];
  sizes: { label: string; dimensions: string }[];
  printRecommendations: { ar: string; en: string };
  reviews: Review[];
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: { ar: string; en: string };
  content: { ar: string; en: string };
  verified: boolean;
  createdAt: string;
}

export const allProducts: Product[] = [
  {
    id: 'blueprint-001',
    slug: 'toyota-land-cruiser-2025',
    category: 'blueprints',
    title: {
      ar: 'تويوتا لاند كروزر 2025',
      en: 'Toyota Land Cruiser 2025',
    },
    description: {
      ar: 'تصميم خط يدوي بسيط وأنيق للسيارة الأيقونية تويوتا لاند كروزر. مثالي لغرفة المعيشة أو مكتب المنزل. متوفر بصيغ متعددة وأحجام قابلة للطباعة.',
      en: 'Minimalist line drawing of the iconic Toyota Land Cruiser. Perfect for living rooms or home offices. Available in multiple formats and printable sizes.',
    },
    price: 14900,
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    ],
    rating: 4.8,
    reviewCount: 124,
    downloadFormats: ['PDF', 'JPG (300DPI)', 'PNG', 'SVG'],
    sizes: [
      { label: 'A4', dimensions: '210 × 297 mm' },
      { label: 'A3', dimensions: '297 × 420 mm' },
      { label: 'A2', dimensions: '420 × 594 mm' },
    ],
    printRecommendations: {
      ar: 'موصى به للطباعة بحجم A3 على ورق فاخر (مات أو بريق)',
      en: 'Recommended for A3 print on premium paper (matte or glossy)',
    },
    reviews: [
      {
        id: 'rev-001',
        author: 'محمد',
        rating: 5,
        title: { ar: 'رائع جداً', en: 'Amazing' },
        content: { ar: 'التصميم رائع والجودة عالية جداً', en: 'Great design and excellent quality' },
        verified: true,
        createdAt: '2024-01-15',
      },
    ],
    createdAt: '2024-01-01',
  },
  {
    id: 'map-001',
    slug: 'riyadh-city-map',
    category: 'maps',
    title: {
      ar: 'خريطة الرياض',
      en: 'Riyadh City Map',
    },
    description: {
      ar: 'خريطة الرياض الحديثة برسم فني أنيق. تصميم بسيط وأنيق مع أهم المعالم والشوارع الرئيسية.',
      en: 'Modern Riyadh city map with elegant artistic design. Simple and stylish with major landmarks and streets.',
    },
    price: 12900,
    images: [
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800',
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400',
    ],
    rating: 4.9,
    reviewCount: 87,
    downloadFormats: ['PDF', 'JPG (300DPI)', 'PNG', 'SVG'],
    sizes: [
      { label: 'A4', dimensions: '210 × 297 mm' },
      { label: 'A3', dimensions: '297 × 420 mm' },
      { label: 'A2', dimensions: '420 × 594 mm' },
    ],
    printRecommendations: {
      ar: 'موصى به للطباعة بحجم A3 على ورق فاخر',
      en: 'Recommended for A3 print on premium paper',
    },
    reviews: [],
    createdAt: '2024-01-02',
  },
  {
    id: 'landmark-001',
    slug: 'kingdom-tower-line-art',
    category: 'landmarks',
    title: {
      ar: 'برج المملكة',
      en: 'Kingdom Tower',
    },
    description: {
      ar: 'رسم فني أنيق لبرج المملكة الأيقوني في الرياض. تصميم بخطوط بسيطة وحديثة.',
      en: 'Elegant line art drawing of the iconic Kingdom Tower in Riyadh. Simple and modern design.',
    },
    price: 10900,
    images: [
      'https://images.unsplash.com/photo-1486440195351-29a28e7fab10?w=800',
      'https://images.unsplash.com/photo-1486440195351-29a28e7fab10?w=400',
    ],
    rating: 4.7,
    reviewCount: 56,
    downloadFormats: ['PDF', 'JPG (300DPI)', 'PNG', 'SVG'],
    sizes: [
      { label: 'A4', dimensions: '210 × 297 mm' },
      { label: 'A3', dimensions: '297 × 420 mm' },
    ],
    printRecommendations: {
      ar: 'موصى به للطباعة بحجم A4 أو A3',
      en: 'Recommended for A4 or A3 print',
    },
    reviews: [],
    createdAt: '2024-01-03',
  },
  {
    id: 'art-001',
    slug: 'arabic-calligraphy-peace',
    category: 'arabic-art',
    title: {
      ar: 'السلام بالخط العربي',
      en: 'Peace in Arabic Calligraphy',
    },
    description: {
      ar: 'كلمة "السلام" برسم خط عربي أنيق ومعاصر. مثالي لتزيين المنازل والمكاتب.',
      en: 'Word "Peace" in elegant contemporary Arabic calligraphy. Perfect for home and office decoration.',
    },
    price: 9900,
    images: [
      'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=800',
      'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=400',
    ],
    rating: 4.9,
    reviewCount: 145,
    downloadFormats: ['PDF', 'JPG (300DPI)', 'PNG', 'SVG'],
    sizes: [
      { label: 'A5', dimensions: '148 × 210 mm' },
      { label: 'A4', dimensions: '210 × 297 mm' },
      { label: 'A3', dimensions: '297 × 420 mm' },
    ],
    printRecommendations: {
      ar: 'موصى به للطباعة على ورق فاخر مات',
      en: 'Recommended for matte premium paper',
    },
    reviews: [],
    createdAt: '2024-01-04',
  },
];

// Add more sample products...
for (let i = 2; i <= 12; i++) {
  const categories: Array<'blueprints' | 'maps' | 'landmarks' | 'arabic-art'> = [
    'blueprints',
    'maps',
    'landmarks',
    'arabic-art',
  ];
  const category = categories[i % 4];

  allProducts.push({
    id: `product-${i}`,
    slug: `product-${i}`,
    category,
    title: {
      ar: `منتج ${i}`,
      en: `Product ${i}`,
    },
    description: {
      ar: `وصف المنتج ${i} بالعربية`,
      en: `Product ${i} description in English`,
    },
    price: Math.floor(Math.random() * 20000) + 5000,
    images: [
      `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=800`,
    ],
    rating: Math.random() * 2 + 3.5,
    reviewCount: Math.floor(Math.random() * 200),
    downloadFormats: ['PDF', 'JPG', 'PNG', 'SVG'],
    sizes: [
      { label: 'A4', dimensions: '210 × 297 mm' },
      { label: 'A3', dimensions: '297 × 420 mm' },
    ],
    printRecommendations: {
      ar: 'موصى به للطباعة',
      en: 'Recommended for print',
    },
    reviews: [],
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  });
}
