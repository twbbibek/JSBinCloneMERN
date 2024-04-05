/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#6598db',
        'primary-light' : '#ebf1fa',
        'primary-dark' : '#6395d6',
        'secondary' : '#FB2E86',
      },
      
      screens: {
        'sm': '576px',
        // => @medis(min-width: 640px) { ... }
        'md' : '768px',
        'lg' : '992px',
        'xl' : '1220px',
        '2xl' : '1440px',
      },
    },
  },
  plugins: [],
}

