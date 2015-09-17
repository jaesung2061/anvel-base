(function (authModule) {
    authModule
        .controller('AuthController', [
            '$rootScope',
            '$scope',
            'Session',
            'Restangular',
            function ($rootScope,
                      $scope,
                      Session,
                      Restangular) {
                var Auth = Restangular.all('auth');
                $scope.credentials = {};

                $scope.login = function () {
                    Auth.customPOST($scope.credentials).then(function (data) {
                        $rootScope.$broadcast('login-success', data);
                        $scope.credentials = {};
                    }, function () {
                        $rootScope.$broadcast('login-failed');
                        $scope.credentials = {};
                    });
                };
                $scope.logout = function () {
                    Auth.customDELETE().then(function () {
                        $rootScope.$broadcast('login-failed');
                    });
                }
            }])
        .factory('Session', [function () {
            var Session = {
                token: null,
                user: null
            };

            Session.setToken = function (token, user) {
                Session.token = token;
                Session.user = user;
            };
            Session.getToken = function () {
                return Session.token;
            };
            Session.unsetToken = function () {
                Session.token = null;
                Session.user = null;
            };

            return Session;
        }])
})(angular.module('App.authModule', []));