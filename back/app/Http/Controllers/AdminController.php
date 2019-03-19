<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\Lead;
use App\User;
use Validator;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $admin = Admin::where(['email' => $request->email, 'password' => $request->password])->first();
        
        if($admin){
            $success['token'] =  $admin->createToken('MyApp')->accessToken;
            $success['user'] = $admin;
            return response()->json(['success' => $success], 200);
        }
        else{
            return response()->json(['error'=>'Email and Password did not match'], 401);
        }
        
        
    }

    public function alluserDetails()
    {
        $result = array();
        $users = User::with('lead')->get();

        foreach ($users as $key => $user) 
        {
            $data = array();
            $i = 0;
            $j = 0;
            $k = 0;
            $l = 0;
            $m = 0;
            if ($user->role !== 'admin') 
            {
                $data['name'] = $user->name;
                $data['email'] = $user->email;

                foreach ($user->lead as $key => $leads) 
                {
                    if ($leads->status == '0') 
                    {
                        $i++;
                        $data['fresh'] = $i;
                    }elseif ($leads->status == '1') 
                    {
                        $j++;
                        $data['hot'] = $j;                    
                    }elseif ($leads->status == '2') 
                    {
                        $k++;
                        $data['warm'] = $k;
                    }
                    elseif ($leads->status == '3') 
                    {
                        $l++;
                        $data['cold'] = $l;
                    }
                    elseif ($leads->status == '4') 
                    {
                        $m++;
                        $data['dead'] = $m;
                    }
                }
                $result[] = $data;
            }
        }

        return $result;
    }
}
