/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',

      'lgmobile': '500px',

      'tablet': '768px',

      'laptop': '1024px',

      'desktop': '1280px',

      'xl': '3000px',
    }
  },
  plugins: [],
}

