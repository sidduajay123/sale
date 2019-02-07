<?php

namespace App\Http\Controllers;

use App\Jobs\SendFreshEmailJob;
use App\Jobs\ReminderMailJob;
use App\Lead;
use Auth;

class SendFreshMailController extends Controller
{

    public function fresh()
    {
        $all = auth()->user()->lead;
        foreach ($all as $key => $lead) {
            if ($lead->status == '0') {
                SendFreshEmailJob::dispatch($lead)->delay(now()->addSeconds(2));
            }

        }

        return response()->json(['success' => 'Email sent successfully']);
    }


    public function reminder()
    {
        $all = auth()->user()->lead;
        foreach ($all as $key => $lead) {
            if ($lead->status == '3' || $lead->status == '4') {
                ReminderMailJob::dispatch($lead)->delay(now()->addSeconds(2));
            }

        }

        return response()->json(['success' => 'Email sent successfully']);
    }

}
