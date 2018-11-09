$(document).ready(function() {
  // --- our code goes here ---
  $('textarea').on('input', function() {
    let $value = $(this).val().length;
    let $counter = $(this).siblings('.counter');
    $counter.text(140 - $value);
    if ($counter.text() < 0) {
      $counter.addClass('counter-invalid-msg');
      $counter.append(' characters left');
    } else {
      $counter.removeClass('counter-invalid-msg');
      $counter.append(' characters left');
    }
  });
});
