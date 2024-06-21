/* This is the most asked interview question to javascript developers*/

// This question could be soleved in two ways with closures. let's give it a go

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index" + i);
  }, 3000);
}

//  ANS1   ==> the easiest way to solve it is to use the let which allows us
// for block scoping. it crates the scope for i inside curly braces so
// that each i is scoped because initially when we have var i, it was part of global scope
// because we don't really have a function surrounding it and variables
// declared with var inside a for loop can be accessed from outside. other than var which

const array1 = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index" + i); // if we need to go with actual values we can do like array1[i]
  }, 3000);
}
