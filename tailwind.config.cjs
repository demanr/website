/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        animation: {
          "fade-in-s": "fade 4.5s ease-in-out",
        },
      },

      animation: {
        spinSlow: "spin 8s linear infinite",
        spinDJ: "spin 4s ease infinite",
      },
    },
    variants: {},
    plugins: [],
  },
};
