(function (app) {
    app
        .config(['$stateProvider', '$locationProvider', 'RestangularProvider',
            function ($stateProvider, $locationProvider, RestangularProvider) {
                // Because we want pretty urls, not hash bangs
                $locationProvider.html5Mode(true);

                // Set default request base url
                RestangularProvider.setBaseUrl('/api');

                // Set your routes/states here
                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'views/pages/home.html'
                    });
            }])
        .controller('ApplicationController', [
            '$scope',
            function ($scope) {
                // Controller code here
            }])
})(angular.module('App', [
    /*
     |--------------------------------------------------------------------------
     | AngularJs Dependencies
     |--------------------------------------------------------------------------
     |
     | Here is where you include all the AngularJs dependencies required
     | for your application. Included are the bottom line essentials.
     |
     */
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    /*
     |--------------------------------------------------------------------------
     | Application Modules
     |--------------------------------------------------------------------------
     |
     | Here you may include your application specific modules here.
     |
     */
    'App.authModule'

]));