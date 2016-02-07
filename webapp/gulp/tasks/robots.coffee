'use strict'

gulp   = require 'gulp'
robots = require 'gulp-robots'

module.exports = () ->
  return gulp.src this.opts.config.robots.src
    .pipe robots this.opts.config.robots.opts
    .pipe gulp.dest this.opts.config.robots.dest