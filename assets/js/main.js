$(document).ready(function() {
	//--------------------
	//  Global Variables
	//--------------------
	var isMobile = false;
	if (/Mobi/.test(navigator.userAgent)) {
		isMobile = true; // mobile!
		$(".menu").css({
			"bottom": "auto",
			"left": "50%",
			"top": "50%",
			"transform": "translate(-50%, -50%)"
		});
	}

	// Editor Mobile Center Fix 


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
				$("#overlay-message p").html("Tap on screen to open menu");
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

	// 3. - Shape Buttons
	$(".shape-block-1").on("click", function(element) {
		$(".shape-block-group .col-xs-6 button.active").removeClass("active");
		$(".shape-block-1").toggleClass("active");
	});
	$(".shape-block-2").on("click", function(element) {
		$(".shape-block-group .col-xs-6 button.active").removeClass("active");
		$(".shape-block-2").toggleClass("active");
	});
	$(".shape-block-3").on("click", function(element) {
		$(".shape-block-group .col-xs-6 button.active").removeClass("active");
		$(".shape-block-3").toggleClass("active");
	});
	$(".shape-block-4").on("click", function(element) {
		$(".shape-block-group .col-xs-6 button.active").removeClass("active");
		$(".shape-block-4").toggleClass("active");
	});

	// 4.- Background Buttons
	$(".background-block-1").on("click", function(element) {
		$(".background-block-group .col-xs-6 button.active").removeClass("active");
		$(".background-block-1").toggleClass("active");
	});
	$(".background-block-2").on("click", function(element) {
		$(".background-block-group .col-xs-6 button.active").removeClass("active");
		$(".background-block-2").toggleClass("active");
	});

//----------------- The End -----------------//
});