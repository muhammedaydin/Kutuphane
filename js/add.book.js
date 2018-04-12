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
});