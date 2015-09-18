(function (appModule) {
    /*
     * Here is your root controller. When you need to work
     * with application-wide tasks, this is the spot to
     * do it!
     */
    appModule
        .controller('ApplicationController', [
            '$scope',
            function ($scope) {
                $scope.currentUser = null;
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