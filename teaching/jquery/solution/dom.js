$(document).ready(function () {

// Change the width of the h1 element
// $("h1").width("300px");
//    $("h1").css("width", "300px");

// Increase the font-size of all emements to 120%
// $("p").css('font-size', '120%');

// Add the hightlighted class to the elements that has the 'new' class
// $(".new").addClass("hightlighted");

// Remove the title class from h1
// $("h1").removeClass('title');

// Set the default age range in 20-30
// $("#age-range").val('20-30');

// Specify the age range in 20-30 setting the selected property
// $("#age-range option").eq(2).prop("selected", true);

// Uncheck the "I love learning" checkbox
// $("#love").prop("checked", false);

// Select yellow as a favourite color
// $("#color-yellow").prop("checked", true);

// Write the selected name of the input in the result div
// $("#result").text($("#name").val());

// Write the text of the selected age in the result div
// $("#result").text($("#age-range option:selected").text());

// Writes the number of data likes of jquery-ui in the result div
// $("#result").text($("#jquery-ui").data('likes'));

// Increase in 100 the number of likes and show the number of likes in the result div
// var currentLikes = $("#jquery-ui").data('likes');
// $("#jquery-ui").data('likes', currentLikes + 100);
// $("#result").text($("#jquery-ui").data('likes'));

// Show the absolute position of the result div in the console
// console.log($("#result").offset());

// Move the result to the position 100 top and 150 left
// $("#result").offset({ top: 100, left: 150});

// Change the width and height of the result up to 300px
// $("#result").width("300px").height("300px");

// Add " (User interface)" after "JQueryUI"
// $("#jquery-ui").append(" (User interface)");

// Add a li element with the text "Future JQ" between jQueryUI and jQueryMobile
// $("#jquery-ui").after("<li>Future JQ</li>");

// Add div containers with the class bordered around every li
// $("li").wrap("<div class='bordered'>")

// Add a div container with the class bordered around all li
// $("li").wrapAll("<div class='bordered'>")

// Remove the result div
// $("#result").remove();


    /**
     *  Final round
     */

// Set the font color of the color names according to their color
// Example: The red shoule be in red...
//var getColor = function () {
//    return $(this).children().first().val(); // Option 1
//// 	 return $(this).children(':first').val(); // Option 2
//};
//
//$("label").has("input[name='color']").css('color', getColor);


// Add links to the li elements, the url is the name ended with .com
    $("li").html(function () {
        var currentText = $(this).text();
        return "<a href='http://" + currentText + ".com'>" + currentText + "</a>";
    });


});
