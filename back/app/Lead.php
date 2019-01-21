<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'person_name','person_company','person_email','person_phone',
        'person_designation','person_location','contacted_date',
        'contact_source','remark','status','email_sent','email_response',
        'interseted_product','user_id'
    ];
}
