/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'background-color': '#F6F8F9',
        'border-color':'#EEF0F4'
      },
    },
  },
  plugins: [
    'flowbite'
  ],
};
