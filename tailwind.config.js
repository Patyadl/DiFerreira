/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
       '#EDF0B5': '#EDF0B5',
       '#F1D43B' : '#F1D43B',
       "#F4F4F4": '#F4F4F4',
       '#FFD51C': '#FFD51C',
       '#F4F4F4': '#F4F4F4'
    },
     fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },

 

  },
  plugins: [],
}
