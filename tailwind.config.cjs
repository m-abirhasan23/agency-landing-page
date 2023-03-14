/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				syne:`'Syne', sans-serif;`,
				nunito:`'Nunito', sans-serif;`
			},
			colors:{
				primary:"#030211"
			}
		},
	},
	plugins: [],
}