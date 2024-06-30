// ARITY: you might here this a lot of times in functional programming
// this term simply means the number of arguments a function takes.

//const compose = (f, g) => (data) => f(g(data)); oompose
const pipe = (f, g) => (data) => g(f(data)); // arity is 2 here. as this function receives 2 arguments

const multiplyBy4 = (num) => num * 3; // arity is 1
const makePositiveNum = (num) => Math.abs(num); // arity is 1

const multipleBy4AndAbsolute = compose(multiplyBy4, makePositive);

multipleBy4AndAbsolute(-50);

// it is an important concept to know, even though it not solid to grasp
// due to as fewer parameters a function receives, the simpler it is easier to use.

// The more parameters a function has, the more harder to really compose it with
// function. it doesn't mean it is imposible but it does become more a bit difficult

// The personal preference could be 2 parameters because if you are using
//functional programming,it does help make your function more reusable.
