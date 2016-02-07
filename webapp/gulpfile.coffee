'use strict'

# Load all requirements.
gulp           = require 'gulp'
GulpTaskLoader = require 'gulp-task-loader'
require 'require-yaml'
relpath        = require 'relative-path'
runSequence    = require 'run-sequence'
notify         = require 'gulp-notify'
livereload     = require 'gulp-livereload'

# Load configuration.
config = require './gulp/config.yml'

# Convert config.root to absolute path.
absroot = relpath config.root

# Configure gulp-task-loader.
opts =
  root: absroot,
  dir: config.tasks,
  exts: config.ext,
  config: config,
  errorHandler:
    errorHandler: notify.onError 'Error: <%= error.message %>'
gulpTaskLoader = GulpTaskLoader opts

# Develop.
gulp.task 'develop', (done) ->
  runSequence [
    'jade'
    'imagemin'
    'svgmin'
    'sass:develop'
    'webpack:develop'
    'webserver'
    ],
    () ->
      done()

# Watch.
gulp.task 'watch', () ->
  # Livereload
  livereload {start: true}
  livereloadPage = () ->
    livereload.reload()
  livereloadAsset = (path) ->
    wsconfig = config.webserver.opts
    assets_url = 'http://' + wsconfig.host + ':' + wsconfig.port + '/';
    livereload.reload(assets_url + path)
  gulp.watch ['./web/**/*.html', './web/img/*'], livereloadPage
  gulp.watch ['./web/css/**/*.css'], livereloadAsset 'css/style.css'
  gulp.watch ['./web/js/**/*.js'], livereloadPage
  # Develop
  gulp.watch ['./client/jade/**/*.json', './client/jade/**/*.jade'], ['jade']
  gulp.watch ['./client/sass/**/*.scss', '!./client/sass/**/vendor.scss'], ['sass:develop']
  gulp.watch ['./client/js/**/*.js', './client/js/**/*.scss', './client/sass/**/*.scss'], ['webpack:develop']

# Default.
gulp.task 'default', ['develop', 'watch']

# Test.
gulp.task 'test', ['jasmine']