var requestAnimationFrame = requestAnimationFrame ||
	webkitRequestAnimationFrame || mozRequestAnimationFrame ||
	msRequestAnimationFrame || oRequestAnimationFrame;
	
var c = document.getElementById('c');

ctx = c.getContext('2d');

var x = 100;

ctx.fillStyle = '#f00';

function loop() {
	ctx.fillRect(x, 100, 20, 20);
	
	++x;
	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);