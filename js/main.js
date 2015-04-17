$(document).ready(function(e) {
    var $root = $('html, body');
	$('.trap-expand').click(function() {
    	$('.right-top-trap').css("left", "118px");
    	$('.right-top-trap').css("-webkit-animation", "nav-top-trap-expand", ".25s", "ease-out");
	});
	
	$("#link-to-flightgear-project").click(function(e) {
        $root.animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
		return false;
    });
});