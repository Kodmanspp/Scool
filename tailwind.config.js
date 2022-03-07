module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

    },
    screens: {

      'bt': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'nt': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mt': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mb': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'mn': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
