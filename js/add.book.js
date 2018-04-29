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
		$(".ekledeneme").before("<div style='margin-top:20px;'><input style='background-color:white  ;width:300px!important;' class= 'form-control' placeholder='"+i+""+'.Kitabı Ekle+'+"' type='text'> <a href='#'> <button class='ekle btn btn-outline-success my-2 my-sm-0 ' type='button'> Kitaplara Ekle+  </button> </a> </div>");
		i++;
	});
});