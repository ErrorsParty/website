module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("daisyui"),
	],
	darkMode: "class",
	daisyui: {
		prefix: "dui-",
		themes: ["light", "dark"],
	},
};
