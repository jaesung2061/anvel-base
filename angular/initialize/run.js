(function (runModule) {
    /*
     * Code to run after AngularJs is done loading
     */
    runModule.run(['$rootScope', '$state', 'Restangular', 'AUTH_EVENTS', 'Session',
        function ($rootScope, $state, Restangular, AUTH_EVENTS, Session) {
            var token = anvel.readCookie('token');

            $rootScope.$on('$stateChangeStart', guardState);
            $rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
            $rootScope.$on(AUTH_EVENTS.loginSuccess, authorizationTasks);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, deAuthorizedTasks);
            $rootScope.$on(AUTH_EVENTS.loginFailed, deAuthorizedTasks);

            function onStateChangeSuccess() {
                Restangular.one('auth').customGET(null, {token: token}).then(function (data) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, data);
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            }

            function authorizationTasks(event, data) {
                Session.create(data.token, data.user);
                $rootScope.currentUser = data.user;
                anvel.createCookie('token', data.token, 14);
                Restangular.setDefaultHeaders({
                    Authorization: 'Bearer ' + data.token
                });
            }

            function deAuthorizedTasks() {
                Session.authRequestSent = true;
                Session.destroy();
                $rootScope.currentUser = null;
                anvel.eraseCookie('token');
                Restangular.setDefaultHeaders(null);

                if ($state.current.protected === true) {
                    $state.go('home');
                }
            }

            function guardState(event, toState) {
                // Is the state protected?
                if (toState.protected === true) {
                    // Has an auth request been sent yet?
                    if (Session.authRequestSent === true) {
                        // Is the user authenticated after the request?
                        if (!Session.isAuthenticated()) {
                            // User is not authenticated
                            // Don't allow state change
                            alert('not authorized');
                            event.preventDefault();
                        }
                    }
                }
            }
        }])
})(angular.module('App.runModule', []));