/*
|--------------------------------------------------------------------------
| Gulp Configuration File
|--------------------------------------------------------------------------
|
| Here you may set up your configuration for Gulp.
|
| IMPORTANT: After making a change to this file,
|            and/or pulling in a dependency run
|            "gulp vendor" in the console.
|
*/
var exports = module.exports = {
    /*
     * Define where gulp puts your asset files.
     */
    assetsPath: 'public/assets',

    /**
     * Let Gulp know which JavaScript dependencies to include.
     */
    js: [
        'bower_components/lodash/lodash.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-bootstrap/ui-bootstrap.js',
        'bower_components/restangular/dist/restangular.js',
        'resources/assets/js/helpers.js'
    ],

    /**
     * Let Gulp know which CSS dependencies to include.
     */
    css: [
        'resources/assets/vendor/css/**/*.css'
    ]
};