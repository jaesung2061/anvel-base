(function (usersModule) {
    usersModule.controller('UsersController', [
        'Restangular',
        '$scope',
        function (Restangular, $scope) {
            var Users = Restangular.all('users');
            $scope.newUser = {};
            $scope.errorPostingUser = null;

            // Makes a GET request to /api/users
            Users.getList().then(function (users) {
                $scope.users = users;
            });

            $scope.createUser = function (newUser) {
                Users.post(newUser).then(function (createdUser) {
                    // Success
                    $scope.users.unshift(createdUser);
                    $scope.errorPostingUser = false;
                }, function (error) {
                    // Error
                    $scope.errorPostingUser = true;
                });
            };
        }])
})(angular.module('App.usersModule', []));