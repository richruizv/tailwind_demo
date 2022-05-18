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
        'play-green': '#a5d239',
        'play-green-active': '#85db2a',
        'play-green-hover': '#87c931',
        'play-gray' : '#243d42',
        'play-gray-active': '#288c89',
        'play-gray-hover': '#305d60',
        'play-black': '#000000',
        'play-dark-gray': '#606060',
        'play-light-gray': '#c9c9c9',
        'play-white': '#ffffff',
        'play-background-gray': '#f7f7f7'
      }),
      textColor:{
        'primary': '#A5D239',
        'secondary': '#243D42',
        'play-green': '#a5d239',
        'play-green-active': '#85db2a',
        'play-green-hover': '#87c931',
        'play-gray' : '#243d42',
        'play-gray-active': '#288c89',
        'play-gray-hover': '#305d60',
        'play-black': '#000000',
        'play-dark-gray': '#606060',
        'play-light-gray': '#c9c9c9',
        'play-white': '#ffffff',
        'play-background-gray': '#f7f7f7'
      },
      fontFamily:{
        Montserrat : ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
