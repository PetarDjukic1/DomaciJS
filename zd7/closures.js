// Exercise #7

// Closures

// uncomment console logs to see results.

// CHALLENGE 1
// Create a function createFunction that creates and returns a function. 
// When that created function is called, it should print "hello". 

function createFunction() {
	function printHello() {
    console.log("hello");
  };
  return printHello;
};
//const function1 = createFunction();
//function1();



// CHALLENGE 2
// Create a function createFunctionPrinter that accepts one input and 
// returns a function. When that created function is called, 
// it should print out the input that was used when the function was created.

function createFunctionPrinter(input) {
	function printInput() {
    console.log(input);
  };
  return printInput;
};
//const printSample = createFunctionPrinter('sample');
//printSample();
//const printHello = createFunctionPrinter('hello');
//printHello();



// CHALLENGE 3
// Examine the code for the outer function. Notice that we are returning 
// a function and that function is using variables that are outside of its scope.
// Try to deduce the output before executing. 
// Now we are going to create a function addByX that 
// returns a function that will add an input by x.

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    };
    return incrementCounter;
  };
  
  
// const willCounter = outer();
// const jasCounter = outer();
 
//willCounter();
//willCounter();
//willCounter();
  
//jasCounter();
//willCounter();
  
  
function addByX(x) {
    function addByNum(num) {
        return num + x;
    };
    return addByNum;
};

//const addByTwo = addByX(2);
//console.log(addByTwo(1));
//console.log(addByTwo(2));
//console.log(addByTwo(3));
  
//const addByThree = addByX(3);
//console.log(addByThree(1));
//console.log(addByThree(2));
  
//const addByFour = addByX(4);
//console.log(addByFour(4));
// console.log(addByFour(5));



// CHALLENGE 4
// Write a function once that accepts a callback as input 
// and returns a function. When the returned function is called 
// the first time, it should call the callback and return that output. 
// If it is called any additional times, instead of calling the 
// callback again it will simply return the output value from 
// the first time it was called.

function once(func) {
	let counter = 0;
  let res = undefined;
  function runOnce(num) {
    if (counter === 0) {
      res = func(num);
      counter++;
    };

    return res;
  };
  return runOnce;
};

// da bi se izvrsile sledece linije koda, mora se uncomment-ovati linija 75,
// jer je tu definisana addBytwo.

//const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
// Write a function after that takes the number of times 
// the callback needs to be called before being executed 
// as the first parameter and the callback as the second parameter.

function after(count, func) {
	let counter = 0;
  function runAfter() {
    counter++;
    if (count === counter) {
      func();
    };
  };
  return runAfter;
};
// za prva dva poziva funkcije, nista se nece printati.

//const called = function() { console.log('hello') };
//const afterCalled = after(3, called);
//afterCalled();
//afterCalled();
//afterCalled();

// CHALLENGE 6
// Write a function delay that accepts a callback as the 
// first parameter and the wait in milliseconds before 
// allowing the callback to be invoked as the second parameter. 
// Any additional arguments after wait are provided to func when 
// it is invoked. HINT: research setTimeout();

function delay(func, wait) {
	function delayRun() {
    func(...rest);
  };
  setTimeout(delayRun, wait);
};




// CHALLENGE 7
// Write a function rollCall that accepts an array of names 
// and returns a function. The first time the returned function 
// is invoked, it should log the first name to the console. 
// The second time it is invoked, it should log the second name 
// to the console, and so on, until all names have been called. 
// Once all names have been called, it should log 'Everyone accounted for'.

function rollCall(names) {
	let counter = 0;
  function runCall() {
    if (counter < names.length) {
      console.log(names[counter]);
      counter++;
    } else {
      console.log("Everyone accounted for");
    };
  };
  return runCall;
};

//const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
//rollCaller();
//rollCaller();
//rollCaller();
//rollCaller();