$(document).ready(function () {


    /**
     * Selectors
     */

// Put a border in the following elements

// all the elements: Example
//    $("*").css("border", "solid 1px");

// the div with the id of myContent
// $("#myContent").css("border", "solid 1px");

// li elements
// $("li").css("border", "solid 1px");

// li with the basic class
// $("li.basic").css("border", "solid 1px");

// The first li element with css selectors
// $("li:first").css("border", "solid 1px");

// The second li element with traversing filters
// $("li").eq(1).css("border", "solid 1px");

// The last p with css selectors
// $("p:last").css("border", "solid 1px");

// The last p with traversing filters
// $("p").eq(-1).css("border", "solid 1px");

// The label element that has an element with the id love
// $("label").has('#love').css("border", "solid 1px");


// The li element that has no new class
// $("li").not('.new').css("border", "solid 1px");

// The a element with href property is 'http://www.api.jquery.com/'
//$("a[href='http://www.api.jquery.com/'").css("border", "solid 1px");

// The a element with href property starts by http://www.
//$("a[href^='http://www.'").css("border", "solid 1px");

// The a element with href property contains api
// $("a[href*='api'").css("border", "solid 1px");

// The p elements
// $("p").css("border", "solid 1px");

// The p elements inside myContent div
// $("#myContent p").css("border", "solid 1px");

// The parent element to the jquery-ui element
// $("#jquery-ui").parent().css("border", "solid 1px");

// The siblings to the slogan p
// $("#slogan").siblings().css("border", "solid 1px");

// The p elements not inside myContent div
// $("div").not("#myContent").children("p").css("border", "solid 1px");

// The li elements that starts with jQuery. Tip: http://www.w3schools.com/jsref/jsref_substring.asp
//$("li").filter(function(){
//	return $(this).text().substring(0,6) == 'jQuery';
//}).css("border", "solid 1px");

});
