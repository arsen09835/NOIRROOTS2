/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#FAF9F7',
        'deep-green': '#0F3D33',
        sand: '#D9C9B4',
        charcoal: '#222',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
