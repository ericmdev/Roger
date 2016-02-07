/* Load all requirements. */
var webpack = require('webpack'),
    path = require('path');

/* Commons plugin. */
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

/* Bower plugin. */
var BowerWebpackPlugin = require('bower-webpack-plugin');

/* Module exports. */
module.exports = {
    /* Watch. */
    watch: false,
    /* Entry. */
    entry: {
      main: path.resolve('./client/js/app/main.js'),
    },
    /* Output. */
    output: {
      path: path.resolve('./web/js'),
      publicPath: 'http://localhost:8000/js/',
      filename: '[name].bundle.js'
    },
    /* Module. */
    module: {
      loaders: [
        { 
          test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
          loader: "imports?this=>window!exports?window.Modernizr" 
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
    },
    /* Resolve. */
    resolve: {
      modulesDirectories: [
        '../node_modules',
        './client/js/app_modules'
      ],
    },
    /* Externals. */
    externals: {
    },
    plugins: [
      commonsPlugin,
      new BowerWebpackPlugin({
        modulesDirectories: ['bower_components'],
        manifestFiles:      'bower.json',
        includes:           /.*/,
        excludes:           [],
        searchResolveModulesDirectories: true
      }),
      new webpack.ProvidePlugin({
      }),
    ]
}