const merge = require('webpack-merge');
const development = require('./webpack.development.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge.smart(development, {
	// Doesn't produce sourcemaps (a ~30% reduction in build time)
	devtool: false,
	// Performs async TS type checking (in parallel but the build completion does not await it).
	// Provides a ~65% reduction in build time, you just have to keep an eye on the console for errors.
	// TODO Would be great to make this standard by moving it to webpack.local.js, though we need to confirm that VS2017
	// and VS2019 users still see the errors.
	plugins: [new ForkTsCheckerWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true
					}
				},
				exclude: /node_modules/
			}
		]
	}
});
