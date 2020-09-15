const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'partners.js',
		path: path.resolve(__dirname, './dist/'),
		library: 'Partners',
		libraryTarget: 'var'
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