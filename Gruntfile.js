var webpackDevConfig = require('./webpack.dev.js');
var webpackProdConfig = require('./webpack.prod.js');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      dev: webpackDevConfig,
      prod: webpackProdConfig
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackDevConfig,
        publicPath: webpackDevConfig.output.publicPath
      },
      start: {
        keepAlive: true,
        hot: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        stats: {
          colors: true
        }
      }
    },
  })

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev', ['webpack:dev']);
  grunt.registerTask('prod', ['webpack:prod']);
}
