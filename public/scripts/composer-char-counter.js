$(document).ready(function() {
  // --- our code goes here ---
  // $( 'textarea' ).keyup(count);
  // $( 'textarea' ).keydown(count);
  $( 'textarea' ).on('input', count());
  function count(){
    var value = $( this ).val().length;
    var counter = $(this).siblings('.counter');


    counter.text(140 - value);
    if(counter.text() < 0){
      //counter.css('color', '#ff0000');
      counter.addClass('counter-invalid-msg');
    }
    else{
      //counter.css('color', '#000000');
      counter.removeClass('counter-invalid-msg');
    }
  }

})