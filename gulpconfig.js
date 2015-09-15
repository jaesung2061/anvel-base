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
     * Define where Gulp puts your asset files.
     */
    assetsPath: 'public/assets',

    /**
     * Define which files Gulp needs to handle
     */
    resources: {
        js: [
            'resources/assets/js/**/*.js'
        ],
        css: [
            'resources/assets/sass/main.scss'
        ]
    },

    /**
     * Define which dependencies Gulp needs to include.
     *
     * IMPORTANT: When you pull in a new dependency, include
     * the file paths here!
     */
    dependencies: {
        js: [
            'bower_components/lodash/lodash.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/restangular/dist/restangular.js',
            'resources/assets/js/helpers.js'
        ],
        css: [
            'resources/assets/vendor/css/**/*.css'
        ]
    },

    /**
     * Let Gulp know which files to watch
     */
    watch: {
        files: [
            'resources/assets/sass/**/*.scss',
            'resources/assets/js/**/*.js'
        ],
        tasks: [
            'css',
            'js'
        ]
    }
};