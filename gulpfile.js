'use strict';

var gulp = require('gulp'),
    karma = require('karma').server,
    jshint = require('gulp-jshint');

var files = [
  '*.js',
  'demo/**/*-spec.js'
];

gulp.task('js', function () {
    gulp.src(files)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('demo', ['js'], function() {
  karma.start({
    configFile: __dirname + '/demo/karma.conf.js',
    singleRun: true
  });
});

gulp.task('default', ['js']);
