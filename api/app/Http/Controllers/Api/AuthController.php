<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            $token = JWTAuth::attempt($credentials);
        } catch (JWTException $ex) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        if (!$token) {
            return response()->json(['error' => 'invalid_credentials'], 400);
        }
        return response()->json(compact('token'));
    }
}
