/*

We have to be carefull when initializing functions inside a for loop
It can slows down your function as the function alwayse initialize and 
get executed everytime we the for loop runs
*/

// For example

for (let i = 0; i < 5; i++) {
  function a() {}
  a(); // this will cause slow down because every time the loop runs it will
  // initialize the function and call it over and over untill i = 5;
}

// better to define a function first and execute it in a loop

function a() {
  // like this. this is something most engineers overlook but we need to be carefull.
}

for (let i = 0; i < 5; i++) {
  a();
}

// 2nd thing is :

function check() {
  return param;
}

check(); // this will give an error because the JS engine is going to look in
// created invironment variable and find no variable param, then it keeps looking
// up the scope chain in global variables and it doesn't have it and as soon as
// it doesn't find this variable in environment variable and in global variables
// it will return a reference error.

/* Now one way to avoid it is like this */

function check(param = 2) {
  // it's good to set default parameters as a way to avoid
  // these edge cases.
  return param;
}

check();
