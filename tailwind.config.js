/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', 'Arial', 'Cantarell', 'Fira Sans', 'Droid Sans', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: 'rgb(250, 250, 250)',
          75: 'rgb(245, 245, 245)',
          100: 'rgb(240, 240, 240)',
          200: 'rgb(229, 229, 229)',
          300: 'rgb(212, 212, 212)',
          400: 'rgb(163, 163, 163)',
          500: 'rgb(120, 120, 120)',
          600: 'rgb(92, 92, 92)',
          700: 'rgb(64, 64, 64)',
          800: 'rgb(43, 43, 43)',
          900: 'rgb(23, 23, 23)',
          925: 'rgb(15, 15, 15)',
          950: 'rgb(10, 10, 10)',
        },
        blue: {
          50: 'rgb(235, 243, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(155, 201, 253)',
          400: 'rgb(117, 177, 251)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
          950: 'rgb(20, 32, 72)',
        },
      },
    },
  },
  plugins: [],
};
