<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lead;
use Illuminate\Mail\Mailable;
use App\Mail\LeadMail;
use Mail;
use Auth;

class SendMailController extends Controller
{
    public function fresh()
    {
        $user = Auth::user();

        $leads = Lead::where('user_id',$user->_id)->get();

        foreach ($leads as $key => $lead) 
        {
            Mail::to($lead->person_email)->queue(new LeadMail($lead));
            /* Mail::send('email.freshlead',$lead, function ($message) {
                $message->from($user->email, $user->name);
                $message->to($lead->person_email, $lead->person_name);
                $message->subject('Introduction');
            }); */
        }
        
    }
}
