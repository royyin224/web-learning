'use strict';
var webpack = require('webpack'),
	path = require('path');

//__dirname = Node.js way to get the current directory
var app = path.join(__dirname, 'app');

module.exports = {
    resolve: {
        root: __dirname,
        alias: {
            app: app,
            definitions: path.join(app, 'assets/definitions')
        }
    },
	context: app,
	entry: {
		app: ['webpack/hot/dev-server' ,'./core/bootstrap.js']
	},
	output: {
		path: app,
		filename: 'builds/dist.js'
	},
	// plugins: [  
	// 	new webpack.HotModuleReplacementPlugin({
    //         MODE: {
    //             production: process.env.NODE_ENV === 'production'
    //         }
    //     })
	// ],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'ng-annotate!uglify!babel!jshint',
				exclude: /node_module|bower_components/
			},
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
		]
	}
};