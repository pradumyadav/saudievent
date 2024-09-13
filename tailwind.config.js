/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        sepia: {
          100: '#F4E6D4',
          200: '#E6D0B8',
          300: '#D9BA9C',
          800: '#5C4D3C',
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        expand: 'expand 1s ease-out forwards',
        scrollBounce: 'scrollBounce 1.5s infinite',

      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}