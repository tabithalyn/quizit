/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 800px)' }
      }
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      '1md': '860px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    container: {
      center: true
    }
  },
}

