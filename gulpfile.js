var gulp = require('gulp');

// Define path variables
var scssSrc = './src/sass/**/*';
var cssDst = './css';

// Generate css & concat it
var sass = require('gulp-sass');
var concat = require('gulp-concat');
gulp.task('sass', function () {
  'use strict';
  return gulp.src([scssSrc])
    // Generate css from sass
    .pipe(sass().on('error', sass.logError))
    // concat into one file
    .pipe(concat('style.css'))
    .pipe(gulp.dest(cssDst));
});

// Autodetect changes in sass & generate css accordingly
gulp.task('watch', function () {
  'use strict';
  gulp.watch(scssSrc, ['sass']);
});

// Default gulp task (Task listed here will run on gulp)
gulp.task('default', ['sass', 'watch'], function () {
  'use strict';
});
