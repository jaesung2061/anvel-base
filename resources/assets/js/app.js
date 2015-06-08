(function (module, undefined) {
	module
		/*
		 |--------------------------------------------------------------------------
		 | Angular Config
		 |--------------------------------------------------------------------------
		 |
		 | Here you will set configuration variables for your Angular
		 | application. You will also need to set your routes here.
		 |
		 */
		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider) {
				// Because we want pretty urls, not hash bangs
				$locationProvider.html5Mode(true);

				// Set your routes/states here
				$stateProvider
					.state('welcome', {
						url: '/',
						templateUrl: 'views/pages/welcome.html'
					});
			}])

		/*
		|--------------------------------------------------------------------------
		| Application Controller
		|--------------------------------------------------------------------------
		|
		| This is where your application global variables and
		| methods will be handled. Anything that requires
		| global scope will be handled in this method.
		|
		*/
		.controller('AppController', [
			function () {
				var vm = this;
				vm.anvelUrl = '//anvel.io';
				vm.repositoryUrl = '//github.com'
			}]);
})(angular.module('MyApp', [
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

	/*
	|--------------------------------------------------------------------------
	| Application Modules
	|--------------------------------------------------------------------------
	|
	| Here you may include your application specific modules here.
	|
	*/


]));