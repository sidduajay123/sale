<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
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

        if ($user->isEmpty()) 
        {
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            return $this->userLogin($request);
        }else 
        {
            return response()->json(['error'=>'user already exists'],401);
        }

        
    }


    public function userDetails()
    {
        $users = Auth::user();
        $users['imgUrl'] = url('/storage/image').'/'.$users->image;
        return response()->json(['success' => $users], 200);
    }

    public function checkLogin()
    {
        return response()->json(['success' => 'true'], 200);
    }

    public function updateProfile(Request $request)
    {
        $users = Auth::user();

        if(empty($request->image) && empty($request->name)) 
        {
            return response()->json(['success' => 'fail']);
        }

        if(!empty($request->image)) 
        {
            $image = str_replace('data:image/jpeg;base64,','',$request->image);
            $image = str_replace(' ','+',$image);
            $get_imageName = str_random(10).'.'.'jpg';
            \File::put(storage_path(). '/image/' . $get_imageName, base64_decode($image));
        }
        
        
        // store in database
        if(!empty($request->name) && !empty($request->image))
        {
            $profile_update = User::where('_id', $users->_id)
                    ->update(['name' => $request->name],['image' => $get_imageName]);
            if ($profile_update) 
            {
                $users = User::where('_id', $users->_id)->first();
                $users['imgUrl'] = url('/storage/image').'/'.$users->image;
                return response()->json(['success' => $users], 200);
            }else{
                return response()->json(['success' => 'fail']);
            }

        }elseif(!empty($request->name))
        {
            $profile_update = User::where('_id', $users->_id)
                    ->update(['name' => $request->name]);
            if ($profile_update) 
            {
                $users = User::where('_id', $users->_id)->first();
                $users['imgUrl'] = url('/storage/image').'/'.$users->image;
                return response()->json(['success' => $users], 200);
            }else{
                return response()->json(['success' => 'fail']);
            }

        }elseif(!empty($request->image))
        {
            $profile_update = User::where('_id', $users->_id)
                    ->update(['image' => $get_imageName]);
            if ($profile_update) 
            {
                $users = User::where('_id', $users->_id)->first();
                $users['imgUrl'] = url('/storage/image').'/'.$users->image;
                return response()->json(['success' => $users], 200);
            }else{
                return response()->json(['success' => 'fail']);
            }
           
        }
        
    }

    public function changePassword(Request $request)
    {
        $user = Auth::user();

        if (Hash::check($request->old_password, $user->password)) 
        {
            $validator = Validator::make($request->all(), [
                'old_password' => 'required',
                'new_password' => 'required|',
                'confirm_password' => 'required|same:new_password',
    
            ]);
    
            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()]);            
            }else{
                $user->password = bcrypt($request->new_password);
                $user->save();
                
                return response()->json(['success'=>"Password has been changed"]);
            }
            
        }else
        {
            return response()->json(['error'=>"Old Password did not matched"]);
        }
    }

    public function logout()
    {
        $user = Auth::user()->token();
        $user->revoke();
        $user->delete();
        return response()->json(['success' => 'Log out successfully'], 200);
    }
}
