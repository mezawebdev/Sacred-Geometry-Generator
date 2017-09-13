//---------------------------------
// 		Global Variables
//---------------------------------
var isMobile = false;
var gradientColor1 = "#C16B08";
var gradientColor2 = "#C1B702";
var gradientColor3 = "#20C199";
var gradientColor4 = "#C11E27";
var bgColor = $("#background-color-picker").attr("value");
var backgroundGradientSpeed = 1500;
var bgSpeedSlider = document.getElementById("background-speed-draggable");
// Shape DOM Objects
var squares = document.getElementById("squares-wrapper");
var circles = document.getElementsByClassName("flower-wrapper")[0];
var menuMinimized = false;
var canOpenWindow = false;
var hasDisplayedMessage = false;
var tapScreenDuration = 1500;
/*var granimInstance = new Granim({
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
        "transitory-state": {
        	gradients: [
                ["#fff", "#fff"],
                ["#fff", "#fff"]
            ],
            transitionSpeed: 5000
        }
    }
});
*/

//---------------------------------
// 		Global Functions
//---------------------------------
function getSliderValue(slider) {
	return slider.noUiSlider.get();
}

function setShapeSpeed(value, shape) {
	switch (shape) {
		case "square":
			var maxDuration = 120;
			var updatedDuration = maxDuration - value;
			console.log("Max Duration: " + maxDuration);
			console.log("Current Duration: " + updatedDuration);
			$(".eigth-layer .layer-1, .eigth-layer .layer-2").css("animation-duration", updatedDuration + "s");
			$(".seventh-layer .layer-1, .seventh-layer .layer-2").css("animation-duration", updatedDuration + 100 + "s");
			$(".sixth-layer .layer-1, .sixth-layer .layer-2").css("animation-duration", updatedDuration + 90 + "s");
			$(".fifth-layer .layer-1, .fifth-layer .layer-2").css("animation-duration", updatedDuration + 80 + "s");
			$(".fourth-layer .layer-1, .fourth-layer .layer-2").css("animation-duration", updatedDuration + 70 + "s");
			$(".third-layer .layer-1, .third-layer .layer-2").css("animation-duration", updatedDuration + 60 + "s");
			$(".second-layer .layer-1, .second-layer .layer-2").css("animation-duration", updatedDuration + 50 + "s");
			$(".first-layer .layer-1, .first-layer .layer-2").css("animation-duration", updatedDuration + 40 + "s");
			$(".zero-layer .layer-1, .zero-layer .layer-2").css("animation-duration", updatedDuration + 30 + "s");
			$(".negative-layer-1 .layer-1, .negative-layer-1 .layer-2").css("animation-duration", updatedDuration + 20 + "s");
			$(".negative-layer-2 .layer-1, .negative-layer-2 .layer-2").css("animation-duration", updatedDuration + 20 + "s");
			break;
		case "circle":
			var maxDuration = 320;
			var updatedDuration = maxDuration - value;
			$(".circle-group-1").css("animation-duration", updatedDuration + "s");
			$(".circle-group-2").css("animation-duration", updatedDuration + "s");
			$(".circle-group-3").css("animation-duration", updatedDuration + "s");
			$(".circle-group-4").css("animation-duration", (updatedDuration - 10) + "s");
			$(".circle-group-5").css("animation-duration", (updatedDuration - 10) + "s");
			$(".circle-group-6").css("animation-duration", (updatedDuration - 10) + "s");
			$(".circle-group-7").css("animation-duration", (updatedDuration - 10) + "s");
			$(".circle-group-8").css("animation-duration", (updatedDuration - 10) + "s");
			$(".circle-group-9").css("animation-duration", (updatedDuration - 10) + "s");
		break;
		case "triangle":
		break;
	}
}

function setShapeSize(value, shape) {
	switch (shape) {
		case "square":
			var currentSize = $(".square-1").css("height");
			var newSize = value + "px";
			$(".square-1, .square-2").css({
				"width": value,
				"height": value
			});
		break;
		case "circle":
			var currentSize = $(".circle").css("height");
			var newSize = value + "px";
			$(".circle").css({
				"width": value,
				"height": value
			});
		break;
		case "triangle":

		break;
	}
}

function setShapeThickness(value, shape) {
	switch (shape) {
		case "square":
			var currentThicknessSquares = $(".square-1").css("border-width");
			var newThickness = Math.floor(value) + "px";
			$(".square-1, .square-2").css("border-width", newThickness);
		break;
		case "circle":
			var currentThicknessCircle = $(".circle").css("border-width");
			var newThickness = Math.floor(value) + "px";
			$(".circle").css("border-width", newThickness);
		break;
		case "triangle":

		break;
	}
}

function setShapeZoom(value, shape) {
	switch (shape) {
		case "square":
			var currentZoom = $("#squares-wrapper").css("transform");
			console.log(currentZoom);
			var transformString = "translate(-50%, -50%) scale(" + value + ")";
			$("#squares-wrapper").css("transform", transformString);
		break;
		case "circle":
			var currentZoom = $(".flower-wrapper").css("transform");
			console.log(currentZoom);
			var transformString = "translate(-50%, -50%) scale(" + value + ")";
			$(".flower-wrapper").css("transform", transformString);
		break;
		case "triangle":

		break;
	}
}

function setShapeOpacity(value, shape) {
	switch (shape) {
		case "square":
			var currentOpacity = $("#squares-wrapper").css("opacity");
			var newOpacity = value;
			$("#squares-wrapper").css("opacity", newOpacity);
		break;
		case "circle":
			var currentOpacity = $(".flower-wrapper").css("opacity");
			var newOpacity = value;
			$(".flower-wrapper").css("opacity", newOpacity);
		break;
		case "triangle":

		break;
	}
}

function updateGradientSpeed(speed) {
	var maxSpeed = 20200;
	var updatedSpeed = Math.floor(maxSpeed - speed);
	granimInstance.changeState("transitory-state");
	granimInstance.states["default-state"].transitionSpeed = maxSpeed - speed;
	granimInstance.changeState("default-state");
	console.log(granimInstance.states["default-state"].transitionSpeed);

}

function updateGeometryColor(jscolor, shape) {
	switch (shape) {
		case "square":
			$(".square-1, .square-2").css("border-color", "#" + jscolor);
		break;
		case "circle":
			$(".circle").css("border-color", "#" + jscolor);
		break;
		case "triangle":
		break;
	}
}

function updateSolidBackgroundColor(jscolor) {
	$("body").css("background", "linear-gradient(0deg, rgba(0, 0, 0, 1), #" + jscolor + ")");
}

function updateGradientBackgroundColor(jscolor, block) {
	switch(block) {
		case "block-1":
			gradientColo4 = gradientColor4;
			gradientColo3 = gradientColor3;
			gradientColo2 = gradientColor2;
			gradientColor1 = "#" + jscolor;
			setBackgroundGradientColor(gradientColor1, gradientColor2, gradientColor3, gradientColor4);
			//console.log(granimInstance.states["default-state"].transitionSpeed);
			break;
		case "block-2":
			gradientColor1 = gradientColor4;
			gradientColor4 = gradientColor3;
			gradientColor3 = gradientColor2;
			gradientColor2 = "#" + jscolor;
			setBackgroundGradientColor(gradientColor1, gradientColor2, gradientColor3, gradientColor4);
			break;
		case "block-3":
			gradientColor2 = gradientColor4;
			gradientColor1 = gradientColor3;
			gradientColor4 = gradientColor2;
			gradientColor3 = "#" + jscolor;
			setBackgroundGradientColor(gradientColor1, gradientColor2, gradientColor3, gradientColor4);
		break;
		case "block-4":
			gradientColor3 = gradientColor4;
			gradientColor2 = gradientColor3;
			gradientColor1 = gradientColor2;
			gradientColor4 = "#" + jscolor;
			setBackgroundGradientColor(gradientColor1, gradientColor2, gradientColor3, gradientColor4);
		break;
	}
}

function setBackgroundGradientColor(gradientColor1, gradientColor2, gradientColor3, gradientColor4) {
	granimInstance.changeState("transitory-state");
	granimInstance.states["new-state"] = {};
	granimInstance.states["new-state"].gradients =[
	        [gradientColor1, gradientColor2],
	        [gradientColor3, gradientColor4]
	    ];
	granimInstance.changeState("new-state");
}


//---------------------------------
// 		Mobile: True/False
//---------------------------------
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


//---------------------------------//
// 			Editor Windows
//---------------------------------//
//----------------------//
// 		General
//----------------------//
// Full screen button
$("#overlay-button").on("click", function() {
	if (menuMinimized && canOpenWindow) {
		$(".menu").fadeIn();
		$("#overlay-button").css("pointer-events", "none");
	}
});

$("#overlay-message").on("click", function(element) {
	$(element).hide();
});

//----------------------//
// 		Main
//----------------------//
/*	General */
// Close button Handler
$("#editor .close-button").on("click", function(button) {
	if (! hasDisplayedMessage) {
		if (isMobile) {
			$("#overlay-message p").html("Tap on screen to open menu");
			$("#overlay-message").fadeIn();

		} else {
			$("#overlay-message").fadeIn();
		}
	}
	// After Closing window, Show overlay for X Seconds
	setTimeout(function() {
		$("#overlay-message").fadeOut();
		canOpenWindow = true;
	}, tapScreenDuration);
	$(".menu").fadeOut();
	$("#overlay-button").css("pointer-events", "auto");
	menuMinimized = true;
	hasDisplayedMessage = true;
});
						
/*	Main Menu Screen	*/
// Main Buttons
$("#main-menu-option-1 button").on("click", function(element) {
	$("#main-menu-slider").animate({
		left: "-=300px"
	}, 500);
});			

$("#main-menu-option-2 button").on("click", function(element) {
	$("#main-menu-slider").animate({
		left: "-=300px"
	}, 500);
});	

$("#main-menu-option-3 button").on("click", function(element) {
	$("#main-menu-slider").animate({
		left: "-=300px"
	}, 500);
});	

// Go Back Button
$(".go-back-button").on("click", function() {
	$("#main-menu-slider").animate({
		left: "+=300px"
	}, 500);
});

//----------------------//
// 	  Main: Geometry
//----------------------//
/* Preset Shape Button Handlers */
// Squares Of Life
$(".shape-block-1").on("click", function(element) {
	$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-1").toggleClass("active");
	$(".flower-wrapper").css("display", "none");
	$("#squares-wrapper").css("display", "block");
});

// Flower Of Life
$(".shape-block-2").on("click", function(element) {
	$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-2").toggleClass("active");
	$("#squares-wrapper").css("display", "none");
	$(".flower-wrapper").css("display", "block");
});

/*$(".shape-block-3").on("click", function(element) {
	$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-3").toggleClass("active");
});
$(".shape-block-4").on("click", function(element) {
	$(".shape-block-group-1 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-group-2 .col-xs-6 button.active").removeClass("active");
	$(".shape-block-4").toggleClass("active");
});*/

/* Geometry Shapes Button Handlers */
$(".geometry-block-1").on("click", function(element) {
	if (! $(".geometry-block-1").hasClass("active")) {
		$(".geometry-block-1").toggleClass("active");
		$("#squares-wrapper").css("display", "block");
	} else {
		$(".geometry-block-1").removeClass("active");
		$("#squares-wrapper").css("display", "none");
	}
});

$(".geometry-block-2").on("click", function(element) {
	if (! $(".geometry-block-2").hasClass("active")) {
		$(".geometry-block-2").toggleClass("active");
		$(".flower-wrapper").css("display", "block");
	} else {
		$(".geometry-block-2").removeClass("active");
		$(".flower-wrapper").css("display", "none");
	}
});


//----------------------//
// 		Squares
//----------------------//
// Close Button Handler
$("#squares-editor .close-button").on("click", function(button) {
	$("#squares-editor").fadeOut();
});

/* Speed Range Slider */
var squareSpeedSlider = document.getElementById("squares-speed-draggable");
noUiSlider.create(squareSpeedSlider, {
	start: [75],
	behaviour: "tap-drag",
	range: {
		"min": [0],
		"max": [100]
	}
});

// On Update Event
squareSpeedSlider.noUiSlider.on("update", function() {
	setShapeSpeed(getSliderValue(squareSpeedSlider), "square");
});

// Set initial Speed
setShapeSpeed(75);


/* Size Range Slider */
var squareSizeSlider = document.getElementById("squares-size-draggable");
noUiSlider.create(squareSizeSlider, {
	start: [50],
	behaviour: "tap-drag",
	range: {
		"min": [0],
		"max": [100]
	}
})
/*
squareSizeSlider.noUiSlider.on("update", function() {
	setShapeSize(getSliderValue(squareSizeSlider), "square");
});*/

/* Thickness Range Slider */
var squareThicknessSlider = document.getElementById("squares-thickness-draggable");
noUiSlider.create(squareThicknessSlider, {
	start: [4.5],
	behaviour: "tap-drag",
	range: {
		"min": [1],
		"max": [8]
	}
})

squareThicknessSlider.noUiSlider.on("update", function() {
	setShapeThickness(getSliderValue(squareThicknessSlider), "square");
});

/* Zoom Range Slider */
var squareZoomSlider = document.getElementById("squares-zoom-draggable");
noUiSlider.create(squareZoomSlider, {
	start: [1],
	behaviour: "tap-drag",
	range: {
		"min": [1],
		"max": [2]
	}
})

squareZoomSlider.noUiSlider.on("update", function() {
	setShapeZoom(getSliderValue(squareZoomSlider), "square");
});

/* Opacity Range Slider */
var squareOpacitySlider = document.getElementById("squares-opacity-draggable");
noUiSlider.create(squareOpacitySlider, {
	start: [0.9],
	behaviour: "tap-drag",
	range: {
		"min": [0.1],
		"max": [1]
	}
})

squareOpacitySlider.noUiSlider.on("update", function() {
	setShapeOpacity(getSliderValue(squareOpacitySlider), "square");
});

//----------------------//
// 		Circles
//----------------------//
// Close Button Handler
$("#circles-editor .close-button").on("click", function(button) {
	$("#circles-editor").fadeOut();
});

/* Speed Range Slider */
var circleSpeedSlider = document.getElementById("circles-speed-draggable");
noUiSlider.create(circleSpeedSlider, {
	start: [170],
	behaviour: "tap-drag",
	range: {
		"min": [20],
		"max": [300]
	}
});

// On Update Event
circleSpeedSlider.noUiSlider.on("update", function() {
	setShapeSpeed(getSliderValue(circleSpeedSlider), "circle");
});

// Set initial Speed
//setShapeSpeed(75);


/* Size Range Slider */
var circleSizeSlider = document.getElementById("circles-size-draggable");
noUiSlider.create(circleSizeSlider, {
	start: [107],
	behaviour: "tap-drag",
	range: {
		"min": [15],
		"max": [600]
	}
})

circleSizeSlider.noUiSlider.on("update", function() {
	setShapeSize(getSliderValue(circleSizeSlider), "circle");
});

/* Thickness Range Slider */
var circleThicknessSlider = document.getElementById("circles-thickness-draggable");
noUiSlider.create(circleThicknessSlider, {
	start: [4.5],
	behaviour: "tap-drag",
	range: {
		"min": [1],
		"max": [8]
	}
})

circleThicknessSlider.noUiSlider.on("update", function() {
	setShapeThickness(getSliderValue(circleThicknessSlider), "circle");
});

/* Zoom Range Slider */
var circleZoomSlider = document.getElementById("circles-zoom-draggable");
noUiSlider.create(circleZoomSlider, {
	start: [1],
	behaviour: "tap-drag",
	range: {
		"min": [1],
		"max": [2]
	}
})

circleZoomSlider.noUiSlider.on("update", function() {
	setShapeZoom(getSliderValue(circleZoomSlider), "circle");
});

/* Opacity Range Slider */
var circleOpacitySlider = document.getElementById("circles-opacity-draggable");
noUiSlider.create(circleOpacitySlider, {
	start: [0.9],
	behaviour: "tap-drag",
	range: {
		"min": [0.1],
		"max": [1]
	}
})

circleOpacitySlider.noUiSlider.on("update", function() {
	setShapeOpacity(getSliderValue(circleOpacitySlider), "circle");
});

//----------------------//
// 		Background
//----------------------//
// Creates background speed range slider
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
	updateGradientSpeed(getSliderValue(bgSpeedSlider));
});

// Background Type Button Handlers
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

// Starts Up Initial Background
updateGradientSpeed(getSliderValue(bgSpeedSlider));










//----------------- The End -----------------//
