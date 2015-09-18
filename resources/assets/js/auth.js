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

                return Session;
            }])
        .factory('AuthResolver', [
            '$q', '$rootScope', '$state',
            function ($q, $rootScope, $state) {
                return {
                    resolve: function () {
                        var deferred = $q.defer();
                        var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
                            if (angular.isDefined(currentUser)) {
                                if (currentUser) {
                                    deferred.resolve(currentUser);
                                } else {
                                    deferred.reject();
                                    $state.go('login');
                                }
                                unwatch();
                            }
                        });
                        return deferred.promise;
                    }
                };
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