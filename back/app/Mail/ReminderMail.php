<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReminderMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $leaddata;
    public $template;
    /**
     * Create a new message instance.
     *
     * @return void
     */
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
        return $this->subject('Reminder')->view('email.reminder');
    }
}
