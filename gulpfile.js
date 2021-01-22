
//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var del = require('del');

//sass
gulp.task('scss', function () {
    gulp.src('assets/scss/**/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
});

//js
gulp.task('js', function() {
    //Includes all JS files in assets and excludes optional IE only scripts that need to be included in head
    return gulp.src(['assets/js/**/*.js', '!assets/js/optional/*.js'])
    .pipe(order([
        //Include JQuery before other scripts
        'vendor/jquery.min.js',
        'vendor/*.js',
        'site-scripts/*.js'
    ]))
    .pipe(concat('main.js'))
    //Output unminified version to help with debugging
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    //Concat production version
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

//clean
gulp.task('clean', function() {
    del([
        'css', //clean css directory
        'js', //clean js directory
    ])
});

//default
gulp.task('default', ['clean'], function() {
    gulp.start('scss', 'js'); //clean directories before recompile
});

//Gulp Watch Task
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('assets/scss/**/*.scss', ['scss']);

    // Watch .js files
    gulp.watch('assets/js/**/*.js', ['js']);

});