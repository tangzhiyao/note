
// import path from 'path' 
// import webpack from 'webpack'
// import htmlWebpackPlugin from 'html-webpack-plugin'
// import VueLoaderPlugin from 'vue-loader/lib/plugin'
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: '[name][hash: 3].[ext]'
                    }
                }]
            },
            {
                //处理 es6
                test: /\.js$/,            
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ['@babel/plugin-transform-runtime']
                }
                
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new VueLoaderPlugin()
    ]
    
    
}