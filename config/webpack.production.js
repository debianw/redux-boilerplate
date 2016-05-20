'use strict';

/**
 * Module dependencies.
 */

const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

const clientPath        = path.join(__dirname, '../client');
const distPath          = path.join(__dirname, '../dist');

/**
 * Expose
 */

module.exports = {

  //
  entry: {
    bootstrap: [
      'bootstrap-loader/extractStyles',
    ],

    app: [
      './client/index.js'
    ]
  },

  //
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  plugins: [
    //
    new ExtractTextPlugin('[name].style.css?[hash]-[chunkhash]-[contenthash]-[name]', {
      allChunks: true
    }),

    // App
    new HTMLWebpackPlugin({
      title: 'NODe App',
      template: 'client/index.html',
      chunks: [ 'bootstrap', 'app' ]
    }),

    //
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    //
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
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
        include: clientPath
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
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },

      // css
      {
        test: /\.css$/,
        //loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss']
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },

    ]
  },

  //
  postcss: function () {
    return [autoprefixer];
  }

}
