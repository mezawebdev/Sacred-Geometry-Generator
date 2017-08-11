$(document).ready(function() {
	//--------------------
	//  Global Variables
	//--------------------
	var isMobile = false;
	if (/Mobi/.test(navigator.userAgent)) {
		isMobile = true; // mobile!
		// Editor Mobile Center Fix 
		/*$(".menu").css({
			"bottom": "auto",
			"left": "50%",
			"top": "50%",
			"transform": "translate(-50%, -50%)"
		});*/
		$(".menu").css({
			"bottom": "10px",
			"left": "10px"
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

	function updateGradient(color1, color2, color3, color4) {
		granimInstance.pause();
		granimInstance.changeState("new-state");
		granimInstance.play();
	}

	//----------------------
	// Background Gradient
	//----------------------
	var gradientColor1 = "#C16B08";
	var gradientColor2 = "#C1B702";
	var gradientColor3 = "#20C199";
	var gradientColor4 = "#C11E27";
	var backgroundGradientSpeed = 2000;

	var granimInstance = new Granim({
	    element: '#background-gradient',
	    name: 'radial-gradient',
	    direction: 'radial',
	    opacity: [1, 1],
	    isPausedWhenNotInView: true,
	    states : {
	        "default-state": {
	            gradients: [
	                [gradientColor1, gradientColor2],
	                [gradientColor3, gradientColor4]
	            ],
	            transitionSpeed: backgroundGradientSpeed
	        },
	        "new-state": {
	            gradients: [
	                [gradientColor1, gradientColor2],
	                [gradientColor3, gradientColor4]
	            ],
	            transitionSpeed: backgroundGradientSpeed
	        }
	    }
	});
	/*
	setInterval(function() {
		var colorValue1 = "#" + $(".background-gradient-picker-1").attr("value");
		var colorValue2 = "#" + $(".background-gradient-picker-2").attr("value");
		var colorValue3 = "#" + $(".background-gradient-picker-3").attr("value");
		var colorValue4 = "#" + $(".background-gradient-picker-4").attr("value");
		gradientColor1 = colorValue1;
		gradientColor2 = colorValue2;
		gradientColor3 = colorValue3;
		gradientColor4 = colorValue4;
		updateGradient(gradientColor1, gradientColor2, gradientColor3, gradientColor4);
		console.log("gradient1: " + gradientColor1);
		console.log("gradient2: " + gradientColor2);
		console.log("gradient3: " + gradientColor3);
		console.log("gradient4: " + gradientColor4);
	}, 60);
	*/

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

	$("#overlay-message").on("click", function(element) {
		$(element).hide();
	});

	// 2.- Make menu draggable

	// 3. - Shape Buttons
	$(".shape-block-1").on("click", function(element) {
		$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-1").toggleClass("active");
	});
	$(".shape-block-2").on("click", function(element) {
		$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-2").toggleClass("active");
	});
	$(".shape-block-3").on("click", function(element) {
		$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-3").toggleClass("active");
	});
	$(".shape-block-4").on("click", function(element) {
		$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
		$(".shape-block-4").toggleClass("active");
	});

	// 4.- Background Type Buttons
	$(".background-block-1").on("click", function(element) {
		$("#background-gradient").css("opacity", "0");
		$(".background-gradient-picker-group").css("display", "none");
		$("#background-color-picker").css("display", "block");
		$(".background-block-group .col-xs-6 button.active").removeClass("active");
		$(".background-block-1").toggleClass("active");
	});
	$(".background-block-2").on("click", function(element) {
		$(".background-gradient-picker-group").css("display", "block");
		$("#background-color-picker").css("display", "none");
		$("#background-gradient").css("opacity", "1");
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
	setInterval(function() {
		bgColor = $("#background-color-picker").css("background-color");
		$("body").css("background", "linear-gradient(0deg, rgba(0, 0, 0, 1), " + bgColor + ")");
	}, 60);



	//6. Geometry Color Picker
	var geoColor = $("#geometry-color-picker").attr("value");
	setInterval(function() {
		geoColor = $("#geometry-color-picker").css("background-color");
		$(".square-1, .square-2").css("border", "4px solid " + geoColor);
	}, 60);


	//7. Make menu draggable
	$(".menu").draggable();







//----------------- The End -----------------//
});