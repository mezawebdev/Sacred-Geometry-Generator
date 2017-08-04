$(document).ready(function() {


//--------------------
//  Global Variables
//--------------------
var isMobile = false;
if (/Mobi/.test(navigator.userAgent)) {
	isMobile = true; // mobile!
}



//----------------
//  Editor Menu
//----------------
var menuMinimized = false;
var canOpenWindow = false;
var hasDisplayedMessage = false;

// 1.- Close button
$(".close-button").on("click", function(button) {
	if (! hasDisplayedMessage) {
		if (isMobile) {
			$("#overlay-message p").html("Tap screen to open menu");
			$("#overlay-message").fadeIn();

		} else {
			$("#overlay-message").fadeIn();
		}
	}
	setTimeout(function() {
		$("#overlay-message").fadeOut();
		canOpenWindow = true;
	}, 2000);
	$(".menu").fadeOut();
	$("#overlay-button").css("pointer-events", "auto");
	menuMinimized = true;
	hasDisplayedMessage = true;
});

// 1.-- Show overlay after closing editor window
$("#overlay-button").on("click", function() {
	if (menuMinimized && canOpenWindow) {
		$(".menu").fadeIn();
		$("#overlay-button").css("pointer-events", "none");
	}
});

// 2.- Make menu draggable
Draggable.create(".menu", {
	type:"x,y", 
	edgeResistance:0.65, 
	throwProps:true
});

//----------------- The End -----------------//
});