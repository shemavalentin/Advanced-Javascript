// Currying : is the techinique of translating the evaluation of a function that
// that takes multiple arguments into evaluating a sequency of functions,
// each with a single argument.

// This is somehow confusing. but we can think currying as:

// you take a function that can take multiple parameters and instead,
// using currying, modify it into a function that takes one parameter at a time.

// EXAMPLE:

const multiply = (a, b) => a * b;
multiply();

// Now change this function from taking multiple parameters to taking one
// parameter at a time.

const curriedMultiple = (a) => (b) => a * b; // because of clausures, we have
// access inside of the B function to the A variable.
curriedMultiple(5)(6); // here now I'm giving the function one parameter at time.

// NOW, WHY IS CURRYING USEFUL?

// I can now create multiple utility functions out of this basing on this
// just by making this function remember the number I passed

const curriedMultipleBy5 = curriedMultiple(5);

// After 10 years

curriedMultipleBy5(6); // 30, curriedMultipleBy5 will remember what is in memory.
curriedMultipleBy5(7);
curriedMultipleBy5(8);
