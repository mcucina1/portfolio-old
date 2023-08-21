/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
        fadeMessage: 'fadeInThenOut 3s ease-in',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: '0%;' },
          '100%': { opacity: '100%' },
        },

        fadeInThenOut: {
          '0%,100%': { opacity: '0%' },
          '10%,90%': { opacity: '100%' }
        }
      }),
    },
  },
  plugins: [],
}

