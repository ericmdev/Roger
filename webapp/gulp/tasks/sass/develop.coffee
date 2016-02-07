'use strict'

gulp    = require 'gulp'
plumber = require 'gulp-plumber'
changed = require 'gulp-changed'
sass    = require 'gulp-sass'
autoprefixer    = require 'gulp-autoprefixer'

module.exports = () ->
  return gulp.src this.opts.config.sass.src, {cwd: this.opts.config.root}
    .pipe plumber this.opts.errorHandler
    .pipe sass this.opts.config.sass.opts
    .pipe autoprefixer this.opts.config.autoprefixer.opts
    .pipe gulp.dest this.opts.config.sass.dest