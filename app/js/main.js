'use strict';

$(document).ready(function() {	
	var carousel = $('#carousel-example-generic');
	console.log('Hola Mundo');
	
	carousel.carousel({
		interval: 2000
	});
});

$("body").append("hola");