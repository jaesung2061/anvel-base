/*
 |--------------------------------------------------------------------------
 | Gulp
 |--------------------------------------------------------------------------
 |
 | Here is where you handle all Gulp tasks. You can concatenate and
 | uglify JS files. You can compile, concatenate, and minify CSS
 | files. Whenever you create new files for Angular or Sass,
 | you will need to visit here and include the new files.
 |
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('./gulpconfig.js');

/**
 * Command: 'gulp'
 *
 * This is the default gulp task. This task will run
 * tasks: 'css' and 'js', then 'watch'. Read more
 * documentation on these tasks below this one.
 *
 */
gulp.task('default', ['css', 'js', 'watch']);

/**
 * Command: 'gulp setup'
 *
 * This will run the commands for initial set up
 * to set up your asset files.
 *
 */
gulp.task('setup', ['vendor', 'css', 'js']);

/**
 * Command: 'gulp watch'
 *
 * This task will watch the files listed in the first parameter.
 * When Gulp detects any change within the files, it will run
 * the tasks, 'css' and 'js'. When you create a new file,
 * you need to restart this task using command 'gulp'
 * or using this command directly: 'gulp watch'.
 *
 */
gulp.task('watch', function () {
    gulp.watch(config.watch.files, config.watch.tasks);
});

/**
 * Command: 'gulp css'
 *
 * This task will run grab the main .scss file and run the
 * file through the sass compiler and takes care of any
 * browser incompatibilities using gulp autoprefixer.
 *
 */
gulp.task('css', function () {
    gulp.src('resources/assets/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 5 versions'))
        //.pipe(minifyCSS())
        .pipe(gulp.dest(config.assetsPath));
});

/**
 * Command: 'gulp css'
 *
 * This task will grab all the js files provided
 * and concatenate the files. For development,
 * uglifying the files is not recommended.
 *
 */
gulp.task('js', function () {
    gulp.src('resources/assets/js/**/*.js')
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.assetsPath))
});

/**
 * Command: 'gulp vendor'
 *
 * Whenever you pull in a new dependency, you will need
 * to include/bundle the files into your source. The
 * new dependencies must be included in the gulp
 * config file (gulpconfig.js).
 *
 */
gulp.task('vendor', function () {
    // Compile JS dependencies into one file
    gulp.src(config.dependencies.js)
        .pipe(concat('vendor.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.assetsPath));

    // Compile CSS dependencies into one file
    gulp.src(config.dependencies.css)
        .pipe(concat('vendor.css'))
        //.pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest(config.assetsPath))
});

// Feel free to make custom Gulp methods!