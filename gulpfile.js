var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve',function () {

    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });

    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch(['src/**/*.html','src/img/*','src/js/*']).on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);
