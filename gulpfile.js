var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var del = require('del');
var run = require('run-sequence');

var paths = {
  src: './src',
  dist: './dist',
};

gulp.task('webpack', function(callback) {
  webpack(require('./webpack.config'), function(err) {
    if (err) { throw new gutil.PluginError('webpack', err); }
    callback();
  });
});

gulp.task('jade', function() {
  return gulp.src(paths.src + '/views/index.jade')
    .pipe($.plumber())
    .pipe($.jade({ data: require(paths.src + '/views/data') }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:images', function() {
  return gulp.src(paths.src + '/assets/**/*.{jpg,jpeg,png,gif}', { base: paths.src })
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:assets', function() {
  return gulp.src([
    paths.src + '/assets/**/*',
    paths.src + '/CNAME',
    paths.src + '/favicon.ico',
  ], { base: paths.src })
    .pipe(gulp.dest(paths.dist));
});

gulp.task('clean', function() {
  return del(paths.dist + '/**/*');
});

gulp.task('build', ['clean'], function(callback) {
  run(['jade', 'webpack', 'copy:assets'], callback);
});

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.src + '/scripts/**/*.js', ['webpack']);
  gulp.watch(paths.src + '/styles/**/*.{styl,css,woff}', ['webpack']);
  gulp.watch(paths.src + '/views/**/*', ['jade']);
});

gulp.task('default', ['build']);
