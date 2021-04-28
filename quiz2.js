var tags = "李知恩";
var dataUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + tags + "&tagmode=any&format=json&per_page=400&jsoncallback=?";
var data = $.getJSON(dataUrl);

data.done( function( msg ) {
  console.log(msg.item);
  $.each(msg.items, function(i, item){
    $("#contain").append($("<img/>").attr("src", item.id));
  });
});

data.fail( function( msg ) {
  console.log(msg);
  $("#contain").html("fail getting data");
});