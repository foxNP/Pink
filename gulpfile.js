var gulp = require('gulp'),
    sass = require('gulp-sass');

var path = {
    src: {
        style: '_assets/scss/styles.scss',
    },
    build: {
        css: 'build/css/',
    },
    watch: {
        style: '_assets/scss/**/*.scss',
    }
};

function styles() {
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.build.css))
};

gulp.task('watch', function () {
    gulp.watch(path.watch.style, styles);
});
gulp.task('scss', gulp.series(styles));
gulp.task('default', gulp.series(
    gulp.parallel(styles),
    'watch'
));
