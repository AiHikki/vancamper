/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#101828',
        secondary: {
          100: '#E44848',
          200: '#D84343',
        },
        dandelion: '#FFC531',
        'slate-blue': '#475467',
        'foggy-white': '#F2F4F7',
        'snow-white': '#F7F7F7',
      },
      fontFamily: {
        inter: ['Inter', 'sens-serif'],
      },
    },
  },
  plugins: [],
};
