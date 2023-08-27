/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadowRight: '2px 0 15px #e1e1e1',
        shadowBottom: '0 2px 10px #e1e1e1'
      }
    }
  },
  plugins: []
}
