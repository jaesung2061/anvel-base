(function (appModule) {
    /*
     * Here is your root controller. When you need to work
     * with application-wide tasks, this is the spot to
     * do it!
     */
    appModule
        .controller('ApplicationController', [
            '$rootScope',
            'Restangular',
            function ($rootScope, Restangular) {
                $rootScope.currentUser = null;
                $rootScope.inspiringQuote = null;

                Restangular.one('inspire').get().then(function (quote) {
                    $rootScope.inspiringQuote = quote;
                })
            }])
})(angular.module('App', [
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

]));