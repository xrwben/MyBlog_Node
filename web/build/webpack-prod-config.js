const path = require("path");

module.exports = {
	mode: "devolepment",
	entry: {
		app: path.resolve(__dirname, "../src/main.js")
	},
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: '/'
	},
	devtool: "inline-source-map",
	module: {
		rules: [

		]
	},
	plugins: [

	]
}