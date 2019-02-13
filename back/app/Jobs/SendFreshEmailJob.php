<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Mail;
use App\Mail\FreshLeadMail;

class SendFreshEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    // public $timeout = 120;

    protected $lead;
    public $template;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($request,$temp)
    {
        $this->lead = $request;
        $this->template = $temp;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        Mail::to($this->lead->person_email)->send(new FreshLeadMail($this->lead,$this->template));
        
                
    }
}
