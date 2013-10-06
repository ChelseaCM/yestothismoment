$(document).ready(function() {
	var tag = "yestothismoment";
	var count = 10;
	$.ajax({
        type: "GET",
        data: {'client_id': instagram.clientID},
        dataType: "jsonp",
        url: "https://api.instagram.com/v1/tags/yestothismoment/media/recent?callback=?&count=10recent?client_id=d0070c5bd764420d954f2ab19de56b34&access_token=CODE",
        success: function(data)  {
        	console.log(data);
			for (var i = 0; i < 10; i++) {
				$("#target").append("<img src='" + data.data[i].images.low_resolution.url +"'></img>");
				}
			}	
    });
});
