function scrollTo(location, time = 600) {
	$('html, body').animate({
		scrollTop: location
	}, time);
}

$(document).on('click', '#to-top', function(event){
	scrollTo(0);
	event.preventDefault();
});

$(document).on('click', '#to-education', function(event){
	scrollTo($('#education').offset().top);
	event.preventDefault();
});

$(document).on('click', '#to-projects', function(event){
	scrollTo($('#projects').offset().top);
	event.preventDefault();
});