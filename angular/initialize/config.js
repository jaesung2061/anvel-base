(function (configModule) {
    /*
     * Configuration phase before AngularJs loads
     */
    configModule.config(['$stateProvider', '$locationProvider', 'RestangularProvider',
        function ($stateProvider, $locationProvider, RestangularProvider) {
            // Because we want pretty urls, not hash bangs
            $locationProvider.html5Mode(true);

            // Set default request base url for our API
            RestangularProvider.setBaseUrl('/api');

            // Set your routes/states here
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/pages/home.html'
                })
                .state('users', {
                    url: '/users',
                    templateUrl: 'views/pages/users.html',
                    controller: 'UsersController'
                });
        }])
})(angular.module('App.configModule', []));