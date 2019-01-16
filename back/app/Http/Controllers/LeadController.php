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
            'person_product' => 'required',
            'person_location' => 'required',
            'contacted_date' => 'required',

        ]);
        // return $request;

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }else
        {
            $user = Auth::user();
            $request->user_id = $user->_id;
            $result = Lead::create($request->all());
            return response()->json(['success'=>'Lead added successfully']);
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
