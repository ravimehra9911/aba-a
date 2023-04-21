/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      yellowColor: '#FDFADB',
    },
    extend: {
      fontFamily: {
        interstateLight: ['Interstate-light', 'san-serif'],
        interstateRegular: ['Interstate-regular', 'san-serif'],
        spaceMonoRegular: ['SpaceMono-Regular', 'sans'],
      },
    },
  },
  plugins: [],
};
