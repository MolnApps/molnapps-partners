const path = require('path');
const webpack = require("webpack");

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
	          // Creates `style` nodes from JS strings
	          'style-loader',
	          // Translates CSS into CommonJS
	          'css-loader',
	          // Compiles Sass to CSS
	          'sass-loader',
	        ],
	      },
	    ],
	  },
};