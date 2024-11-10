/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily:{
        'vazir-th':["vazir-th",'sansserif'],
        "vazir-rg":["vazir-rg","sansserif"],
        "vazir-md":["vazir-md","sansserif"],
        "vazir-black":["vazir-black","sansserif"],
        "vazir-bold":["vazir-bold","sansserif"],



      },
      keyframes: {
        'move-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      animation: {
        'move-in-left': 'move-in-left 0.3s ease-out forwards',
      }, 
    },
  },
  plugins: [],
}

