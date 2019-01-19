'use strict';

var webpack = require('webpack');
var path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
	entry: [
		"@babel/polyfill", 
		"./src/index.js"
	],
	
	mode: "production",

	optimization: {
		minimize: true,
	},

});
