module.exports = {
  content: ['./dist/*.html'], // <-- Key change
  theme: {
    screens: {
      sm: '680px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryDarkGray: 'hsl(0, 0%, 20%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
      },
    },
  },
  plugins: [],
};
