'use strict'

gulp     = require 'gulp'
plumber  = require 'gulp-plumber'
changed  = require 'gulp-changed'
imagemin = require 'gulp-imagemin'

module.exports = () ->
  return gulp.src this.opts.config.images.src + '/**/*.+(png|jpg|jpeg|gif)'
    .pipe plumber this.opts.errorHandler
    .pipe changed this.opts.config.images.dest
    .pipe imagemin()
    .pipe gulp.dest this.opts.config.images.dest