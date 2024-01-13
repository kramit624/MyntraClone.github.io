/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./myapp/*.html"],
  theme: {
    extend: {
      fontFamily : {
        'Segoe': ["Segoe UI"],
      },
      colors : {
        pinkTone : "#FF76B8",
        searchBar : "#F5F5F6",
      },
      backgroundImage :{
        "mobileNav" : "linear-gradient(270deg,#ffe5b2,#fff);",
      },
    },
  },
  plugins: [],
}

