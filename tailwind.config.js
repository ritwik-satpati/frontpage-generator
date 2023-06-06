/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        width: {
          'a4': "210mm",
        },
        height: {
          'a4': "297mm"
        }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundOpacity: ['active'],
    }
  }
}

