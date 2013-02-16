
$(document).ready(function(){
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang:"en", track:["nvidia", "ati", "microsoft", ] }, function (stream){
    stream.on("data", function (tweet){
		  $('<p class="tweet"><img src="'+tweet.profile_image_url+'" />'+tweet.text+'</p>')
		    .hide()
		    .prependTo('#tweets')
		    .slideDown(50);
		  $('#tweets p:gt(9)')
		    .fadeOut(100, function() { $(this).remove() });
    });
  });
});