/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lx: '18px',
        lg: '24px'
      },
      colors: {
        gray: '#6B7280',
        lightgray: '#F3F4F6',
        black: '#000000',
        white: '#FFFFFF',
        oil: '#374151',
        green: '#059669'
      }
    }
  },
  plugins: []
};
