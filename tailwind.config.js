/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontHeading: "'Space Grotesk', serif",
        fontBody: "'DM Sans', serif",
      },
      colors: {
        "primary-color": "#1E293B",
        "secondary-color": "#64748B",
        "accent-color": "#00B4A4",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}

