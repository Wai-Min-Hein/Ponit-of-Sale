/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    },
    extend: {
      colors: {
        'primary': '#8ab4f8',
        'danger': '#FE4949',
        'btn' : '#8AB4F8',
        'bg': '#202124',
        'border': '#3f4245',
        'white': '#fff',
        'bg-dark':'#161618',
        'gray-50': '#787f80',
        'gray-100': '#D9D9D91A'
      },
      fontFamily: {
        'montserrat': ['Montserrat','sans-serif'],
      },

    },
  },
  plugins: [],
}

