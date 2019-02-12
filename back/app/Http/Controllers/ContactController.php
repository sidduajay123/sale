<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Auth;
use Validator;

class ContactController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $getcontact = Contact::where('_id', $id)->first();
        return $getcontact;
    }

    public function allcontact(){
        $user = Auth::user();
        $getall = Contact::where('user_id', $user->_id)->get();

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
            'contact_name' => 'required',
            'contact_company' => 'required',
            'contact_email' => 'required|email',
            'contact_phone' => 'required|max:10'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        } else {
            $user = Auth::user();
            $request->user_id = $user->_id;

            $check_record = Contact::where('user_id', $user->id)->
                where('contact_name', $request->contact_name)->
                where('contact_company', $request->contact_company)->
                where('contact_email', $request->contact_email)->
                where('contact_phone', $request->contact_phone)
                ->get();

            if ($check_record->isEmpty()) {
                
                $record = new Contact();
                $record->user_id = $user->id;
                $record->contact_name = $request->contact_name;
                $record->contact_company = $request->contact_company;
                $record->contact_email = $request->contact_email;
                $record->contact_phone = $request->contact_phone;
                $record->save();
                return response()->json(['success' => 'Contact added successfully']);
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

        foreach ($data as $key => $contact) 
        {
            $check_record = Contact::where('user_id', $user->id)->
                where('contact_name', $contact->contact_name)->
                where('contact_company', $contact->contact_company)->
                where('contact_email', $contact->contact_email)->
                where('contact_phone', $contact->contact_phone)
                ->get();
            if ($check_record->isEmpty()) 
            {
                $record = new Contact();
                $record->user_id = $user->id;
                $record->contact_name = $contact->contact_name;
                $record->contact_company = $contact->contact_company;
                $record->contact_email = $contact->contact_email;
                $record->contact_phone = $contact->contact_phone;
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

        $contact = Contact::where('user_id', $user->_id)->get();

        if ($contact->isNotEmpty()) {
            return response()->json(['success' => $contact]);
        } else {
            return response()->json(['error' => 'No contact found']);
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
                'contact_name' => $request->contact_name,
                'contact_company' => $request->contact_company,
                'contact_email' => $request->contact_email,
                'contact_phone' => $request->contact_phone,
            );
            $update = Contact::where('_id', $request->_id)
                        ->update($arrup);
            // return $update;
            if ($update == '1') 
            {
                return response()->json(['success' => 'Contact Update Successfully']);
            }else
            {
                return response()->json(['error' => 'Contact is not updated']);
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
        $delete = Contact::where('_id', $id)->delete();

        if ($delete) 
        {
            return response()->json(['success' => 'Contact Deleted Successfully']);
        }else
        {
            return response()->json(['error' => 'No Contact deleted']);
        }
    }
}
