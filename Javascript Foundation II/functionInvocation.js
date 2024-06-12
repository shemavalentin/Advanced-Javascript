// let's review what is a program? It is simpy assigning a memory for example
// assigning a value to a variable, and then running a function for the program to
// do something with those variables. that's what programs are.

// And without functions, programs won't do anything. this is an important concept in
// all programming languages. functions give amazing powers.

//---------------------------------------------

// Function Expression   (function expression are not hoisted)

var canada = function () {
  // It can be even writen with arrow function
  console.log("color");
};

// Function Declaration    (they can be hoisted)

function india() {
  console.log("warm");
}

// Function invocation/ call / Execution.  => After assigning variables
// we can now execute our function

canada();
india();

// now in Global Execution Context that is created when the function is created
// and that is equal to THIS object, there another piece called ARGUMENTS

// let's see

function marry(person1, person2) {
  console.log("Arguments", arguments);
  // Let's use template string
  return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");

// Arguments are not declared globally, we access them when creating new execution context with function.

//Arguments are dangerous to use, because they bahave like arrays and they are not.
// There many things you can do with arguments that can cause the interpreter or compiler
// to not optimize your code.

// we can otherwize use another tool that is to convert it into an array

function marry(person1, person2) {
  console.log("Arguments", arguments);
  // converting arguments into an array
  console.log(Array.from(arguments));
  // Let's use template string
  return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");

// Another way to go arround of this is to use Rest Operator or Spread operator

function marry2(...args) {
  console.log("Arguments", args);
  // converting arguments into an array
  console.log(Array.from(arguments));
  // Let's use template string
  return `${args[0]} is now married to ${args[1]}`;
}

marry2("Tim", "Tina");

// With modern Javascript, you most likely want to avoid arguments.
// It one of trick things that were added to javascripts that caused a lot of problems and headache.
// But using the above techinic we can now convert them into an array like objects and they will be
// helpful

// P.s: We see arguments in global execution context like this object

var canada = function () {
  // It can be even writen with arrow function
  console.log("color");
};

function india() {
  console.log(arguments); // It will dissiplay {} empty argumets
  console.log("warm");
}
//canada();
india();

// even thought we didn't pass any argument, it will console.log empy arguments objects.

// We van still use the arguments objects, even though it's empty, even though we
// didn't pass any parameters, because on each execution context, we create a new
// arguments object.
