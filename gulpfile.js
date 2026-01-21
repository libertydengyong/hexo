const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

// 压缩 CSS
gulp.task('minify-css', function() {
  return gulp.src('public/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
});

// 压缩 JS
gulp.task('minify-js', function() {
  return gulp.src('public/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('public'));
});

// 压缩 HTML
gulp.task('minify-html', function() {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('public'));
});

// 默认任务：压缩全部
gulp.task('default', gulp.series('minify-css', 'minify-js', 'minify-html'));
