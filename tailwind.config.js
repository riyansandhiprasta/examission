/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./resources/**/*.html",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter:["Inter", "sans-serif"],
        },
  
        backgroundImage: {
          'home-hero': "url('../public/img/bg-hero.svg')",
        },
      },
    },
    plugins: [],
  }
  