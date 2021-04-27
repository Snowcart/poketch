const merge = require('webpack-merge');
const localFast = require('./webpack.local-fast.js');

module.exports = merge.smart(localFast, {
	devtool: 'source-map'
});
