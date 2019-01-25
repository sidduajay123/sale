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
            'status' => 'required',
            'email_sent' => 'required',
            'email_response' => 'required',
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
                $result = Lead::create($request->all());
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
        $data = ($request->file);
        return $data;
        /*
            [
                ['name' => 'Desk', 'price' => 200],
            ]
        */;
        /* $res = Lead::save($data);
        return $res; */
        $Lead_res = array();
        $count = 0;
        $user = Auth::user();
        $request->user_id = $user->_id;

        foreach ($data as $key => $lead) 
        {
            //return $lead->person_name;

            $check_record = Lead::where('user_id', $user->id)->
                where('person_name', $lead->person_name)->
                where('person_company', $lead->person_company)->
                where('person_email', $lead->person_email)->
                where('person_phone', $lead->person_phone)->
                where('person_designation', $lead->person_designation)
                ->get();
            // dd($lead);
            if ($check_record->isEmpty()) 
            {
                $lead = lead::create(
                    ['user_id' => $user->id],
                    ['person_name',$lead->person_name],
                    ['person_company',$lead->person_company],
                    ['person_email',$lead->person_email],
                    ['person_phone',$lead->person_phone],
                    ['person_designation',$lead->person_designation],
                    ['person_location',$lead->person_location],
                    ['contacted_date',$lead->contacted_date],
                    ['contact_source',$lead->contact_source],
                    ['remark',$lead->remark],
                    ['status',$lead->status],
                    ['email_sent',$lead->email_sent],
                    ['email_response',$lead->email_response],
                    ['interseted_product',$lead->interseted_product],
                );
                $count++;
            } 
        }

        // $res = Lead::insert($Lead_res);
        return $Lead_res;

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

        $lead = Lead::where('user_id', $user->_id)->get();

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
