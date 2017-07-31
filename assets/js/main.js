$(document).ready(function() {
//----------------
//  Menu Handlers
//----------------
var menuMinimized = false;

// 1. Minimize button
$(".minimize").on("click", function(button) {
	$("#overlay-message").fadeIn();
	setTimeout(function() {
		$("#overlay-message").fadeOut();
	}, 3000);
	$(".menu").animate({
		height: 0,
		padding: 0
	});
	$("#overlay-button").css("pointer-events", "auto");
	menuMinimized = true;
});

$("#overlay-button").on("click", function() {
	if (menuMinimized) {
		$(".menu").animate({
			height: "290px",
			padding: "20px"
		});
		$("#overlay-button").css("pointer-events", "none");
	}
});

});