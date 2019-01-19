'use strict';

var webpack = require('webpack');
var path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
	entry: [
		"@babel/polyfill", 
		"./src/index.js",
		'webpack/hot/only-dev-server',
	],

	mode: "development",

	devServer: {
		host: "localhost",
		port: 80,
		hot: true,
		inline: true,
		quiet: true,
		compress: true,
		historyApiFallback: true,
		watchContentBase: true,
		contentBase: __dirname + '/../public/',
	},

	devtool: 'inline-source-map',

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
});

// plugins: [
// 	new webpack.optimize.OccurenceOrderPlugin(),
// 	new webpack.HotModuleReplacementPlugin(),
// 	new webpack.NoErrorsPlugin()
// ]