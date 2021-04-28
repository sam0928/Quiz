function ajaxCallJsonp(target){
    
    var data = $.getJSON(target,{
        media,
        tagmode: "any",
        format: "json"
    });
var dataUrl = "https://www.dcard.tw/service/api/v2/forums/cgu/posts?popular=true&limit=30";
var data = $.getJSON(dataUrl);

data.done( function( msg ) {
    console.log(msg.item);
    $.each(msg.items, function(i, item){
      $("#contain").append($("<img/>").attr("src", item.media.m));
    });
});

data.fail( function( msg ) {
    console.log(msg);
    $("#contain").html("fail getting data");
});

}