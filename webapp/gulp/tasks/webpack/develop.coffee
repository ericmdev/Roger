'use strict'

gulp   = require 'gulp'
changed  = require 'gulp-changed'
webpack = require 'gulp-webpack'
path = require 'path'

module.exports = () ->
  return gulp.src this.opts.config.webpack.src
    .pipe changed this.opts.config.webpack.dest
    .pipe webpack require path.join this.opts.root, this.opts.config.webpack.config
    .pipe gulp.dest this.opts.config.webpack.dest