/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				vi: '#5F29CC',
				aqua: '#00CCCC',
				livi: '#7733FF',
				davi: '#471F99',
				focus: '#925CFF',
				info: '#0095FF',
				success: '#43B75D',
				warning: '#FFAA00',
				danger: '#EE443F',
				light: '#FAFAFA',
				vander: '#EDEFFE',
				dark: '#131927',
				disabled: '#F3F4F6',
				mute: '#9EA2AE',

			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1450px',
			},
			fontFamily: {
				mulish: 'Mulish',
			},

		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('dots', '& > ul');
			addVariant('dot', '& > ul > li > button');
			addVariant('activeDot', '& > ul > li > .is-active');
		}
	],
};
