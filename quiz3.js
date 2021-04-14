var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613";
var data = $.getJSON(dataUrl);

data.done( function( msg ) {
    $.each(msg.result.results, function(i,results) {
        $("#contain").html();
        $("#contain").append($("<h2/>").text(results['\ufeffA_Name_Ch']));
        $("#contain").append($("<h3/>").text(results.A_Behavior));
        if (results.A_Pic01_URL) {
          $("#contain").append($("<img/>").attr("src", results.A_Pic01_URL));
       }
    }); 
});

data.fail( function( msg ) {
    console.log(msg);
    $("#contain").html("fail getting data");
});