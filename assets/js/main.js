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
		/*$(".menu").css({
			"bottom": "10px",
			"left": "10px"
		});*/
	} else {
		$(".menu").draggable();
	}

	function getSliderValue(slider) {
		return slider.noUiSlider.get();
	}

	function setShapeSpeed(value) {
		var maxDuration = 120;
		var updatedDuration = maxDuration - value;
		console.log("Max Duration: " + maxDuration);
		console.log("Current Duration: " + updatedDuration);
		$(".eigth-layer .layer-1, .eigth-layer .layer-2").css("animation-duration", updatedDuration + "s");
		$(".seventh-layer .layer-1, .seventh-layer .layer-2").css("animation-duration", updatedDuration + 10 + "s");
		$(".sixth-layer .layer-1, .sixth-layer .layer-2").css("animation-duration", updatedDuration + 20 + "s");
		$(".fifth-layer .layer-1, .fifth-layer .layer-2").css("animation-duration", updatedDuration + 30 + "s");
		$(".fourth-layer .layer-1, .fourth-layer .layer-2").css("animation-duration", updatedDuration + 40 + "s");
		$(".third-layer .layer-1, .third-layer .layer-2").css("animation-duration", updatedDuration + 50 + "s");
		$(".second-layer .layer-1, .second-layer .layer-2").css("animation-duration", updatedDuration + 60 + "s");
		$(".first-layer .layer-1, .first-layer .layer-2").css("animation-duration", updatedDuration + 70 + "s");
		$(".zero-layer .layer-1, .zero-layer .layer-2").css("animation-duration", updatedDuration + 80 + "s");
		$(".negative-layer-1 .layer-1, .negative-layer-1 .layer-2").css("animation-duration", updatedDuration + 90 + "s");
		$(".negative-layer-2 .layer-1, .negative-layer-2 .layer-2").css("animation-duration", updatedDuration + 100 + "s");
	}

	function updateGradient(color1, color2, color3, color4, speed) {
		delete granimInstance;
		var maxSpeed = 20200;
		var updatedSpeed = Math.floor(maxSpeed - speed);
		//granimInstance.states["default-state"].transitionSpeed = maxSpeed - speed;
		//console.log(granimInstance.states["default-state"].transitionSpeed);
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
		            transitionSpeed: 400
		        }
		    }
		});

	}



	//---------------------------------
	// 			BACKGROUND
	//---------------------------------
	//* Variables
	var gradientColor1 = "#C16B08";
	var gradientColor2 = "#C1B702";
	var gradientColor3 = "#20C199";
	var gradientColor4 = "#C11E27";
	var bgColor = $("#background-color-picker").attr("value");
	var backgroundGradientSpeed = 1500;
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
	        }
	    }
	});


	//* Background Speed
	var bgSpeedSlider = document.getElementById("background-speed-draggable");
	noUiSlider.create(bgSpeedSlider, {
		start: [10000],
		behaviour: "tap-drag",
		range: {
			"min": [0],
			"max": [20000]
		}
	});

	bgSpeedSlider.noUiSlider.on("set", function() {
		console.log(getSliderValue(bgSpeedSlider));
		updateGradient(gradientColor1, gradientColor2, gradientColor3, gradientColor4, getSliderValue(bgSpeedSlider));
	});


	updateGradient(gradientColor1, gradientColor2, gradientColor3, gradientColor4, getSliderValue(bgSpeedSlider));

	//* Background Type Button
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

	//5. Background Solid Color Picker

	//----------------
	//  Editor Menu
	//----------------
	var menuMinimized = false;
	var canOpenWindow = false;
	var hasDisplayedMessage = false;

	// Initial Drivers
	setShapeSpeed(75);

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

	

	//4. Speed Range Sliders
		//--- Create Shape Slider 
		var shapeSpeedSlider = document.getElementById("shape-speed-draggable");
		noUiSlider.create(shapeSpeedSlider, {
			start: [50],
			behaviour: "tap-drag",
			range: {
				"min": [0],
				"max": [100]
			}
		});
		// Set Speeds
		shapeSpeedSlider.noUiSlider.on("update", function() {
			setShapeSpeed(getSliderValue(shapeSpeedSlider));
		});



	









//----------------- The End -----------------//
});