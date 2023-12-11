/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      offToggle: "inset(-10% -5% -15% -5%)",
      onToggle: "inset(-10% 105% -15% -5%)",
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-clip-path'),
  ],
}

