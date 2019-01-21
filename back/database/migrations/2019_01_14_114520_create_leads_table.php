<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('person_name');
            $table->string('person_company');
            $table->string('person_email');
            $table->string('person_phone');
            $table->string('person_designation');
            $table->string('person_location');
            $table->string('contacted_date');
            $table->string('contact_source');
            $table->string('remark');
            $table->string('status');
            $table->string('email_sent');
            $table->string('email_response');
            $table->string('interseted_product');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leads');
    }
}
