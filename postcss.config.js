module.exports = {
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		// Purge CSS
		require("@fullhuman/postcss-purgecss")({
			content: ["./**/index.html", "./**/**.js"],
			defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
		}),
		//
	],
};
