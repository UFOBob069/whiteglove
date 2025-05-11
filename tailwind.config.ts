import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e6',
          100: '#fbf1cc',
          200: '#f7e399',
          300: '#f3d566',
          400: '#efc733',
          500: '#FFD700', // Bright gold
          600: '#FFC300', // Slightly deeper gold
          700: '#806600',
          800: '#4d3d00',
          900: '#1a1400',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 