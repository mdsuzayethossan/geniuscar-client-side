/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EC2553",

          secondary: "#524dea",

          accent: "#e085fc",

          neutral: "#24233E",

          "base-100": "#FAF8FC",

          info: "#81CCDF",

          success: "#1FDBCB",

          warning: "#DCA204",

          error: "#F03B24",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
