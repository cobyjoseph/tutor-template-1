/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#1a1101',
				primaryDark: '#151225',
				primaryBright: '#2A2AAC',
				secondary: '#CC3232',
				secondaryDark: '#6b1b15',
				third: '#F6991B',
				shading: '#f0e8d8',
				accent: '#F6895A',
				textAlternate: '#2B217A'
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
