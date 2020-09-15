const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		"partners": "./src/index.js",
	},
	devtool: "source-map",
	output: {
		filename: 'partners.js',
		path: path.resolve(__dirname, './dist/'),
		library: 'Partners',
		libraryTarget: 'var'
	},
	optimization: {
		minimize: true
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
	],
};