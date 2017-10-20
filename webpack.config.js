const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./client/app.js",
	output:  {
		filename: "./out/index.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
						'react'
					]
				}
			},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
		],
	},
    plugins: [
        new ExtractTextPlugin('out/style.css')
    ]
};