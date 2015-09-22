(function (usersModule) {
    usersModule.controller('UsersController', [
        'Restangular',
        '$scope',
        function (Restangular, $scope) {
            var Users = Restangular.all('users');
            $scope.newUser = {};

            // Get all users. GET /api/users
            Users.getList().then(function (users) {
                $scope.users = users;
            });

            $scope.createUser = function (newUser) {
                Users.post(newUser).then(function (createdUser) {
                    // Success
                    $scope.users.unshift(createdUser);
                }, function (error) {
                    // Error
                    console.log(error);
                });
            };
        }])
})(angular.module('App.usersModule', []));