'use strict'

gulp      = require 'gulp'
webserver = require 'gulp-webserver'

module.exports = () ->
  return gulp.src this.opts.config.webserver.src, {cwd: this.opts.config.root}
    .pipe webserver this.opts.config.webserver.opts