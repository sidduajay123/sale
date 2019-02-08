@extends('layout')

@section('content')
<div id="inbox" class="panel panel-default">
  <div class="panel-heading">
    <h1 class="panel-title">Inbox</h1>
  </div>
  <div class="panel-body">
    Inbox.
  </div>
  <div class="list-group">
    <?php if (isset($messages)) {  ?>
      {{-- {{dd($message->getbody()->getcontent())}} --}}
    <div class="list-group-item">
      <h3 class="list-group-item-heading"><?php echo $messages->getsubject() ?></h3>
      <h4 class="list-group-item-heading"><?php echo $messages->getfrom()->getemailAddress()->getname() ?></h4>
      <p class="list-group-item-heading text-muted"><em>Received: <?php echo $messages->getreceivedDateTime()->format(DATE_RFC2822) ?></em></p>
      <p class="list-group-item-heading text-muted"><em>Message: <?php echo $messages->getbody()->getcontent() ?></em></p>
    </div>
    <?php 
    } ?>
  </div>
</div>
@endsection