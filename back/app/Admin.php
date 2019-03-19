<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Admin extends Model
{
    use HasApiTokens;
}
