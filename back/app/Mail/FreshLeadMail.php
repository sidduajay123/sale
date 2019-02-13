<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class FreshLeadMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $leaddata;
    public $template;
    // protected $tempdata;

    public function __construct($request,$temp)
    {
        $this->leaddata = $request;
        $this->template = $temp;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        return $this->subject('Introduction about us')->view('email.freshlead');
    }
}
