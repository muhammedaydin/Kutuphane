$(document).ready(function() {
	$.get('http://www.mocky.io/v2/5ab0a0f72e00000e00e8b6bd', function(response) {
		console.log(JSON.stringify(response));
		var firstRow = '<div class="container">\
                    <div class="row">';
		for(var i=0; i<3; i++) {
			firstRow += '<div class="col" class="div-book">\
                            <img src="' + response[i].imageLink + '" class="img-book" />\
                            <p class="p-250">\
                            	Kitap Adı: ' + response[i].title + ' <br> \
                            	Yazar: ' + response[i].author + ' <br> \
                            	Ülke: ' + response[i].country + ' <br> \
                            	Dil: ' + response[i].language + ' <br> \
                            	Sayfa Sayısı: ' + response[i].pages + ' <br> \
                            	Tarih: ' + response[i].year + ' <br> \
                        </div>';

        }
        firstRow += '</div>\
                </div>\
                <br>';
        $('.books').prepend(firstRow);
	});
});