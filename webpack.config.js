var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        historyApiFallback: true,

    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                  presets:['react']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
         path: __dirname + "/dist/js",
         filename: 'js/bundle.min.js',
         publicPath: '/'

    },
    plugins: [
      new HTMLWebpackPlugin( {inject:"root",
      template:"./src/index.html",
      filename:"index.html"
    })
    ]
};
