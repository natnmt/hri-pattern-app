/* eslint-disable */
'use strict';

var gulp = require('gulp');
const shell = require('gulp-shell');

// sass
const sass = require('gulp-sass');

// eslint
const eslint = require('gulp-eslint');

const path = require('path');
const webpack = require('webpack-stream');

gulp.task('styles', function() {
    return gulp.src(['client/scss/**/*.scss', 'client/scss/**/*.css'])
    .pipe(sass({ paths: [ path.join(__dirname, 'scss', 'includes') ] }))
    .pipe(gulp.dest('./public/style/css'));
});

gulp.task('images', function() {
    return gulp.src('client/images/**/*.*')
      .pipe(gulp.dest('public/images'));
});

gulp.task('assets', function() {
    return gulp.src('client/assets/**/*.*')
      .pipe(gulp.dest('public/assets'));
});

gulp.task('lib-styles', function() {
    return gulp.src('client/lib/css/*.*')
      .pipe(gulp.dest('./public/style/css'));
});

gulp.task('default', function() {
    gulp.start('styles');
    gulp.start('images');
    gulp.start('webpack');
    gulp.start('jscopy');
    gulp.start('assets');
    gulp.start('index');
    gulp.start('appcfg');
    gulp.start('lib-styles');
    gulp.start('lint');
});

gulp.task('webpack', function() {
  return webpack(require('./webpack.config.js')).pipe(gulp.dest('./public/js'));
});

gulp.task('jscopy', function() {
  return gulp.src('./client/js/**/*').pipe(gulp.dest('./public/js'));
});

gulp.task('index', function() {
  return gulp.src('./client/*.html').pipe(gulp.dest('./public'));
});

gulp.task('appcfg', function() {
    return gulp.src('client/config/*')
      .pipe(gulp.dest('public/config'));

});

// ESLint ignores files with "node_modules" paths.
// So, it's best to have gulp ignore the directory as well.
// Also, Be sure to return the stream from the task;
// Otherwise, the task may end before the stream has finished.
gulp.task('lint', () => gulp.src(['./**/*.js', './**/*.jsx', '!node_modules/**', '!database/**', '!./public/**', '!./bundle.js'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
  .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  .pipe(eslint.failAfterError()));
