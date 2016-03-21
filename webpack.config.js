// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname + '/app/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })

var webpack = require('webpack')

var id = process.env.GH_BASIC_CLIENT_ID
var secret = process.env.GH_BASIC_SECRET_ID
var node_env = process.env.NODE_ENV

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: './app/public',
        filename: "bundle.js"
    },
    module:{
        loaders: [
        {
            test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
        }
        ]
    },
    // plugins: [HTMLWebpackPluginConfig]
    plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : JSON.stringify(node_env),
        'GH_BASIC_CLIENT_ID': JSON.stringify(id),
        'GH_BASIC_SECRET_ID': JSON.stringify(secret)
      }
    })],

}