var gulp = require('gulp');
var sass = require('gulp-sass');
// Run the SASS task and watch for any changes to our sass files and run through the compiler
gulp.task('sass', function() {
    gulp.src('./app/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
    });

gulp.task('default', function() {
    gulp.watch('./app/css/*.scss', ['sass']);
})