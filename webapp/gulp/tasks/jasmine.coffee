'use strict'

gulp    = require 'gulp'
jasmine = require 'gulp-jasmine'

module.exports = () ->
  return gulp.src this.opts.config.jasmine.src
    .pipe jasmine() # gulp-jasmine works on filepaths so you can't have any plugins before it