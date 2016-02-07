'use strict'

gulp   = require 'gulp'
humans = require 'gulp-humans'

module.exports = () ->
  return gulp.src this.opts.config.humans.src
    .pipe humans this.opts.config.humans.opts
    .pipe gulp.dest this.opts.config.humans.dest