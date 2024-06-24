/* Every function in Javascript, as the prototype() as a property.
we don't use the prototype, unless when we are doing constructor function

constructor functions are those ones with capital letters. in other words: Base Functions
*/

function multiplyBy5(num) {
  return num * 5;
}

// when we do:

multiplyBy5.prototype; // we get constructor Function (multiplyBy5.__proto__;) => ƒ () { [native code] }
// equal to
Function.prototype; // ƒ () { [native code] }

// when I do
multiplyBy5.__proto__.__proto__; // this gives the base object
// the same as
Object.prototype;

// When I do
multiplyBy5.__proto__.__proto__.__proto__; // this gives Null

// The base Object has also prototype() property that's why when we do:

typeof Object; // "function"  => because every function has the prototype property,
// and the Base object also has it, that why the base Object has type of "function"

//all those start by capital letters, are Object constructor or Function constructor.

// Have to remember that in order for us to perform an action we need a function,
// and the function stores the data. and we use functions to manipulate that data.

// when we do this

const obj = {}; // underneath the hood, the JS engine creats this object using the Object construtor(Object)

// let's prove

typeof {}; // ans: object
typeof Object.prototype; // ans: object

// the Object is once again a function as it has the prototype property.

// another thing

const obj1 = {};

obj.prototype; // it's undefined because it is not a function.

const arr = [];
arr.prototype; //  it's undefined because it is not a function.

"string".prototype; //   it's undefined because it is a primary type.

String.prototype; // this exists because it is a constructor type that inherits
// from the base Function and Constructor functions have the prototype property.
