function playmovie(movId){
	window.open("https://www.youtube.com/watch?v="+movId);
}

$("#searchForm").submit(function(e){
	e.preventDefault();
	var searchTerm = $("#searchTerm").val();

	var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchTerm+"&type=video&key=AIzaSyA1KXlTUofjbD3rbBcSAuIWjjpUD1aM4HM&maxResults=10";

	$.getJSON( url, function( data ) {
  		var arrItems = data.items;
  		var html = '<table class="table table-bordered"><thead><tr><th>Thumbnail</th><th>Title</th><th>Link</th></tr></thead><tbody>';
  		for(var i = 0;i<arrItems.length;i++){
  			html += '<tr><td><img src="'+arrItems[i].snippet.thumbnails.default.url+'"></td><td>'+arrItems[i].snippet.title+'</td><td><button type="button" class="btn btn-primary" onclick="playmovie(\''+arrItems[i].id.videoId+'\')">Play Video</button></td></tr>';
  		}
  		html += "</tbody></table>";
  		$("#results").html(html);
 	});

});