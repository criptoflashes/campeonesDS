/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
/*     theme: {
    extend: {
      backgroundImage: {'bgImage': "url('/img/bg.svg')"},
    }
  }, */
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5a84b5",
          secondary: "#fef08a",
          accent: "#fbbf24",
          neutral: "#d6d3d1",
          "base-100": "#f3f4f6",
          info: "#ddd6fe",
          success: "#13967c",
          warning: "#fbd26a",
          error: "#f75f73",
          
        },
      },
      "cupcake",
      "dark",
      "retro",
    ]
  },
  plugins: [require("daisyui")],
};
