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
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/', 'Auth\AuthController@login');
        Route::get('/', 'Auth\AuthController@index');
        Route::delete('/', 'Auth\AuthController@logout');
    });

    Route::resource('users', 'UsersController');
});

/*
|--------------------------------------------------------------------------
| Wild-Card Route
|--------------------------------------------------------------------------
|
| This is the only route that sends a view. When the
| browser sends a URI that is not prepended with
| "api/" this route will return the main view.
|
*/
Route::any('{slug}', function () {
    return View::make('default');
})->where('slug', '(.*)?');