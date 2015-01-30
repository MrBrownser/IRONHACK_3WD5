$(document).ready(function () {

    var r = $("#result");

    $.fx.speeds["_default"] = 1000;
// // Hide the result div
// $("#result").hide();

// Hide the result div using fade with 1s duration
// r.fadeOut(1000);

// Hide and show the result div using slide
// r.slideUp().slideDown();

// Hide using slide, wait one second and fade
//r.slideUp().delay(1000).fadeIn();

// Create your own speed and use it
// $.fx.speeds["mySpeed"] = 2000;
// r.slideUp('mySpeed');

// Set the default animation speed to 2000
// $.fx.speeds["_default"] = 2000;

// Slide jquery projects and when it's done show on the result div that it's done
//$("#myContent ul").slideUp(1000, function () {
//    r.text("Done!");
//});

// Move the result div to the bottom left corner
//r.animate({
//    left: "0px",
//    top: "90%"
//}, 5000);

// Move to the left in 10seconds the result div with linear animation
//r.animate({
//    left: "0px",
//}, 10000, 'linear');

// Create your own function of easing and use it
//$.easing['pow'] = function (p) {
//    return p * p;
//};
//r.animate({
//    left: "0px",
//}, 10000, 'pow');
});
