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