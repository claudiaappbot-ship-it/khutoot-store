# خطوط المدينة | Urban Lines - Complete Project Brief
## Saudi Arabia Premium Digital Art E-Commerce Platform

---

## EXECUTIVE SUMMARY

**Project Name:** خطوط المدينة (Urban Lines / Khutat Al-Madina)  
**Market:** Saudi Arabia, UAE, Kuwait, Qatar  
**Target Launch:** Ready for immediate deployment  
**Tech Stack:** Next.js 14, TypeScript, TailwindCSS, Framer Motion, Sanity CMS  
**Hosting:** Mac Mini (locally) → Global CDN (production)  

This is a Drawscape.io-inspired premium e-commerce platform, 100% designed and built for Arabic-first Saudi users. Not a translation—a native experience.

---

## BRAND IDENTITY

### Brand Name: خطوط المدينة (Urban Lines)
**Tagline (Arabic):** "حوّل شغفك إلى قطعة فنية"  
**Tagline (English):** "Transform Your Passion Into Art"

### Visual Identity

**Color Palette:**
- **Primary:** Pure Black (#000000)
- **Secondary:** Pure White (#FFFFFF)
- **Accent Gold:** #D4AF37 (luxury, Saudi luxury aesthetic)
- **Dark Background:** #0F0F0F
- **Light Gray:** #F8F8F8
- **Text Dark:** #1A1A1A
- **Text Light:** #E8E8E8
- **Accent Accent:** #E74C3C (subtle CTA emphasis)

**Typography System:**
- **Headlines:** IBM Plex Sans Arabic (Bold, 700)
- **Body:** IBM Plex Sans Arabic (Regular, 400)
- **UI/Numbers:** Cairo (Regular, 400)
- **Minimal accent:** DIN Next Arabic (Light, 300)
- **Font Scale:** 12, 14, 16, 18, 20, 24, 32, 48, 64px

**Design Language:**
- Minimal whitespace (40-60px gutters)
- Thin 1px borders
- Subtle shadows (0 4px 12px rgba(0,0,0,0.08))
- Luxury shadows on hover (0 12px 24px rgba(0,0,0,0.12))
- No gradients unless necessary (max 1 subtle gradient)
- Premium glass effect on modals (backdrop-filter: blur)
- Large breathing space around content

---

## WEBSITE STRUCTURE & SITEMAP

### Main Navigation
```
/ (Homepage)
├── /shop (All Products)
├── /blueprints (Blueprint Artwork)
├── /maps (Saudi City Maps)
├── /landmarks (Kingdom Landmarks)
├── /arabic-art (Arabic Calligraphy)
├── /custom (Custom Orders)
├── /gallery (Customer Gallery)
├── /reviews (Reviews & Testimonials)
├── /about (About Us)
├── /contact (Contact)
├── /faq (FAQ)
├── /cart (Shopping Cart)
├── /account (User Dashboard)
├── /privacy (Privacy Policy)
└── /terms (Terms & Conditions)
```

### Product URL Structure
```
/blueprints/[slug]
/maps/[slug]
/landmarks/[slug]
/arabic-art/[slug]
```

### Admin Routes
```
/admin/dashboard
/admin/products
/admin/orders
/admin/content
/admin/analytics
```

---

## HOMEPAGE STRUCTURE

### 1. Hero Section
- **Background:** Cinematic hero image (Riyadh skyline in minimal style)
- **Height:** 100vh
- **Content:**
  - Headline: "حوّل شغفك إلى قطعة فنية"
  - Subheading: "مجموعة فريدة من التصاميم الفنية والخرائط"
  - CTA Buttons: "تصفح المتجر" (Shop Now) + "شاهد المعرض" (View Gallery)
- **Animation:** Subtle fade-in on scroll, parallax effect

### 2. Featured Categories (4 Cards)
- Cars/Blueprints
- Saudi Maps
- Landmarks
- Arabic Typography
- Each with hover zoom effect

### 3. Best Sellers Section
- 4-6 featured products
- Product cards with:
  - Image
  - Arabic/English title
  - Price in SAR
  - "أضف للسلة" (Add to Cart)
  - Star rating

### 4. Customer Showcase
- Before/After room mockups
- Testimonial quotes
- Customer reviews with ratings
- Instagram-style gallery grid

### 5. How It Works
- 3-step process:
  1. اختر التصميم (Choose Design)
  2. حمّل الملف (Download File)
  3. اطبع أو عرّج (Print or Frame)
- Icons + short descriptions

### 6. Social Section
- Instagram feed embed
- TikTok trending videos
- User-generated content
- "متابعتنا على" (Follow Us)

### 7. Newsletter Signup
- Email capture with Arabic copy
- "اشترك للحصول على تخفيفات خاصة"
- Dark mode toggle in same section

### 8. Footer
- 4 columns:
  1. عن المتجر (About)
  2. الوثائق (Policies)
  3. التواصل (Contact)
  4. تابعنا (Social)
- WhatsApp floating button (bottom-right)
- Payment methods icons (Mada, Apple Pay, STC Pay)

---

## PRODUCT PAGE TEMPLATE

Each product (/blueprints/[slug], /maps/[slug], etc.) contains:

### Left Side (60% on desktop)
- Large hero image (2000x2000px minimum)
- Thumbnail gallery (5-8 variations/angles)
- Zoom functionality
- Mockup carousel (showing in room context)

### Right Side (40% on desktop)
**Header:**
- Arabic title (H1)
- English title (smaller)
- ⭐ (4.8) · 124 reviews

**Pricing Section:**
- Price in SAR (14,900)
- "تحميل فوري" (Instant Download) badge
- Stock indicator (إن وجد)

**Download Formats:**
- PDF (A4, A3, A2)
- High-Res JPG (300DPI)
- PNG (Transparent)
- SVG (Editable)

**Description:**
- 100-150 word Arabic description
- Key features (بوليت بوينت)
- Print recommendations
- Frame size suggestions

**Actions:**
- "أضف للسلة" (Add to Cart - primary button)
- "أضف للمفضلة" (Add to Wishlist - secondary)

**Additional Sections:**
- Size Guide (interactive)
- Frame Recommendations
- Print Quality Info
- "صُنع لمنزل سعودي" badge

**Reviews Section:**
- Star filter
- Customer images
- Verified purchase badge

**Similar Products:**
- 4-product carousel
- "قد يعجبك أيضاً"

---

## COMPONENT HIERARCHY

```
App
├── Layout
│   ├── Header (Navigation + Language Switcher)
│   ├── Page Component
│   └── Footer
├── Shared Components
│   ├── ProductCard
│   ├── Button (Primary, Secondary, Text)
│   ├── Modal
│   ├── Toast
│   ├── Badge
│   └── LoadingSpinner
├── Homepage
│   ├── HeroSection
│   ├── FeaturedCategories
│   ├── BestSellers (ProductCard array)
│   ├── CustomerShowcase
│   ├── HowItWorks
│   ├── SocialSection
│   └── NewsletterSignup
├── Product Page
│   ├── ImageGallery
│   ├── ProductInfo
│   ├── PricingSection
│   ├── ReviewsSection
│   └── SimilarProducts
├── Shop
│   ├── FilterSidebar
│   ├── ProductGrid
│   └── Pagination
└── Account
    ├── Dashboard
    ├── OrderHistory
    └── Wishlist
```

---

## DATABASE SCHEMA (Sanity CMS)

### Products
```
{
  _id: string
  title: { ar: string, en: string }
  slug: string
  category: "blueprints" | "maps" | "landmarks" | "arabic-art"
  price: number (SAR)
  description: { ar: string, en: string }
  images: [Image]
  downloadFormats: string[]
  sizes: [{ label: string, dimensions: string }]
  printRecommendations: string
  seoKeywords: [string]
  rating: number
  reviews: [ReviewRef]
  stock: number
  createdAt: date
}
```

### Orders
```
{
  _id: string
  orderNumber: string
  customerId: string
  items: [{ productId, quantity, price }]
  totalAmount: number
  currency: "SAR"
  status: "pending" | "completed" | "downloaded"
  paymentMethod: string
  createdAt: date
  downloads: [{ productId, downloadedAt, expiresAt }]
}
```

### Reviews
```
{
  _id: string
  productId: string
  customerId: string
  rating: 1-5
  title: { ar: string, en: string }
  content: { ar: string, en: string }
  images: [Image]
  verified: boolean
  createdAt: date
}
```

### Customers
```
{
  _id: string
  email: string
  phone: string
  name: { ar: string, en: string }
  address: { region, city, details }
  wishlist: [productId]
  orders: [orderRef]
  preferences: { language, currency, newsletter }
  createdAt: date
}
```

---

## LOCALIZATION STRATEGY

### Arabic-First Approach
- **Default Language:** Arabic (ar)
- **RTL by default** using `dir="rtl"` on document
- **Language stored in:** localStorage, cookie, URL param
- **Fallback chain:** Stored preference → Browser locale → Arabic default

### RTL Implementation
- TailwindCSS RTL support via `@apply` directives
- Flexbox auto-reversal for RTL
- Conditional positioning (left/right swap)
- All text is properly bidi-encoded

### Content Delivery
- **Slug patterns:** Arabic transliteration + English
- **URLs stay Latin:** `/blueprints/toyota-land-cruiser` (universal)
- **UI text:** Full Arabic/English toggle
- **Product names:** Both languages always visible

---

## SAUDIZATION & LOCALIZATION FEATURES

### Currency & Payment
- **Default Currency:** SAR (ريال)
- **Payment Methods:**
  - Mada (Saudi cards)
  - Apple Pay
  - STC Pay
  - Tabby (BNPL)
  - Tamara (BNPL)

### Regional Messaging
- Ramadan/Eid seasonal banners
- "صُنع لمنزل سعودي" badge on products
- Saudi-specific testimonials
- Regional delivery estimates

### Cultural Touchpoints
- WhatsApp customer support button
- Arabic phone number support
- Saudi address format in checkout
- Friday holiday considerations

### Visuals
- Riyadh skyline elements
- Saudi Aramco corporate aesthetic
- Desert minimalism
- Luxury apartment photography (Saudi homes)
- Local landmarks (Burj Rafal, Kingdom Tower, etc.)

---

## SEO STRUCTURE

### Arabic Keywords (Priority)
```
مخططات سيارات
خرائط الرياض
لوحات هندسية
ديكور سعودي
فن خط عربي
الخط السعودي
تصاميم معمارية
```

### English Keywords (Secondary)
```
Saudi blueprint art
Riyadh city map
Arabic calligraphy art
Saudi landmarks print
Automotive blueprint poster
Digital art Saudi Arabia
Premium home decor Saudi
```

### Technical SEO
- **Meta tags:** Arabic title + description per page
- **Structured data:** Product schema (JSON-LD)
- **OG tags:** Arabic preview for social
- **Sitemap:** Auto-generated `/sitemap.xml`
- **Robots.txt:** Configured for SEO
- **Performance:** Lighthouse 90+

### Content Strategy
- Blog section for design tips
- Product guides (print sizes, framing)
- Behind-the-scenes content
- Customer feature stories

---

## ANIMATION & INTERACTION

### Micro-interactions
- Hover card lift (translateY -4px, shadow increase)
- Button ripple effect on click
- Smooth color transitions (200ms ease-out)
- Loading skeletons (not spinners)
- Toast notifications with slide-in

### Page Transitions
- Fade-in on scroll
- Staggered product card loads
- Parallax hero on scroll
- Smooth scroll behavior (CSS)

### Hero Section
- Subtle zoom on load (1.05x → 1x)
- Text fade-in with stagger
- CTA button pulse on hover

### Product Gallery
- Image fade/zoom on change
- Thumbnail highlight on selection
- Mockup carousel smooth scroll

### Framer Motion Usage
```javascript
// Hero text stagger
const container = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

// Card hover lift
whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}

// Smooth scroll
layoutId for shared layout animations
```

---

## MOBILE UX STRATEGY

### Responsive Breakpoints
- **Mobile:** 320px-640px (primary)
- **Tablet:** 641px-1024px
- **Desktop:** 1025px+

### Mobile Optimizations
- **Hero:** 70vh (not 100vh) for quick CTA visibility
- **Navigation:** Hamburger → Arabic menu (right-side slide)
- **Product Grid:** 1 column → 2 column → 3 column
- **Touch Targets:** Min 44px × 44px
- **Image Optimization:** WebP with JPEG fallback
- **Performance:** Lazy loading all below-fold images

### Mobile-First Features
- Bottom sheet modals (better than center modals)
- Sticky product info (while scrolling gallery)
- Quick add to cart from card
- Wishlist toggle easily accessible
- Search with category filtering

### Thumb Zone
- CTA buttons in lower half (reachable with thumb)
- Top navigation stays sticky but not obtrusive (35px height)
- Language toggle in header (top-right, safe area)

---

## TECHNOLOGY STACK DETAILED

### Frontend
```json
{
  "framework": "Next.js 14",
  "language": "TypeScript 5",
  "styling": "TailwindCSS 3.4",
  "animation": "Framer Motion 10.16",
  "form": "React Hook Form + Zod",
  "state": "Zustand (lightweight)",
  "rtl": "next-i18next + framer-i18n",
  "images": "Next Image Optimization",
  "icons": "Heroicons + Custom SVGs",
  "carousel": "Swiper.js",
  "analytics": "Vercel Analytics + GTM"
}
```

### Backend Services
```
CMS: Sanity.io (or self-hosted)
Database: PostgreSQL (via Prisma)
Auth: NextAuth.js
Payments: Stripe + Local Saudi integrations
Storage: AWS S3 (product images)
Email: SendGrid (transactional) + Mailchimp (newsletter)
```

### Deployment
```
Development: Mac Mini (localhost:3000)
Staging: Vercel
Production: AWS/Vercel + CloudFront CDN
Domain: Custom .sa domain (ideally)
SSL: Let's Encrypt (auto-renew)
Monitoring: Sentry + LogRocket
```

---

## PHASE-BASED ROLLOUT

### Phase 1: MVP (Week 1-2)
- Homepage complete
- 20 sample products
- Product detail pages
- Shopping cart
- Basic checkout
- Arabic/English toggle

### Phase 2: Enhancement (Week 3)
- Wishlist & Recently Viewed
- Reviews system
- User accounts
- Order history
- Newsletter signup

### Phase 3: Advanced (Week 4+)
- AI recommendations
- Custom order form
- Blog section
- Analytics dashboard
- Admin CMS panel
- Email automation

---

## CONTENT: ARABIC COPY EXAMPLES

### Homepage Hero
**Arabic (AR):**
> حوّل شغفك إلى قطعة فنية تزين منزلك
> 
> مجموعة حصرية من التصاميم الفنية والخرائط السعودية

**English (EN):**
> Transform Your Passion Into Art
> 
> Exclusive collection of digital designs and Saudi maps

### CTA Buttons
| Arabic | English |
|--------|---------|
| تصفح المتجر | Shop Now |
| أضف للسلة | Add to Cart |
| حفظ المفضلة | Save to Wishlist |
| شراء الآن | Buy Now |
| تحميل فوري | Instant Download |
| أكمل الشراء | Checkout |

### Product Description Example
**Blueprint: Toyota Land Cruiser**

**Arabic:**
> تصميم خط يدوي بسيط وأنيق للسيارة الأيقونية تويوتا لاند كروزر. مثالي لغرفة المعيشة أو مكتب المنزل. متوفر بصيغ متعددة وأحجام قابلة للطباعة. جودة طباعة عالية وألوان دقيقة.

**English:**
> Minimalist line drawing of the iconic Toyota Land Cruiser. Perfect for living rooms or home offices. Available in multiple formats and printable sizes. High-quality print and accurate colors.

### About Us Section
**Arabic:**
> نحن متخصصون في تصاميم فنية ديجيتالية تعكس هوية المملكة العربية السعودية. كل تصميم يجمع بين الأناقة والبساطة والتفاصيل الدقيقة. تصاميمنا مثالية للمنازل الحديثة والمكاتب والمحلات. جودة عالية، أسعار معقولة، تجربة تسوق استثنائية.

**English:**
> We specialize in digital artwork that reflects Saudi Arabian identity. Every design combines elegance, simplicity, and fine details. Perfect for modern homes, offices, and businesses. High quality, reasonable prices, exceptional shopping experience.

---

## FUTURE SCALING IDEAS

### Short Term (3 months)
- Expand product library to 500+ items
- Add subscription model (monthly designs)
- Implement referral program
- Launch mobile app (React Native)

### Medium Term (6 months)
- Expand to other GCC markets (UAE, Kuwait)
- Add marketplace (vendor system)
- Implement AI design generator
- Launch affiliate program

### Long Term (12+ months)
- VR showroom (viewing in virtual home)
- AR try-on (frame on wall camera)
- Community design platform
- Print-on-demand fulfillment
- B2B bulk ordering
- International expansion

---

## BRAND GUIDELINES SUMMARY

| Aspect | Specification |
|--------|--------------|
| **Font Stack** | IBM Plex Sans Arabic (headlines), Cairo (UI) |
| **Color Primary** | Pure Black (#000000) / Pure White (#FFFFFF) |
| **Color Accent** | Gold (#D4AF37) |
| **Spacing** | 4px grid system (4, 8, 12, 16, 24, 32, 48, 64px) |
| **Border Radius** | 0px (minimal) or 8px (buttons) |
| **Shadows** | Subtle (0 4px 12px) on cards, luxury (0 12px 24px) on hover |
| **Animations** | Framer Motion, 200-300ms ease-out |
| **Tone** | Premium, Modern, Confident, Minimal, Stylish |
| **Currency** | SAR (ريال) |
| **Language** | Arabic-first, English secondary |
| **Direction** | RTL (right-to-left) |

---

This brief is ready for development. All specifications are production-ready.

