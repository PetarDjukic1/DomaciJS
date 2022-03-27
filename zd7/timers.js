// Exercise #7

// Timers

// uncomment console logs to see results.


/* CHALLENGE 1 */
// Thinking point (no writing code necessary for this challenge): 
// Inspect the code given to you in Challenge 1. In what order should
// the console logs come out? Howdy first or Partnah first?

function sayHowdy() {
    console.log('Howdy');
};
  
function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
};

//testMe();
// Prvo ce pisati 'Partnah' jer je za 'Howdy' stavljen timer.


  
/* CHALLENGE 2 */
// Create a function delayedGreet that console logs welcome after 3 seconds.

function delayedGreet() {
    setTimeout(() => console.log("welcome"), 3000);
};

//delayedGreet();


/* CHALLENGE 3 */
// Create a function helloGoodbye that console 
// logs hello right away, and good bye after 2 seconds.

function helloGoodbye() {
    console.log("hello");
    setTimeout(() => console.log("good bye"), 3000);
};

//helloGoodbye();



/* CHALLENGE 4 */
// Create a function brokenRecord that console logs hi again every second. 

function brokenRecord() {
    function printHi() {
        console.log("hi again");
    };
    setInterval(printHi, 1000);
};
//brokenRecord();


/* CHALLENGE 5 */

function limitedRepeat() {
    function printHi() {
        console.log("hi for now");
    };
    function clear() {
        clearInterval(id);
    };
    printHi();
    const id = setInterval(printHi, 1000);
    setTimeout(clear, 5000);
};

//limitedRepeat();


/* CHALLENGE 6 */
// Write a function called everyXsecsForYsecs that will accept 
//three arguments: a function func, a number interval, and another number duration.
// everyXsecsForYsecs will execute the given function every interval number
// of milliseconds, but then automatically stop after duration milliseconds.
// Then pass the below sayHi function into an invocation of everyXsecsForYsecs 
//with 1000 interval time an 5000 duration time.

function everyXsecsForYsecs(func, interval, duration) {
    const id = setInterval(func, interval * 1000);
    function clear() {
      clearInterval(id);
    };
    setTimeout(clear, duration * 1000);
};

//function theEnd() {
//    console.log('This is the end!');
//};
//everyXsecsForYsecs(theEnd, 2, 20);


/* CHALLENGE 7 */
// Write a function delayCounter that accepts a number (called 'target') 
// as the first argument and a number of milliseconds (called 'wait') as
// the second argument, and returns a function.
// When the returned function is invoked, it should log to the console all
// of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

function delayCounter(target, wait) {
	function closureFn() {
        let i = 1;
        const id = setInterval(() => {
        console.log(i);
        i++;
        if (i > target) clearInterval(id);
        }, wait);
    };
    return closureFn;
};

//const countLogger = delayCounter(3, 1000)
//countLogger();