// JavaScript Document
$(document).ready(function(e) {
	var simSelected = false;
	var spaceGameSelected = false;
	var celShaderSelected = false;
	
	$("#flightsimulator").click(function(e) {
		simSelected = !simSelected;
		spaceGameSelected = false;
		celShaderSelected = false;
		// Show the flight simulator content and hidden others
		if(simSelected)
        	$("#flightsimulatorcontent").css("display", "inline-block");
		else
			$("#flightsimulatorcontent").css("display", "none");
		$("#spacegamecontent").css("display", "none");
		$("#celshadedcontent").css("display", "none");
		$(this).css("border-color", "#F60");
		$("#spacegame").css("border-color", "#fff");
		$("#celshaded").css("border-color", "#fff");
    });
	
	$("#flightsimulator").hover(function(e) {
		if(!simSelected)
			$(this).css("border-color", "#aeccf9");
	}, function(e) {
		if(!simSelected)
			$(this).css("border-color", "#fff");
	});
	
	$("#spacegame").click(function(e) {
		simSelected = false;
		spaceGameSelected = !spaceGameSelected;
		celShaderSelected = false;
		$("#flightsimulatorcontent").css("display", "none");
		if(spaceGameSelected)
        	$("#spacegamecontent").css("display", "block");
		else
			$("#spacegamecontent").css("display", "none");
		$("#celshadedcontent").css("display", "none");
		document.getElementById("flightsimvideo").pause();
		$(this).css("border-color", "#F60");
		$("#flightsimulator").css("border-color", "#fff");
		$("#celshaded").css("border-color", "#fff");
    });
	
	$("#spacegame").hover(function(e) {
		if(!spaceGameSelected)
			$(this).css("border-color", "#aeccf9");
	}, function(e) {
		if(!spaceGameSelected)
			$(this).css("border-color", "#fff");
	});
	
	$("#celshaded").click(function(e) {
		simSelected = false;
		spaceGameSelected = false;
		celShaderSelected = !celShaderSelected;
		$("#flightsimulatorcontent").css("display", "none");
		$("#spacegamecontent").css("display", "none");
		if(celShaderSelected)
       		$("#celshadedcontent").css("display", "block");
		else
			$("#celshadedcontent").css("display", "none");
		document.getElementById("flightsimvideo").pause();
		$(this).css("border-color", "#F60");
		$("#spacegame").css("border-color", "#fff");
		$("#flightsimulator").css("border-color", "#fff");
    });
	
	$("#celshaded").hover(function(e) {
		if(!celShaderSelected)
			$(this).css("border-color", "#aeccf9");
	}, function(e) {
		if(!celShaderSelected)
			$(this).css("border-color", "#fff");
	});
});