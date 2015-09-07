var webpack = require('webpack');
var config = require('./webpack.config.js')();

// Add source mapping for debuging.
config.devtool = 'source-map';

// Provider special entry point in development phase,
// it will be able to get live reloads when doing changes to our source code.
config.entry.client.unshift('webpack/hot/only-dev-server');
config.entry.client.unshift('webpack-dev-server/client?http://localhost:3000');

// plugins for development
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
]);

// loaders for development
config.module.loaders.push({
  test: /\.js$/,
  loaders: ['react-hot', 'babel-loader?optional=runtime&stage=0'],
  exclude: /node_modules/
});

module.exports = config;
