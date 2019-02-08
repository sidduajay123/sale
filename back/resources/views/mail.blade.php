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
    <?php if (isset($messages)) {
      foreach($messages as $message) { ?>
      {{-- {{dd($message->getbody()->getcontent())}} --}}
    <div class="list-group-item">
      <h3 class="list-group-item-heading"><?php echo $message->getsubject() ?></h3>
      <h4 class="list-group-item-heading"><?php echo $message->getfrom()->getemailAddress()->getname() ?></h4>
      <p class="list-group-item-heading text-muted"><em>Received: <?php echo $message->getreceivedDateTime()->format(DATE_RFC2822) ?></em></p>
      <a href="{{url('/mail/'.$message->getid())}}" class="btn btn-primary">View More</a>
    </div>
    <?php  }
    } ?>
  </div>
</div>
@endsection