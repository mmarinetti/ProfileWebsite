$(document).ready(function(e) {
    var $root = $('html, body');
	$('.navtext').click(function() {
    	$root.animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
		return false;
	});
});