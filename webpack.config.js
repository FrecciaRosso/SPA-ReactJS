const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
//require("font-awesome-sass-loader");

module.exports = {
    "mode": "development",
    "entry": "./src/scss/styles.scss",
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader?url=false",
                    "sass-loader"
                ]
            }/*,
            {
                "test": /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                "use": [
                  {
                    "loader": 'url-loader',
                    "options": {
                      "limit": 10000,
                      "mimetype": 'application/font-woff'
                    }
                  }
                ]
              },
              {
                "test": /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                "use": [
                  { "loader": 'file-loader' }
                ]
              }*/
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