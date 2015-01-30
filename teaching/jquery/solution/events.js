$(document).ready(function () {

// When the page is loaded replace the slogan by "Bazinga!"
// $(function(){
// 	$("#slogan").text("Bazinga!");
// });

// When you click on the input to write my name the previous name is deleted
// $("#name").bind("click", function(){
//	$(this).val("");
// });

// When you move your mouse enter on each jQuery projects it change the background-color to silver
// $("#myContent li").mouseenter(function(){
//	$(this).css('background-color', 'silver');
// });

// With the previous one active, when the user leaves the element remove the background-color
// $("#myContent li").mouseleave(function(){
//	$(this).css('background-color', '');
// });

// Only when the mouse is over one jQuery project has the bordered class
// $("#myContent li").bind("mouseenter mouseleave", function(){
//	$(this).toggleClass('bordered');
// });

// When I finish to write my name I want my name written in the result div
// $("#name").blur(function(){
//   $("#result").text($(this).val());
// });

// When I click on any element of the body show the mouse x and y in the result div
// $("body").click(function(e){
//	$("#result").text('X: ' + e.pageX + ". Y: " + e.pageY);
// });

// Adds a div with "Hello" at the end of the body when you click on the result div
// $("#result").click(function(){
//	$("body").append("<div>Hello</div>")
// });

// Adds a div with "Hello" when you click on the result div only the first time
// $("#result").click("click", function(){
//	$("body").append("<div>Hello</div>")
//	$("#result").unbind("click");
// });

// $("#result").one("click", function(){
//	$("body").append("<div>Hello</div>")
// });

// Adds a new "jQueryUI" element when clicks over one jQuery project
// $("#myContent").delegate("li", "click", function(e){
//	$(e.currentTarget).after("<li>jQueryUI</li>");
// });

// Avoid the navigation when you click a link
// $("a").click(function(e){
//	e.preventDefault();
// });

// When you click a link go to ironhack.com
// $("a").click(function(e){
// 	$(this).attr("href", "http://ironhack.com");
// });

// When you click on myContent div toggle the class bordered to the result
// except if jquery-ui element is clicked.
// $("#myContent").click(function(){
//	$("#result").toggleClass("bordered");
// });
// $("#jquery-ui").click(function(){
//	return false;
// });

//$("#myContent li").not("#jquery-ui").click(function () {
//    $("#result").toggleClass("bordered");
//});

// When you select a part of the input name the selected part is shown in the result div
// $("#name").select(function(e){
// 	var t = e.target;
//	var selectedText = t.value.substring(t.selectionStart, t.selectionEnd);
//	$("#result").text(selectedText);
// });

    /**
     * Final round
     */
// Duplicate the jQuery projects when clicks over them
// $("#myContent").delegate("li", "click", function(e){
//	var t = e.target;
//	$(t).after(t.outerHTML);
// });


// When you uncheck "I love learning" you get an alert with "Really???"
// $("#love").change(function(e){
//    if (!$(e.target).prop('checked')){
//       alert("Really??");
//    }
// });

// When you resize the page show the size in the result div
// $(window).resize(function(e){
// 	var target = e.target;
//	$("#result").text("Height: "  + target.innerHeight + ". Width: "+ target.innerWidth);
// });



// I want the result div follows my mouse until I click (then will be fixed on the page)
// The mouse should be in the center of the div
// var r = $("#result");
// $("body").mousemove(function(e){
//	r.offset({
//		top: e.pageY - r.outerHeight() / 2,
//		left: e.pageX - r.outerWidth() / 2
//	});
// });

});