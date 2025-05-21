import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': ['3rem', { lineHeight: '4rem', fontWeight: '700' }], // 48px/64px
        'heading-2': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 32px/40px
        'heading-3': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }], // 24px/32px
        'subtitle-1': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px/24px
        'subtitle-2': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 14px/24px
        'body-1': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px/24px
        'body-2': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14px/24px
        caption: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px/16px
        link: ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px/24px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
};

export default config;
