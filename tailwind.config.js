/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["valentine"],
	},
};

// "cupcake",
// "bumblebee",
// "emerald",
// "corporate",
// "synthwave",
// "retro",
// "valentine",
// "garden",
// "forest",
// "dracula",
// "night",
// dark;
// "light",
