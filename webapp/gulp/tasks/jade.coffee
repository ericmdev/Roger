'use strict'

gulp         = require 'gulp'
data         = require 'gulp-data'
jadeTemplate = require 'gulp-jade-template'
dest         = require 'gulp-dest'

module.exports = () ->
  return gulp.src this.opts.config.jade.data, {cwd: this.opts.config.root}
    .pipe data (file)-> require file.path
    .pipe jadeTemplate this.opts.config.jade.tpl
    .pipe dest this.opts.config.jade.dest, {ext: '.html'}
    .pipe gulp.dest './'