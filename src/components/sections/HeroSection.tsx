import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t, isArabic } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-gold rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-gold rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          {isArabic ? 'حوّل شغفك إلى قطعة فنية' : 'Transform Your Passion Into Art'}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {isArabic
            ? 'مجموعة حصرية من التصاميم الفنية والخرائط السعودية والمخططات الفنية عالية الجودة'
            : 'Exclusive collection of digital designs, Saudi maps, and high-quality artistic blueprints'}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Link
            href="/shop"
            className="px-8 py-4 bg-primary-gold text-primary-dark font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-luxury"
          >
            {t('hero.cta.shop')}
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            {t('hero.cta.gallery')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">{isArabic ? 'اسحب لأسفل' : 'Scroll down'}</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
