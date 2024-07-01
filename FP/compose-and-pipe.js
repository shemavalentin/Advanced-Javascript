//  Compose is the most poweful concept on functional programming
// It makes you the best programmer.

// Now what is composition?

// Composing or composition is the idea that any sort of data transformation
// that we do should be clear/obvious. It's kind like a conveyor belt in a factory

// data-- > fn-- > data-- > fn-- > //composability a system design principle that deals
// with this relationship of components.
// How we can compose differenct components of a factory that works on let's say
// a convayor belt.

// let's take an example of two functions that we need to compose
// -50*3 , and find out the absolute value this to remove the minus. this
// done  in one function.

// There are libraries that can help like RAMDA tha comes with composefunction which does not exist in JS.
//    Function but let's use our own

// making a compose function to take the two functions(multiplyBy3 and makePositive)
const compose = (f, g) => (data) => f(g(data)); // 1. let's say f = multiplyBy3, and makePositive = g functions.
// 2. These functions will generate data, ex: -50.
// 3. Now, data first undergoes makepositive(g), then after we multiplyBy3(f).

// Let's create these pure functions now

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num); //

const multipleBy3AndAbsolute = compose(multiplyBy3, makePositive);

multipleBy3AndAbsolute(-50); // Now we are able to make our where we compose different functions together

// The function composition is the most used in programming paradigm.
// and when you are using functional programming, you are absolutely
// using compose.

// ================  PIPE  =============

// Pipe is an inverse of Compose: the compose operate from right to left
// pipe operates from left to right

//const compose = (f, g) => (data) => f(g(data)); oompose
const pipe = (f, g) => (data) => g(f(data)); // PIPE

const multiplyBy4 = (num) => num * 3;
const makePositiveNum = (num) => Math.abs(num);

const multipleBy4AndAbsolute = compose(multiplyBy4, makePositive);

multipleBy4AndAbsolute(-50);

//   === DEMO FOR PIPE ===
fn1(fn2(fn3(50)));

// with compose I can do:
compose(fn1, fn2, fn3)(50); // compose is passed 50 at the right to be operated from left to right
// it takes the data, here it is 50, and apply fn3, whatever comes out of that apply
// fn2, whatever comes to that apply fn1.

// Pipe is the same as compose as they generate the same output and they are
// used interchangibly.

pipe(fn3, fn2, fn1)(50); // Here pipe is going to grab 50 and apply fn3 just like compose
// and then do fn2 two and fn1

/* WHETHER COMPOSE OR PIPE ARE USED INTERCHANGIBLY AND YOU CAN USE WHATEVER
YOU WANT ACCORDING TO YOUR READABILITY. 

Composition a good tool to use, to keep in mind when creating software
because this is going to help us create code that is more stable as well as
easier to change in the future.

This does not mean Inheritance is not important. it is used and there are 
solutions it provides. but most programmers prefer function composition.

*/
