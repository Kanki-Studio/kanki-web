/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': {
        100: '#FF1300',
        90: '#FF5A00',
        80: '#FF7500',
        60: '#FF8E00',
        50: '#FEB302'
      },
      'black': {
        100: '#161616',
        80: '#515152',
        60: '#8C8C8F',
        50: '#C8C7CC',
      },
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}