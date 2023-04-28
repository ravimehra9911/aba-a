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
      yellowColorDark: '#F5EBAC',
      blackColor: '#2C2E31',
      whiteColor: '#FFFCFC',
    },
    extend: {
      fontFamily: {
        interstateLight: ['Interstate-light', 'san-serif'],
        interstateRegular: ['Interstate-regular', 'san-serif'],
        spaceMonoRegular: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
