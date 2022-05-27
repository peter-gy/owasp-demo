module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A6595'
      },
      fontFamily: {
        code: ['Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono']
      }
    }
  },
  plugins: []
};
