/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        pinkPrimary : '#F197F4',
        bluePrimary: '#5B6AAA',
        blueSecondary : '1C2745',
        nav : '#2B3A63'
      },
      fontFamily : {
        jura : ['Jura', 'sans-serif']
      },
    },
  },
  plugins: [],
}

