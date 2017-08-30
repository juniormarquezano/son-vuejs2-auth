<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/* Comentei essa parte porque declarei o middleware no RouteServiceProvider
Route::group(['middleware' => 'cors'], function () {
    Route::get('times', 'Api\TimesController@index');
});
*/

Route::get('times', 'Api\TimesController@index');

