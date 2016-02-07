'use strict'

gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
changed      = require 'gulp-changed'
minifyCss    = require 'gulp-minify-css'
plumber      = require 'gulp-plumber'
rename       = require 'gulp-rename'
sass         = require 'gulp-sass'

module.exports = () ->
  return gulp.src this.opts.config.sass.src, {cwd: this.opts.config.root}
    .pipe plumber this.opts.errorHandler
    .pipe sass this.opts.config.sass.opts
    .pipe autoprefixer this.opts.config.autoprefixer.opts
    .pipe gulp.dest this.opts.config.sass.dest
    .pipe rename {suffix: '.min'}
    .pipe minifyCss()
    .pipe gulp.dest this.opts.config.sass.dest