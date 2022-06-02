module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        cyan: '#5BBFBA',
        purple: '#5F6CAF',
        yellow: '#E7F0C3',
        orange: '#F0CF85',
        green: '#A4D4AE',
        gray: {
          100: '#EDF1F8',
          500: '#E6E7E7',
          700: '#CCD0DC',
          900: '#BABBBB',
        },
        white: '#FFFEFE',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
