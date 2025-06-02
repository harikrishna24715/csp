/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'safety-yellow': '#FFC107',
        'safety-blue': '#2196F3',
        'safety-red': '#F44336',
        'safety-green': '#4CAF50',
      }
    },
  },
  plugins: [],
};