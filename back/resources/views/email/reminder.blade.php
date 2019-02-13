{{-- @component('mail::message') --}}
{{-- # Introduction
{{$lead->person_name}}
The body of your message. --}}

{{-- @component('mail::button', ['url' => '']) --}}
{{-- Button Text --}}
{{-- @endcomponent --}}

{{-- Thanks,<br>
{{ config('app.name') }} --}}
{{-- @endcomponent --}}


{!! $template !!}