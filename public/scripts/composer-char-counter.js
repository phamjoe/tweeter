$(document).ready(function() {
  // --- our code goes here ---
  $( 'textarea' ).keyup(count);
  $( 'textarea' ).keydown(count);

  function count(){
    var value = $( this ).val().length;
    var counter = $(this).siblings('.counter');

    //$('.counter').text(140 - value);
    counter.text(140 - value);
    if(counter.text() < 0){
      counter.css('color', '#ff0000');
    }
    else{
      counter.css('color', '#000000');
    }
  }

})