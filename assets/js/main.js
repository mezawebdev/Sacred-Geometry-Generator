$(document).ready(function() {
//----------------
//  Editor Menu
//----------------
var menuMinimized = false;
var canOpenWindow = false;
var hasDisplayedMessage = false;

// 1.- Close button
$(".close-button").on("click", function(button) {
	if (! hasDisplayedMessage) {
		$("#overlay-message").fadeIn();
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
$(".menu").draggable();

//----------------- The End -----------------//
});