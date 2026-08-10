export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9fe',
          100: '#d6f1fc',
          200: '#ade3f8',
          300: '#75d0f2',
          400: '#3bb9e9',
          500: '#16a6e4',
          600: '#0b84bd',
          700: '#0c6a98',
          800: '#10597d',
          900: '#124a68',
        },
        ink: {
          DEFAULT: '#16191c',
          soft: '#3d454d',
          muted: '#6b7681',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
}
