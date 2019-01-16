<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'person_name','person_company','person_email','person_phone','person_product','person_location','contacted_date','user_id'
    ];
}
