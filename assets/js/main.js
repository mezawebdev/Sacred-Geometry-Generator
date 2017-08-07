$(document).ready(function() {
	//--------------------
	//  Global Variables
	//--------------------
	var isMobile = false;
	if (/Mobi/.test(navigator.userAgent)) {
		isMobile = true; // mobile!
		// Editor Mobile Center Fix 
		$(".menu").css({
			"bottom": "auto",
			"left": "50%",
			"top": "50%",
			"transform": "translate(-50%, -50%)"
		});
	}

	function getSliderValue(slider) {
		return slider.noUiSlider.get();
	}


	function setShapeSpeed(value) {
		$(".eigth-layer .layer-1, .eigth-layer .layer-2").css("animation-duration", value + "s");
		$(".seventh-layer .layer-1, .seventh-layer .layer-2").css("animation-duration", value - 5 + "s");
		console.log(value - 10 + "s");
		$(".sixth-layer .layer-1, .sixth-layer .layer-2").css("animation-duration", value - 10 + "s");
		console.log(value - 20 + "s");
		$(".fifth-layer .layer-1, .fifth-layer .layer-2").css("animation-duration", value - 15 + "s");
		$(".fourth-layer .layer-1, .fourth-layer .layer-2").css("animation-duration", value - 20 + "s");
		$(".third-layer .layer-1, .third-layer .layer-2").css("animation-duration", value - 25 + "s");
		$(".second-layer .layer-1, .second-layer .layer-2").css("animation-duration", value - 30 + "s");
		$(".first-layer .layer-1, .first-layer .layer-2").css("animation-duration", value - 35 + "s");
		$(".zero-layer .layer-1, .zero-layer .layer-2").css("animation-duration", value - 40 + "s");
		$(".negative-layer-1 .layer-1, .negative-layer-1 .layer-2").css("animation-duration", value - 45 + "s");
		$(".negative-layer-2 .layer-1, .negative-layer-2 .layer-2").css("animation-duration", value - 50 + "s");
	}

	//----------------
	//  Editor Menu
	//----------------
	var menuMinimized = false;
	var canOpenWindow = false;
	var hasDisplayedMessage = false;

	// Initial Drivers
	setShapeSpeed(130);

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

	//4. Speed Range Sliders
		//--- Create Shape Slider 
		var shapeSpeedSlider = document.getElementById("shape-speed-draggable");
		noUiSlider.create(shapeSpeedSlider, {
			start: [125],
			range: {
				"min": [50],
				"max": [200]
			}
		});
		// Set Speeds
		$("#shape-speed-draggable").on("mousedown mousemove click touchstart touchmove", function() {
			setShapeSpeed(getSliderValue(shapeSpeedSlider));
		});


		//--- Background speed
		var bgSpeedSlider = document.getElementById("background-speed-draggable");
		noUiSlider.create(bgSpeedSlider, {
			start: [125],
			range: {
				"min": [50],
				"max": [200]
			}
		});

	//5. Background Color Picker
	var bgColor = $("#background-color-picker").attr("value");
	console.log(bgColor);
	setInterval(function() {
		bgColor = $("#background-color-picker").css("background-color");
		$("body").css("background", "linear-gradient(0deg, rgba(0, 0, 0, 1), " + bgColor + ")");
	}, 500);


	$(".menu").draggable();










//----------------- The End -----------------//
});