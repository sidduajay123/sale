<?php

namespace App\Http\Controllers;

use App\Jobs\SendFreshEmailJob;
use Illuminate\Http\Request;
use App\Jobs\ReminderMailJob;
use App\Lead;
use Auth;
use App\Template;
use Mail;
use App\Mail\SendNowMail;

class SendFreshMailController extends Controller
{

    public function fresh()
    {
        $user = Auth::user();
        $get = Template::where('user_id',$user->_id)->where('status','0')->firstOrFail();
        $all = auth()->user()->lead;
        foreach ($all as $key => $lead) {
            if ($lead->status == '0') {
                SendFreshEmailJob::dispatch($lead,$get->template)->delay(now()->addSeconds(2));
            }

        }

        return response()->json(['success' => 'Email sent successfully']);
    }


    public function reminder()
    {
        $user = Auth::user();
        $get = Template::where('user_id',$user->_id)->where('status','1')->firstOrFail();
        $all = auth()->user()->lead;
        foreach ($all as $key => $lead) {
            if ($lead->status == '3' || $lead->status == '4') {
                ReminderMailJob::dispatch($lead,$get->template)->delay(now()->addSeconds(2));
            }
        }
        return response()->json(['success' => 'Email sent successfully']);
    }

    public function sendnow(Request $request)
    {
        // return $request;
        Mail::to($request->mail_to)->send(new SendNowMail($request));

        return response()->json(['success'=>'Email sent']);
    }

}
