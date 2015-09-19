/*
 |--------------------------------------------------------------------------
 | Gulp Configuration File
 |--------------------------------------------------------------------------
 |
 | Here you may set up your configuration for Gulp.
 |
 | IMPORTANT: After making a change to this file
 | and/or pulling in a dependency run, restart
 | "gulp" and/or run "gulp vendor"
 |
 */
var config = module.exports = {
    resources: {},
    dependencies: {},
    watch: {}
};

/*
 * Define where Gulp puts your asset files.
 */
config.assetsPath = 'public/assets';

/**
 * Define which files Gulp needs to handle (concatenate,
 * compile, move to assets directory)
 *
 * For commands: "gulp js" and "gulp css"
 *
 */
config.resources.js = [
    'angular/initialize/initialize.js',
    'angular/initialize/config.js',
    'angular/initialize/run.js',
    'angular/**/*.js'
];
config.resources.css = [
    'style/main.scss'
];

/**
 * Define which dependencies Gulp needs to include.
 *
 * For command: "gulp vendor"
 *
 * IMPORTANT: When you pull in a new dependency, include
 * the file paths here!
 */
config.dependencies.js = [
    'bower_components/lodash/lodash.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-bootstrap/ui-bootstrap.js',
    'bower_components/restangular/dist/restangular.js',
    'resources/vendor/js/anvel-helpers.js'
];
config.dependencies.css = [
    'resources/vendor/css/**/*.css'
];

/**
 * Let Gulp know which files to watch. When Gulp watch
 * is running, it will listen for change events on
 * the watched files and run the specified tasks.
 *
 * For command: "gulp watch"
 */
config.watch.files = [
    'angular/**/*.js',
    'style/**/*.scss'
];
config.watch.tasks = [
    'css',
    'js'
];
