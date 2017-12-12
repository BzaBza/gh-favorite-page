var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');



gulp.task('sass', function () {
    return gulp.src('sass/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css/style'))
});

gulp.task('watch', function () {
    watch('sass/**.sass',
        function (a, b) {
            gulp.run('sass');
        });
});
