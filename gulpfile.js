var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

function serve() {

    browserSync.init({
        server: "./src/"
    });
    gulp.watch("./src/*.css", css);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
};

function css() {
    return gulp.src("./src/*.css")
        .pipe(browserSync.stream());
};


exports.default = gulp.series(serve, css);