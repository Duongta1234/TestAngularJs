console.log;
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : "",
  purge: {
    content : [
      '["./baiTestLogin/src/**/*.{ts,html}"]'
    ]
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],

  prefix : ''
};
