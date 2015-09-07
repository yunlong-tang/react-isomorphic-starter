var path = require('path');
var webpack = require('webpack');
var host = 'localhost';
var port = 3001;

module.exports = function () {
  return {
    // devServerPort: port,
    // devtool: 'inline-source-map',
    entry: {
      common: ['react', 'react-router', 'react-redux', 'redux-logger'],
      client: ['./app/client_entry/client/client.js'],
      homepage: ['./app/client_entry/homepage/homepage.js'],
      admin: ['./app/client_entry/admin/admin.js'],
      user: ['./app/client_entry/user/user.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]/bundle.js',
      publicPath: 'http://' + host + ':' + port + '/dist/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'react-common.js',
        minChunks: Infinity
      })
    ],
    module: {
      loaders: [
        // {
        // test: /\.js$/,
        // loaders: ['react-hot', 'babel-loader?optional=runtime&stage=0'],
        // exclude: /node_modules/
        // include: __dirname}
      ]
    }
  }
};

// // When inside Redux repo, prefer src to compiled version.
// // You can safely delete these lines in your project.
// var reduxSrc = path.join(__dirname, '..', '..', 'src');
// var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules');
// var fs = require('fs');
// if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//   // Resolve Redux to source
//   module.exports.resolve = { alias: { 'redux': reduxSrc } };
//   // Compile Redux from source
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: ['babel'],
//     include: reduxSrc
//   });
// }
