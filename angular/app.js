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
            'Session',
            function ($rootScope,
                      Restangular,
                      Session) {
                $rootScope.currentUser = null;
                $rootScope.inspiringQuote = null;

                Restangular.one('inspire').get().then(function (quote) {
                    $rootScope.inspiringQuote = quote;
                });

                $rootScope.isAuthenticated = function () {
                    return Session.isAuthenticated();
                };
            }])
})(angular.module('App'));