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

var config = require('./gulpconfig.json'),
    gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	assetsPath = 'public/assets';

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
	var files = ['resources/assets/sass/**/*.scss', 'resources/assets/js/**/*.js'],
		tasks = ['css', 'js'];

	gulp.watch(files, tasks);
});

/**
 * Command: 'gulp css'
 *
 * This task will run grab the main .scss file and run the
 * file through the sass compiler and takes care of any
 * browser incompatibilities using gulp autoprefixer.
 * You may choose to minify these CSS files if you
 * like. Simply uncomment the minifyCSS() line.
 *
 */
gulp.task('css', function () {
	var files = ['resources/assets/sass/main.scss'];

	gulp.src(files)
		.pipe(sass())
		.pipe(autoprefixer('last 5 versions'))
		//.pipe(minifyCSS())
		.pipe(gulp.dest(assetsPath));
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
	var files = ['resources/assets/js/**/*.js'];

	gulp.src(files)
		.pipe(concat('main.js'))
		//.pipe(uglify())
		.pipe(gulp.dest(assetsPath))
});

/**
 * Command: 'gulp dep'
 *
 * Whenever you pull in a new dependency, you will need
 * to include/bundle the files into your source. The
 * files are not yet minified to debug with ease.
 * To minify and uglify the files, remove the
 * comment markers in the commented lines.
 *
 */
gulp.task('dep', function () {
	// Compile JS dependencies into one file
	gulp.src(config.js)
		.pipe(concat('dependencies.js'))
		//.pipe(uglify())
		.pipe(gulp.dest(assetsPath));

	// Compile CSS dependencies into one file
	gulp.src(config.css)
		.pipe(concat('dependencies.css'))
		//.pipe(minifyCSS({keepSpecialComments: 0}))
		.pipe(gulp.dest(assetsPath))
});