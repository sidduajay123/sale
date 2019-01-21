<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Lead;
use Auth;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'person_name' => 'required',
            'person_company' => 'required',
            'person_email' => 'required|email',
            'person_phone' => 'required|max:10',
            'person_designation' => 'required',
            'person_location' => 'required',
            'contacted_date' => 'required',
            'contact_source' => 'required',
            'remark' => 'required',
            'status' => 'required',
            'email_sent' => 'required',
            'email_response' => 'required',
            'interseted_product' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }else
        {
            $user = Auth::user();
            $request->user_id = $user->_id;

            $check_record = Lead::where('user_id',$user->id)->
                            where('person_name',$request->person_name)->
                            where('person_company',$request->person_company)->
                            where('person_email',$request->person_email)->
                            where('person_phone',$request->person_phone)->
                            where('person_designation',$request->person_designation)
                                        ->get();

            if ($check_record->isEmpty()) 
            {
                $result = Lead::create($request->all());
                return response()->json(['success'=>'Lead added successfully']);
            }else
            {
                return response()->json(['error'=>'Data already exist']);
            }
            
        }
    }

    /*
    Uploading Excel file 
    */

    public function uploadexcel(Request $request)
    {
        if (condition) {
            # code...
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();

        $lead = Lead::where('user_id',$user->_id)->get();

        if ($lead->isNotEmpty()) 
        {
            return response()->json(['success'=>$lead]);
        }else{
            return response()->json(['error'=>'No lead found']);
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
