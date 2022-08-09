/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "appoint-pattern": "url('./assets/images/appointment.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
