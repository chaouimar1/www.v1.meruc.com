var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    imagemin = require('gulp-imagemin');


gulp.task('minify-css', () => {
    return gulp.src('_src/css/dev/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' },
            /*function (details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            }
        */))
        .pipe(gulp.dest('_src/css'));
});

gulp.task('compress-js', function (cb) {
    pump([
        gulp.src('_src/js/dev/*.js'),
        uglify(),
        gulp.dest('_src/js')
    ],
        cb
    );
});

gulp.task('watch', function(){
    gulp.watch('_src/js/dev/*.js'), ['compress-js'];
    gulp.watch('_src/css/dev/*.css'), ['minify-css'];
    gulp.watch(['_src/js/dev/*.js', '_src/css/dev/*.css']).on('change', function(event){
        console.log(event);
    })
})

gulp.task('minify-img', function(){
    gulp.src('_src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_src/img'))
});

// Tasks container
gulp.task('default', ['minify-css', 'compress-js'], function () {

});