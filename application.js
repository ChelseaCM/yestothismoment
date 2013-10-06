$(document).ready(function() {
	var tag = "yestothismoment";
	var count = 10;
	var access_token = "13469099.d0070c5.be3857c03bdb4982b1b17c87edf6db9e";
	var access_parameters = {access_token:access_token};

	function grabImages(access_parameters) {  
		var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count='+ count;
		$.getJSON(instagramUrl, access_parameters, onDataLoaded);
		}	

	function onDataLoaded(parameters) {
		if (instagram_data.meta.code===200){
			var photos=instagram_data.data;
			if (photos.length>0){
				for (var key in photos){
					var photo=photos[key];
					$('#target').append('<img src="' + photo.images.thumbnail.url + '">');
				}
			}
			else {
				$("#target").append("Sorry! We couldn't find anything");
			}
		} else {
			var error = data.meta.error_message;
			$("#target").append("Something happened, Instagram said: " + error);
		}
	}
	grabImages(access_parameters);
  });