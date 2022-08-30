/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}',],
  theme: {
    screens: {
      sm: "480px",
      md: "712px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        errorRed: 'hsl(0, 100%, 66%)',
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)'
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
        secondary: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        activeInput: "linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
        bgBlurDesktop: "url('./images/bg-main-desktop.png')",
        bgBlurMobile: "url('./images/bg-main-mobile.png')",
        frontImage: "url('./images/bg-card-front.png')",
        backImage: "url('./images/bg-card-back.png')"
      },
      backgroundSize: {
        'mobile': '100% 85%',
        'desktop': '75% 100%'
      }
    },
  },
  plugins: [],
}
