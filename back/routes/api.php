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

Route::get('queuework', function () {
    Artisan::call('queue:work');
    response()->json(['success'=>'Queue completed successfully']);
});

Route::post('admin','AdminController@login');
// Route::get('adminDashboard','AdminController@alluserDetails');


Route::post('userLogin', 'UserController@userLogin');
Route::post('userRegister', 'UserController@userRegister');
Route::group(['middleware' => 'auth:api'], function(){
    Route::get('userDetails', 'UserController@userDetails');
    Route::get('checkLogin', 'UserController@checkLogin');
    Route::get('logout', 'UserController@logout');
    Route::post('profile', 'UserController@updateProfile');
    Route::post('changePassword', 'UserController@changePassword');
    Route::get('adminDashboard','AdminController@alluserDetails');

    Route::group(['prefix' => 'product'], function () {
        Route::get('/','ProductController@index');
    });

    Route::get('gettallLead', 'LeadController@allLead');

    Route::group(['prefix' => 'lead'], function () 
    {
        Route::post('store', 'LeadController@store');
        Route::get('show', 'LeadController@show');
        Route::post('uploadexcel', 'LeadController@uploadexcel');
        Route::get('index/{id}', 'LeadController@index');
        Route::post('update', 'LeadController@update');
        Route::get('destroy/{id}', 'LeadController@destroy');

    });

    Route::group(['prefix' => 'warmlead'], function () 
    {
        Route::get('show', 'WarmLeadController@show');
        Route::get('index/{id}', 'WarmLeadController@index');
        Route::post('update', 'WarmLeadController@update');
        Route::get('destroy/{id}', 'WarmLeadController@destroy');

    });

    Route::group(['prefix' => 'hotlead'], function () 
    {
        Route::get('show', 'HotLeadController@show');
        Route::get('index/{id}', 'HotLeadController@index');
        Route::post('update', 'HotLeadController@update');
        Route::get('destroy/{id}', 'HotLeadController@destroy');

    });

    Route::group(['prefix' => 'deadlead'], function () 
    {
        Route::get('show', 'DeadLeadController@show');
        Route::get('index/{id}', 'DeadLeadController@index');
        Route::post('update', 'DeadLeadController@update');
        Route::get('destroy/{id}', 'DeadLeadController@destroy');

    });

    Route::group(['prefix' => 'coldlead'], function () 
    {
        Route::get('show', 'ColdLeadController@show');
        Route::get('index/{id}', 'ColdLeadController@index');
        Route::post('update', 'ColdLeadController@update');
        Route::get('destroy/{id}', 'ColdLeadController@destroy');

    });

    Route::group(['prefix' => 'contact'], function () 
    {
        Route::post('store', 'ContactController@store');
        Route::get('show', 'ContactController@show');
        Route::post('uploadexcel', 'ContactController@uploadexcel');
        Route::get('index/{id}', 'ContactController@index');
        Route::post('update', 'ContactController@update');
        Route::get('destroy/{id}', 'ContactController@destroy');

    });
    
    Route::get('fresh', 'SendFreshMailController@fresh');
    Route::get('reminder', 'SendFreshMailController@reminder');
    Route::post('sendnow', 'SendFreshMailController@sendnow');
    Route::group(['prefix' => 'template'], function () 
    {
        Route::post('intro','TemplateController@introduction');
        Route::get('getintro','TemplateController@getIntro');
        Route::get('getreminder','TemplateController@getreminder');
        Route::post('reminder','TemplateController@reminder');
    });
    
    
});

 

