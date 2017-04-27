var gulp = require('gulp');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var path = require('path');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

gulp.task('make-md', function () {
  return gulp.src('src/date-addons.js')
    .pipe(gulpJsdoc2md())
    .on('error', function (err) {
      gutil.log(gutil.colors.red('jsdoc2md failed'), err.message);
    })
    .pipe(rename('README.md'))
    .pipe(gulp.dest('.'));
});
