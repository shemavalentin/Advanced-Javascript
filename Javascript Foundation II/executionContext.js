// How do we run codes in javascript?

// We daclare variables and run functions, that's all we really do in all languages

function printName() {
  return " Shema Valentin";
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName(); // the Javascript engine is going to look this brackets and know that this is a function.
// After seeing the brackets it creates the execution context.

/*
When the javascript engine sees the brackets, it says, I'm going to run this function
and creates EXECUTION CONTEXT

the first thing it will do is: create execution context for sayMyName(), and
it runs this function, and find that it is calling another function and so on


P.S: initially, when you run a function, the Javascript engine creates what we call 
GLOBAL EXECUTION CONTEXT.  we don't see this but it occurs inderneath the hood but it is 
saying hey, here's the Javascript file for you, you just start to read for me.

It is the Global execution context that gets poped off the stack the last.
anytime we run a javascript code it's always going to be part of a global execution context.

=> The global execution context is made of: Global object and the (this) Key word used to reference the window object in the browser.
the javascript engine is going to create the two objects: GLOBAL OBJECT and THIS.
GLOBAL OBJECT = THIS (object)

=> In NodeJS the global object is called GLOBAL whether to be (window) like in Javascript.

==> we can assign variables to this objects 

ex: var a = 'valen';
*/
