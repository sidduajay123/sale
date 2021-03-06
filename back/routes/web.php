<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', 'HomeController@welcome');
Route::get('/signin', 'AuthController@signin');
Route::get('/authorize', 'AuthController@gettoken');
Route::get('/signout', 'AuthController@signout');
Route::get('/mail', 'OutlookController@mail')->name('mail');
Route::get('/mail/{id}', 'OutlookController@oneMail');
Route::get('/array','HomeController@array_flatten');
