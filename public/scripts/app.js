/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {
//var $tweet = createTweetElement(data);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  function createTweetElement(tweet) {
    let $tweet = $('.tweet-list ').append($('<article>')
                      .append($('<header>')
                      .append($('<h2>')
                        .append($('<img src=\"'+ tweet.user.avatars.small + '\"/>'))
                        .append($('<span>' + tweet.user.name + '</span>').addClass('fullname'))
                        .append($('<span>' + tweet.user.handle + '</span>').addClass('handle'))))
                      .append($('<div>' + tweet.content.text + '</div>').addClass('tweet'))
                      .append($('<footer>' + tweet.created_at + '</footer>')
                        .append($('<a href=\"'+ 'http://www.youtube.ca' + '\">').addClass('foot-action')
                          .append('<i class=\"fas fa-flag\"></i></a>'))
                        .append($('<a href=\"'+ 'http://www.google.ca' + '\">').addClass('foot-action')
                          .append('<i class=\"fas fa-retweet\"></i></a>'))
                        .append($('<a href=\"'+ 'http://www.facebook.com' + '\">').addClass('foot-action')
                          .append('<i class=\"fas fa-heart\"></i></a>'))));

    // $tweet.find($(".profile-pic").attr(tweet.user.avatars.small));
    return $tweet;
  }

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  let $value = tweets.forEach(function(key){
      return $('.container').append(createTweetElement(key));
  })

}

function loadTweets(){
  $.ajax({
    method:"GET",
    url: "/tweets",
    success: function(getTweets){
      renderTweets(getTweets);
    }
  });
}

loadTweets();
  $('form').on('submit', function(event) {
    event.preventDefault();
    let data = $(this).serialize();
    if($('textarea', this).val().trim() === ''){
      alert("Empty values not allowed");
    }
    else if(data.length > 140){
      alert("Character length exceeded");
    }
    else{
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: data
      })
      .done(function(){
        $('form')[0].reset();
        loadTweets();
      })
    }
  })
})

$(function(){

})




