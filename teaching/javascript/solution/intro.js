// Create a variable with your name as a content and print it.
var myName = 'Luis';
console.log(myName);

// Create a function, with one argument, to say hello to the name. Use it with your name variable
function sayHello(to) {
    console.log("Hello " + to);
}

sayHello(myName);


// Create a loop to show the numbers from 1 to 5.

for (var i = 0; i < 5; i++) {
    console.log(i + 1);
}

// Create an array with some colors
var colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Iterate the color array and print the colors in different lines.
colors.forEach(function (color) {
    console.log(color);
});

// Filter the array to exclude the red color (the array should contain all the previous colors except the red one).
var colorsFiltered = colors.filter(function (color) {
    return color != 'red';
});

console.log(colorsFiltered);

// Transform the array to add "!!" at the end of each color. (The result should be something like: "red!!", "blue!!", "green!!"... )
var bangColors = colors.map(function (color) {
    return color + "!!";
});
console.log(bangColors);

// Create an object with name, surname and age as a properties and create a function to show the person information as "Luis Rovirosa has 32 years".
var luis = {
    name: 'Luis',
    surname: 'Rovirosa',
    age: 32
};

function showPersonalInfo(person) {
    console.log(person.name + ' ' + person.surname + ' has ' + person.age + ' years.');
}

showPersonalInfo(luis);



