'use strict';

var gulp = require('gulp'),
    Server = require('karma').Server,
    eslint = require('gulp-eslint');

var files = [
    '*.js',
    'demo/**/*-spec.js'
];

gulp.task('lint', function () {
    gulp.src(files)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('demo', function(done) {
    new Server({
        configFile: __dirname + '/demo/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    }).start();
});

gulp.task('default', ['lint']);
