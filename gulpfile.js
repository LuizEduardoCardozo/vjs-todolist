const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpCleanCss = require('gulp-clean-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('uglify-js');

gulp.task('sass', () => {
    return gulp.src('./src/styles/**/*.scss').pipe(gulpSass()).pipe(gulp.dest('./build/css'));
})

gulp.task('css-minify', () => {
    return gulp.src('./build/css/**/*.css').pipe(gulpCleanCss()).pipe(gulpConcat('styles.css')).pipe(gulp.dest('./build/'));
})

gulp.task('js-minify', () => {
    return gulp.src('./scripts/**/*.js').pipe(gulpUglify()).pipe(gulp.dest('./build/scripts/'));
});

gulp.task('dev', () => {
    gulp.watch('./src/styles/**/*.scss', gulp.series(['sass','css-minify']));
});
