var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pagebuilder = require('gulp-pagebuilder');


var path = {
    src: {
        style: '_assets/scss/styles.scss',
        html: 'html/**/*.html'
    },
    build: {
        css: 'build/css/',
        html: 'build/'
    },
    watch: {
        style: '_assets/scss/**/*.scss',
        html: 'html/**/*.html'
    }
};

function styles() {
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.build.css))
}

function html() {
    return gulp.src(path.src.html)
        .pipe(pagebuilder('html'))
        .pipe(gulp.dest(path.build.html));
}

gulp.task('watch', function () {
    gulp.watch(path.watch.style, styles);
    gulp.watch(path.watch.html, html);
});
gulp.task('scss', gulp.series(styles));
gulp.task('html', gulp.series(html));
gulp.task('default', gulp.series(
    gulp.parallel(styles, html),
    'watch'
));
