/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '28px',
        'custom-sm': '16px',
        'custom-p': '14px',
      },
      lineHeight: {
        'custom-lg': '48px',
        'custom-sm': '32px',
        'custom-p': '16px',
      },
      fontWeight: {
        'bold': 700,
        'normal': 400,
        'medium': 500,
      },
      textColor: {
        'custom-text-lg': 'rgba(47, 51, 103, 1)',
        'custom-text-sm': 'rgba(134, 146, 166, 1)',
      },
      backgroundColor: {
        'custom-bg': 'rgba(223, 222, 224, 1)',
      },
    },
  },
  plugins: [],
}
