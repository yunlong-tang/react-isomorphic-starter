var webpack = require('webpack');
var config = require('./webpack.config.js')();

// plugins for production
config.plugins = config.plugins.concat([
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      // maybe we need to compatible with ie8
      screw_ie8: false,
      dead_code: true,
      warnings: false,
      drop_console: true
    }
  })
]);

// loaders for production
config.module.loaders.push({
  test: /\.js$/,
  loaders: ['babel-loader?stage=0'],
  exclude: /node_modules/
});

module.exports = config;
