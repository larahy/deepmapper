const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

   module.exports = {
     entry: './src/index.js',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         },
         {
           test: /\.scss$/,
           use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: [
               'css-loader',
               'sass-loader'
             ]
           })
         },
         {
           test: /\.html$/,
           use: [
             {
               loader: "html-loader"
             }
           ]
         },
         {
           test: /\.(png|svg|jpg|gif)$/,
           use: {
             loader: "file-loader"
           }
         }
       ]
     },
     plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "./index.html"
       }),
       new ExtractTextPlugin('mystyles.css')
     ]
 };