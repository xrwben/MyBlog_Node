const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "devolepment",
	entry: {
		app: path.resolve(__dirname, "../src/main.js")
	},
	output: {
		filename: "static/js/[name].[hash].bundle.js",
		path: path.resolve(__dirname, "../dist"),
		chunkFilename: "static/js/[name].[chunkhash:8].js",
		publicPath: "/"
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(scss|sass)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
				use: ["url-loader"]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
      template: path.resolve(__dirname, "../index.html"),
			inject: true,
			minify: {
				removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
			},
			chunksSortMode: "dependency"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		host: "localhost",
		port: "8080",
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		hot: true
	}
}