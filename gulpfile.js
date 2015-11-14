var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
  gulp.src('./src/client/js/bundle.js')
    .pipe(clean({force: true}));
  gulp.src('./src/client/css/styles.css')
    .pipe(clean({force: true}));
});

gulp.task('connect', function() {
  connect.server({
    root: 'src/client',
    port: 3000
  });
});

gulp.task('styles', function() {
  return sass('./src/server/styles/sass/styles.scss',
      { compass: true })
    .pipe(gulp.dest('./src/client/css'));
});

gulp.task('browserify', function() {
  return browserify('./src/client/app/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/client/js'));
});

gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['browserify'],
    ['styles']
  );
});

gulp.task('watch', function() {
    gulp.watch('./src/client/app/**/*.js', ['build']);
    gulp.watch('./src/server/styles/sass/**/*.scss', ['styles']);
});
