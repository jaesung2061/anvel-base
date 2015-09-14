(function (module, undefined) {
    module
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
        .controller('AppController', [
            'Restangular',
            function (Restangular) {
                var vm = this;
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
(function (authModule) {
    authModule
        .controller('AuthController', [
            '$rootScope',
            '$scope',
            '$state',
            'Session',
            'Restangular',
            function ($rootScope,
                      $scope,
                      $state,
                      Session,
                      Restangular) {
                var vm = this,
                    Auth = Restangular.all('auth'),
                    token,
                    AppCtrl = $scope.$parent.$parent.AppCtrl;

                vm.postData = {};
                vm.postData.rememberme = true;

                vm.login = function () {
                    Auth.customPOST(vm.postData).then(function (data) {
                        $rootScope.$broadcast('login-success', data);

                        if ($rootScope.intendedState) {
                            $state.go($rootScope.intendedState, $rootScope.intendedStateParams);
                        } else {
                            $state.go('chat')
                        }
                    }, function () {
                        $rootScope.$broadcast('login-failed');
                    });
                };
                vm.logout = function () {
                    Auth.customDELETE().then(function () {
                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                    });
                }
            }])
        .factory('Session', [function () {
            var Session = this;
            Session.token = null;

            Session.setToken = function (token) {
                Session.token = token;
            };
            Session.getToken = function () {
                return Session.token;
            };
            Session.unsetToken = function () {
                return Session.token = null;
            };

            return Session;
        }])
})(angular.module('App.authModule', []));