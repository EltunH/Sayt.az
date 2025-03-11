/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{htm,js}"],
  theme: {
    extend: {},
    screens: {
      'mini': '340px',
      'xmd': '550px',
      'tablet': '640px',
      'md': '768px',
      'lmd': '900px',
      'ort': '998px',
      'lg': '1024px',
      'mlg': '1185px',
      'lxs': '1232px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

