/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        showUp: {
          from: { translate: "0 -30%", opacity: 0.3 },
          to: { translate: "0 0", opacity: 1 },
        },
        showAside: {
          from: { translate: "-30% 0%", opacity: 0.3 },
          to: { translate: "0 0", opacity: 1 },
        },
        /* Menu Animation Keyframes */
        MenuAnimationFadeDown: {
          from: { translate: "0 0 ", opacity: "1" },
          to: { translate: "80% 0", opacity: "0" },
        },
        MenuAnimationRotateClockWise: {
          from: { rotate: "0 0 ", opacity: "1" },
          to: { rotate: "80% 0", opacity: "0" },
        },
        MenuAnimationRotateAgainstClockWise: {
          from: { rotate: "0 0 ", opacity: "1" },
          to: { rotate: "80% 0", opacity: "0" },
        },
      },
      animation: {
        showUp: "showUp 700ms ease-in-out ",
        showAside: "showAside 700ms ease-in-out ",
        MenuAnimationFadeDown: "MenuAnimationFadeDown 500ms ease-in",
        MenuAnimationRotateClockWise:
          "MenuAnimationRotateClockWise 500ms ease-in",
        MenuAnimationRotateAgainstClockWise:
          "MenuAnimationRotateAgainstClockWise 500ms ease-in",
      },
    },
  },
  plugins: [],
};
