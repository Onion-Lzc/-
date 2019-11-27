const path = require('path');
const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.config.js");
module.exports = merge([baseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        quiet: true, 
        noInfo: false,
        hot: true, 
        
        watchOptions: {
            aggregateTimeout: 300
        },
        port: 3000, 
  
    },
    plugins: [new webpack.HotModuleReplacementPlugin({})]
}])