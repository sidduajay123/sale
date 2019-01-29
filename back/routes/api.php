<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('userLogin', 'UserController@userLogin');
Route::post('userRegister', 'UserController@userRegister');
Route::group(['middleware' => 'auth:api'], function(){
    Route::get('userDetails', 'UserController@userDetails');
    Route::get('checkLogin', 'UserController@checkLogin');
    Route::get('logout', 'UserController@logout');
    Route::post('profile', 'UserController@updateProfile');
    Route::post('changePassword', 'UserController@changePassword');

    Route::group(['prefix' => 'product'], function () {
        Route::get('/','ProductController@index');
    });

    Route::group(['prefix' => 'lead'], function () 
    {
        Route::post('store', 'LeadController@store');
        Route::get('show', 'LeadController@show');
        Route::post('uploadexcel', 'LeadController@uploadexcel');

    });
    
});

