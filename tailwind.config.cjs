/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Courier Prime"', 'monospace'], // Global default
    },
    extend: {
      fontFamily: {
        courier: ['"Courier Prime"', 'monospace'],
      },
    }
  },
  plugins: []
};
