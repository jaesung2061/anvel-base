<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller {
    /**
     * Login user with JWT Token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();

        $token = JWTAuth::getToken()->get()->get();

        return response()->json(compact('token', 'user'));
    }

    /**
     * Login user with credentials
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $user = JWTAuth::toUser($token);

        return response()->json(compact('token', 'user'));
    }

    /**
     * Log out user. Blacklist the token.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return Response::make('Good', 200);
    }
}
