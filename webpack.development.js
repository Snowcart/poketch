const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: false,
	// devtool: 'source-map',
	devServer: {
		compress: true,
		open: true,
		historyApiFallback: true,
		port: 9000,
		index: 'index.html'
	}
});
