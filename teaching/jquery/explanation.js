////////////////////////
// Events
////////////////////////

//$("#myContent").css("border", "solid 1px");
//
//var events = "mousedown mouseup mouseenter mouseleave click dblclick " +
//    "focus blur select keydown keyup " +
//    "change " +
//    "scroll resize";
//
//$("#myContent, #name, #love").bind(events, function (e) {
//    showEvent(e);
//});
//
//$(window).bind("scroll resize", showEvent)
//
//$("#result").mousemove(showEvent);
//
//function showEvent(e) {
//    var target = e.target;
//    console.log(e.type, target.localName, "#" + target.id);
//    console.log(e);
//}

////////////////////////
// Binding and delegate
////////////////////////

//function addElementAfter() {
//    var element = $(this);
//    element.after(element.clone());
//
//}

//$("#myContent li").bind("click", addElementAfter);

//$("#myContent").delegate("li", "click", addElementAfter);

////////////////////////
// Arrays
////////////////////////
//var letters = ['a', 'b', 'c'];
//var numbers = [1, 2, 3, 4];
//
//console.log('Merge', $.merge(letters, numbers));
//console.log(letters);
//
//var defaultProperties = {width: 10, height: 10};
//var properties = {height: 13, color: 'cred'};
//
//console.log('Extend', $.extend(defaultProperties, properties));
//console.log(defaultProperties);

////////////////////////
// Arrays
////////////////////////
//var numbers = [1, 2, 3];
//$.each(numbers, function (i, e) {
//    console.log('Index ' + i, 'Value: ' + e);
//});
//console.log(numbers);
//
//var pow2 = function (number) {
//    return number * number;
//};
//var powNumbers = $.map(numbers, pow2);
//console.log(powNumbers);


