(function (authModule) {
    authModule
        .controller('AuthController', [
            '$rootScope',
            '$scope',
            'AUTH_EVENTS',
            'Session',
            'Restangular',
            function ($rootScope,
                      $scope,
                      AUTH_EVENTS,
                      Session,
                      Restangular) {
                var Auth = Restangular.all('auth');
                $scope.credentials = {};

                $scope.login = function () {
                    Auth.customPOST($scope.credentials).then(function (data) {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, data);
                        $scope.credentials = {};
                    }, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                        $scope.credentials = {};
                    });
                };
                $scope.logout = function () {
                    Auth.customDELETE().then(function () {
                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                    });
                }
            }])
        .factory('Session', [
            function () {
                var Session = {
                    token: null,
                    user: null
                };

                Session.create = function (token, user) {
                    Session.token = token;
                    Session.user = user;
                };
                Session.getToken = function () {
                    return Session.token;
                };
                Session.getUser = function () {
                    return Session.user;
                };
                Session.destroy = function () {
                    Session.token = null;
                    Session.user = null;
                };
                Session.isAuthenticated = function () {
                    return !!Session.token;
                };

                return Session;
            }])
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        })
})(angular.module('App.authModule', []));