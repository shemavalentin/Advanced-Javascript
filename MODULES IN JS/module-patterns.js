// Simply modules give us a better way to organize these variables and functions
// so that we can group these variables and functions that make sense together.

// IN TERMS OF ORGANIZING THINGS WE HAVE:

// 1. Global scope,
/*
2. Module scope: this is higher up than function scope and block scope so that
we can combine multiple functins together under this module scope but still
not pollute our global namespace. this module can be used to share these variables
between different functions as well so that we can share things without having to go
through the global scope. In this way with modules we can be explicit which of the 
variables, classes, or functions in the module should be available.

we can say this module1, I want you to export this and this function.

And then inside of another module, we can say this module, I want you to
import this and this functions from this other module. that's being explicit
saying directly what I want, this is what I'm impoting, this is what I'm exporting.
*/
//3. Function scope,

//4. and the other consept called Block Scope(where we use let and const)

//========================== BEFORE CLASSES HOW MODULES WORKED=====

// Programmers used IIFE
(function () {
  // then we write codes here
  // and here we still have access to windows object
})(); // the () shows that it is immediately invoked

// example: let's say we have the following function

var harry = "potter";
var voldemort = "He who must not be named";
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

// let's use an IIFE (by wrapping this in brackets). and this is not function
// declaration because the first thing the compiler sees won't be function.
(function () {
  var harry = "potter"; // Now we moved variables from the global scope
  var voldemort = "He who must not be named"; // Now we moved variables from the global scope

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  // this will work still
  console.log(fight(harry, voldemort));
})();

// NOW, We wanted other scripts to but we don't want them to touch Herry or Voldemort
// because they are private variables

// To answer this we can use IIFE and the module pattern we can
// assigning all the above to a variable

var fightModule = (function () {
  var harry = "potter"; // Now we moved variables from the global scope
  var voldemort = "He who must not be named"; // Now we moved variables from the global scope

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  // then here we return what we want to be available. here we return an object
  return {
    fight: fight, // returned the abave function. [ Clausure here worked as we are returning a function inside another one]
    // this pattern of revealing what we need is actually called the revealing module pattern. this is also a public API
    // or interface
  };
})();
