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

//   $( ".test" ).text( "" + value );
// });
// })
// //   $( ".test" ).text( "" + value );
// // });
// // $( "button" ).data( "like" ) === false;
// // console.log
// // let icon = document.querySelectorAll('[data-like]');
// // let icon_array = Array.from(icon);
// // icon.forEach(function(element) {
// //   console.log(element);
// //   $(document).on('click', '.like-btn', function(){
// //     if (element.dataset.like === false) {
// //       element.dataset.like = true;
// //     } else {
// //       element.dataset.like = false;
// //     }
// //     console.log("hi");
// //   });
// // });
