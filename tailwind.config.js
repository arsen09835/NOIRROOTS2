/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFFFF',
        black: '#0A0A0A',
        gold: '#C6A96A',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source': ['Source Sans 3', 'sans-serif'],
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
};