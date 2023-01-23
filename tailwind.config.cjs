/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#aad3ff',
				primaryDark: '#56A6F9',
				primaryBright: '#3116EC',
				secondary: '#B0ABFF',
				third: '#3988EC',
				textAlternate: '#2B217A',
				background1: '#CBC8F0',
				background2: '#DFE0FF',
				background3: '#CAD3FF'
			},
			fontFamily: {
				Heebo: ['Heebo'],
				Caveat: ['Caveat']
			},
			animation: {
				blinking: 'blink 1s step-start infinite'
			},
			keyframes: {
				blink: {
					'50%': { opacity: '0' }
				}
			}
		}
	},
	plugins: []
};
