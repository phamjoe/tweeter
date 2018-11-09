//TODO
const likelistener = () => {
  $('button').data('like', false);
  $('.like-btn').click(function() {
    var value = false;
    let thisBtn = $('button').index(this);
    console.log($('like-btn').index(this));
    if ($('.like-btn').data('like') === false) {
      $('.like-btn').data('like', true);
      console.log('Liked!');
    } else if ($('.like-btn').data('like') === true) {
      $('.like-btn').data('like', false);
      console.log('Unliked!');
    }
    $('.test').text('' + value);
  });
};
