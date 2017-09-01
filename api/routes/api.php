<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Tymon\JWTAuth\Facades\JWTAuth;

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

//Route::get('times', 'Api\TimesController@index');

Route::group(['middleware' => 'cors'], function(){
    Route::post('login', 'Api\AuthController@login');
    Route::post('refresh_token', function(){
        //return response()->json([],500);
        try {
            $token = JWTAuth::parseToken()->refresh();
            return response()->json(compact('token'));
        }catch (\Tymon\JWTAuth\Exceptions\JWTException $exception){
            return response()->json(['error' => 'token_invalid'],400);
        }
    });
    Route::group(['middleware' => 'jwt.auth'], function(){
        Route::get('times', 'Api\TimesController@index');
        Route::get('user', function () {
            $user = JWTAuth::parseToken()->toUser();
            return response()->json(compact('user'));
        });
    });
});
