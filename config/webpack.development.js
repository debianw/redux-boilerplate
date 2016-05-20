'use strict';

/**
 * Module dependencies.
 */

const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const path              = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const port              = process.env.PORT || 3002;
const clientPath        = path.join(__dirname, '../client');
const distPath          = path.join(__dirname, '../dist');

/**
 * Expose
 */

module.exports = {

  //
  devtool: 'eval-source-map',

  //
  entry: {
    bootstrap: [
      'bootstrap-loader'
    ],

    app: [
      'webpack-dev-server/client?http://localhost:'+port,
      'webpack/hot/only-dev-server',
      './client/index.js'
    ]
  },

  //
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    publicPath: 'http://0.0.0.0:'+port+'/'
  },

  //
  plugins: [
    // HMR
    new webpack.HotModuleReplacementPlugin(),

    // App
    new HTMLWebpackPlugin({
      title: 'NODe App',
      template: 'client/index.html',
      chunks: [ 'bootstrap', 'app' ]
    }),

    // ENV
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],

  //
  module: {
    loaders: [

      // js
      {
        test: /.js$/,
        loaders: ['react-hot', 'babel'],
        include: clientPath,
        exclude: /node_modules/
      },

      // img files
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=media/img-[hash:6].[ext]'
      },

      // video files
      {
        test: /\.(mp4)$/,
        loader: 'file-loader?name=media/video-[hash:6].[ext]'
      },

      // fonts
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      },

      // bootstrap assets
      /*{
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },*/

      // css
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss']
      },

      // sass
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'sass']
      }

    ]
  },

  //
  postcss: function () {
    return [autoprefixer];
  }

}
