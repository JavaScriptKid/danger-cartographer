var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync')

gulp.task('sass', function () {
    return gulp.src('./src/_scss/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('s', function() {
    browserSync({
        port:4000,
        proxy: "localhost:3000",
        open: false,
        files: ["*/**.css"],
        ghostMode: false
    });
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/_scss/**/*.scss', ['sass']);
});
gulp.task('default', ['sass','sass:watch', 's']);

