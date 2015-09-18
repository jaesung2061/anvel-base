(function (runModule) {
    /*
     * Code to run after AngularJs is done loading
     */
    runModule.run(['$rootScope', '$state', 'AUTH_EVENTS',
        function ($rootScope, $state, AUTH_EVENTS) {
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                if (toState.protected === true && $rootScope.currentUser === null) {
                    event.preventDefault();
                }
            });
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, function (event, data) {
                if ($state.current.protected === true) {
                    $state.$go('/');
                }
            });
        }])
})(angular.module('App.runModule', []));