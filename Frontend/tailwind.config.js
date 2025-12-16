/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          '50': '#f8f9fa',
          '100': '#e9ecef',
          '200': '#dee2e6',
          '300': '#ced4da',
          '400': '#adb5bd',
          '500': '#6c757d',
          '600': '#495057',
          '700': '#343a40',
          '800': '#212529',
          '900': '#1a1a1a',
          '950': '#0a0a0a',
        },
        'bright-sun': {
        '50': '#f8f9fa',
        '100': '#e9ecef',
        '200': '#dee2e6',
        '300': '#adb5bd',
        '400': '#4682B4',
        '500': '#0275d8',
        '600': '#0069d9',
        '700': '#0062cc',
        '800': '#005cbf',
        '900': '#004085',
        '950': '#002752',
    },
    
      },
      keyframes: {
        'option-animation': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'option-animation': 'option-animation 200ms ease forwards',
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '900px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }
    }
  },
  plugins: [],
}