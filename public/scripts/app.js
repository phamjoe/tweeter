/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {
  const $compose = $('.compose');
  const $error = $('.error-msg');
  $error.hide();
  $compose.hide();

  $('.compose-btn').click(function(){
    $compose.slideToggle('fast', function(){});
    $('.tweet-text').focus();
  });

  function createTweetElement(tweet) {
    let escapeText = $('<div>').text(tweet.content.text);
    let $tweet = $('.tweet-list ').append(
      $('<article>')
        .append(
          $('<header>').append(
            $('<h2>')
              .append($('<img src="' + tweet.user.avatars.small + '"/>'))
              .append($('<span>' + tweet.user.name + '</span>').addClass('fullname'))
              .append($('<span>' + tweet.user.handle + '</span>').addClass('handle'))
          )
        )
        .append($(escapeText).addClass('tweet'))
        .append(
          $('<footer>' + calcDateDiff(tweet.created_at) + '</footer>')
            .append(
              $('<a href="' + 'http://www.youtube.ca' + '">')
                .addClass('foot-action')
                .append('<i class="fas fa-flag"></i></a>')
            )
            .append(
              $('<a href="' + 'http://www.google.ca' + '">')
                .addClass('foot-action')
                .append('<i class="fas fa-retweet"></i></a>')
            )
            .append(
              $('<a href="' + 'http://www.facebook.com' + '">')
                .addClass('foot-action')
                .append('<i class="fas fa-heart"></i></a>')
            )
        )
    );
    return $tweet;
  }

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    let $value = tweets.forEach(function(key) {
      return $('.container').append(createTweetElement(key));
    });
  }

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: function(getTweets) {
        renderTweets(getTweets);
      }
    });
  }
  loadTweets();

  function calcDateDiff(date) {
    const today = new Date();
    const givenDate = new Date(date);
    const timeDiff = Math.abs(today.getTime() - givenDate.getTime());
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    const minutes = Math.ceil(timeDiff /60000);
    const hours = Math.ceil(minutes / 60);
    if(days > 365){
      return `Over ${(Math.ceil(days / 365))} years ago`;
    }
    else if(days > 30){
      return `Over ${(Math.ceil(days / 365))} months ago`;
    }
    else if(days > 1){
      return `${(Math.ceil(days / 365))} days ago`;
    }
    else if(hours < 24 && hours > 1){
      return `${hours} hours ago`;
    }
    else{
      return `${minutes} minutes ago`;
    }
    return;
  }


  $('form').on('submit', function(event) {

    event.preventDefault();

    //TODO: check string length not serialized length
    let stringData = $('form').children('textarea');
    let data = $(this).serialize();
    if ($('textarea',this).val().trim() === '') {
      $error.slideDown();
      $error.text(" Error: Tweet cannot be empty");
    } else if ($('textarea',this).val().length > 140) {
      $error.slideDown();
      $error.text(" Error: Tweet exceeded 140 characters");

    } else {
      $error.hide();
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      }).done(function() {
        $('form')[0].reset();
        $('.counter').html(140);
        loadTweets();
      });
    }
  });
});

