// FUNCTIONS ARE FIRST CLASS CITIZENS IN JAVASCRIPT

// Why?

// 1. functions can be assigned variables and properties
var staff = function () {}; //or define it in an object

// 2. pass a functions as arguments

function a(fn) {
  fn();
}
a(function () {
  console.log("hi there");
});

// 3. We can return a function as a value

function b() {
  return function c() {
    console.log("bye");
  };
}
b(); // here it will return a function c
b()(); // Here it will return "bye"

// It can be assigned a variable and call that variable

var d = b();
// now call d
d();

/* This proves the that functions are data, they can passed around as if they are types in js.

Anything you can do with other types, you can do it with functions

THAT'S WHY JAVASCRIPT IS A FUNCTIONAL PROGRAMMING.


 */
