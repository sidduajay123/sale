<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lead;
use Auth;

class HotLeadController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $getLead = Lead::where('_id', $id)->where('status',2)->first();
        return $getLead;
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

        $lead = Lead::where('user_id', $user->_id)->where('status',2)->get();

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
