/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3709EE',
				secondary: '#C51616',
				third: '#3988EC',
				titles: '#2B217A',
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
