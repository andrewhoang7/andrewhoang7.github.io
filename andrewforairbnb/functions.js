//Right (next) arrow 
$('#right-jumbotron-arrow').click(function() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	currentSlide.fadeOut(500).removeClass('active');
	nextSlide.fadeIn(500).addClass('active');

	if(nextSlide.length == 0) {
		$('.slide').first().fadeIn(500).addClass('active');
	}
});



//Left (previous) arrow 
$('#left-jumbotron-arrow').click(function() {
	var currentSlide = $('.slide.active');
	var prevSlide = currentSlide.prev();

	currentSlide.fadeOut(500).removeClass('active');
	prevSlide.fadeIn(500).addClass('active');

	if(prevSlide.length == 0) {
		$('.slide').last().fadeIn(500).addClass('active');
	}
});