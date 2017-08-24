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
var shapeSpeedSlider = document.getElementById("shape-speed-draggable");
var menuMinimized = false;
var canOpenWindow = false;
var hasDisplayedMessage = false;
var tapScreenDuration = 2000;
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
        "transitory-state": {
        	gradients: [
                ["#fff", "#fff"],
                ["#fff", "#fff"]
            ],
            transitionSpeed: 5000
        }
    }
});


//---------------------------------
// 		Global Functions
//---------------------------------
function getSliderValue(slider) {
	return slider.noUiSlider.get();
}

function setShapeSpeed(value) {
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
}

function updateGradientSpeed(speed) {
	var maxSpeed = 20200;
	var updatedSpeed = Math.floor(maxSpeed - speed);
	granimInstance.changeState("transitory-state");
	granimInstance.states["default-state"].transitionSpeed = maxSpeed - speed;
	granimInstance.changeState("default-state");
	console.log(granimInstance.states["default-state"].transitionSpeed);

}

function updateGeometryColor(jscolor) {
	$(".square-1, .square-2").css("border", "4px solid " + "#" + jscolor);
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
			granimInstance.changeState("transitory-state");
			granimInstance.states["default-state"].gradients =[
			        [gradientColor1, gradientColor2],
			        [gradientColor3, gradientColor4]
			    ];
			granimInstance.changeState("default-state");
			//console.log(granimInstance.states["default-state"].transitionSpeed);
			break;
		case "block-2":
			gradientColor1 = gradientColor4;
			gradientColor4 = gradientColor3;
			gradientColor3 = gradientColor2;
			gradientColor2 = "#" + jscolor;
			granimInstance.changeState("transitory-state");
			granimInstance.states["default-state"].gradients =[
			        [gradientColor1, gradientColor2],
			        [gradientColor3, gradientColor4]
			    ];
			granimInstance.changeState("default-state");
			break;
		case "block-3":
			gradientColor2 = gradientColor4;
			gradientColor1 = gradientColor3;
			gradientColor4 = gradientColor2;
			gradientColor3 = "#" + jscolor;
			granimInstance.changeState("transitory-state");
			granimInstance.states["default-state"].gradients =[
			        [gradientColor1, gradientColor2],
			        [gradientColor3, gradientColor4]
			    ];
			granimInstance.changeState("default-state");
		break;
		case "block-4":
			gradientColor3 = gradientColor4;
			gradientColor2 = gradientColor3;
			gradientColor1 = gradientColor2;
			gradientColor4 = "#" + jscolor;
			granimInstance.changeState("transitory-state");
			granimInstance.states["default-state"].gradients =[
			        [gradientColor1, gradientColor2],
			        [gradientColor3, gradientColor4]
			    ];
			granimInstance.changeState("default-state");
		break;
	}
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
// 			Editor Window
//---------------------------------//
//----------------------//
// 		General
//----------------------//
// Close button Handler
$(".close-button").on("click", function(button) {
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


//----------------------//
// 		Geometry
//----------------------//
// Speed Range Slider
noUiSlider.create(shapeSpeedSlider, {
	start: [50],
	behaviour: "tap-drag",
	range: {
		"min": [0],
		"max": [100]
	}
});

shapeSpeedSlider.noUiSlider.on("update", function() {
	setShapeSpeed(getSliderValue(shapeSpeedSlider));
});

// Geometry Shape Button Handlers
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

// Set initial Speed
setShapeSpeed(75);







//----------------- The End -----------------//
