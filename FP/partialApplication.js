// Partial application: is a way for us to partially apply a function
const multiply = (a) => (b) => (c) => a * b * c;

// The partial application says that: take the first function and apply the other
// rest of the arguments so that it means on the second call, I expect all the arguments.

multiply(3)(4)(10); // this is not partial application

// we can do this:
const partialMultipleBy5 = multiply(null, 5); // the first function passed null
// to be able to give it an other variable argument 5

// now we can pass other two rest to the first created(partialMultipleBy5)

partialMultipleBy5(4, 5); // Partial application: I expect all the arguments on the second call.

// In currying, I expect one argument at time
