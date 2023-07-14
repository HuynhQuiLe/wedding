/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_pink: "#f8e3d5",
        custom_light_pink: "#f8efe9",
        custom_hover_text: "#DEA27A",
        custom_black: "#3a4049",
        bottom_color: "#f9fafa",
      },
      backgroundImage: {
        linear_logo: "linear-gradient(120deg, #8fb3ff, #ed78ab);",
        carousel:
          "url('./assets/e1c78c_38c6098a3adb4746a3f7b2005fe1fc0f.webp')",
      },
      objectPosition: {
        custom_10: "10% 10%",
        custom_75: "50% 75%",
      },
    },
  },
  plugins: [],
};
