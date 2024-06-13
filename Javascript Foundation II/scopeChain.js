var x = "X"; // every world(function below) can access this global variable

function findName() {
  console.log(x); // Example of how the global variable can be used by these functions.
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Shema Valentin";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();

/*
When it cames to the execution context is that each world, that is each context has a link
to outside world or a link to its parent. And this outer environment depends on where the 
function the sits lexically.

lexically means where the function is written. all of the above functions have access to the
global scope. All these functions have global lexical environment. That is, they are written
in the global space to not inside of another function, just on the main page. they just get 
attached to the window object or the global object.

Each function has its own environment variable but they also have the little link, what we call 
SCOPE CHAIN. this scope chain links and gives us access to variables that are in our parent
environment, in this case the global environment.

When we run printName, console.log(x),it first sees in the variable environment and only sees
variables that are inside of it. and then go up the scope chain, down the scope chain and see 
if it's attached to my global lexical environment. and it finds it there and console.log X. 
*/

// This shown above is what we call Scope or static scope or lexical scope.

/* 
The javascript compiler looks at the code and attaches all these scope chains before it even 
runs the code. and the scope chaina starts where the variable is defined and goes all the  way
to the global context to see if the variable exists.
*/

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(a); // Cana I look for a here? (2) yes
    console.log(c); // Cana I look for c here? (2) No, a reference error. c is not defined

    // When I do console.log(c) here, it will look in this function and find no c here, when
    // it sees in sayMayName function, it won't find c, it goes in global environment and find
    // nothing then error out.
    return function printName() {
      var c = "c";
      console.log(a); // can I look for a when I'm here? (1) yes
      return "Shema Valentin";
    };
  };
}

// let's call these functions to demonstrate laxical environment of each function.
// They are lexically scoped.

sayMyName(); // returns: findName() function
sayMyName()(); // returns: printName() function
sayMyName()()(); // returns: 'Shema Valentin'

// Previously these functions had global lexical environment. Now, what do they have now?

// Ans:  They have FUNCTION LEXICAL ENVIRONMENT. that is findName is written inside of
// sayMyName function.

// Hypothetically printName has access to B and A. findName has access to B and A.

/*
The global scope is the outermost scope. variables declared outside a function are in what we
call global scope.

with eval() and with() they are dangerous cze they change how scope and scope chains work
work internally in javascript.
*/
