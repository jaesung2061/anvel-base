(function () {
    angular.module('App', [
        /*
         * AngularJs dependencies
         */
        'ngSanitize',
        'restangular',
        'ui.router',
        'ui.bootstrap',

        /*
         * Your app modules
         */
        'App.configModule',
        'App.authModule',
        'App.runModule'

    ]);
})();