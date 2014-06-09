// My game!
$(document).ready(function(e) {
	// Make the reset button call the resetGame function.
	document.getElementById("resetButton").onclick = function() {resetGame();}
	
	$(document).keydown(function(e) {
		console.log("Called");
		switch(e.keyCode) {
		case 40:
			console.log("down");
			$("#moving").animate({top:"+=100"}, "slow");
			break;
		case 38:
			console.log("up");
			$("#moving").animate({top:"-=100"}, "slow");
			break;
		case 37:
			console.log("left");
			$("#moving").animate({left:"-=100"}, "slow");
			break;
		case 39:
			console.log("right");
			$("#moving").animate({left:"+=100"}, "slow");
			break;
		default:
			break;
		}
	});
	
	// If a box is clicked, change the color
    $(".box").click(function(e) {
		if($(this).attr("id") == "box1") {
			change($(this));
			change($("#box2"));
			change($("#box4"));
		} else if($(this).attr("id") == "box2") {
			change($(this));
			change($("#box1"));
			change($("#box3"));
			change($("#box5"));
		} else if($(this).attr("id") == "box3") {
			change($(this));
			change($("#box2"));
			change($("#box6"));
		} else if($(this).attr("id") == "box4") {
			change($(this));
			change($("#box1"));
			change($("#box5"));
			change($("#box7"));
		} else if($(this).attr("id") == "box5") {
			change($(this));
			change($("#box4"));
			change($("#box2"));
			change($("#box6"));
			change($("#box8"));
		} else if($(this).attr("id") == "box6") {
			change($(this));
			change($("#box3"));
			change($("#box5"));
			change($("#box9"));
		} else if($(this).attr("id") == "box7") {
			change($(this));
			change($("#box4"));
			change($("#box8"));
		} else if($(this).attr("id") == "box8") {
			change($(this));
			change($("#box7"));
			change($("#box5"));
			change($("#box9"));
		} else if($(this).attr("id") == "box9") {
			change($(this));
			change($("#box8"));
			change($("#box6"));
		}
		
		// If all boxes are green, display win message
		if(checkWin() == true) {
			// Display 'YOU WIN!'
			$("#winner").css("display", "block");
		}
    });
	
	// Change the color of the passed box
	var change = function(box) {
		var color = box.css("background-color");
		if(color == "rgb(102, 255, 51)") {
			box.css("background-color", "#ff0000");
		} else {
			box.css("background-color", "#66ff33");
		}
	};
	
	// Check each box to see if the user won
	var checkWin = function() {
		// Check each box
		for(var i = 1; i < 10; i++) {
			if($("#box" + i).css("background-color") == "rgb(255, 0, 0)") {
				return false;
			}
		}
		return true;
	};
	
	// Change all boxes' colors to red
	var resetGame = function() {
		for(var i = 1; i < 10; i++) {
			$("#box" + i).css("background-color", "#f00");
		}
		
		// Hide 'YOU WIN!'
		$("#winner").css("display", "none");
	}
});