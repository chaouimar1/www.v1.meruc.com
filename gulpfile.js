var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');


gulp.task('minify-img', function(){
    gulp.src('_src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_src/img'))
});

// Tasks container
gulp.task('default', ['minify-img'], function () {

});