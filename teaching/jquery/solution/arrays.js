/**
 *
 */

// In each exercise we will print in the console the result.

var sites = ["Google", "Yahoo", "Facebook", "Microsoft", "Apple"];

// The position of "Microsoft" in the array
// console.log("The position of Microsoft is", $.inArray("Microsoft", sites));

// If "LinkedIn" is in the sites array
// console.log("Is LinkedIn in the array?", -1 != $.inArray("LinkedIn", sites));

// The name of the companies each name in one line
// $.each(sites, function(i, e){
// 	console.log(e);
// });

var pow2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

// The pow of 2 that is 64
// console.log("64 is 2^" + $.inArray(64, pow2));

// The first 10 pow of 2
// $.each(pow2, function(i, e){
// 	console.log(e + " is 2^" + i);
//});

// Double the value of each element of the array
//var result = $.map(pow2, function(e){
//	return e * 2;
//});
// console.log("The new array is", result);

// Sum the value of all of numbers of the array
// var result = 0;
// $.each(pow2, function(i, e){
//	result += e;
// });
// console.log("The sum of the array is:", result);

// I want to get the values given by the user but the defalut values in the others
var defaultConfig = { left: 10, top: 20, rigth: 30, bottom: 40 };

var myFunction = function(config){
//	return $.extend(defaultConfig, config);
};

console.log(myFunction({ left: 20, top: 30 }));



