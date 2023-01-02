/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'red': '#ff3838',
				'gray': '#777777',
				'text': '#555555',
				'blue': '#1494a9',
				'white': '#ffffff',
				'chalk': '#f5f5f5',
				'green': '#11b76b',
				'purple': '#b12fad',
				'orange': '#e86121',
				'yellow': '#ffab10',
				'body': '#f5f6f7',
				'border': '#e8e8e8',
				'heading': '#39404a',
				'primary': '#119744',
				'sub-heading': '#565765',
				'green-chalk': '#ddffd5',
				'green-dark': '#072f17',
				'gray-chalk': '#cccccc',
				'intro-bg': '#f8fffa',
				'facebook': '#3b5998',
				'linkedin': '#0e76a8',
				'transparent': 'rgba(0, 0, 0, 0.2)',
				'deep-transparent': 'rgba(0, 0, 0, 0.4)',
				'black-transparent': 'rgb(0 0 0 / 50%)',
				'twitter': '#00acee',
				'google': '#e60023',
				'instagram': '#f77737',
			},
			maxWidth: {
				'container': '1560px',
			},
			fontFamily: {
				'rubik': ['Rubik', 'sans-serif'],
			},

			dropShadow: {
				'sideNavShadow': '15px 0px 25px 0px rgb(0 0 0 / 15%)',

			},
			backgroundImage: {
				'banner-pattern': "url('/public/assets/images/banner-shape.png')",
			}
		},
	},
	plugins: [],
}