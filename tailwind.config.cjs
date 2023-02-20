/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-purple": {
        100: "#2E1767",
        200: "#270D67",
        300: "#0F0034",
        400: "#0D002B",
      },
      "dark-blue": {
        400: "#111E38",
        800: "#040A15",
      },
    },
  },
  plugins: [],
};
