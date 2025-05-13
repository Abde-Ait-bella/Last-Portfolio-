/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",   // fichiers Blade (Laravel)
      "./resources/**/*.js",          // fichiers JS
      "./resources/**/*.jsx",         // fichiers JSX (React)
    ],
    theme: {
      extend: {
        fontFamily: {
            mapolice: ['excon'],
            mapolice: ['montserrat'],
          },
      },
    },
    plugins: [],
  }
  