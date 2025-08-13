/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
       '#EDF0B5': '#EDF0B5'
    },
     fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },

 

  },
  plugins: [],
}
