<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Template;

class TemplateController extends Controller
{
    public function introduction(Request $request)
    {
        $user = Auth::user();

        $check = Template::where('user_id',$user->_id)->where('status','0')->get();

        if ($check->isEmpty()) 
        {
            $record = new Template();
            $record->user_id = $user->_id;
            $record->template = $request->template;
            $record->status = '0';
            $record->save();

            return response()->json(['success'=>'Templated inserted']);
        }else
        {
            $update = Template::where('user_id',$user->_id)->where('status','0')->update(['template'=> $request->template]);
            return response()->json(['success'=>'Template updated']);
        }
    }

    public function getIntro()
    {
        $user = Auth::user();

        $get = Template::where('user_id',$user->_id)->where('status','0')->firstOrFail();

        if ($get) 
        {
            return response()->json(['success'=>$get]);
        }else {
            return response()->json(['error'=>'No template found']);
        }

    }

    public function reminder(Request $request)
    {
        $user = Auth::user();

        $check = Template::where('user_id',$user->_id)->where('status','1')->get();

        if ($check->isEmpty()) 
        {
            $record = new Template();
            $record->user_id = $user->_id;
            $record->template = $request->template;
            $record->status = '1';
            $record->save();

            return response()->json(['success'=>'Templated inserted']);
        }else
        {
            $update = Template::where('user_id',$user->_id)->where('status','1')->update(['template'=> $request->template]);
            return response()->json(['success'=>'Template updated']);
        }
    }

    public function getreminder()
    {
        $user = Auth::user();

        $get = Template::where('user_id',$user->_id)->where('status','1')->firstOrFail();

        if ($get) 
        {
            return response()->json(['success'=>$get]);
        }else {
            return response()->json(['error'=>'No template found']);
        }

    }
}
