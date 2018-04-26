$(document).ready(function() {
	// get book genres
	$.get('http://www.mocky.io/v2/5ab0a0402e00004900e8b6b8', function(response) {
		if (response.response_type == "kitap_turu") {
			$('#genre').empty();
			$.each(response.data, function(index, value) {
				$('#genre').append('<a class="dropdown-item" href="#">' + value + '</a>')
			});
		}
	});

	var i=1;
	$(".ekle").click(function() {
		var kitapEkleHtml = "<div class='kitapEkleDiv'><input class='kitapEkleInput form-control' placeholder='"+i+""+'.Kitabı Ekle+'+"' type='text'><a href='#'><button class='ekle btn btn-outline-success my-2 my-sm-0' type='button'>Kitaplara Ekle+</button></a></div>";
		$(".ekledeneme").before(kitapEkleHtml);
		i++;
	});

	$('#genre a').click(function() {
		// this is just an example of click event handling
		$('#genreButton').html($(this).html());
	});
});