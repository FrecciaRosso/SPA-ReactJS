const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
//require("font-awesome-sass-loader");

module.exports = {
    "mode": "development",
    //"entry": "./src/scss/styles.scss",
    "entry": "./src/index.js",
/*    "entry": {
        "app": './src/index.js',
        "styles": './src/scss/styles.scss'
      },*/
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
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'./src/images',to:'images'} 
        ]),
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}