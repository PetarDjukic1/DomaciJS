//Exercise #7

// Callbacks

// uncomment console logs to see results.


// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(num) {
	return num+2;
}
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS(word) {
	return word + "s";
}
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
// Create a function called map that takes two inputs:
// 1. an array of numbers (a list of numbers),
// 2. a 'callback' function - a function that is applied to each element of the 
// array (inside of the function 'map').
// Have map return a new array filled with numbers that are the result of using the 
// 'callback' function on each element of the input array.

function map(array, callback) {
	let output = [];
  for (let i=0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
// Create a function called forEach that takes an array and 
// a callback, and runs the callback on each element of the array. 
// forEach does not return anything.

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  };
};
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
//console.log(alphabet);


// Challenge 5
// In challenge 3, you've created a function called map. 
// In this challenge, you're going to rebuild the map function by creating 
// a function called mapWith. This time you're going to use forEach inside 
// of mapWith instead of using a for loop.

function mapWith(array, callback) {
    var output = [];

    forEach(array, function(element) {
       output.push(callback(element))
    });

    return output;
};
//console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
// Create a function called reduce that takes an array and reduces 
// the elements to a single value. For example it can sum all the numbers, 
// multiply them, or any operation that you can put into a function.

function reduce(array, callback, initialValue) {
	let accum;
  if (Object.keys(arguments).length > 2) {
    accum = initialValue;
  } else {
    accum = array[0];
    array.shift();
  }

  forEach(array, (item) => {
    accum = callback(accum, item);
  });
  return accum;
};
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
//console.log(reduce(nums, add, 0));


// Challenge 7
// Construct a function intersection that takes in an array of arrays, 
// compares the inner arrays, and returns a new array with elements 
// found in all of them. BONUS: Use reduce!

function intersection(arrays) {
	return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}

//console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));

