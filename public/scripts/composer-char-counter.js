$(document).ready(function() {
  // --- our code goes here ---
  //$( 'textarea' ).keyup(count);
  //$( 'textarea' ).keydown(count);
  $( 'textarea' ).on('input', function(){
  //function count(){
    let $value = $( this ).val().length;
    let $counter = $(this).siblings('.counter');
    let $button = $(this).parent().find('input');
    $counter.text(140 - $value);
    if($counter.text() < 0){
      //counter.css('color', '#ff0000');
      $counter.addClass('counter-invalid-msg');
      $button.prop('disabled', true);
    }
    else{
      //counter.css('color', '#000000');
      $counter.removeClass('counter-invalid-msg');
      $button.prop('disabled', false);
    }
  })
});