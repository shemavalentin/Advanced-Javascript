//HOF

/* Either takes one or more function as arguments
OR returns a function as a result. often called call back function.

EX:
*/
const hof = () => () => 5; // this is a higher order function
hof(); // returns a function  === a call back
hof()(); // 5   once we call it again it now give us 5.

// another example where a function receives another function
const hof1 = (fn) => fn(5);
hof1(function a(x) {
  return x;
});

// CLAUSURE
/* In javascript like objects, clausure is a mechanism for containing some sort
of state.

And in JS, we create a clausure whenever a function accesses a variable defined
outside immediate function scope. That is the scope of the parent.
and it's fairely easy to create a clausure. we simply create function inside
another function and expose the inner function either by returning it or 
passing it to another function so that we can use that variable.
*/

const clausure = function () {
  let count = 0; // The initial clausure will end by here.
  return function increament() {
    // because of clausures this increament fn
    // remembers the variable used by or declared in the outer scope. so the variable
    // used by the inner function will be the available to it(inner one => referenced) even after the
    // outer function has finished running.
    count++;
    return count;
  };
};
clausure(); // this will return a function
clausure()(); // whether to do this Let assign it to a variable bypass
//the return of the clausure function.

const increamentFn = clausure();
increamentFn(); // here we will see the result.

/* IMPORTANT:

1.  In clausere and by this example, we are modifying state outside of our function.
that increament function is touching state or data that belong to another 
function(the clausure function).

2.  When it comes to functional programming it doesn't mean we can't use clausures
we can definitely use clausures and they are very poweful. but we have to be 
very careful that clausures only make a function impure if we modified the 
closed over variable.

*/

const clausures = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};
clausure();
clausure()();

const getCounter = clausure();
getCounter(); // the user can't modify the count variable in clausures function.
getCounter(); // we managed to expose the inner function that is accessing the state.
getCounter();

/* We are still using claures here even though we are not modifying the state,
like we had before, we still have access to data()count outside ourselves.
but as long as we don't modify it and mutate the data,we are still following
the functional programming paradigm.

The beauty of this is that we created private variables.
we are able to use clauses to create data privacy which is vey cool.

As a user(calling getCounter() the inner function), I can't modify the count variable
may be this count is super important that we don't want to touch it.

Because we are using clausures, we are able to still have access to that variable
but make sure that others don't modify it. which is a very nift tool.

and clausures get used in functional programming for this specific reason.
we just have to be carefull not to modofy the state.

*/
