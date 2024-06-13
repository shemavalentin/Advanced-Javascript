// we leaned that there can be many execution context

// Now you can ask yourself what about variables that ate cteated inside of these individual
// execution context? that is variables inside function.

// Logically we have a place for that on top of Execution context made off THIS Object, and ARGUMENTS

// There is a little space called VARIABLE ENVIRONMENT: This is a  place where variables can live in.

function two() {
  var isValid; // Undefined when hoisted
}

function one() {
  var isValid = true; // local Envir
  two(); // This is a new execution context
}

// a global variable
var isValid = false;
one();
//( We also have 'one' and 'two' functions inthe global bariable environment)

// Two() -- undefined
// One() --true // It doesn't care of what is happening in the global, it cares what is inside
// global() --false

// P.S: When we finish executing the functions, that is, line two gets done in function two()
// then we pop off this off the stack ond that memory space is gone.
// The one function also is gone and the global()

/*
Now this variable environment where we store variables, means some of this infirmation can be on
on the actual call stack or the execution context or it can be a refference to somewhere in the
heap in the memory heap that perhaps we might have an object.
*/

// N.B: To keep in mind => Each execution context has its own variable environment.
