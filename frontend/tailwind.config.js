/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4A90E2',
        'bgcolor': '#ffffff',
        
      },
    },
  },
  plugins: [],
}

