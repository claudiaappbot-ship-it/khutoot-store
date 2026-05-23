/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Khutoot Studio color system
        bg: {
          primary: '#F5F3EE',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#111111',
          secondary: '#6E6E6E',
          light: '#FFFFFF',
        },
        border: {
          light: '#DDD7CF',
        },
        accent: {
          taupe: '#C8B6A6',
          secondary: '#6B705C',
          hover: '#8B7D6B',
        },
        primary: {
          black: '#000000',
          white: '#FFFFFF',
          dark: '#0F0F0F',
          light: '#F8F8F8',
          gold: '#D4AF37',
          text: '#1A1A1A',
          'text-light': '#E8E8E8',
          accent: '#E74C3C',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        'cairo': ['Cairo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['48px', { lineHeight: '56px' }],
        '5xl': ['64px', { lineHeight: '72px' }],
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        96: '96px',
      },
      boxShadow: {
        none: 'none',
        subtle: '0 4px 12px rgba(0, 0, 0, 0.08)',
        card: '0 8px 16px rgba(0, 0, 0, 0.1)',
        hover: '0 12px 24px rgba(0, 0, 0, 0.12)',
        luxury: '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'none': '0',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
