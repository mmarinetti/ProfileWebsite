$(document).ready(function(e) {
    $("#loadFooter").load("footer.html", function(response, status, xhr) {
		if(status == "error") {
			alert("An error occurred loading the footer. " + xhr.status + " " + xhr.statusText);
		}
	});
	
	$("#loadNavBar").load("navbar.html", function(response, status, xhr) {
		if(status == "error") {
			alert("An error occurred loading the navigation bar. " + xhr.status + " " + xhr.statusText);
		}
	});
});