module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'me': "url('/src/assets/img/me.jpg')"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    colors: {
      'primary': '#050A30',
      'white': '#FFFFFF',
      'black': '#000000',
      'blue' : '#4fc3f7',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#bdbdbd',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    }
  },
  plugins: [],
}
