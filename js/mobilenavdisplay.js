$(document).ready(function(e) {
	var menuSelected = false;
    $("#menu").click(function(e) {
		menuSelected = !menuSelected;
		if(menuSelected) {
        	$("#mobilenavbar .navtext").css("display", "block");
			$("#menu").css("color", "#f60");
		}
		else
			$("#mobilenavbar .navtext").css("display", "none");
    });
	
	var checkMenu = function() {
		if($(window).width() < 480) {
			$("#navigationbar h1").css("display", "none");
			$("#menu").text("Michael Marinetti");
			$("#navigationbar").css("text-align", "center");
		} else {
			$("#navigationbar h1").css("display", "inline");
			$("#menu").text("Menu");
			$("#navigationbar").css("text-align", "right");
		}
	};
	
	// Execute on load
	checkMenu();
	
	$(window).resize(checkMenu);
});