const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    "mode": "development",
    "entry": "./src/js/index.js",
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader?url=false",
                    "sass-loader"
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    loader: "babel-loader"
                }
            },
            {
                "test": /\.js$/,
                "exclude": /(node_modules|dist|src\/libs)/,
                "use": ['eslint-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'./src/images',to:'images'} ,
            {from:'./src/mock',to:'mock'}
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new LiveReloadPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        publicPath: '/dist/'
    }
}
