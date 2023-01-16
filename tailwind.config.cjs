/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_light:'#F3F7F9',
        black75:'#5D6069',
        secondary:'#C52B84',
        hover_sidebar:'#F4D7E8',
      }
    },
    
  },
  plugins: [],
}