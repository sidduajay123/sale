<?php

namespace App\Http\Controllers;

use App\Lead;
use Auth;
use Illuminate\Http\Request;
use Validator;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $getLead = Lead::where('_id', $id)->where('status',0)->first();
        return $getLead;
    }

    public function allLead(){
        $user = Auth::user();
        $getall = Lead::where('user_id', $user->_id)->get();

        return $getall;
    } 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'person_name' => 'required',
            'person_company' => 'required',
            'person_email' => 'required|email',
            'person_phone' => 'required|max:10',
            'person_designation' => 'required',
            'person_location' => 'required',
            'contacted_date' => 'required',
            'contact_source' => 'required',
            'remark' => 'required',
            'interseted_product' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        } else {
            $user = Auth::user();
            $request->user_id = $user->_id;

            $check_record = Lead::where('user_id', $user->id)->
                where('person_name', $request->person_name)->
                where('person_company', $request->person_company)->
                where('person_email', $request->person_email)->
                where('person_phone', $request->person_phone)->
                where('person_designation', $request->person_designation)
                ->get();

            if ($check_record->isEmpty()) {
                
                $record = new Lead();
                $record->user_id = $user->id;
                $record->person_name = $request->person_name;
                $record->person_company = $request->person_company;
                $record->person_email = $request->person_email;
                $record->person_phone = $request->person_phone;
                $record->person_designation = $request->person_designation;
                $record->person_location = $request->person_location;
                $record->contacted_date = $request->contacted_date;
                $record->contact_source = $request->contact_source;
                $record->remark = $request->remark;
                $record->status = 0;
                $record->email_sent = 0;
                $record->email_response = 0;
                $record->interseted_product = $request->person_product;
                $record->save();
                return response()->json(['success' => 'Lead added successfully']);
            } else {
                return response()->json(['error' => 'Data already exist']);
            }

        }
    }

    /*
    Uploading Excel file
     */
    
     public function uploadexcel(Request $request)
    {
        $data = json_decode($request->file);
        $count = 0;
        $user = Auth::user();
        $request->user_id = $user->_id;

        foreach ($data as $key => $lead) 
        {
            $check_record = Lead::where('user_id', $user->id)->
                where('person_name', $lead->person_name)->
                where('person_company', $lead->person_company)->
                where('person_email', $lead->person_email)->
                where('person_phone', $lead->person_phone)->
                where('person_designation', $lead->person_designation)
                ->get();
            if ($check_record->isEmpty()) 
            {
                $record = new Lead();
                $record->user_id = $user->id;
                $record->person_name = $lead->person_name;
                $record->person_company = $lead->person_company;
                $record->person_email = $lead->person_email;
                $record->person_phone = $lead->person_phone;
                $record->person_designation = $lead->person_designation;
                $record->person_location = $lead->person_location;
                $record->contacted_date = $lead->contacted_date;
                $record->contact_source = $lead->contact_source;
                $record->remark = $lead->remark;
                $record->status = 0;
                $record->email_sent = 0;
                $record->email_response = 0;
                $record->interseted_product = $lead->interseted_product;
                $record->save();
                $count++;
            } 
        }

        if ($count > 0) 
        {
            return response()->json(['success' => $count.' Data Added']);
        }else
        {
            return response()->json(['error' => 'No Record added']);
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

        $lead = Lead::where('user_id', $user->_id)->where('status',0)->get();

        if ($lead->isNotEmpty()) {
            return response()->json(['success' => $lead]);
        } else {
            return response()->json(['error' => 'No lead found']);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // return $id;
        
        if (!empty($request)) 
        {
            $arrup = array(
                'person_name' => $request->person_name,
                'person_company' => $request->person_company,
                'person_email' => $request->person_email,
                'person_phone' => $request->person_phone,
                'person_location' => $request->person_location,
                'contacted_date' => $request->contacted_date,
                'person_designation' => $request->person_designation,
                'contact_source' => $request->contact_source,
                'remark' => $request->remark,
                'status' => $request->status
            );
            $update = Lead::where('_id', $request->_id)
                        ->update($arrup);
            // return $update;
            if ($update == '1') 
            {
                return response()->json(['success' => 'Lead Update Successfully']);
            }else
            {
                return response()->json(['error' => 'Lead is not updated']);
            }
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Lead::where('_id', $id)->delete();

        if ($delete) 
        {
            return response()->json(['success' => 'Lead Deleted Successfully']);
        }else
        {
            return response()->json(['error' => 'No lead deleted']);
        }
    }
}
