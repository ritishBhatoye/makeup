module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'orange-500': '#FF6B00',
        'orange-800': '#CC5500',
        background: '#f2ede8',
        text: '#6b5c4c',
      },
    },
  },
  plugins: [],
};