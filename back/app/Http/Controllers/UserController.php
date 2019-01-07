<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Auth;
use Validator;
use App\User;


class UserController extends Controller
{

    public function userLogin(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            //return $user;
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            $success['user'] = $user;
            return response()->json(['success' => $success], 200);
        }
        else{
            return response()->json(['error'=>'Email and Password did not match'], 401);
        }
    }

    public function userRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        
        $user = User::where('email',$request->email)->get();
        //return $user;

        if ($user->isEmpty()) 
        {
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            return $this->userLogin($request);
            // $success['token'] =  $user->createToken('MyApp')->accessToken;
            // $success['name'] =  $user->name;
            // return response()->json(['success'=>$success], 200);
        }else 
        {
            return response()->json(['error'=>'user already exists'],401);
        }

        
    }


    public function userDetails()
    {
        $users = Auth::user();
        return response()->json(['success' => $users], 200);
    }

    public function checkLogin()
    {
        return response()->json(['success' => 'true'], 200);
    }

    public function logout()
    {
        $user = Auth::user()->token();
        $user->revoke();
        $user->delete();
        return response()->json(['success' => 'Log out successfully'], 200);
    }
}
