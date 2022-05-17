module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      },
      backgroundColor : theme => ({
        ...theme('colors'),
        'primary': '#A5D239',
        'secondary': '#243D42',
      }),
      textColor:{
        'primary': '#A5D239',
        'secondary': '#243D42'
      },
      fontFamily:{
        Montserrat : ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
