const path = require('path')
const webpack = require('webpack')
const httpWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }, {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: './images/[name].[ext]'
                    // limit: 8192
                }
            }
        ]
    },
    devServer: {
        open: true,
        port: 4000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
       
        new httpWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html'
        }), new VueLoaderPlugin(), new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            // "vue$":"vue/dist/vue.js"
        },
        extensions: [".js", ".json", ".vue", ".ts"]
    }
}