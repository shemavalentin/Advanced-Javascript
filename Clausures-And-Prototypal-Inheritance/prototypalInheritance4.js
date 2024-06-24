// Let's create another object

const obj = { name: "sally" }; //
obj.hasOwnProperty("name"); // returns TRUE

obj.hasOwnProperty("hasOwnProperty"); // returns False, because obj itself doesn't have (hasOwnProperty) as its own property
// it has it as a property up the prototype chain.

// WHAT ABOUT THE FUNCTION?

function a() {} // an empty function
a.hasOwnProperty("call or appy, bind"); // this returns FALSE, and remember every function has call(),apply(), bind().

a.hasOwnProperty("name"); // TRUE  because name is optional field for every function
a.name; // a     =>  the name of the function is a

// ========= NOW AN EXAMPLE ===========

function multiplyBy5(num) {
  return num * 5;
}
// when we do
multiplyBy5.__proto__; // produces: ƒ () { [native code] }  <= a native function(where all function are created from)
// store it in local variable using browser right click (it is stored as temp1)

temp1.name; // numerus method are displayed in browser. just play with it.

/* the multiply function has a property called __proto__ that 
links up to the Function object.

Every function has prototype property that the __proto__ uses to link up to the base Function
(this one has call(), appy(), bind() methods live here). Function(With capital letter) also has the prototype where the 
__proto__ links and it links up to the prototype of the base Object. the base object.__proto__ points to NULL
*/

multiplyBy5__proto__ === Function.prototype; // it is equal because __proto__ in multiplyBy5 points on prototype in Function(parent function)

object.prototype; // it gives us the base object which is the prototype object of the object.

Object.prototype.__proto__; // this points ti Null

/* Let's test this with arrays*/

const array = []; //
array.hasOwnProperty("map"); // false
array.__proto__.hasOwnProperty("map"); // true
Array.prototype; //  [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
array.__proto__; // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
array.__proto__ === Array.prototype; // array.__proto__ is pointing to its father Array(where all arrays are created from)

/* multiplyBy5 is a special object that is callable. 
arrays and functions are objects in javascript */

// P.S: the __proto__ lives in prototype proprty.

/* By using prototypal inheritance, we are able to use the map function or forEach 
functions on an array just write then once, instead of copying those same methods
and properties all over the place. 
*/
