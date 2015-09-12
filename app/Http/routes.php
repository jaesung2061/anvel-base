<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'api'], function () {

    /*
    |--------------------------------------------------------------------------
    | Application Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register all of the routes for an application.
    | It's a breeze. Simply tell Laravel the URIs it should respond to
    | and give it the controller to call when that URI is requested.
    |
    */
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/', 'Auth\AuthController@login');
        Route::get('/', 'Auth\AuthController@index');
        Route::post('logout', 'Auth\AuthController@logout');
    });

    Route::resource('users', 'UsersController');
    Route::resource('documents', 'DocumentsController');
});

/*
|--------------------------------------------------------------------------
| Wild-Card Route
|--------------------------------------------------------------------------
|
| When the user enters any uri that is not prepended with '/api/'
| Return the default view and AngularJs will route accordingly
| on the browser client-side application.
|
*/
Route::any('{slug}', function ()
{
    $appName = 'MyApp';

    return View::make('default', compact('appName'));
})->where('slug', '(.*)?');