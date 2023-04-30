/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1600px',
      // sm: 540px,
      // md: 720px,
      // lg: 960px,
      // xl: 1140px,
      // xxl: 1380px,
      // xxxl: 1560px
    },
    colors: {
      yellowColor: '#FDFADB',
      yellowColorDark: '#F5EBAC',
      blackColor: '#2C2E31',
      whiteColor: '#FFFCFC',
      black: '#000000',
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
